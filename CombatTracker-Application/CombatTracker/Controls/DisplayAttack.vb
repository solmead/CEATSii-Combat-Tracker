Public Class DisplayAttack
    Public DB As RMSSDataDataContext
    Public CurrentAttack As Attack
    'Public MD As MasterData
    Private Filling As Boolean = False
    Public Event NameChange()
    Public Sub New()
        'MD = New MasterDatamydb
        DB = Nothing
        CurrentAttack = New Attack
        InitializeComponent()
    End Sub
    Public Sub New(ByVal MyDB As RMSSDataDataContext)
        'MD = New MasterDatamydb
        DB = MyDB
        CurrentAttack = New Attack
        InitializeComponent()
    End Sub
    Public Sub New(ByVal MyDB As RMSSDataDataContext, ByVal TheAttack As Attack)
        DB = MyDB
        InitializeComponent()
        'MD = MData
        CurrentAttack = TheAttack
    End Sub

    Public Sub Display()
        If CurrentAttack Is Nothing Then Exit Sub
        Filling = True
        If CurrentAttack.ParentAttack Is Nothing Then
            Percent.Visible = True
            Label4.Visible = True
            Percent.Text = CurrentAttack.PercentChance
        Else
            Label4.Visible = False
            Percent.Visible = False
        End If
        OB.Text = CurrentAttack.OB
        MaxOB.Text = CurrentAttack.MaxOB
        Dim Arr As Array '= [Enum].GetValues(GetType(SizeRating))
        Dim B As Object
        For Each B In From SR In DB.SizeRatings
            BSize.Items.Add(B)
        Next
        BSize.SelectedItem = CurrentAttack.SizeRating

        For Each WT In From WTs In DB.WeaponTypes
            WeaponType.Items.Add(WT)
        Next
        If CurrentAttack.WeaponUsed IsNot Nothing Then
            WeaponType.SelectedItem = CombatTrackerData.WeaponType.LoadWithName(DB, CurrentAttack.WeaponUsed.Name)
        End If

        'Arr = [Enum].GetValues(GetType(AttackType))
        For Each B In From AT In DB.AttackTypes
            AttackType.Items.Add(B)
        Next
        'Arr = [Enum].GetValues(GetType(CritTypes))
        For Each CTp In From CT In DB.CriticalTypes
            If CTp.Name <> "None" Then
                CritType.Items.Add(CTp)
            End If
        Next

        Arr = [Enum].GetValues(GetType(CriticalLevels))
        For Each B In Arr
            CriticalPoss.Items.Add(B)
        Next

        AttackType.SelectedItem = CurrentAttack.AttackType
        DamageX.Text = CurrentAttack.DamageMultiplier
        AttackX.Text = CurrentAttack.Number
        If CurrentAttack.AdditionalCrits.Count > 0 Then
            Dim CT As CriticalType
            For Each CT In From ac In CurrentAttack.AdditionalCrits Select ac.CriticalType
                CritType.SelectedItems.Add(CT)
            Next
            CritAlso.Checked = True
            CritType.Visible = True
            CriticalPoss.Visible = True
            CriticalPoss.SelectedItem = CurrentAttack.CriticalLevel
            IsOr.Checked = CurrentAttack.AdditionalCritsIsOr
            CritType.SelectionMode = SelectionMode.MultiSimple
            IsOr.Visible = True
        ElseIf CurrentAttack.UseCriticalInstead_ID <> 0 Then
            CritInstead.Checked = True
            CritType.Visible = True
            CritType.SelectionMode = SelectionMode.One
            CritType.SelectedItem = CurrentAttack.CriticalUseInstead
            CriticalPoss.Visible = False
            IsOr.Visible = False
            'CritType.SelectedItems.Clear()
        Else
            CritNormal.Checked = True
            CritType.Visible = False
            CriticalPoss.Visible = False
            IsOr.Visible = False
            'CritType.SelectedItems.Clear()
        End If

        If CurrentAttack.NextRoundSuccess IsNot Nothing Then
            AttackNextRound.Checked = True
            Panel1.Visible = True
            AttackNextRound.ImageIndex = 1
            Panel1.Controls.Clear()
            Dim Att As Attack = CurrentAttack.NextRoundSuccess
            Dim DA As New DisplayAttack(DB, Att)
            Panel1.Controls.Add(DA)
            Me.Width = 785
            Me.Height = 287
        ElseIf CurrentAttack.ThisRoundSuccess IsNot Nothing Then
            CausesAttack.Checked = True
            Panel2.Visible = True
            CausesAttack.ImageIndex = 3
            Panel2.Controls.Clear()
            Dim Att As Attack = CurrentAttack.ThisRoundSuccess
            Dim DA As New DisplayAttack(DB, Att)
            Panel2.Controls.Add(DA)
            Me.Width = 421 '785
            Me.Height = 537 '287
        Else
            AttackNextRound.Checked = False
            CausesAttack.Checked = False
            Panel1.Visible = False
            Panel2.Visible = False
            AttackNextRound.ImageIndex = 2
            CausesAttack.ImageIndex = 0
            CurrentAttack.NextRoundSuccess = Nothing
            CurrentAttack.ThisRoundSuccess = Nothing
            Panel1.Controls.Clear()
            Panel2.Controls.Clear()
            Me.Width = 380
            Me.Height = 255
        End If
        Filling = False
    End Sub
    Private Sub HandleCritEditing()
        If Filling Then Exit Sub
        If CurrentAttack Is Nothing Then Exit Sub
        If CritNormal.Checked Then
            CurrentAttack.CriticalUseInstead = CriticalType.LoadByName(DB, "None")
            CurrentAttack.AdditionalCrits.Clear()
            CurrentAttack.AdditionalCritsIsOr = False
            CritType.SelectedItems.Clear()
            CritType.Visible = False
            IsOr.Visible = False
        ElseIf CritAlso.Checked Then
            CritType.Visible = True
            IsOr.Visible = True
            CritType.SelectionMode = SelectionMode.MultiSimple
            CurrentAttack.CriticalUseInstead = CriticalType.LoadByName(DB, "None")
            For Each ac In CurrentAttack.AdditionalCrits
                ac.DeletePartial(DB)
            Next
            CurrentAttack.AdditionalCrits.Clear()
            CurrentAttack.AdditionalCritsIsOr = IsOr.Checked
            Dim CT As CriticalType
            For Each CT In CritType.SelectedItems
                Dim ac As New AttacksAddCrit
                ac.CriticalType = CT
                CurrentAttack.AdditionalCrits.Add(ac)
            Next

        ElseIf Me.CritInstead.Checked Then
            CritType.Visible = True
            CritType.SelectionMode = SelectionMode.One
            CurrentAttack.CriticalUseInstead = CritType.SelectedItem
            CurrentAttack.AdditionalCrits.Clear()
            'CritType.SelectedItems.Clear()
            CurrentAttack.AdditionalCritsIsOr = False
            IsOr.Visible = False
        End If
        DB.SubmitChanges()
    End Sub

    Private Sub DisplayAttack_Load(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles MyBase.Load
        If Not Me.DesignMode Then Call Display()
    End Sub

    Private Sub AttackType_SelectedIndexChanged(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles AttackType.SelectedIndexChanged
        If Filling Then Exit Sub
        If CurrentAttack Is Nothing Then Exit Sub
        CurrentAttack.AttackType = AttackType.SelectedItem
        If CurrentAttack.AttackType.Name = "Weapon" Then
            WeaponType.Visible = True
            BSize.Visible = False
            If WeaponType.Items.Count > 0 Then
                WeaponType.SelectedIndex = 0
                Dim ET As WeaponType = WeaponType.SelectedItem
                Dim W As New Weapon
                W.Name = ET.Name
                CurrentAttack.WeaponUsed = W
            End If
        Else
            WeaponType.Visible = False
            BSize.Visible = True
            CurrentAttack.WeaponUsed = Nothing
        End If
    End Sub

    Private Sub BSize_SelectedIndexChanged(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles BSize.SelectedIndexChanged
        If Filling Then Exit Sub
        If CurrentAttack Is Nothing Then Exit Sub
        CurrentAttack.SizeRating = BSize.SelectedItem
        RaiseEvent NameChange()
    End Sub

    Private Sub WeaponType_SelectedIndexChanged(ByVal sender As Object, ByVal e As System.EventArgs) Handles WeaponType.SelectedIndexChanged

        If Filling Then Exit Sub
        If CurrentAttack Is Nothing Then Exit Sub
        Dim ET As WeaponType = WeaponType.SelectedItem
        Dim W As New Weapon
        W.Name = ET.Name
        CurrentAttack.WeaponUsed = W
        RaiseEvent NameChange()
    End Sub

    Private Sub OB_TextChanged(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles OB.TextChanged
        If Filling Then Exit Sub
        If CurrentAttack Is Nothing Then Exit Sub
        CurrentAttack.OB = Val(OB.Text)
        RaiseEvent NameChange()
    End Sub

    Private Sub DamageX_TextChanged(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles DamageX.TextChanged
        If Filling Then Exit Sub
        If CurrentAttack Is Nothing Then Exit Sub
        CurrentAttack.DamageMultiplier = Val(DamageX.Text)
    End Sub

    Private Sub AttackX_TextChanged(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles AttackX.TextChanged
        If Filling Then Exit Sub
        If CurrentAttack Is Nothing Then Exit Sub
        CurrentAttack.Number = Val(AttackX.Text)
    End Sub

    Private Sub CritNormal_CheckedChanged(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles CritNormal.CheckedChanged
        If Filling Then Exit Sub
        If CurrentAttack Is Nothing Then Exit Sub
        HandleCritEditing()
    End Sub

    Private Sub CritInstead_CheckedChanged(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles CritInstead.CheckedChanged
        If Filling Then Exit Sub
        If CurrentAttack Is Nothing Then Exit Sub
        HandleCritEditing()
    End Sub

    Private Sub CritAlso_CheckedChanged(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles CritAlso.CheckedChanged
        If Filling Then Exit Sub
        If CurrentAttack Is Nothing Then Exit Sub
        HandleCritEditing()
    End Sub

    Private Sub IsOr_CheckedChanged(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles IsOr.CheckedChanged
        If Filling Then Exit Sub
        If CurrentAttack Is Nothing Then Exit Sub
        HandleCritEditing()
    End Sub

    Private Sub CritType_MouseDown(ByVal sender As Object, ByVal e As System.Windows.Forms.MouseEventArgs) Handles CritType.MouseDown
        If Filling Then Exit Sub
        If CurrentAttack Is Nothing Then Exit Sub
        HandleCritEditing()
    End Sub

    Private Sub CritType_SelectedIndexChanged(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles CritType.SelectedIndexChanged
        If Filling Then Exit Sub
        If CurrentAttack Is Nothing Then Exit Sub
        HandleCritEditing()
    End Sub



    Private Sub AttackNextRound_CheckedChanged(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles AttackNextRound.CheckedChanged
        If Filling Then Exit Sub
        If CurrentAttack Is Nothing Then Exit Sub
        If AttackNextRound.Checked Then
            Panel1.Visible = True
            AttackNextRound.ImageIndex = 1
            If CurrentAttack.ThisRoundSuccess IsNot Nothing Then
                CausesAttack.Checked = False
            End If
            Dim Att As New Attack()
            CurrentAttack.NextRoundSuccess = Att
            Dim DA As New DisplayAttack(DB, Att)
            Panel1.Controls.Add(DA)
            Me.Width = 785
            Me.Height = 287
        Else
            Panel1.Visible = False
            AttackNextRound.ImageIndex = 2
            CurrentAttack.NextRoundSuccess = Nothing
            Panel1.Controls.Clear()
            Me.Width = 380
            Me.Height = 255
        End If
    End Sub

    Private Sub CausesAttack_CheckedChanged(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles CausesAttack.CheckedChanged
        If Filling Then Exit Sub
        If CurrentAttack Is Nothing Then Exit Sub
        If CausesAttack.Checked Then
            Panel2.Visible = True
            CausesAttack.ImageIndex = 3
            If CurrentAttack.NextRoundSuccess IsNot Nothing Then
                AttackNextRound.Checked = False
            End If
            Dim Att As New Attack()
            CurrentAttack.ThisRoundSuccess = Att
            Dim DA As New DisplayAttack(DB, Att)
            Panel2.Controls.Add(DA)
            Me.Width = 421 '785
            Me.Height = 537 '287
        Else
            Panel2.Visible = False
            CausesAttack.ImageIndex = 0
            CurrentAttack.ThisRoundSuccess = Nothing
            Panel2.Controls.Clear()
            Me.Width = 380
            Me.Height = 255
        End If
    End Sub

    Private Sub Percent_TextChanged(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles Percent.TextChanged
        If Filling Then Exit Sub
        If CurrentAttack Is Nothing Then Exit Sub
        CurrentAttack.PercentChance = Val(Percent.Text)
    End Sub

    Private Sub MaxOB_TextChanged(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles MaxOB.TextChanged
        If Filling Then Exit Sub
        If CurrentAttack Is Nothing Then Exit Sub
        CurrentAttack.MaxOB = Val(MaxOB.Text)
    End Sub

    Private Sub CriticalPoss_SelectedIndexChanged(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles CriticalPoss.SelectedIndexChanged
        If Filling Then Exit Sub
        CurrentAttack.CriticalLevel = CriticalPoss.SelectedItem
    End Sub

End Class

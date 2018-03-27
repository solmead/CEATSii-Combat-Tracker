Public Class DisplayCreature
    Dim rDB As RMSSDataDataContext

    Public Monster As Creature
    Public Event NameChange()
    Public Sub New()

        ' This call is required by the designer.
        InitializeComponent()

        ' Add any initialization after the InitializeComponent() call.

    End Sub
    Public Sub New(ByVal MyDB As RMSSDataDataContext, ByVal MyCreature As Creature)
        rDB = MyDB
        Me.InitializeComponent()
        DisplayAttack1.DB = rDB
        Monster = MyCreature

    End Sub
    Public Sub New(ByVal MyDB As RMSSDataDataContext)
        rDB = MyDB
        Me.InitializeComponent()
        DisplayAttack1.DB = rDB
        'Monster = New Creature
    End Sub
    Private Sub Display()
        If Monster Is Nothing Then Exit Sub
        Dim s As Book
        For Each s In rDB.Books
            BookList.Items.Add(s)
        Next
        BookList.SelectedItem = Monster.Book
        Page.Text = Monster.PageNumber
        'Dim Arr As Array = [Enum].GetValues(GetType(SizeRating))
        Dim B As Object
        For Each B In From SR In rDB.SizeRatings
            BSize.Items.Add(B)
        Next

        'Arr = [Enum].GetValues(GetType(LevelCode))
        For Each B In From LC In rDB.LevelCharts
            LevelMod.Items.Add(B)
        Next
        'Arr = [Enum].GetValues(GetType(MSAQ))
        For Each B In From SC In rDB.SpeedCharts
            MS.Items.Add(B)
            AQ.Items.Add(B)
        Next
        'Arr = [Enum].GetValues(GetType(Pace))
        For Each B In From P In rDB.Paces
            MaxPace.Items.Add(B)
        Next
        'Arr = [Enum].GetValues(GetType(HitCode))
        For Each B In From HC In rDB.ConstitutionBonusCharts
            HitMod.Items.Add(B)
        Next
        'Arr = [Enum].GetValues(GetType(CriticalCode))
        For Each B In From CC In rDB.CriticalCodes
            Critical.Items.Add(B)
        Next
        Description.Text = Monster.Description
        CreatureName.Text = Monster.TypeName
        BaseLevel.Text = Monster.BaseLevel
        LevelMod.SelectedItem = Monster.LevelMod
        BSize.SelectedItem = Monster.Size
        MS.SelectedItem = Monster.MSRating
        AQ.SelectedItem = Monster.AQRating
        BaseMove.Text = Monster.BaseMove
        MaxPace.SelectedItem = Monster.MaxPace
        MMBonus.Text = Monster.MMBonus
        BaseHits.Text = Monster.BaseHits
        HitMod.SelectedItem = Monster.HitMod
        Critical.SelectedItem = Monster.Criticals
        If Monster.CriticalsIgnore_ID = 1 Then
            Ignore.Checked = True
        ElseIf Monster.CriticalsIgnore_ID = 2 Then
            IgnoreBleeders.Checked = True
        Else
            IgnoreStun.Checked = True
        End If
        AT.Text = Monster.AT
        DB.Text = Monster.DB
        MinEncountered.Text = Monster.MinEncountered
        MaxEncountered.Text = Monster.MaxEncountered
        Dim atk As Attack
        For Each atk In Monster.Attacks
            Attacks.Items.Add(atk)
        Next
        If Attacks.Items.Count > 0 Then
            Attacks.SelectedIndex = 0
        End If

    End Sub

    Private Sub BaseLevel_TextChanged(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles BaseLevel.TextChanged
        If Monster IsNot Nothing Then Monster.BaseLevel = BaseLevel.Text
    End Sub

    Private Sub CreatureDisplay_Load(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles MyBase.Load
        Call Display()
    End Sub

    Private Sub LevelMod_SelectedIndexChanged(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles LevelMod.SelectedIndexChanged
        If Monster IsNot Nothing Then Monster.LevelMod = LevelMod.SelectedItem
    End Sub

    Private Sub BSize_SelectedIndexChanged(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles BSize.SelectedIndexChanged
        If Monster IsNot Nothing Then Monster.Size = BSize.SelectedItem
    End Sub

    Private Sub MS_SelectedIndexChanged(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles MS.SelectedIndexChanged
        If Monster IsNot Nothing Then Monster.MSRating = MS.SelectedItem
    End Sub

    Private Sub AQ_SelectedIndexChanged(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles AQ.SelectedIndexChanged
        If Monster IsNot Nothing Then Monster.AQRating = AQ.SelectedItem
    End Sub

    Private Sub BaseMove_TextChanged(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles BaseMove.TextChanged
        If Monster IsNot Nothing Then Monster.BaseMove = BaseMove.Text
    End Sub

    Private Sub MaxPace_SelectedIndexChanged(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles MaxPace.SelectedIndexChanged
        If Monster IsNot Nothing Then Monster.MaxPace = MaxPace.SelectedItem
    End Sub

    Private Sub MMBonus_TextChanged(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles MMBonus.TextChanged
        If Monster IsNot Nothing Then Monster.MMBonus = Val(MMBonus.Text)
    End Sub

    Private Sub HitMod_SelectedIndexChanged(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles HitMod.SelectedIndexChanged
        If Monster IsNot Nothing Then Monster.HitMod = HitMod.SelectedItem
    End Sub

    Private Sub BaseHits_TextChanged(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles BaseHits.TextChanged
        If Monster IsNot Nothing Then Monster.BaseHits = Val(BaseHits.Text)
    End Sub

    Private Sub Critical_SelectedIndexChanged(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles Critical.SelectedIndexChanged
        If Monster IsNot Nothing Then Monster.Criticals = Critical.SelectedItem
    End Sub

    Private Sub IgnoreStun_CheckedChanged(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles IgnoreStun.CheckedChanged
        If Monster IsNot Nothing AndAlso IgnoreStun.Checked Then
            Monster.CriticalIgnore = CriticalIgnore.Load(rDB, 2)
            'Monster.IgnoreStun = True
            'Monster.IgnoreBleeders = False
        End If
    End Sub

    Private Sub IgnoreBleeders_CheckedChanged(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles IgnoreBleeders.CheckedChanged
        If Monster IsNot Nothing AndAlso IgnoreBleeders.Checked Then
            Monster.CriticalIgnore = CriticalIgnore.Load(rDB, 3)
            'Monster.IgnoreBleeders = True
            'Monster.IgnoreStun = False
        End If
    End Sub

    Private Sub AT_TextChanged(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles AT.TextChanged
        If Monster IsNot Nothing Then Monster.AT = AT.Text
    End Sub

    Private Sub DB_TextChanged(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles DB.TextChanged
        If Monster IsNot Nothing Then Monster.DB = DB.Text
    End Sub

    Private Sub MinEncountered_TextChanged(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles MinEncountered.TextChanged
        If Monster IsNot Nothing Then Monster.MinEncountered = MinEncountered.Text
    End Sub

    Private Sub MaxEncountered_TextChanged(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles MaxEncountered.TextChanged
        If Monster IsNot Nothing Then Monster.MaxEncountered = Val(MaxEncountered.Text)
    End Sub

    Private Sub Ignore_CheckedChanged(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles Ignore.CheckedChanged
        If Monster IsNot Nothing AndAlso Ignore.Checked Then
            Monster.CriticalIgnore = CriticalIgnore.Load(rDB, 1)
            'Monster.IgnoreBleeders = False
            'Monster.IgnoreStun = False
        End If

    End Sub

    Private Sub BookList_SelectedIndexChanged(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles BookList.SelectedIndexChanged
        If Monster IsNot Nothing Then Monster.Book = BookList.SelectedItem
    End Sub

    Private Sub CreatureName_TextChanged(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles CreatureName.TextChanged
        If Monster IsNot Nothing Then
            Monster.TypeName = CreatureName.Text
            RaiseEvent NameChange()
        End If
    End Sub

    Private Sub Page_TextChanged(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles Page.TextChanged
        If Monster IsNot Nothing Then Monster.PageNumber = Val(Page.Text)
    End Sub

    Private Sub Attacks_SelectedIndexChanged(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles Attacks.SelectedIndexChanged
        If DisplayAttack1.CurrentAttack Is Attacks.SelectedItem Then Exit Sub
        Panel1.Controls.Clear()

        If Attacks.SelectedItem Is Nothing Then
            Panel1.Visible = False
            Exit Sub
        Else
            Panel1.Visible = True
        End If
        DisplayAttack1 = New DisplayAttack(rDB, Attacks.SelectedItem)
        DisplayAttack1.Dock = DockStyle.Fill
        Panel1.Controls.Add(DisplayAttack1)

    End Sub

    Private Sub AddAttack_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles AddAttack.Click
        Dim Atk As New Attack
        Atk.AttackType = (From At In rDB.AttackTypes Select At).FirstOrDefault
        Atk.SizeRating = (From At In rDB.SizeRatings Select At).FirstOrDefault
        Atk.CriticalLevel = CriticalLevels.Same
        Attacks.Items.Add(Atk)
        Monster.Attacks.Add(Atk)
        Attacks.SelectedItem = Atk
    End Sub

    Private Sub DisplayAttack1_NameChange() Handles DisplayAttack1.NameChange
        Dim atk, atk2 As Attack
        atk2 = Attacks.SelectedItem
        Attacks.Items.Clear()
        For Each atk In Monster.Attacks
            Attacks.Items.Add(atk)
        Next
        Attacks.SelectedItem = atk2
    End Sub

    Private Sub Description_TextChanged(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles Description.TextChanged
        If Monster IsNot Nothing Then Monster.Description = Description.Text
    End Sub

    Private Sub RemoveAttack_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles RemoveAttack.Click
        Dim Atk As Attack = Attacks.SelectedItem
        If Atk Is Nothing Then Exit Sub
        Attacks.Items.Remove(Atk)
        Monster.Attacks.Remove(Atk)
        If Attacks.Items.Count > 0 Then
            Attacks.SelectedIndex = 0
        Else
            Panel1.Visible = False
        End If
    End Sub
End Class

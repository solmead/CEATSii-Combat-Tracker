Public Class DisplayPreBuitChars
    Public Monster As Character
    Public Event NameChange()
    Public Sub New(ByVal MyCreature As Character)
        Me.InitializeComponent()
        Monster = MyCreature
        'MsgBox(Monster.WalkSpeed)
    End Sub
    Public Sub New()
        Monster = New Character
        Me.InitializeComponent()
    End Sub
    Public Sub Display()
        CharName.Text = Monster.Name
        BaseLevel.Text = Monster.Level
        BaseInititive.Text = Monster.BaseInititive
        HitPoints.Text = Monster.HitPoints
        ExhaustionPoints.Text = Monster.ExhaustionPoints
        PowerPoints.Text = Monster.PowerPoints
        Strength.Text = Monster.StrengthBonus

        BaseMove.Text = Monster.WalkSpeed
        If Monster.Type = CharacterType.NPC Then
            IsNPC.Checked = True
        Else
            IsPC.Checked = True
        End If
        Dim Ar As Armor
        For Each Ar In Monster.Armors
            ListBox1.Items.Add(Ar)
        Next
        If Monster.Armors.Count > 0 Then ListBox1.SelectedItem = Monster.Armors(0)
        Dim wp As Weapon
        For Each wp In Monster.Weapons
            ListBox2.Items.Add(wp)
        Next
        If Monster.Weapons.Count > 0 Then ListBox2.SelectedItem = Monster.Weapons(0)

    End Sub

    Private Sub DisplayPreBuitChars_Load(ByVal sender As Object, ByVal e As System.EventArgs) Handles Me.Load
        Call Display()
    End Sub

    Private Sub CharName_TextChanged(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles CharName.TextChanged
        If Monster Is Nothing Then Exit Sub
        Monster.Name = CharName.Text
        RaiseEvent namechange()
        'ListBox1.Refresh()
    End Sub

    Private Sub BaseLevel_TextChanged(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles BaseLevel.TextChanged
        If Monster Is Nothing Then Exit Sub
        Monster.Level = Val(BaseLevel.Text)
    End Sub

    Private Sub BaseInititive_TextChanged(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles BaseInititive.TextChanged
        If Monster Is Nothing Then Exit Sub
        Monster.BaseInititive = Val(BaseInititive.Text)
    End Sub

    Private Sub HitPoints_TextChanged(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles HitPoints.TextChanged
        If Monster Is Nothing Then Exit Sub
        Monster.HitPoints = Val(HitPoints.Text)
    End Sub

    Private Sub ExhaustionPoints_TextChanged(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles ExhaustionPoints.TextChanged
        If Monster Is Nothing Then Exit Sub
        Monster.ExhaustionPoints = Val(ExhaustionPoints.Text)
    End Sub

    Private Sub PowerPoints_TextChanged(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles PowerPoints.TextChanged
        If Monster Is Nothing Then Exit Sub
        Monster.PowerPoints = Val(PowerPoints.Text)
    End Sub

    Private Sub IsNPC_CheckedChanged(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles IsNPC.CheckedChanged
        If Monster Is Nothing Then Exit Sub
        If IsNPC.Checked Then Monster.Type = CharacterType.NPC
    End Sub

    Private Sub IsPC_CheckedChanged(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles IsPC.CheckedChanged
        If Monster Is Nothing Then Exit Sub
        If IsPC.Checked Then Monster.Type = CharacterType.PC
    End Sub

    Private Sub ListBox1_SelectedIndexChanged(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles ListBox1.SelectedIndexChanged
        Dim Ar As Armor = ListBox1.SelectedItem
        If Ar Is Nothing Then Exit Sub
        AT.Text = Ar.Type
        MM.Text = Ar.MovingManeuverMod
        DB.text = Ar.DB
        Descrip.Text = Ar.Description
        GroupBox2.Enabled = True

        GroupBox2.Visible = True
    End Sub

    Private Sub AT_TextChanged(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles AT.TextChanged
        Dim Ar As Armor = ListBox1.SelectedItem
        If Ar Is Nothing Then Exit Sub
        Ar.Type = Val(AT.Text)
        Dim ar2 As Armor
        ListBox1.Items.Clear()
        For Each ar2 In Monster.Armors
            ListBox1.Items.Add(ar2)
        Next
        ListBox1.SelectedItem = Ar
        'ListBox1.Refresh()
    End Sub

    Private Sub MM_TextChanged(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles MM.TextChanged

        Dim Ar As Armor = ListBox1.SelectedItem
        If Ar Is Nothing Then Exit Sub
        Ar.MovingManeuverMod = Val(MM.Text)
    End Sub

    Private Sub DB_TextChanged(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles DB.TextChanged

        Dim Ar As Armor = ListBox1.SelectedItem
        If Ar Is Nothing Then Exit Sub
        Ar.DB = Val(DB.Text)
    End Sub

    Private Sub Descrip_TextChanged(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles Descrip.TextChanged

        Dim Ar As Armor = ListBox1.SelectedItem
        If Ar Is Nothing Then Exit Sub
        Ar.Description = Descrip.Text
    End Sub

    Private Sub AddArmor_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles AddArmor.Click
        Dim ar As New Armor
        ListBox1.Items.Add(ar)
        ListBox1.SelectedItem = ar
        Monster.Armors.Add(ar)
    End Sub

    Private Sub RemoveArmor_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles RemoveArmor.Click
        Dim ar As Armor = ListBox1.SelectedItem
        If ar Is Nothing Then Exit Sub
        ListBox1.Items.Remove(ar)
        If ListBox1.Items.Count > 0 Then
            ListBox1.SelectedIndex = 0
        Else
            GroupBox2.Visible = False
        End If
        Monster.Armors.Remove(ar)

    End Sub

    Private Sub AddWeapon_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles AddWeapon.Click
        Dim wp As New Weapon
        ListBox2.Items.Add(wp)
        ListBox2.SelectedItem = wp
        Monster.Weapons.Add(wp)
    End Sub

    Private Sub RemoveWeapon_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles RemoveWeapon.Click
        Dim ar As Weapon = ListBox2.SelectedItem
        If ar Is Nothing Then Exit Sub
        ListBox2.Items.Remove(ar)
        If ListBox2.Items.Count > 0 Then
            ListBox2.SelectedIndex = 0
        Else
            GroupBox3.Visible = False
        End If
        Monster.Weapons.Remove(ar)
    End Sub

    Private Sub ListBox2_SelectedIndexChanged(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles ListBox2.SelectedIndexChanged
        Dim Wp As Weapon = ListBox2.SelectedItem
        WeaponName.text = Wp.Name
        WeaponBonus.Text = Wp.Bonus
        WeaponWeight.text = Wp.Weight
        WeaponIs2H.Checked = Wp.Is2Handed
        OB.Text = Wp.OB
        GroupBox3.Enabled = True

        GroupBox3.Visible = True
    End Sub

    Private Sub WeaponName_TextChanged(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles WeaponName.TextChanged
        Dim Wp As Weapon = ListBox2.SelectedItem
        If Wp Is Nothing Then Exit Sub
        Wp.Name = WeaponName.Text
        Dim Wp2 As Weapon
        ListBox2.Items.Clear()
        For Each Wp2 In Monster.Weapons
            ListBox2.Items.Add(Wp2)
        Next
        ListBox2.SelectedItem = Wp
    End Sub

    Private Sub WeaponBonus_TextChanged(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles WeaponBonus.TextChanged
        Dim Wp As Weapon = ListBox2.SelectedItem
        If Wp Is Nothing Then Exit Sub
        Wp.Bonus = WeaponBonus.Text
    End Sub

    Private Sub WeaponWeight_TextChanged(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles WeaponWeight.TextChanged
        Dim Wp As Weapon = ListBox2.SelectedItem
        If Wp Is Nothing Then Exit Sub
        Wp.Weight = WeaponWeight.Text
    End Sub

    Private Sub WeaponIs2H_CheckedChanged(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles WeaponIs2H.CheckedChanged
        Dim Wp As Weapon = ListBox2.SelectedItem
        If Wp Is Nothing Then Exit Sub
        Wp.Is2Handed = WeaponIs2H.Checked
    End Sub

    Private Sub OB_TextChanged(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles OB.TextChanged
        Dim Wp As Weapon = ListBox2.SelectedItem
        If Wp Is Nothing Then Exit Sub
        Wp.OB = Val(OB.Text)
    End Sub

    Private Sub Strength_TextChanged(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles Strength.TextChanged
        If Monster Is Nothing Then Exit Sub
        Monster.StrengthBonus = Val(Strength.Text)
    End Sub

    Private Sub BaseMove_TextChanged(ByVal sender As Object, ByVal e As System.EventArgs) Handles BaseMove.TextChanged

        If Monster Is Nothing Then Exit Sub
        Monster.WalkSpeed = Val(BaseMove.Text)
    End Sub
End Class

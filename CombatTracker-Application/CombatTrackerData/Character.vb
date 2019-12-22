<Bind(Include:="Name,Level,BaseInititive,HitPoints,ExhaustionPoints,PowerPoints,Type,StrengthBonus,PercentRequiredAdrenalDB,WalkSpeed")> _
Partial Class Character
    Inherits IEntity(Of Character)
    Public Overrides Function ToString() As String
        Return Name
    End Function

    Public Function GetActor(ByVal DB As RMSSDataDataContext, ByVal GI As Game) As Actor
        Dim MyChar As New Actor
        MyChar.Game = GI
        MyChar.Character = Me
        MyChar.Name = Name
        MyChar.Color = GI.Colors(GI.Actors.Count - 1)
        'Dim Arm As Armor
        'For Each Arm In Me.Armors
        '    MyChar.ArmorList.Add(Arm)
        'Next
        If Armors.Count > 0 Then
            MyChar.CurrentArmor = Armors(0)
        End If

        MyChar.Level = Level
        MyChar.BaseInititive = BaseInititive
        If Type = CharacterType.PC Then
            MyChar.RolledInititive = Val(InputBox("Roll Inititive for " & Name))
        Else
            Dim Roll As Integer = RollOnes()
            If Roll = 0 Then Roll = 10
            MyChar.RolledInititive = Roll
            Roll = RollOnes()
            If Roll = 0 Then Roll = 10
            MyChar.RolledInititive += Roll
        End If
        MyChar.HitsTotal = HitPoints
        MyChar.HitsRemaining = MyChar.HitsTotal
        MyChar.ExhaustionTotal = ExhaustionPoints
        MyChar.ExhaustionRemaining = MyChar.ExhaustionTotal
        MyChar.PowerPointsTotal = PowerPoints
        MyChar.PowerPointsRemaining = MyChar.PowerPointsTotal
        MyChar.Type = Type
        MyChar.StrengthBonus = Me.StrengthBonus
        MyChar.PercentRequiredAdrenalDB = PercentRequiredAdrenalDB
        MyChar.Movement = Me.WalkSpeed

        Dim Wpn As Weapon
        For Each Wpn In Me.Weapons
            Dim atk As New Attack
            atk.WeaponUsed = Wpn
            atk.OB = Wpn.OB
            atk.AttackType = AttackType.LoadByName(DB, "Weapon")
            Dim AA As New ActorsAttack With {.Actor = MyChar, .Attack = atk}
            'MyChar.Attacks.Add(atk)
        Next
        'If MyChar.Attacks.Count > 0 Then MyChar.CurrentAttack = MyChar.Attacks(0)

        Dim Ac As New StandardAction
        Ac.Name = "Wait"
        Ac.WhoIsActing = MyChar
        MyChar.SetActionTime(Ac, GI.CurrentTime)
        Ac.Game = GI
        Ac.Save(DB)
        'GI.AddAction(Ac)
        MyChar.CurrentAction(DB, GI) = Ac
        Return MyChar
    End Function

    Private Sub OnValidate(ByVal action As System.Data.Linq.ChangeAction)
        If action <> Data.Linq.ChangeAction.Delete AndAlso Not IsValid Then
            Throw New ApplicationException("Rule violations prevent saving")
        End If
    End Sub

    Public Overrides Function GetRuleViolations() As System.Collections.Generic.List(Of RuleViolation)
        Dim L As New List(Of RuleViolation)
        If String.IsNullOrEmpty(Name) Then
            L.Add(New RuleViolation("Name Required", "Name"))
        End If
        Return L
    End Function

    Private Sub OnCreated()
        Name = ""
        Type = CharacterType.PC

    End Sub
End Class

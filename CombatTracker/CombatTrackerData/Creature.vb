
'Public Enum LevelCode
'    A
'    B
'    C
'    D
'    E
'    F
'    G
'    H
'End Enum
'Public Enum HitCode
'    A
'    B
'    C
'    D
'    E
'    F
'    G
'    H
'End Enum
'Public Enum MSAQ
'    Inching
'    Creeping
'    Very_Slow
'    Slow
'    Medium
'    Moderately_Fast
'    Fast
'    Very_Fast
'    Blindingly_Fast
'End Enum
'Public Enum SizeRating
'    Tiny
'    Small
'    Medium
'    Large
'    Huge
'End Enum
'Public Enum Pace
'    Walk
'    Jog
'    Run
'    Sprint
'    Fast_Sprint
'    Dash
'End Enum
'Public Enum CritTypes
'    None
'    Slash
'    Puncture
'    Krush
'    Unbalance
'    Grappling
'    Tiny_Animals
'    Heat
'    Cold
'    Brawling
'    Martial_Arts_Strikes
'    Martial_Arts_Sweeps
'    Large_Creature_Physical
'    Super_Large_Creature_Physical
'    Large_Creature_Spells
'    Super_Large_Creature_Spells
'    Electricity
'    Impact
'End Enum
Public Enum CriticalLevels
    Same
    A
    B
    C
    D
    E
End Enum
'Public Enum CriticalCode
'    Normal
'    Decrease_By_One
'    Decrease_By_Two
'    Large_Critical
'    SuperLarge_Critical
'End Enum
Public Enum CharacterType
    NPC
    PC
End Enum
'Public Enum AttackType
'    Bash
'    Bite
'    Claw
'    Crush
'    Grapple
'    Pincer
'    Horn
'    Stinger
'    Tiny
'    Trample
'    Brawling
'    Weapon
'    Martial_Arts_Sweep
'    Martial_Arts_Striking
'    Poison
'    Spell
'    Special
'    Bolt
'    Cone
'    Ball
'    Fire_Bolt
'    Ice_Bolt
'    Lightning_Bolt
'    Shock_Bolt
'    Water_Bolt
'    Cold_Ball
'    Fire_Ball
'    Cold_Cone
'    Fire_Cone
'    Gas_Cone
'    Shock_Cone
'    Lightning_Cone

'End Enum
<Bind(Include:="TypeName,BaseLevel,LevelMod_ID,Size_ID,MSRating_ID,AQRating_ID,BaseMove,MaxPace_ID,MMBonus,MinEncountered,MaxEncountered,BaseHits,HitMod_ID,Criticals_ID,CriticalsIgnore_ID,AT,DB,Outlook_ID,IQ_ID,PageNumber,Book_ID,Description,Habitat")> _
Partial Class Creature
    Inherits IEntity(Of Creature)

    Public Overrides Function ToString() As String
        Return TypeName '& " - " & Book & ", " & PageNumber
    End Function
    Private Function GetLevel()
        Dim Roll As Integer = RollD100OpenEnded()
        Dim Level As Integer = BaseLevel + Me.LevelMod.LookupLevel(Roll)
        If Level < 0 Then Level = 0
        Return Level
    End Function
    Public Function GetActor(ByVal db As RMSSDataDataContext, ByVal GI As Game) As Actor
        Dim MyChar As New Actor
        MyChar.Game = GI
        MyChar.Creature = Me
        MyChar.Name = TypeName
        MyChar.Color = GI.Colors(GI.Actors.Count - 1)
        Dim Ar As New Armor
        Ar.Type = AT
        Ar.Description = "Unknown"
        MyChar.CurrentArmor = Ar
        MyChar.CurrentArmor.DB = Me.DB
        MyChar.Level = Me.GetLevel()
        MyChar.BaseInititive = Me.AQRating.AQInitiative
        Dim Roll As Integer = RollOnes()
        If Roll = 0 Then Roll = 10
        MyChar.RolledInititive = Roll
        Roll = RollOnes()
        If Roll = 0 Then Roll = 10
        MyChar.RolledInititive += Roll
        Roll = RollD100()
        MyChar.HitsTotal = Me.BaseHits + HitMod.LookupStamina(Roll) + (MyChar.Level - Me.BaseLevel) * HitMod.PerLevelDifference
        MyChar.HitsRemaining = MyChar.HitsTotal
        MyChar.ExhaustionTotal = HitMod.LookupStamina(Roll) * 3 + 40 + HitMod.BonusExhaustion
        MyChar.ExhaustionRemaining = MyChar.ExhaustionTotal
        MyChar.Type = CharacterType.NPC
        MyChar.Movement = Me.BaseMove
        Dim Atk As Attack
        For Each Atk In Me.Attacks
            Dim atk2 As Attack = Atk
            atk2.ModifyOB((MyChar.Level - Me.BaseLevel))
            Dim AA As New ActorsAttack With {.Actor = MyChar, .Attack = atk2}
            'MyChar.Attacks.Add(atk2)
        Next
        'Roll = RMSS.RollD100
        'Dim Cnt As Integer = 0
        'For Each Atk In MyChar.Attacks
        '    Cnt += Atk.PercentChance
        '    If Cnt >= Roll Then
        '        MyChar.CurrentAttack = Atk
        '        Exit For
        '    End If
        'Next


        'MyChar.IsConcentrating = True
        'MyChar.UnderHaste = True
        'MyChar.Suprised = True
        'MyChar.UsingAdrenalDB = True

        Dim Ac As New StandardAction
        Ac.Name = "Wait"
        Ac.WhoIsActing = MyChar
        MyChar.SetActionTime(Ac, GI.CurrentTime)
        Ac.Game = GI
        Ac.Save(db)
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
        If String.IsNullOrEmpty(TypeName) Then
            L.Add(New RuleViolation("Type Name Required", "TypeName"))
        End If
        If MSRating Is Nothing AndAlso MSRating_ID = 0 Then
            L.Add(New RuleViolation("MS Rating required", "MSRating_ID"))
        End If
        If AQRating Is Nothing AndAlso AQRating_ID = 0 Then
            L.Add(New RuleViolation("AQ Rating required", "AQRating_ID"))
        End If
        If Size Is Nothing AndAlso Size_ID = 0 Then
            L.Add(New RuleViolation("Size required", "Size_ID"))
        End If
        If MaxPace Is Nothing AndAlso MaxPace_ID = 0 Then
            L.Add(New RuleViolation("Pace required", "Pace_ID"))
        End If
        If LevelMod Is Nothing AndAlso LevelMod_ID = 0 Then
            L.Add(New RuleViolation("Level Mod required", "LevelMod_ID"))
        End If
        If HitMod Is Nothing AndAlso HitMod_ID = 0 Then
            L.Add(New RuleViolation("Hit Mod required", "HitMod_ID"))
        End If
        If Outlook Is Nothing AndAlso Outlook_ID = 0 Then
            L.Add(New RuleViolation("Outlook required", "Outlook_ID"))
        End If
        If IQ Is Nothing AndAlso IQ_ID = 0 Then
            L.Add(New RuleViolation("IQ required", "IQ_ID"))
        End If
        If Book Is Nothing AndAlso Book_ID = 0 Then
            L.Add(New RuleViolation("Book required", "Book_ID"))
        End If
        Return L
    End Function
    Private Sub OnCreated()
        Dim a As Integer = 1
        TypeName = ""
        'LevelMod = LevelCode.A
        'Size = SizeRating.Tiny

        'MaxPace = Pace.Walk
        'HitMod = HitCode.A
        'Criticals = CriticalCode.Normal
        'Outlook = ""
        'IQ = ""
        'Book = ""
        Description = ""
    End Sub
End Class

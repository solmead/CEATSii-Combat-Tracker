<Bind(Include:="PercentChance,OB,MaxOB,Type,Size,Number,DamageMultiplier,CriticalLevel,AdditionalCritsOr,UseCriticalInstead")> _
Partial Class Attack
    Inherits IEntity(Of Attack)
    Public Overrides Function ToString() As String
        Dim Ast As String
        If AttackType.Name = "Weapon" Then
            Ast = OB & " " & WeaponUsed.Name
        Else
            Ast = OB & " " & SizeRating.Name & " " & AttackType.Name
        End If
        Return Ast
    End Function
    Public ReadOnly Property ParentAttack() As Attack
        Get
            Dim L = ParentAttacks.Union(ParentAttacks2)
            If L.Count > 0 Then
                Return L(0)
            Else
                Return Nothing
            End If
        End Get
    End Property
    Public Sub ModifyOB(ByVal LevelDiff As Integer)
        OB = OB + LevelDiff * 5
        If Me.ThisRoundSuccess IsNot Nothing Then
            Me.ThisRoundSuccess.ModifyOB(LevelDiff)
        End If
        If Me.NextRoundSuccess IsNot Nothing Then
            Me.NextRoundSuccess.ModifyOB(LevelDiff)
        End If
    End Sub

    Private Sub OnCreated()
        'Type = AttackType.Bash
        'Size = SizeRating.Tiny
        CriticalLevel = CriticalLevels.Same
        'UseCriticalInstead = CritTypes.None

    End Sub



    Private Sub OnValidate(ByVal action As System.Data.Linq.ChangeAction)
        If action <> Data.Linq.ChangeAction.Delete AndAlso Not IsValid Then
            Throw New ApplicationException("Rule violations prevent saving")
        End If
    End Sub

    Public Overrides Function GetRuleViolations() As System.Collections.Generic.List(Of RuleViolation)
        Dim L As New List(Of RuleViolation)
        'If String.IsNullOrEmpty(Name) Then
        '    L.Add(New RuleViolation("Name Required", "Name"))
        'End If
        If ParentAttack Is Nothing AndAlso Creature Is Nothing AndAlso ActorsAttacks.Count = 0 Then
            L.Add(New RuleViolation("Must be tied to a creature or another attack or an actor", "creature_id"))
        End If
        If CriticalUseInstead Is Nothing AndAlso UseCriticalInstead_ID = 0 Then
            L.Add(New RuleViolation("Use Critical Instead must be set.", "UseCriticalInstead_ID"))
        End If
        If AttackType Is Nothing AndAlso Type_ID = 0 Then
            L.Add(New RuleViolation("Attack Type must be set.", "Type_ID"))
        End If
        Return L
    End Function
End Class

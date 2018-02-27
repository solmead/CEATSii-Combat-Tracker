Partial Class PsychicRefractoryPeriodChart
    Inherits IEntity(Of PsychicRefractoryPeriodChart)


    Public Shared Function LookupNegative(ByVal DB As RMSSDataDataContext, ByVal LevelDifferance As Integer, ByVal RoundNumber As Integer) As Integer
        Dim Mods = (From RL In DB.PsychicRefractoryPeriodCharts Where RL.LevelMin <= LevelDifferance AndAlso LevelDifferance <= RL.LevelMax Order By RL.RoundNumber Select RL).ToList

        For Each RM In Mods
            If RM.RoundNumber = RoundNumber Then
                Return RM.Mod
            End If
        Next
        Dim lMod As Integer = Mods(Mods.Count - 1).Mod
        Dim Rnd As Integer = Mods(Mods.Count - 1).RoundNumber
        While lMod < 0 AndAlso Rnd < RoundNumber
            Rnd += 1
            lMod += 5
        End While
        If lMod > 0 Then lMod = 0
        Return lMod
        Return 0
    End Function
    Public Shared Function LookupRoundsToZero(ByVal DB As RMSSDataDataContext, ByVal LevelDifferance As Integer) As Integer
        Dim Mods = (From RL In DB.PsychicRefractoryPeriodCharts Where RL.LevelMin <= LevelDifferance AndAlso LevelDifferance <= RL.LevelMax Order By RL.RoundNumber Select RL).ToList
        If Mods.Count = 0 Then
            Return 0
        End If

        Dim lMod As Integer = Mods(Mods.Count - 1).Mod
        Dim Rnd As Integer = Mods(Mods.Count - 1).RoundNumber
        While lMod < 0
            Rnd += 1
            lMod += 5
        End While
        Return Rnd
    End Function



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
        Return L
    End Function
End Class

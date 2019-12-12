Partial Class PsychicAction
    Public Sub New(ByVal DB As RMSSDataDataContext, ByVal TheChar As Actor, ByVal CurrentTime As Double, ByVal PsychicLevel As Integer)
        WhoIsActing = TheChar
        LevelDifference = TheChar.Level - PsychicLevel
        TotalRounds = PsychicRefractoryPeriodChart.LookupRoundsToZero(DB, LevelDifference)
        Me.Name = "Psychic Recovery"
        Me.Note = "Round " & CurrentRound & " of " & TotalRounds
        Me.BasePercent = 1
        Me.StartTime = CurrentTime
        Me.EndTime = TheChar.CalculateTimeRequiredForSpells(BaseRoundTime) + CurrentTime
        TheChar.CritNegatives += PsychicRefractoryPeriodChart.LookupNegative(DB, LevelDifference, CurrentRound)
        Me.ActionType = ActionTypeEnum.Effect
    End Sub
    Public Overrides ReadOnly Property CharacterAction() As Boolean
        Get
            Return False
        End Get
    End Property

    'Public Overrides Function Clone() As Action
    '    Dim Act As New PsychicAction
    '    Me.CloneMe(Act)
    '    Return Act
    'End Function

    Public Overrides Sub HandleAction(ByVal DB As RMSSDataDataContext, ByVal GI As Game)
        WhoIsActing.CritNegatives -= PsychicRefractoryPeriodChart.LookupNegative(DB, LevelDifference, CurrentRound)
        CurrentRound += 1
        WhoIsActing.CritNegatives += PsychicRefractoryPeriodChart.LookupNegative(DB, LevelDifference, CurrentRound)
        Me.EndTime = WhoIsActing.CalculateTimeRequiredForSpells(BaseRoundTime) + GI.CurrentTime
        Me.Note = "Round " & CurrentRound & " of " & TotalRounds

    End Sub
    Public Overrides ReadOnly Property Reoccuring() As Boolean
        Get
            Return CurrentRound <= TotalRounds
        End Get
    End Property
    Public Overrides Sub RefreshData()

    End Sub

    Private Sub OnCreated()

        Me.BasePercent = 0.001
        Name = ""
        StartTime = 0
        EndTime = 0
        Note = ""
        State = ActionProblem.IsOK
        CurrentModifier = 0
        Type = ActorActionType.Psychic
    End Sub
End Class

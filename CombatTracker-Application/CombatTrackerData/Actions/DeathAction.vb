Partial Class DeathAction
    Public Sub New(ByVal TheChar As Actor, ByVal CurrentTime As Double)
        WhoIsActing = TheChar
        Me.Name = "Unconcious"
        Me.Note = ""
        Me.BasePercent = 1
        Me.StartTime = CurrentTime
        Me.EndTime = TheChar.CalculateTimeRequiredNonEncumbered(BaseRoundTime) + CurrentTime
    End Sub
    Public Overrides ReadOnly Property Reoccuring() As Boolean
        Get
            Return WhoIsActing.HitsRemaining <= 0
        End Get
    End Property
    Public Overrides ReadOnly Property CharacterAction() As Boolean
        Get
            Return True
        End Get
    End Property

    Public Overrides Sub HandleAction(ByVal DB As RMSSDataDataContext, ByVal GI As Game)
        If WhoIsActing.HitsRemaining < -WhoIsActing.ConstitutionStat Then
            Me.Name = WhoIsActing.Name & " is Dead"
            Count += 1
            Note = "Rounds of Death:" & Count
        End If
        Me.EndTime = WhoIsActing.CalculateTimeRequiredNonEncumbered(BaseRoundTime) + GI.CurrentTime
        'WhoIsActing.HandleInitChange(MD)
    End Sub

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
        Type = ActorActionType.Death
    End Sub
End Class

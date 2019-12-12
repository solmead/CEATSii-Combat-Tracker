Partial Class BleedAction

    Public Sub New(ByVal TheChar As Actor, ByVal CurrentTime As Double, ByVal BleedRate As Integer)
        WhoIsActing = TheChar
        Bleeder = BleedRate
        Me.Name = TheChar.Name & " bleeding at " & BleedRate
        Me.Note = ""
        Me.BasePercent = 1
        Me.StartTime = CurrentTime
        Me.EndTime = TheChar.CalculateTimeRequiredNonEncumbered(BaseRoundTime) + CurrentTime
        Me.ActionType = ActionTypeEnum.Effect
    End Sub
    Public Overrides ReadOnly Property Reoccuring() As Boolean
        Get
            Return True
        End Get
    End Property
    Public Overrides ReadOnly Property CharacterAction() As Boolean
        Get
            Return False
        End Get
    End Property

    Public Overrides Sub HandleAction(ByVal DB As RMSSDataDataContext, ByVal GI As Game)
        WhoIsActing.HitsRemaining -= Bleeder
        Count += 1
        Note = "Rounds of Bleeding:" & Count
        Me.EndTime = WhoIsActing.CalculateTimeRequiredNonEncumbered(BaseRoundTime) + GI.CurrentTime
        WhoIsActing.HandleInitChange(GI.CurrentTime)
        If WhoIsActing.Type = CharacterType.PC Then
            MsgBox(WhoIsActing.Name & " bleeds " & Bleeder)
        End If
        If WhoIsActing.HitsRemaining <= 0 Then
            WhoIsActing.HandleDeath(DB, GI)
        End If
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
        Type = ActorActionType.Bleed
    End Sub
End Class

Partial Class SpellAction

    Public Overrides ReadOnly Property CharacterAction() As Boolean
        Get
            Return True
        End Get
    End Property

    Public Overrides Sub HandleAction(ByVal DB As RMSSDataDataContext, ByVal GI As Game)

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
        Type = ActorActionType.Spell
    End Sub
End Class

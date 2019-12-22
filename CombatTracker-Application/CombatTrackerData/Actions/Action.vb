Public Enum ActorActionType
    None
    Normal
    Attack
    Spell
    Prep
    Movement
    Bleed
    Critical
    Death
    Psychic
    SpellEffect
End Enum
Public Enum ActionProblem
    IsOK
    IsWarning
    IsError
End Enum
Public Enum ActionTypeEnum
    None
    Current
    Proposed
    [Next]
    Effect
End Enum
Partial MustInherit Class Action
    Inherits IEntity(Of Action)


    Public MustOverride ReadOnly Property CharacterAction() As Boolean
    Public MustOverride Sub HandleAction(ByVal DB As RMSSDataDataContext, ByVal GI As Game)
    Public MustOverride Sub RefreshData()

    
    Public ReadOnly Property Color() As String
        Get
            Dim Col As String = ""
            'Col = "rgba("
            Col = col & Trim(WhoIsActing.Color)
            If ActionType = ActionTypeEnum.Current Then
                Col = Col & ",1"
            ElseIf ActionType = ActionTypeEnum.Next Then
                Col = Col & ",0.5"
            ElseIf ActionType = ActionTypeEnum.Proposed Then
                Col = Col & ",0.33"
            ElseIf ActionType = ActionTypeEnum.None Then
                Col = Col & ",0"
            Else
                Col = Col & ",0.75"
            End If
            'Col = Col & ")"
            Return Col
        End Get
    End Property
    Public ReadOnly Property PercentageCompleted(ByVal CurrentTime As Double) As Double
        Get
            Return (CurrentTime - StartTime) / (EndTime - StartTime)
        End Get
    End Property
    Public Overridable ReadOnly Property Reoccuring() As Boolean
        Get
            Return False
        End Get
    End Property
    Public Overrides Function ToString() As String
        Return Name
    End Function

    Private Sub OnCreated()
        Me.BasePercent = 0.001
        Name = ""
        StartTime = 0
        EndTime = 0
        Note = ""
        State = ActionProblem.IsOK
        CurrentModifier = 0


    End Sub

    Private Sub OnGame_IDChanged()
        If Game Is Nothing Then
            Throw New Exception("Game must exist")
        End If
    End Sub
End Class

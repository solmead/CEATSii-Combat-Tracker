Partial Class SpellEffectAction
    Public Sub New(ByVal TheChar As Actor, ByVal Caster As Actor, ByVal CurrentTime As Double, ByVal Name As String, ByVal Duration As Integer, ByVal HastePercent As Integer)
        WhoIsActing = TheChar
        HastedPercent = HastePercent
        IsHasted = HastePercent > 0
        IsSlowed = HastePercent < 0
        If TheChar IsNot Nothing Then
            Me.Name = "Spell:" & Name & " cast"
            Me.Note = "on " & TheChar.Name
        Else
            Me.Name = "Spell:" & Name & " cast"
        End If
        'Me.Note = ""
        Me.BasePercent = Duration
        Me.StartTime = CurrentTime
        Me.EndTime = Caster.CalculateTimeRequiredForSpells(BaseRoundTime * Duration) + CurrentTime
        If IsHasted OrElse IsSlowed Then
            WhoIsActing.PercentAction *= (HastePercent / 100)
            WhoIsActing.HandleInitChange(CurrentTime)

        End If
        Me.ActionType = ActionTypeEnum.Effect
    End Sub
    Public Overrides ReadOnly Property CharacterAction() As Boolean
        Get
            Return False
        End Get
    End Property


    Public Overrides Sub HandleAction(ByVal DB As RMSSDataDataContext, ByVal GI As Game)
        If IsHasted OrElse IsSlowed Then
            WhoIsActing.PercentAction /= (HastedPercent / 100)
            WhoIsActing.HandleInitChange(GI.CurrentTime)
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
        Type = ActorActionType.SpellEffect
    End Sub
End Class

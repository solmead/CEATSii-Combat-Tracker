Partial Class Actor
    Inherits IEntity(Of Actor)


    Public ReadOnly Property Inititive()
        Get
            Return BaseInititive + RolledInititive - 11
        End Get
    End Property



    Public Overrides Function ToString() As String
        Return Name
    End Function
    Public Sub HandleDeath(ByVal db As RMSSDataDataContext, ByVal GI As Game)
        If Not (TypeOf (CurrentAction) Is DeathAction) Then
            Dim Nact As Action = New DeathAction(Me, GI.CurrentTime)
            Nact.WhoIsActing = Me
            Nact.Game = GI
            'GI.AddAction(Nact)
            Me.CurrentAction(db, GI) = Nact
            'GI.SortActions()
        End If
    End Sub
    Public Sub HandleInitChange(ByVal CurrentTime As Double)
        Dim CurAct As Action = Me.CurrentAction
        Dim PerRemain As Double = 0
        PerRemain = 1 - CurAct.PercentageCompleted(CurrentTime)
        CurAct.EndTime = CurrentTime + PerRemain * Me.CalculateTimeRequired(CurAct.BasePercent * BaseRoundTime, CurAct.CurrentModifier, CurAct.Type = ActorActionType.Attack, CurAct.CurrentAttack)
        If Me.FutureAction IsNot Nothing Then
            SetActionTime(Me.FutureAction, CurAct.EndTime)
        End If
        If Me.ProposedAction IsNot Nothing Then
            SetActionTime(Me.ProposedAction, CurrentTime)
        End If
    End Sub
    Public Function StunRounds() As Integer
        Dim Cnt As Integer = 0
        Dim CR As CriticalAffect
        For Each CR In CriticalAffects
            If CR.IsStunned Then Cnt += 1
        Next
        Return Cnt
    End Function
    Public Function ParryRounds() As Integer
        Dim Cnt As Integer = 0
        Dim CR As CriticalAffect
        For Each CR In CriticalAffects
            If CR.Parry <> ParryType.Fine Then Cnt += 1
        Next
        Return Cnt
    End Function
    Public Function NegativeRounds() As Integer
        Dim Cnt As Integer = 0
        Dim CR As CriticalAffect
        For Each CR In CriticalAffects
            If CR.Negative <> 0 Then Cnt += 1
        Next
        Return Cnt
    End Function

    Public ReadOnly Property CurrentCrits() As CriticalAffect
        Get
            If CriticalAffects.Count > 0 Then
                Return CriticalAffects(0)
            Else
                Return Nothing
            End If
        End Get
    End Property
    Public Sub RemoveCriticalsFromCharacter(ByVal DB As RMSSDataDataContext, ByVal GI As Game, ByVal Count As Integer)
        Dim flag As Boolean = Me.CurrentCrits Is Nothing
        If Not flag Then
            If Me.CurrentCrits.Action IsNot Nothing Then
                Me.CurrentCrits.Action.deletepartial(DB)
            End If

            Dim a As Integer
            For a = 1 To Count
                Dim ca As CriticalAffect = CriticalAffects(0)
                ca.DeletePartial(DB)
                CriticalAffects.RemoveAt(0)
            Next
            If CriticalAffects.Count = 0 Then Exit Sub
            If Me.CurrentCrits IsNot Nothing Then
                If CurrentCrits.TimeStart = 0 Then
                    CurrentCrits.TimeStart = GI.CurrentTime
                    CurrentCrits.TimeEnd = Me.CalculateTimeRequiredNonEncumbered(BaseRoundTime) + GI.CurrentTime
                End If
                Dim CA As New CriticalAction(Me, GI.CurrentTime)
                CA.Game = GI
                'GI.AddAction(CA)
            End If
        End If
    End Sub
    Public Sub RemoveCriticalFromCharacter(ByVal DB As RMSSDataDataContext, ByVal GI As Game)
        RemoveCriticalsFromCharacter(DB, GI, 1)
    End Sub
    Public Sub AddCriticalToCharcter(ByVal GI As Game, ByVal Crit As CriticalAffect, ByVal Rounds As Integer)
        Dim flag As Boolean = CurrentCrits Is Nothing
        AddRoundsCriticalAffects(Crit, Rounds, GI.CurrentTime)
        If flag Then
            Dim CA As New CriticalAction(Me, GI.CurrentTime)
            CA.Game = GI
            'GI.AddAction(CA)
        End If
    End Sub
    Public Sub AddRoundsCriticalAffects(ByVal CAffect As CriticalAffect, ByVal Rounds As Integer, ByVal CurrentTime As Double)
        Dim ca As CriticalAffect
        Dim RS As Integer
        Dim RNP As Integer
        Dim RMP As Integer
        Dim RNeg As Integer
        Dim flag As Boolean = CriticalAffects.Count = 0
        If CAffect.Parry = ParryType.No_Parry Then RNP = Rounds
        If CAffect.Parry = ParryType.Must_Parry Then RMP = Rounds
        If CAffect.IsStunned Then RS = Rounds
        If CAffect.Negative <> 0 Then RNeg = Rounds
        For Each ca In CriticalAffects
            If ca.TimeStart = 0 OrElse ca.TimeStart = CurrentTime OrElse (ca.TimeEnd - ca.TimeStart) * 0.5 >= (CurrentTime - ca.TimeStart) Then
                If Not ca.IsStunned AndAlso RS > 0 Then
                    ca.IsStunned = True
                    RS -= 1
                End If
                If ca.Parry = ParryType.Fine AndAlso RMP > 0 Then
                    ca.Parry = ParryType.Must_Parry
                    ca.ParryNegative = CAffect.ParryNegative
                    RMP -= 1
                ElseIf ca.Parry = ParryType.No_Parry AndAlso RMP > 0 Then
                    RMP -= 1
                End If
                If ca.Parry <> ParryType.No_Parry AndAlso RNP > 0 Then
                    ca.Parry = ParryType.No_Parry
                    ca.ParryNegative = 0
                    RNP -= 1
                End If
                If RNeg > 0 Then
                    ca.Negative += CAffect.Negative
                    RNeg -= 1
                End If
            End If
        Next
        While RS > 0 OrElse RMP > 0 OrElse RNP > 0 OrElse RNeg > 0
            ca = New CriticalAffect
            If RS > 0 Then
                ca.IsStunned = True
                RS -= 1
            End If
            If RMP > 0 Then
                ca.Parry = ParryType.Must_Parry
                ca.ParryNegative = CAffect.ParryNegative
                RMP -= 1
            End If
            If RNP > 0 Then
                ca.Parry = ParryType.No_Parry
                ca.ParryNegative = 0
                RNP -= 1
            End If
            If RNeg > 0 Then
                ca.Negative += CAffect.Negative
                RNeg -= 1
            End If
            CriticalAffects.Add(ca)
        End While
        ca = CriticalAffects(0)
        If ca.TimeStart = 0 Then
            ca.TimeStart = CurrentTime
            ca.TimeEnd = Me.CalculateTimeRequiredNonEncumbered(BaseRoundTime) + CurrentTime
        End If
        'If flag Then
        '    CritHistory.Add(ca)
        'End If
    End Sub

    Private Function HitNegatives() As Integer
        If HitsRemaining >= 0.75 * HitsTotal Then
            Return 0
        ElseIf HitsRemaining >= 0.5 * HitsTotal Then
            Return -10
        ElseIf HitsRemaining >= 0.25 * HitsTotal Then
            Return -20
        Else
            Return -30
        End If
    End Function
    Private Function ExhNegatives()
        If ExhaustionRemaining >= 0.75 * ExhaustionTotal Then
            Return 0
        ElseIf ExhaustionRemaining >= 0.5 * ExhaustionTotal Then
            Return -5
        ElseIf ExhaustionRemaining >= 0.25 * ExhaustionTotal Then
            Return -15
        ElseIf ExhaustionRemaining >= 0.1 * ExhaustionTotal Then
            Return -30
        ElseIf ExhaustionRemaining >= 0.01 * ExhaustionTotal Then
            Return -60
        Else
            Return -100
        End If
    End Function
    Public ReadOnly Property Negatives() As Integer
        Get
            Dim T As Integer = 0
            If CurrentCrits IsNot Nothing Then T = CurrentCrits.Negative
            Return CritNegatives + HitNegatives() + ExhNegatives() + T
        End Get
    End Property
    Public Function SpellNegatives() As Integer
        If PowerPointsRemaining >= 0.75 * PowerPointsTotal Then
            Return 0 + Negatives
        ElseIf PowerPointsRemaining >= 0.5 * PowerPointsTotal Then
            Return -10 + Negatives
        ElseIf PowerPointsRemaining >= 0.25 * PowerPointsTotal Then
            Return -20 + Negatives
        Else
            Return -30 + Negatives
        End If
    End Function
    Public Property ProposedAction() As Action
        Get
            Return (From a In Actions Where a.ActionType = ActionTypeEnum.Proposed).FirstOrDefault
        End Get
        Set(ByVal value As Action)
            If value IsNot Nothing Then
                value.ActionType = ActionTypeEnum.Proposed
                value.WhoIsActing = Me
            End If
        End Set
    End Property
    Public Property FutureAction() As Action
        Get
            Return (From a In Actions Where a.ActionType = ActionTypeEnum.Next).FirstOrDefault
        End Get
        Set(ByVal value As Action)
            If value IsNot Nothing Then
                value.ActionType = ActionTypeEnum.Next
                value.WhoIsActing = Me
            End If
        End Set
    End Property
    Public ReadOnly Property CurrentAction() As Action
        Get
            Return (From a In Actions Where a.ActionType = ActionTypeEnum.Current).FirstOrDefault
        End Get
    End Property
    Public WriteOnly Property CurrentAction(ByVal DB As RMSSDataDataContext, ByVal MD As Game) As Action
        Set(ByVal value As Action)
            Dim CurAction = CurrentAction
            If CurAction IsNot Nothing AndAlso CurAction.EndTime >= MD.CurrentTime AndAlso CurAction IsNot value Then
                CurAction.Interrupted = True
                CurAction.EndTime = MD.CurrentTime

                MD.GameActions.Remove(CurAction)
                CurAction.DeletePartial(DB)
            Else
                'Debug.WriteLine("Time not elapsed")
            End If
            CurAction = value
            CurAction.ActionType = ActionTypeEnum.Current
            CurAction.WhoIsActing = Me
            If CurAction.EndTime = 0 Then CurAction.EndTime = MD.CurrentTime + Me.CalculateTimeRequired(CurAction.BasePercent * BaseRoundTime, CurAction.CurrentModifier, CurAction.Type = ActorActionType.Attack, CurAction.CurrentAttack)
            'ActionsHistory.Add(CurAction)

            If FutureAction IsNot Nothing Then
                FutureAction.DeletePartial(DB)
                FutureAction.ActionType = ActionTypeEnum.None
            End If
            Dim NAct As CombatTrackerData.Action = Nothing
            If CurAction.Base IsNot Nothing AndAlso CurAction.Base.NextAction IsNot Nothing Then
                NAct = CurAction.Base.NextAction.GetStandardAction(CurAction, Me)
            End If
            If NAct Is Nothing AndAlso CurAction.Base IsNot Nothing Then
                NAct = CurAction.Base.GetStandardAction(CurAction, Me)
            End If
            If NAct IsNot Nothing Then
                NAct.Game = MD
                SetActionTime(NAct, CurAction.EndTime)
            End If
            FutureAction = NAct

        End Set
    End Property
    Public Sub SetActionTime(ByVal Act As Action, ByVal CurrentTime As Double)
        Act.StartTime = CurrentTime
        Act.EndTime = CurrentTime + Me.CalculateTimeRequired(Act.BasePercent * BaseRoundTime, Act.CurrentModifier, Act.Type = ActorActionType.Attack, Act.CurrentAttack)
    End Sub
    
    Public Function CalculateTimeRequired(ByVal BaseTime As Double, ByVal Modifier As Integer, ByVal IsAttack As Boolean, ByVal CurrentAttack As Attack) As Double
        Dim Init As Double
        Init = Me.Inititive
        If Me.HitsRemaining < Me.HitsTotal / 2 Then
            Init -= 8
        End If
        If Me.IsConcentrating Then
            Init -= 30
        End If
        If Me.Suprised Then
            Init -= 30
        End If
        Init += 3 * Me.CurrentArmor.MovingManeuverMod / 10
        If IsAttack AndAlso CurrentAttack IsNot Nothing AndAlso CurrentAttack.WeaponUsed IsNot Nothing Then
            Init += 3 * CurrentAttack.WeaponUsed.Bonus / 5
            If Not CurrentAttack.WeaponUsed.Is2Handed Then
                Init += Me.StrengthBonus - CurrentAttack.WeaponUsed.Weight
            Else
                Init += Me.StrengthBonus - CurrentAttack.WeaponUsed.Weight / 2
            End If
        End If
        'Init += 8 * -Modifier / 10
        'Dim BInit As Double = Init
        If Me.UsingAdrenalDB Then
            Init += (100 + Init) * (1 / ((100 + (Me.PercentRequiredAdrenalDB * 100)) / 100) - 1) '(1 + Me.PercentRequiredAdrenalDB / 100) - 1) + Init
        End If
        Init += (100 + Init) * (1 / ((100 + Modifier) / 100) - 1)
        BaseTime = BaseTime / (Me.PercentAction / 100)
        'If Me.UnderHaste Then
        'BaseTime = BaseTime / 2
        'End If
        Debug.WriteLine(Init)
        Return BaseTime * (100 / (100 + (Init)))
    End Function
    Public Function CalculateTimeRequiredNonEncumbered(ByVal BaseTime As Double) As Double
        Dim Init As Double
        Init = Me.Inititive
        If Me.HitsRemaining < Me.HitsTotal / 2 Then
            Init -= 8
        End If
        Dim BInit As Double = Init
        If Me.UsingAdrenalDB Then
            Init = (100 + BInit) * (1 / (1 + Me.PercentRequiredAdrenalDB / 100) - 1) + Init
        End If
        BaseTime = BaseTime / (Me.PercentAction / 100)
        'If Me.UnderHaste Then
        '    BaseTime = BaseTime / 2
        'End If
        Return BaseTime * (100 / (100 + (Init)))
    End Function
    Public Function CalculateTimeRequiredForSpells(ByVal BaseTime As Double) As Double
        Dim Init As Double
        Init = Me.Inititive
        Return BaseTime * (100 / (100 + (Init)))
    End Function

    Private Sub OnCreated()
        PercentRequiredAdrenalDB = 0.4
        PercentAction = 100
        ConstitutionStat = 90

    End Sub
End Class

Partial Class CriticalAction



    Public Sub New(ByVal TheChar As Actor, ByVal CurrentTime As Double)
        WhoIsActing = TheChar
        Dim Ch As Actor = WhoIsActing
        CriticalAffect = Ch.CurrentCrits
        'Me.WhoIsActing = Ch
        Dim N1, N2, N3, N4 As String
        N1 = ""
        N2 = ""
        N3 = ""
        N4 = ""
        If Ch.StunRounds > 0 Then
            N1 = Ch.StunRounds & " Rnds of Stun"
        End If
        If Ch.ParryRounds > 0 Then
            N2 = Ch.ParryRounds & " Rnds of Parry"
        End If
        If Ch.NegativeRounds > 0 Then
            N3 = Ch.NegativeRounds & " Rnds at Mods"
        End If
        Me.Note = N1 & " " & N2 & " " & N3
        Me.BasePercent = 1
        Me.StartTime = CurrentTime
        Me.EndTime = CriticalAffect.TimeEnd
        If CriticalAffect.IsStunned Then
            Me.Name = "Stun"
        End If
        If CriticalAffect.Parry <> ParryType.Fine Then
            If Me.Name.Length > 0 Then
                Me.Name = Me.Name & " & " & CriticalAffect.Parry.ToString
            Else
                Me.Name = CriticalAffect.Parry.ToString
            End If
        End If
        'Me.Name = Me.Name & " On " & Ch.Name
        Me.ActionType = ActionTypeEnum.Effect
    End Sub
    Public Overrides Sub RefreshData()
        Dim Ch As Actor = WhoIsActing
        Dim N1, N2, N3 As String
        N1 = ""
        N2 = ""
        N3 = ""
        If Ch.StunRounds > 0 Then
            N1 = Ch.StunRounds & " Rnds of Stun"
        End If
        If Ch.ParryRounds > 0 Then
            N2 = Ch.ParryRounds & " Rnds of Parry"
        End If
        If Ch.NegativeRounds > 0 Then
            N3 = Ch.NegativeRounds & " Rnds at Mods"
        End If
        Me.Note = N1 & " " & N2 & " " & N3
        Me.BasePercent = 1
        Me.EndTime = CriticalAffect.TimeEnd
        Me.Name = ""
        If CriticalAffect.IsStunned Then
            Me.Name = "Stun"
        End If
        If CriticalAffect.Parry <> ParryType.Fine Then
            If Me.Name.Length > 0 Then
                Me.Name = Me.Name & " & " & CriticalAffect.Parry.ToString
            Else
                Me.Name = CriticalAffect.Parry.ToString
            End If
        End If
        Me.Name = Me.Name & " On " & Ch.Name
    End Sub
    Public Overrides ReadOnly Property CharacterAction() As Boolean
        Get
            Return False
        End Get
    End Property
    Public Overrides Sub HandleAction(ByVal DB As RMSSDataDataContext, ByVal GI As Game)
        Dim Ch As Actor = WhoIsActing
        Ch.RemoveCriticalFromCharacter(DB, GI)
    End Sub

    Private Sub OnCreated()

        Me.BasePercent = 0.001
        Name = ""
        StartTime = 0
        EndTime = 0
        Note = ""
        State = ActionProblem.IsOK
        CurrentModifier = 0
        Type = ActorActionType.Critical
    End Sub
End Class

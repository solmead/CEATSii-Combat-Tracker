Public Class DamageForm
    Private GI As Game

    Private CurChar As Actor
    Private DB As RMSSDataDataContext

    Public Sub New(ByVal TheDB As RMSSDataDataContext, ByVal Thegi As Game, ByVal CurrentCharacter As Actor)
        Me.InitializeComponent()
        GI = Thegi
        DB = TheDB
        CurChar = CurrentCharacter
    End Sub
    Private Sub Ok_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles Ok.Click
        Dim Attacker As Actor = ListBox1.SelectedItem
        Dim Defender As Actor = ListBox2.SelectedItem
        If Attacker Is Nothing OrElse Defender Is Nothing Then Exit Sub
        Dim CT As CriticalAffect
        Defender.HitsRemaining -= Val(Damage.Text)
        If IsCritical.Checked Then
            Attacker.CurrentAction.CriticalGiven = True
            Defender.HitsRemaining -= Val(Me.AdditionalHits.Text)
            If Val(Me.StunRounds.Text) > 0 Then
                CT = New CriticalAffect
                CT.IsStunned = True
                Defender.AddCriticalToCharcter(GI, CT, Val(Me.StunRounds.Text))
            End If
            If Val(Me.RoundsMustParry.Text) > 0 Then
                CT = New CriticalAffect
                CT.Parry = ParryType.Must_Parry
                CT.ParryNegative = Val(Me.MustParryNeg.Text)
                Defender.AddCriticalToCharcter(GI, CT, Val(Me.RoundsMustParry.Text))
            End If
            If Val(Me.RoundsNoParry.Text) > 0 Then
                CT = New CriticalAffect
                CT.Parry = ParryType.No_Parry
                Defender.AddCriticalToCharcter(GI, CT, Val(Me.RoundsNoParry.Text))
            End If
            If Val(Me.NegBonus.Text) <> 0 Then
                If Val(Me.NegRounds.Text) = 0 Then
                    Defender.CritNegatives += Val(NegBonus.Text)
                Else
                    CT = New CriticalAffect
                    CT.Negative = Val(Me.NegBonus.Text)
                    Defender.AddCriticalToCharcter(GI, CT, Val(Me.NegRounds.Text))
                End If
            End If
            If Val(Me.PosBonus.Text) <> 0 Then
                If Val(Me.PosRounds.Text) = 0 Then
                    CT = New CriticalAffect
                    CT.Negative = Val(Me.PosBonus.Text)
                    Attacker.AddCriticalToCharcter(GI, CT, 1)
                Else
                    CT = New CriticalAffect
                    CT.Negative = Val(Me.PosBonus.Text)
                    Attacker.AddCriticalToCharcter(GI, CT, Val(Me.PosRounds.Text))
                End If
            End If
            If Val(Bleeding.Text) > 0 Then
                Dim BA As New BleedAction(Defender, GI.CurrentTime, Val(Bleeding.Text))
                BA.Game = GI
                'GI.GameActions.Add(BA)
            End If
        End If
        Defender.HandleInitChange(GI.CurrentTime)
        If Defender.HitsRemaining <= 0 Then
            Defender.HandleDeath(db, GI)
        End If
        Me.Hide()
    End Sub

    Private Sub DamageForm_Load(ByVal sender As Object, ByVal e As System.EventArgs) Handles Me.Load
        Dim Ch As Actor
        For Each Ch In GI.Actors
            ListBox1.Items.Add(Ch)
            ListBox2.Items.Add(Ch)
        Next
        ListBox1.SelectedItem = CurChar
    End Sub

    Private Sub Cancel_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles Cancel.Click
        Me.Hide()
    End Sub
End Class
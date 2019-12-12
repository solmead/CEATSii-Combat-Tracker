Imports System.Windows.Forms

Public Class DlgStunnedManeuvering
    Private Ch As Actor
    Private GI As Game
    Private DB As RMSSDataDataContext
    Public Sub New(ByVal TheDB As RMSSDataDataContext, ByVal TheCharacter As Actor, ByVal TheGI As Game)
        Me.InitializeComponent()
        Ch = TheCharacter
        GI = TheGI
        DB = TheDB
    End Sub
    Private Sub OK_Button_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles OK_Button.Click
        If Rolled66.Checked Then
            Dim Crit As New CriticalAffect
            Crit.IsStunned = True
            Ch.AddCriticalToCharcter(GI, Crit, 1)
        ElseIf Rolled100.Checked Then
            Ch.RemoveCriticalsFromCharacter(DB, GI, 5)
        Else
            Dim NR As Integer = Ch.StunRounds
            Dim roll As Integer
            roll = Val(TotalRoll.Text)
            If NR = 2 Then
                roll -= 10
            ElseIf 3 <= NR AndAlso NR <= 4 Then
                roll -= 20
            ElseIf 5 <= NR AndAlso NR <= 7 Then
                roll -= 30
            ElseIf 8 <= NR AndAlso NR <= 9 Then
                roll -= 50
            ElseIf 10 <= NR Then
                roll -= 70
            End If
            If roll <= -26 Then
                MsgBox("Three rounds of stun added!!!")
                Dim Crit As New CriticalAffect
                Crit.IsStunned = True
                Ch.AddCriticalToCharcter(GI, Crit, 3)
            ElseIf -25 <= roll AndAlso roll <= 4 Then
                MsgBox("Two rounds of stun added!!!")
                Dim Crit As New CriticalAffect
                Crit.IsStunned = True
                Ch.AddCriticalToCharcter(GI, Crit, 2)
            ElseIf 5 <= roll AndAlso roll <= 75 Then
                MsgBox("One round of stun added!!!")
                Dim Crit As New CriticalAffect
                Crit.IsStunned = True
                Ch.AddCriticalToCharcter(GI, Crit, 1)
            ElseIf 76 <= roll AndAlso roll <= 90 Then
                MsgBox("No Effect.")
            ElseIf 91 <= roll AndAlso roll <= 110 Then
                MsgBox("One round of stun removed!!!")
                Ch.RemoveCriticalsFromCharacter(DB, GI, 1)
            ElseIf 111 <= roll AndAlso roll <= 175 Then
                MsgBox("Two rounds of stun removed!!!")
                Ch.RemoveCriticalsFromCharacter(DB, GI, 2)
            ElseIf 176 <= roll Then
                MsgBox("Three rounds of stun removed!!!")
                Ch.RemoveCriticalsFromCharacter(DB, GI, 3)
            End If
        End If
        Me.DialogResult = System.Windows.Forms.DialogResult.OK
        Me.Close()
    End Sub

    Private Sub Cancel_Button_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles Cancel_Button.Click
        Me.DialogResult = System.Windows.Forms.DialogResult.Cancel
        Me.Close()
    End Sub

End Class

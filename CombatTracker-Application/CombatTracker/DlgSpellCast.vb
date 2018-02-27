Imports System.Windows.Forms

Public Class DlgSpellCast
    Private GI As Game
    Private CurChar As Actor
    Private DB As RMSSDataDataContext

    Public Sub New(ByVal TheDB As RMSSDataDataContext, ByVal TheGI As Game, ByVal CurrentCharacter As Actor)
        Me.InitializeComponent()
        GI = TheGI
        DB = TheDB
        CurChar = CurrentCharacter
    End Sub

    Private Sub OK_Button_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles OK_Button.Click
        Dim Caster As Actor = ListBox1.SelectedItem
        Dim CastOn As Actor = ListBox2.SelectedItem
        If CastOn Is Nothing Then CastOn = Caster
        If Caster Is Nothing Then Exit Sub
        Dim HPer As Integer = 100
        If IsHaste.Checked Then
            If IsPsychic.Checked Then
                HPer = 100 + Val(HastePercent.Text)
            Else
                HPer = 200
            End If
        ElseIf IsSlow.Checked Then
            If IsPsychic.Checked Then
                HPer = 100 - Val(HastePercent.Text)
            Else
                HPer = 50
            End If
        End If
        Caster.PowerPointsRemaining -= Val(TextBox1.Text)
        'If Val(Duration.Text) > 0 Then
        For Each CastOn In ListBox2.SelectedItems
            Dim SAct As New SpellEffectAction(CastOn, Caster, GI.CurrentTime, SpellName.Text, Val(Duration.Text), HPer)
            SAct.Game = GI
            'GI.Actions.Add(SAct)
        Next
        'End If
        If IsPsychic.Checked Then 'AndAlso Not IsHaste.Checked Then
            Dim PAct As New PsychicAction(DB, CastOn, GI.CurrentTime, Val(TextBox1.Text))
            PAct.Game = GI
            'GI.Actions.Add(PAct)
        End If
        Me.DialogResult = System.Windows.Forms.DialogResult.OK
        Me.Close()
    End Sub

    Private Sub Cancel_Button_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles Cancel_Button.Click
        Me.DialogResult = System.Windows.Forms.DialogResult.Cancel
        Me.Close()
    End Sub

    Private Sub SpellCastForm_Load(ByVal sender As Object, ByVal e As System.EventArgs) Handles Me.Load
        Dim Ch As Actor
        For Each Ch In GI.Actors
            ListBox1.Items.Add(Ch)
            ListBox2.Items.Add(Ch)
        Next
        ListBox1.SelectedItem = CurChar
    End Sub

    Private Sub IsPsychic_CheckedChanged(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles IsPsychic.CheckedChanged
        If IsHaste.Checked AndAlso IsPsychic.Checked Then
            Label4.Visible = True
            HastePercent.Visible = True
        Else
            Label4.Visible = False
            HastePercent.Visible = False
        End If
    End Sub

    Private Sub IsHaste_CheckedChanged(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles IsHaste.CheckedChanged
        If IsHaste.Checked AndAlso IsPsychic.Checked Then
            Label4.Visible = True
            HastePercent.Visible = True
        Else
            Label4.Visible = False
            HastePercent.Visible = False
        End If
    End Sub
End Class

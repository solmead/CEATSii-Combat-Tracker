Public Class DisplayCharacterData
    Private Ac As CombatTrackerData.Action
    'Private IsSelected As Boolean = False
    'ActorEdited
    Public Event Selected(ByVal Who As DisplayCharacterData)
    Public Event ActorEdited(ByVal Who As Actor)
    'Public Sub DeSelect()
    '    Dim Gr As Graphics = Graphics.FromImage(Me.BackgroundImage)
    '    Gr.Clear(Me.BackColor)
    '    Gr.Dispose()
    '    IsSelected = False
    '    Me.Refresh()
    'End Sub
    Public ReadOnly Property WhoAmI() As CombatTrackerData.Action
        Get
            Return Ac
        End Get
    End Property
    Public Sub New(ByVal WhoAmI As CombatTrackerData.Action)
        Me.InitializeComponent()
        Me.BackgroundImage = New Bitmap(Me.Width, Me.Height, Imaging.PixelFormat.Format32bppArgb)
        Dim Gr As Graphics = Graphics.FromImage(Me.BackgroundImage)
        Gr.Clear(Me.BackColor)
        Gr.Dispose()
        Ac = WhoAmI
    End Sub

    Private Sub CharacterData_Click(ByVal sender As Object, ByVal e As System.EventArgs) Handles Me.Click
        'IsSelected = True
        'Dim Gr As Graphics = Graphics.FromImage(Me.BackgroundImage)
        'Dim P As New Pen(Color.Blue, 10)
        'Gr.DrawRectangle(P, 0, 0, Me.Width, Me.Height)
        'P.Dispose()
        'Gr.Dispose()
        'Me.Refresh()
        Me.BackColor = Color.Blue
        RaiseEvent Selected(Me)
    End Sub
    Public Sub Display()
        Ac.RefreshData()
        Dim Ch As Actor = Ac.WhoIsActing
        ActionName.Text = Ac.Name
        ActionTime.Text = Ac.EndTime.ToString("0.00")
        ActionNote.Text = Ac.Note

        If Ac.State = ActionProblem.IsWarning Then
            ActionNote.ForeColor = Color.Red
            ActionNote.BackColor = Color.Transparent
        ElseIf Ac.State = ActionProblem.IsError Then
            ActionNote.BackColor = Color.Red
            ActionNote.ForeColor = Color.White
        Else
            ActionNote.ForeColor = Color.Black
            ActionNote.BackColor = Color.Transparent
        End If
        If Ac.CharacterAction Then
            CharName.Text = Ch.Name
            Initiative.Text = Ch.Inititive
            Level.Text = Ch.Level
            Hits.Text = Ch.HitsRemaining & "/" & Ch.HitsTotal
            Exhaustion.Text = Ch.ExhaustionRemaining & "/" & Ch.ExhaustionTotal
            PowerPoints.Text = Ch.PowerPointsRemaining & "/" & Ch.PowerPointsTotal
            ArmorType.Text = Ch.CurrentArmor.Type
            DB.Text = Ch.CurrentArmor.DB
            Modifiers.Text = (Ch.Negatives + Ac.CurrentModifier) & "/" & (Ch.SpellNegatives + Ac.CurrentModifier)
            If Ch.Creature IsNot Nothing Then
                CriticalType.Text = Ch.Creature.Criticals.ToString
                If Ch.Creature.CriticalIgnore.ID = 2 Then
                    Ignore.Text = "Ignore Stun"
                ElseIf Ch.Creature.CriticalIgnore.ID = 3 Then
                    Ignore.Text = "Ignore Stun and Bleeders"
                Else
                    Ignore.Text = ""
                End If
            Else
                CriticalType.Text = ""
                Ignore.Text = ""
            End If

            If Ac.CurrentAttack IsNot Nothing Then
                If Ac.CurrentAttack.AttackType.Name = "Weapon" Then
                    Weapon.Text = Ac.CurrentAttack.WeaponUsed.Name
                Else
                    Weapon.Text = Ac.CurrentAttack.SizeRating.Name & " " & Ac.CurrentAttack.AttackType.Name
                End If
                Dim i As Integer = 0
                If Ch.CurrentCrits IsNot Nothing Then i = Ch.CurrentCrits.ParryNegative
                OB.Text = Ac.CurrentAttack.OB + i
            Else
                Weapon.Text = "None"
                OB.Text = "0"
            End If
            If Ch.PercentAction > 100 Then
                HasteIcon.Image = ImageList1.Images(0)
            ElseIf Ch.PercentAction < 100 Then
                HasteIcon.Image = ImageList1.Images(7)
            Else
                HasteIcon.Image = Nothing
            End If
            
            If Ch.Suprised Then
                SupriseIcon.Image = ImageList1.Images(1)
            Else
                SupriseIcon.Image = Nothing
            End If
            If Ch.IsConcentrating Then
                ConcetrationIcon.Image = ImageList1.Images(2)
            Else
                ConcetrationIcon.Image = Nothing
            End If
            If Ch.UsingAdrenalDB Then
                AdrenalIcon.Image = ImageList1.Images(3)
            Else
                AdrenalIcon.Image = Nothing
            End If
            If Ch.CurrentCrits IsNot Nothing Then
                If Ch.CurrentCrits.IsStunned Then
                    StunIcon.Image = ImageList1.Images(4)
                    StunRounds.Text = "->" & Ch.StunRounds
                Else
                    StunIcon.Image = Nothing
                    StunRounds.Text = ""
                End If
                If Ch.CurrentCrits.Parry = ParryType.Must_Parry Then
                    ParryIcon.Image = ImageList1.Images(5)
                    ParryRounds.Text = "->" & Ch.ParryRounds
                ElseIf Ch.CurrentCrits.Parry = ParryType.No_Parry Then
                    ParryIcon.Image = ImageList1.Images(6)
                    ParryRounds.Text = "->" & Ch.ParryRounds
                Else
                    ParryIcon.Image = Nothing
                    ParryRounds.Text = ""
                End If
            Else
                StunRounds.Text = ""
                StunIcon.Image = Nothing
                ParryRounds.Text = ""
                ParryIcon.Image = Nothing
            End If
            If Ch.HitsRemaining < 0 Then
                Me.BackColor = Color.Red
                Dim Con As Control
                For Each Con In Me.Controls
                    Con.BackColor = Color.Red
                Next

                Me.Refresh()
            End If
        Else
            CharName.Text = ""
            Initiative.Text = ""
            Hits.Text = ""
            Exhaustion.Text = ""
            PowerPoints.Text = ""
            ArmorType.Text = ""
            DB.Text = ""
            Modifiers.Text = ""
            CriticalType.Text = ""
            Ignore.Text = ""
            Weapon.Text = ""
            OB.Text = ""
            HasteIcon.Image = Nothing
            SupriseIcon.Image = Nothing
            ConcetrationIcon.Image = Nothing
            AdrenalIcon.Image = Nothing
            StunRounds.Text = ""
            StunIcon.Image = Nothing
            ParryRounds.Text = ""
            ParryIcon.Image = Nothing
            Label7.Text = ""
            Label8.Text = ""
            Label9.Text = ""
            Label10.Text = ""
            Label11.Text = ""

            CharName.Text = Ch.Name
        End If

        Dim Cols() As String = Split(Ac.Color, ",")
        Dim col = Color.FromArgb(255 * Val(Cols(3)), Val(Cols(0)), Val(Cols(1)), Val(Cols(2)))
        ChangeBackColor(Me, col)

        Me.Refresh()


        SetupMenu()
    End Sub
    Private Sub ChangeBackColor(ByVal c As Control, ByVal col As Color)
        c.BackgroundImage = Nothing
        c.BackColor = col
        For Each sc In c.Controls
            ChangeBackColor(sc, Color.Transparent)
        Next
    End Sub
    Private Sub CharacterData_Load(ByVal sender As Object, ByVal e As System.EventArgs) Handles Me.Load
        Display()

        Dim Con As Control
        For Each Con In Me.Controls
            AddHandler Con.Click, AddressOf CharacterData_Click
        Next

    End Sub

    Private Sub Initiative_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles Initiative.Click

    End Sub
    Private Sub Hits_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles Hits.Click

    End Sub
    Private Sub Exhaustion_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles Exhaustion.Click

    End Sub
    Private Sub PowerPoints_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles PowerPoints.Click

    End Sub
    Private Sub OB_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles OB.Click

    End Sub
    Private Sub DB_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles DB.Click

    End Sub
    Private Sub Label10_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles Label10.Click

    End Sub
    Private Sub Label11_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles Label11.Click

    End Sub
    Private Sub ArmorType_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles ArmorType.Click

    End Sub
    Private Sub Weapon_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles Weapon.Click

    End Sub
    Private Sub Label9_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles Label9.Click

    End Sub
    Private Sub Label7_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles Label7.Click

    End Sub
    Private Sub ActionTime_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles ActionTime.Click

    End Sub
    Private Sub Modifiers_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles Modifiers.Click

    End Sub
    Private Sub Label8_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles Label8.Click

    End Sub
    Private Sub ActionNote_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles ActionNote.Click

    End Sub
    Private Sub Label3_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles Label3.Click

    End Sub
    Private Sub CriticalType_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles CriticalType.Click

    End Sub
    Private Sub Label6_Click(ByVal sender As System.Object, ByVal e As System.EventArgs)

    End Sub
    Private Sub ActionName_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles ActionName.Click

    End Sub
    Private Sub CharName_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles CharName.Click

    End Sub
    Private Sub SetupMenu()

        Dim Ch As Actor = Ac.WhoIsActing
        SetConcentrating.Checked = Ch.IsConcentrating
        SetAdrenalDefense.Checked = Ch.UsingAdrenalDB
        SetSuprised.Checked = Ch.Suprised
    End Sub

    Private Sub SetConcentrating_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles SetConcentrating.Click
        Dim Ch As Actor = Ac.WhoIsActing
        Ch.IsConcentrating = SetConcentrating.Checked

        RaiseEvent ActorEdited(Ch)
        Display()
    End Sub

    Private Sub SetAdrenalDefense_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles SetAdrenalDefense.Click
        Dim Ch As Actor = Ac.WhoIsActing

        Ch.UsingAdrenalDB = SetAdrenalDefense.Checked

        RaiseEvent ActorEdited(Ch)
        Display()
    End Sub

    Private Sub SetSuprised_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles SetSuprised.Click
        Dim Ch As Actor = Ac.WhoIsActing

        Ch.Suprised = SetSuprised.Checked


        RaiseEvent ActorEdited(Ch)
        Display()
    End Sub
End Class

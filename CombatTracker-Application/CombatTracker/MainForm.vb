Public Class MainForm
    Dim DB As New RMSSDataDataContext
    Dim GI As New Game
    Private selectedCData As DisplayCharacterData
    'Private CurAct As Action
    Private Started As Boolean = False
    Private Sub CreatureEditingToolStripMenuItem_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles CreatureEditingToolStripMenuItem.Click
        Dim F As New EditCreature(DB, GI)
        F.ShowDialog()
        F.Dispose()
        F = Nothing
        Call displayChars()
        Call DisplayActions()
        'If Not Started Then
        MoveNext()
        'S'tarted = True
        'End If
        DB.SubmitChanges()
    End Sub

    Private Sub MainForm_Load(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles MyBase.Load
        GI = Game.LoadByName(DB, "Test")
        If GI Is Nothing Then
            GI = New Game
            GI.Name = "Test"
            GI.Save(DB)
        End If
        'GI.GM = SystemUser.LoadByUserName(DB, "cpowell")
        'Dim FI As New System.IO.FileInfo(My.Application.Info.DirectoryPath & "\datafile.ser")
        'If FI.Exists Then
        ' MD = Handler.LoadFromFile(FI)
        'End If
        'MD.Check()
        'MD.CreatureList = Creature.GetCreatures
        'MD.PreBuiltCharsList = PreBuiltChar.GetPreBuiltChars
        'MD.ArmorList = Armor.GetArmors
        'MD.WeaponList = Weapon.GetWeapons
        'GI.Actions.Clear()
        'GI.Chars.Clear()

        DisplayAttack1.DB = DB

        Call displayChars()
        Call DisplayActions()
        For Each GA In DB.ActionGroups
            ListBox2.Items.Add(GA)
        Next
        MoveNext()
        DB.SubmitChanges()
    End Sub
    Private Sub DisplayActions()
        Label1.Text = GI.CurrentTime.ToString("0.00")
        Dim CD As DisplayCharacterData = Nothing
        Dim TLst As New ArrayList
        Dim Found As Boolean = False
        For Each CD In CharacterDisplay.Controls
            Dim Actn As CombatTrackerData.Action
            Found = False
            For Each Actn In GI.ActionsSorted()
                If Actn Is CD.WhoAmI Then
                    Found = True
                    Exit For
                End If
            Next
            If Not Found Then
                TLst.Add(CD)
            End If
        Next
        For Each CD In TLst
            CharacterDisplay.Controls.Remove(CD)
        Next
        TLst.Clear()

        'CharacterDisplay.Controls.Clear()
        Dim SelAction As CombatTrackerData.Action = Nothing
        If selectedCData IsNot Nothing Then SelAction = selectedCData.WhoAmI
        selectedCData = Nothing
        CharacterDisplay.Refresh()
        If GI.GameActions.Count = 0 Then Exit Sub
        'GI.Actions = (From a In GI.Actions Order By a.EndTime Select a).ToList
        Dim Lst As DisplayCharacterData = Nothing
        Dim TCD As New DisplayCharacterData(GI.LastAction)
        Dim MP As Integer = CharacterDisplay.Width - TCD.Width - 10 - 25
        TCD.Dispose()
        TCD = Nothing
        'Dim BT As Double = GI.NextAction.EndTime

        'Dim RT As Double
        'If GI.LastAction.EndTime = BT Then
        '    RT = MP / (BT + 0.000001 - BT)
        'Else
        '    RT = MP / (GI.LastAction.EndTime - BT)
        'End If
        'Dim Act As CombatTrackerData.Action
        For Each Act In GI.ActionsSorted()
            Found = False
            For Each CD In CharacterDisplay.Controls
                If CD.WhoAmI Is Act Then
                    Found = True
                    Exit For
                End If
            Next
            If Not Found Then
                CD = New DisplayCharacterData(Act)
                AddHandler CD.Selected, AddressOf OnCharacterClick
                AddHandler CD.ActorEdited, AddressOf OnActorEdited
                CharacterDisplay.Controls.Add(CD)
            Else
                CD.Display()
            End If
            If Lst IsNot Nothing Then
                CD.Top = Lst.Top + Lst.Height + 10
            Else
                CD.Top = 10
            End If
            CD.Left = MP * Act.LeftPercent

            If Act Is SelAction Then
                selectedCData = CD
            End If
            Lst = CD
        Next
        CharacterDisplay.Refresh()
    End Sub
    Private Sub displayChars()
        If GI.Actors.Count = 0 Then Exit Sub
        ListBox1.Items.Clear()
        Dim Ch As Actor
        For Each Ch In GI.Actors
            ListBox1.Items.Add(Ch)
        Next


    End Sub
    Private Sub OnActorEdited(ByVal Who As Actor)
        Who.HandleInitChange(GI.CurrentTime)
        If Who.ProposedAction Is Nothing Then Exit Sub
        If ListBox5.SelectedItem Is Nothing Then Exit Sub
        Who.ProposedAction.CurrentModifier = Val(ListBox4.SelectedItem)
        Who.ProposedAction.CurrentAttack = ListBox5.SelectedItem
        Who.SetActionTime(Who.ProposedAction, GI.CurrentTime)
        DisplayActions()
        'MoveNext()
        'DisplayActions()
        'Dim CD As DisplayCharacterData = Nothing
        'Dim TLst As New ArrayList
        'Dim Found As Boolean = False
        'For Each CD In CharacterDisplay.Controls
        ' CD.Display()
        ' Next
        DB.SubmitChanges()
    End Sub
    Private Sub OnCharacterClick(ByVal Who As DisplayCharacterData)
        ListBox1.SelectedItem = Who.WhoAmI.WhoIsActing
        selectedCData = Who
        Panel2.Controls.Clear()
        Dim NexAct = Who.WhoAmI
        If NexAct.Type = ActorActionType.Attack Then
            Panel2.Visible = True
            DisplayAttack1 = New DisplayAttack(DB, NexAct.CurrentAttack)
            DisplayAttack1.Dock = DockStyle.Fill
            DisplayAttack1.Enabled = False
            Panel2.Controls.Add(DisplayAttack1)
        Else
            Panel2.Visible = False
        End If
        CharacterDisplay.Refresh()
    End Sub

    Private Sub CharacterDisplay_Paint(ByVal sender As Object, ByVal e As System.Windows.Forms.PaintEventArgs) Handles CharacterDisplay.Paint
        Dim gr As Graphics = e.Graphics
        gr.Clear(CharacterDisplay.BackColor)
        If selectedCData IsNot Nothing Then
            Dim P As New Pen(Color.Blue, 10)
            gr.DrawRectangle(P, selectedCData.Left, selectedCData.Top, selectedCData.Width, selectedCData.Height)
            P.Dispose()
        End If
    End Sub

    Private Sub ListBox2_SelectedIndexChanged(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles ListBox2.SelectedIndexChanged
        Dim act As BaseAction
        ListBox3.Items.Clear()
        Dim Ga As ActionGroup = ListBox2.SelectedItem
        If Ga Is Nothing Then Exit Sub
        For Each act In Ga.Actions
            ListBox3.Items.Add(act)
        Next
        ListBox4.SelectedItem = "0"
    End Sub

    Private Sub ListBox3_SelectedIndexChanged(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles ListBox3.SelectedIndexChanged
        Dim Car As Actor = ListBox1.SelectedItem
        If Car Is Nothing Then Exit Sub
        Dim Act As BaseAction = ListBox3.SelectedItem
        If Act Is Nothing Then Exit Sub

        If Car.ProposedAction IsNot Nothing Then
            Car.ProposedAction.DeletePartial(DB)
            Car.ProposedAction.ActionType = ActionTypeEnum.None
        End If
        Car.ProposedAction = Act.GetStandardAction(Car.CurrentAction, Car)
        Car.ProposedAction.Game = GI
        'CurAct.WhoIsActing = Car
        'Dim CM As Double = Car.CurModifier
        Car.ProposedAction.CurrentModifier = Val(ListBox4.SelectedItem)
        Car.SetActionTime(Car.ProposedAction, GI.CurrentTime)
        If Car.ProposedAction.Type = ActorActionType.Spell AndAlso Car.ProposedAction.EndTime < Car.NextSpellTime Then
            Car.ProposedAction.Note = "Spell cannot go off till " & Car.NextSpellTime.ToString("0.00")
            Car.ProposedAction.State = ActionProblem.IsWarning
        Else
            Car.ProposedAction.Note = ""
        End If
        ListBox5.Items.Clear()
        If Car.ProposedAction.Type = ActorActionType.Attack Then
            Dim atk, CurAtk As Attack
            CurAtk = Nothing
            atk = Nothing
            For Each atk In From AA In Car.ActorsAttacks Select AA.Attack
                ListBox5.Items.Add(atk)
            Next
            If Car.Creature IsNot Nothing Then
                If selectedCData.WhoAmI.Type = ActorActionType.Attack AndAlso selectedCData.WhoAmI.CriticalGiven AndAlso selectedCData.WhoAmI.CurrentAttack.NextRoundSuccess IsNot Nothing Then
                    CurAtk = selectedCData.WhoAmI.CurrentAttack.NextRoundSuccess
                Else
                    Dim Roll As Integer = RollD100()
                    Dim Cnt As Integer = 0
                    For Each atk In From AA In Car.ActorsAttacks Select AA.Attack
                        Cnt += atk.PercentChance
                        If Cnt >= Roll Then
                            CurAtk = atk
                            Exit For
                        End If
                    Next
                    If CurAtk Is Nothing Then
                        CurAtk = (From AA In Car.ActorsAttacks Select AA.Attack).FirstOrDefault
                    End If
                End If

            Else
                CurAtk = (From AA In Car.ActorsAttacks Select AA.Attack).FirstOrDefault
            End If
            Car.ProposedAction.CurrentAttack = CurAtk
            Car.SetActionTime(Car.ProposedAction, GI.CurrentTime)
            'DisplayActions()
            ListBox5.SelectedItem = CurAtk
            ListBox5.Visible = True
        Else
            ListBox5.Visible = False
        End If
        'GI.Actions.Add(CurAct)
        'Car.CurModifier = CM
        DB.SubmitChanges()
        Call Me.DisplayActions()
        Button1.Focus()
    End Sub
    Private Sub PulseEvent()
        'GI.Actions = (From a In GI.Actions Order By a.EndTime Select a).ToList
        'If MD.Actions.Count = 0 Then Exit Sub
        If GI.NextAction IsNot Nothing Then
            GI.CurrentTime = GI.NextAction.EndTime
            If GI.NextAction.Type = ActorActionType.Spell Then
                Dim Ch As Actor = GI.NextAction.WhoIsActing
                Ch.NextSpellTime = Ch.CalculateTimeRequired(10, 0, False, New Attack) + GI.CurrentTime
            End If
        End If
        Label1.Text = GI.CurrentTime.ToString("0.00")
        Call Me.DisplayActions()
        If GI.NextAction IsNot Nothing Then
            Dim NexAct = GI.NextAction
            If Not NexAct.CharacterAction Then
                NexAct.HandleAction(DB, GI)
                If Not NexAct.Reoccuring Then
                    NexAct.DeletePartial(DB)
                    GI.GameActions.Remove(NexAct)
                End If
                Call PulseEvent()
            ElseIf NexAct.Reoccuring Then
                NexAct.HandleAction(DB, GI)
                Call PulseEvent()
            End If
        End If
        'DB.SubmitChanges()
    End Sub
    Private Sub MoveNext()
        ListBox3.SelectedIndex = -1

        Call PulseEvent()

        If GI.GameActions.Count = 0 Then Exit Sub

        Dim CD As DisplayCharacterData
        'Dim NexAct As Action = Nothing
        Dim NexAct = GI.NextAction
        If NexAct.WhoIsActing.FutureAction IsNot Nothing Then
            If NexAct.WhoIsActing.ProposedAction IsNot Nothing Then

                NexAct.WhoIsActing.ProposedAction.DeletePartial(DB)
                NexAct.WhoIsActing.ProposedAction.ActionType = ActionTypeEnum.None
            End If
            NexAct.WhoIsActing.ProposedAction = NexAct.WhoIsActing.FutureAction
            Call Me.DisplayActions()
        End If
        For Each CD In CharacterDisplay.Controls
            If CD.WhoAmI Is NexAct Then
                selectedCData = CD
                Panel2.Controls.Clear()
                'Dim NexAct As Action = Who.WhoAmI
                If NexAct.Type = ActorActionType.Attack Then
                    Panel2.Visible = True
                    DisplayAttack1 = New DisplayAttack(DB, NexAct.CurrentAttack)
                    DisplayAttack1.Dock = DockStyle.Fill
                    DisplayAttack1.Enabled = False
                    Panel2.Controls.Add(DisplayAttack1)
                Else
                    Panel2.Visible = False
                End If
                'Exit For
            End If
            CD.Display()
        Next
        DB.SubmitChanges()
        Dim FutAct = NexAct.WhoIsActing.ProposedAction
        If FutAct Is Nothing Then
            FutAct = NexAct
        End If
        ListBox1.SelectedItem = FutAct.WhoIsActing
        Dim Act As BaseAction

        
        If FutAct.Base IsNot Nothing Then
            ListBox2.SelectedItem = FutAct.Base.Group
        Else
            ListBox2.SelectedIndex = 0
        End If
        For Each Act In ListBox3.Items
            If FutAct.Base IsNot Nothing AndAlso Act.Name.ToUpper = FutAct.Base.Name.ToUpper Then
                ListBox3.SelectedItem = Act
                Exit For
            End If
        Next
        CharacterDisplay.Refresh()
        If NexAct.WhoIsActing.FutureAction IsNot Nothing Then
            NexAct.WhoIsActing.FutureAction.DeletePartial(DB)
            NexAct.WhoIsActing.FutureAction.ActionType = ActionTypeEnum.None
        End If

        DB.SubmitChanges()
        Call Me.DisplayActions()
    End Sub

    Private Sub Button1_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles Button1.Click
        Dim Car As Actor = ListBox1.SelectedItem
        If Car Is Nothing Then Exit Sub
        If Car.ProposedAction IsNot Nothing Then
            'CurAct.WhoIsActing.CurModifier = Val(ListBox4.SelectedItem)
            If Car.ProposedAction.Type = ActorActionType.Spell AndAlso Car.ProposedAction.WhoIsActing.NextSpellTime > Car.ProposedAction.EndTime Then
                Dim ch As Actor = Car.ProposedAction.WhoIsActing
                Dim m As Integer
                Dim F As Boolean = False
                For m = 0 To 30 Step 10
                    Car.ProposedAction.CurrentModifier = m
                    ch.SetActionTime(Car.ProposedAction, GI.CurrentTime)
                    If ch.NextSpellTime <= Car.ProposedAction.EndTime Then
                        F = True
                        Exit For
                    End If
                Next
                If Not F Then
                    Car.ProposedAction.EndTime = ch.NextSpellTime
                End If
                Car.ProposedAction.Note = ""
                Car.ProposedAction.State = ActionProblem.IsOK
            End If
            Car.ProposedAction.WhoIsActing.CurrentAction(DB, GI) = Car.ProposedAction
            'GI.Actions = (From a In GI.Actions Order By a.EndTime Select a).ToList
            Car.ProposedAction = Nothing
            'CurAct = Nothing
        End If
        ListBox5.Items.Clear()
        ListBox5.Visible = False
        ListBox5.Refresh()
        MoveNext()
        DB.SubmitChanges()
    End Sub

    Private Sub Button2_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles Button2.Click
        ListBox3.SelectedIndex = -1
        Dim DF As New DamageForm(DB, GI, ListBox1.SelectedItem)
        DF.ShowDialog()
        MoveNext()
        DB.SubmitChanges()
    End Sub

    Private Sub btnCast_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles btnCast.Click
        ListBox3.SelectedIndex = -1
        Dim DF As New DlgSpellCast(DB, GI, ListBox1.SelectedItem)
        DF.ShowDialog()
        MoveNext()
        DB.SubmitChanges()
    End Sub

    Private Sub Button3_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles Button3.Click
        MsgBox(RollD100OpenEnded)
    End Sub

    Private Sub Button4_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles Button4.Click
        MsgBox(RollD100)
    End Sub

    Private Sub PreBuiltCharacterToolStripMenuItem_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles PreBuiltCharacterToolStripMenuItem.Click
        Dim F As New EditPreBuiltChar(DB, GI)
        F.ShowDialog()
        F.Dispose()
        F = Nothing
        Call displayChars()
        Call DisplayActions()
        'If Not Started Then
        MoveNext()
        'Started = True
        'End If
        DB.SubmitChanges()
    End Sub

    Private Sub Remove_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles Remove.Click
        If selectedCData.WhoAmI.WhoIsActing.CurrentAction Is selectedCData.WhoAmI Then
            Dim Ch As Actor = ListBox1.SelectedItem
            If Ch Is Nothing Then Exit Sub
            ListBox1.Items.Remove(Ch)
            'Dim Act As CombatTrackerData.Action
            Dim RList As New List(Of CombatTrackerData.Action)
            For Each Act In GI.GameActions
                If Act.WhoIsActing Is Ch Then
                    RList.Add(Act)
                End If
            Next
            For Each Act In RList
                Act.DeletePartial(DB)
                GI.GameActions.Remove(Act)
            Next
            RList.Clear()
            Ch.DeletePartial(DB)
            GI.Actors.Remove(Ch)
        Else
            selectedCData.WhoAmI.HandleAction(DB, GI)
            GI.GameActions.Remove(selectedCData.WhoAmI)
            selectedCData.WhoAmI.DeletePartial(DB)
        End If
        MoveNext()
        DB.SubmitChanges()

    End Sub

    Private Sub Reset_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles Reset.Click
        GI.Delete(DB)
        GI = New Game
        GI.Name = "Test"
        GI.Save(DB)

        ListBox1.Items.Clear()
        Call displayChars()
        Call DisplayActions()
        MoveNext()
        DB.SubmitChanges()
    End Sub

    Private Sub ListBox1_SelectedIndexChanged(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles ListBox1.SelectedIndexChanged
        'Dim Ch As Character = ListBox1.SelectedItem
        'If Ch Is Nothing Then Exit Sub
        'Dim t As String
        'For Each t In ListBox4.Items
        '    If t = Ch.CurModifier.ToString Then
        '        ListBox4.SelectedItem = t
        '        Exit For
        '    End If
        'Next
    End Sub

    Private Sub ListBox4_SelectedIndexChanged(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles ListBox4.SelectedIndexChanged
        Dim Car As Actor = ListBox1.SelectedItem
        If Car Is Nothing Then Exit Sub
        If Car.ProposedAction Is Nothing Then Exit Sub
        Car.ProposedAction.CurrentModifier = Val(ListBox4.SelectedItem)
        Car.ProposedAction.WhoIsActing.SetActionTime(Car.ProposedAction, GI.CurrentTime)
        DisplayActions()
        'MoveNext()
        DB.SubmitChanges()
    End Sub

    Private Sub ListBox5_SelectedIndexChanged(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles ListBox5.SelectedIndexChanged
        Dim Car As Actor = ListBox1.SelectedItem
        If Car Is Nothing Then Exit Sub
        If Car.ProposedAction Is Nothing Then Exit Sub
        If ListBox5.SelectedItem Is Nothing Then Exit Sub
        Car.ProposedAction.CurrentModifier = Val(ListBox4.SelectedItem)
        Car.ProposedAction.CurrentAttack = ListBox5.SelectedItem
        Car.ProposedAction.WhoIsActing.SetActionTime(Car.ProposedAction, GI.CurrentTime)
        DisplayActions()
        DB.SubmitChanges()
    End Sub

    Private Sub Button5_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles Button5.Click
        Dim Ch As Actor = ListBox1.SelectedItem
        If Ch Is Nothing Then Exit Sub
        Dim DSM As New DlgStunnedManeuvering(DB, Ch, GI)
        DSM.ShowDialog()
        DisplayActions()
        DB.SubmitChanges()
    End Sub

    'Private Sub Button6_Click(ByVal sender As System.Object, ByVal e As System.EventArgs)
    '    'Dim Creat As Creature
    '    'For Each Creat In Creature.getcreatures
    '    '    Creat.Delete()
    '    'Next
    '    ''Public ArmorList As New List(Of Armor)
    '    'Dim Arm As Armor
    '    'For Each Arm In Armor.GetArmors
    '    '    Arm.Delete()
    '    'Next
    '    ''Public PreBuiltCharsList As New List(Of PreBuiltChar)
    '    'Dim PBC As PreBuiltChar
    '    'For Each PBC In PreBuiltChar.GetPreBuiltChars
    '    '    PBC.Delete()
    '    'Next
    '    ''Public WeaponList As New List(Of Weapon)
    '    'Dim Weap As Weapon
    '    'For Each Weap In Weapon.GetWeapons
    '    '    Weap.Delete()
    '    'Next
    '    ''Public WeaponList As New List(Of Weapon)
    '    Dim ActGroup As ActionGroup
    '    'For Each ActGroup In ActionGroup.GetActionGroups
    '    '    ActGroup.Delete()
    '    'Next

    '    'For Each Creat In MD.CreatureList
    '    '    Creat.Save()
    '    'Next

    '    'For Each PBC In MD.PreBuiltCharsList
    '    '    PBC.Save()
    '    'Next

    '    'For Each Arm In MD.ArmorList
    '    '    Arm.Save()
    '    'Next

    '    'For Each Weap In MD.WeaponList
    '    '    Weap.Save()
    '    'Next

    '    For Each ActGroup In RMSS.ActionGroups
    '        ActGroup.Save()
    '    Next
    'End Sub

    
End Class
'Public Class ActionSorter
'    Implements IComparer(Of Action)

'    Public Function Compare(ByVal x As Action, ByVal y As Action) As Integer Implements System.Collections.Generic.IComparer(Of Action).Compare
'        If x.EndTime > y.EndTime Then
'            Return 1
'        ElseIf x.EndTime < y.EndTime Then
'            Return -1
'        Else
'            Return 0
'        End If
'    End Function
'End Class
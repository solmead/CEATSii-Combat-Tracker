<Global.Microsoft.VisualBasic.CompilerServices.DesignerGenerated()> _
Partial Class MainForm
    Inherits System.Windows.Forms.Form

    'Form overrides dispose to clean up the component list.
    <System.Diagnostics.DebuggerNonUserCode()> _
    Protected Overrides Sub Dispose(ByVal disposing As Boolean)
        If disposing AndAlso components IsNot Nothing Then
            components.Dispose()
        End If
        MyBase.Dispose(disposing)
    End Sub

    'Required by the Windows Form Designer
    Private components As System.ComponentModel.IContainer

    'NOTE: The following procedure is required by the Windows Form Designer
    'It can be modified using the Windows Form Designer.  
    'Do not modify it using the code editor.
    <System.Diagnostics.DebuggerStepThrough()> _
    Private Sub InitializeComponent()
        Me.Panel1 = New System.Windows.Forms.Panel()
        Me.Splitter1 = New System.Windows.Forms.Splitter()
        Me.MenuStrip1 = New System.Windows.Forms.MenuStrip()
        Me.FileToolStripMenuItem = New System.Windows.Forms.ToolStripMenuItem()
        Me.EditToolStripMenuItem = New System.Windows.Forms.ToolStripMenuItem()
        Me.CreatureEditingToolStripMenuItem = New System.Windows.Forms.ToolStripMenuItem()
        Me.PreBuiltCharacterToolStripMenuItem = New System.Windows.Forms.ToolStripMenuItem()
        Me.ToolStripContainer1 = New System.Windows.Forms.ToolStripContainer()
        Me.ListBox1 = New System.Windows.Forms.ListBox()
        Me.CharacterDisplay = New System.Windows.Forms.Panel()
        Me.Splitter2 = New System.Windows.Forms.Splitter()
        Me.Panel3 = New System.Windows.Forms.Panel()
        Me.Button6 = New System.Windows.Forms.Button()
        Me.Panel2 = New System.Windows.Forms.Panel()
        Me.btnStunnedManuver = New System.Windows.Forms.Button()
        Me.ListBox5 = New System.Windows.Forms.ListBox()
        Me.ListBox4 = New System.Windows.Forms.ListBox()
        Me.btnReset = New System.Windows.Forms.Button()
        Me.btnRemoveCurrent = New System.Windows.Forms.Button()
        Me.btnRollNormal = New System.Windows.Forms.Button()
        Me.btnRollOpen = New System.Windows.Forms.Button()
        Me.btnCast = New System.Windows.Forms.Button()
        Me.btnAddDamage = New System.Windows.Forms.Button()
        Me.Label1 = New System.Windows.Forms.Label()
        Me.btnSetAction = New System.Windows.Forms.Button()
        Me.ListBox3 = New System.Windows.Forms.ListBox()
        Me.ListBox2 = New System.Windows.Forms.ListBox()
        Me.DisplayAttack1 = New CombatTracker.DisplayAttack()
        Me.MenuStrip1.SuspendLayout()
        Me.ToolStripContainer1.TopToolStripPanel.SuspendLayout()
        Me.ToolStripContainer1.SuspendLayout()
        Me.Panel3.SuspendLayout()
        Me.Panel2.SuspendLayout()
        Me.SuspendLayout()
        '
        'Panel1
        '
        Me.Panel1.BorderStyle = System.Windows.Forms.BorderStyle.Fixed3D
        Me.Panel1.Dock = System.Windows.Forms.DockStyle.Bottom
        Me.Panel1.Location = New System.Drawing.Point(0, 634)
        Me.Panel1.Name = "Panel1"
        Me.Panel1.Size = New System.Drawing.Size(1196, 100)
        Me.Panel1.TabIndex = 0
        '
        'Splitter1
        '
        Me.Splitter1.Dock = System.Windows.Forms.DockStyle.Bottom
        Me.Splitter1.Location = New System.Drawing.Point(0, 624)
        Me.Splitter1.Name = "Splitter1"
        Me.Splitter1.Size = New System.Drawing.Size(1196, 10)
        Me.Splitter1.TabIndex = 1
        Me.Splitter1.TabStop = False
        '
        'MenuStrip1
        '
        Me.MenuStrip1.Dock = System.Windows.Forms.DockStyle.None
        Me.MenuStrip1.GripStyle = System.Windows.Forms.ToolStripGripStyle.Visible
        Me.MenuStrip1.Items.AddRange(New System.Windows.Forms.ToolStripItem() {Me.FileToolStripMenuItem, Me.EditToolStripMenuItem})
        Me.MenuStrip1.Location = New System.Drawing.Point(0, 0)
        Me.MenuStrip1.Name = "MenuStrip1"
        Me.MenuStrip1.Size = New System.Drawing.Size(1196, 24)
        Me.MenuStrip1.TabIndex = 0
        Me.MenuStrip1.Text = "MenuStrip1"
        '
        'FileToolStripMenuItem
        '
        Me.FileToolStripMenuItem.Name = "FileToolStripMenuItem"
        Me.FileToolStripMenuItem.Size = New System.Drawing.Size(37, 20)
        Me.FileToolStripMenuItem.Text = "File"
        '
        'EditToolStripMenuItem
        '
        Me.EditToolStripMenuItem.DropDownItems.AddRange(New System.Windows.Forms.ToolStripItem() {Me.CreatureEditingToolStripMenuItem, Me.PreBuiltCharacterToolStripMenuItem})
        Me.EditToolStripMenuItem.Name = "EditToolStripMenuItem"
        Me.EditToolStripMenuItem.Size = New System.Drawing.Size(39, 20)
        Me.EditToolStripMenuItem.Text = "Edit"
        '
        'CreatureEditingToolStripMenuItem
        '
        Me.CreatureEditingToolStripMenuItem.Name = "CreatureEditingToolStripMenuItem"
        Me.CreatureEditingToolStripMenuItem.Size = New System.Drawing.Size(174, 22)
        Me.CreatureEditingToolStripMenuItem.Text = "Creature Editing"
        '
        'PreBuiltCharacterToolStripMenuItem
        '
        Me.PreBuiltCharacterToolStripMenuItem.Name = "PreBuiltCharacterToolStripMenuItem"
        Me.PreBuiltCharacterToolStripMenuItem.Size = New System.Drawing.Size(174, 22)
        Me.PreBuiltCharacterToolStripMenuItem.Text = "Pre-Built Character"
        '
        'ToolStripContainer1
        '
        '
        'ToolStripContainer1.ContentPanel
        '
        Me.ToolStripContainer1.ContentPanel.Size = New System.Drawing.Size(1196, 3)
        Me.ToolStripContainer1.Dock = System.Windows.Forms.DockStyle.Top
        Me.ToolStripContainer1.Location = New System.Drawing.Point(0, 0)
        Me.ToolStripContainer1.Name = "ToolStripContainer1"
        Me.ToolStripContainer1.Size = New System.Drawing.Size(1196, 27)
        Me.ToolStripContainer1.TabIndex = 5
        Me.ToolStripContainer1.Text = "ToolStripContainer1"
        '
        'ToolStripContainer1.TopToolStripPanel
        '
        Me.ToolStripContainer1.TopToolStripPanel.Controls.Add(Me.MenuStrip1)
        '
        'ListBox1
        '
        Me.ListBox1.FormattingEnabled = True
        Me.ListBox1.Location = New System.Drawing.Point(12, 6)
        Me.ListBox1.Name = "ListBox1"
        Me.ListBox1.Size = New System.Drawing.Size(225, 199)
        Me.ListBox1.TabIndex = 6
        '
        'CharacterDisplay
        '
        Me.CharacterDisplay.AutoScroll = True
        Me.CharacterDisplay.BorderStyle = System.Windows.Forms.BorderStyle.Fixed3D
        Me.CharacterDisplay.Dock = System.Windows.Forms.DockStyle.Right
        Me.CharacterDisplay.Location = New System.Drawing.Point(871, 27)
        Me.CharacterDisplay.Name = "CharacterDisplay"
        Me.CharacterDisplay.Size = New System.Drawing.Size(325, 597)
        Me.CharacterDisplay.TabIndex = 7
        '
        'Splitter2
        '
        Me.Splitter2.Dock = System.Windows.Forms.DockStyle.Right
        Me.Splitter2.Location = New System.Drawing.Point(861, 27)
        Me.Splitter2.Name = "Splitter2"
        Me.Splitter2.Size = New System.Drawing.Size(10, 597)
        Me.Splitter2.TabIndex = 9
        Me.Splitter2.TabStop = False
        '
        'Panel3
        '
        Me.Panel3.Controls.Add(Me.Button6)
        Me.Panel3.Controls.Add(Me.Panel2)
        Me.Panel3.Controls.Add(Me.btnStunnedManuver)
        Me.Panel3.Controls.Add(Me.ListBox5)
        Me.Panel3.Controls.Add(Me.ListBox4)
        Me.Panel3.Controls.Add(Me.btnReset)
        Me.Panel3.Controls.Add(Me.btnRemoveCurrent)
        Me.Panel3.Controls.Add(Me.btnRollNormal)
        Me.Panel3.Controls.Add(Me.btnRollOpen)
        Me.Panel3.Controls.Add(Me.btnCast)
        Me.Panel3.Controls.Add(Me.btnAddDamage)
        Me.Panel3.Controls.Add(Me.Label1)
        Me.Panel3.Controls.Add(Me.btnSetAction)
        Me.Panel3.Controls.Add(Me.ListBox3)
        Me.Panel3.Controls.Add(Me.ListBox2)
        Me.Panel3.Controls.Add(Me.ListBox1)
        Me.Panel3.Dock = System.Windows.Forms.DockStyle.Fill
        Me.Panel3.Location = New System.Drawing.Point(0, 27)
        Me.Panel3.Name = "Panel3"
        Me.Panel3.Size = New System.Drawing.Size(861, 597)
        Me.Panel3.TabIndex = 10
        '
        'Button6
        '
        Me.Button6.Location = New System.Drawing.Point(575, 19)
        Me.Button6.Name = "Button6"
        Me.Button6.Size = New System.Drawing.Size(52, 19)
        Me.Button6.TabIndex = 21
        Me.Button6.Text = "Button6"
        Me.Button6.UseVisualStyleBackColor = True
        '
        'Panel2
        '
        Me.Panel2.Anchor = CType((((System.Windows.Forms.AnchorStyles.Top Or System.Windows.Forms.AnchorStyles.Bottom) _
            Or System.Windows.Forms.AnchorStyles.Left) _
            Or System.Windows.Forms.AnchorStyles.Right), System.Windows.Forms.AnchorStyles)
        Me.Panel2.AutoScroll = True
        Me.Panel2.Controls.Add(Me.DisplayAttack1)
        Me.Panel2.Location = New System.Drawing.Point(12, 211)
        Me.Panel2.Name = "Panel2"
        Me.Panel2.Size = New System.Drawing.Size(734, 380)
        Me.Panel2.TabIndex = 20
        Me.Panel2.Visible = False
        '
        'btnStunnedManuver
        '
        Me.btnStunnedManuver.Anchor = CType((System.Windows.Forms.AnchorStyles.Top Or System.Windows.Forms.AnchorStyles.Right), System.Windows.Forms.AnchorStyles)
        Me.btnStunnedManuver.Location = New System.Drawing.Point(752, 227)
        Me.btnStunnedManuver.Name = "btnStunnedManuver"
        Me.btnStunnedManuver.Size = New System.Drawing.Size(106, 36)
        Me.btnStunnedManuver.TabIndex = 19
        Me.btnStunnedManuver.Text = "Stunned Maneuvering"
        Me.btnStunnedManuver.UseVisualStyleBackColor = True
        '
        'ListBox5
        '
        Me.ListBox5.FormattingEnabled = True
        Me.ListBox5.Location = New System.Drawing.Point(602, 56)
        Me.ListBox5.Name = "ListBox5"
        Me.ListBox5.Size = New System.Drawing.Size(138, 108)
        Me.ListBox5.TabIndex = 18
        Me.ListBox5.Visible = False
        '
        'ListBox4
        '
        Me.ListBox4.FormattingEnabled = True
        Me.ListBox4.Items.AddRange(New Object() {"-40", "-30", "-20", "-10", "0", "10", "20", "30"})
        Me.ListBox4.Location = New System.Drawing.Point(565, 56)
        Me.ListBox4.Name = "ListBox4"
        Me.ListBox4.Size = New System.Drawing.Size(31, 108)
        Me.ListBox4.TabIndex = 17
        '
        'btnReset
        '
        Me.btnReset.Anchor = CType((System.Windows.Forms.AnchorStyles.Top Or System.Windows.Forms.AnchorStyles.Right), System.Windows.Forms.AnchorStyles)
        Me.btnReset.Location = New System.Drawing.Point(750, 56)
        Me.btnReset.Name = "btnReset"
        Me.btnReset.Size = New System.Drawing.Size(106, 36)
        Me.btnReset.TabIndex = 16
        Me.btnReset.Text = "Reset"
        Me.btnReset.UseVisualStyleBackColor = True
        '
        'btnRemoveCurrent
        '
        Me.btnRemoveCurrent.Anchor = CType((System.Windows.Forms.AnchorStyles.Top Or System.Windows.Forms.AnchorStyles.Right), System.Windows.Forms.AnchorStyles)
        Me.btnRemoveCurrent.Location = New System.Drawing.Point(750, 98)
        Me.btnRemoveCurrent.Name = "btnRemoveCurrent"
        Me.btnRemoveCurrent.Size = New System.Drawing.Size(106, 36)
        Me.btnRemoveCurrent.TabIndex = 15
        Me.btnRemoveCurrent.Text = "Remove Current"
        Me.btnRemoveCurrent.UseVisualStyleBackColor = True
        '
        'btnRollNormal
        '
        Me.btnRollNormal.Anchor = CType((System.Windows.Forms.AnchorStyles.Top Or System.Windows.Forms.AnchorStyles.Right), System.Windows.Forms.AnchorStyles)
        Me.btnRollNormal.Location = New System.Drawing.Point(750, 403)
        Me.btnRollNormal.Name = "btnRollNormal"
        Me.btnRollNormal.Size = New System.Drawing.Size(104, 36)
        Me.btnRollNormal.TabIndex = 14
        Me.btnRollNormal.Text = "Roll D100"
        Me.btnRollNormal.UseVisualStyleBackColor = True
        '
        'btnRollOpen
        '
        Me.btnRollOpen.Anchor = CType((System.Windows.Forms.AnchorStyles.Top Or System.Windows.Forms.AnchorStyles.Right), System.Windows.Forms.AnchorStyles)
        Me.btnRollOpen.Location = New System.Drawing.Point(751, 361)
        Me.btnRollOpen.Name = "btnRollOpen"
        Me.btnRollOpen.Size = New System.Drawing.Size(104, 36)
        Me.btnRollOpen.TabIndex = 13
        Me.btnRollOpen.Text = "Roll D100 Open"
        Me.btnRollOpen.UseVisualStyleBackColor = True
        '
        'btnCast
        '
        Me.btnCast.Anchor = CType((System.Windows.Forms.AnchorStyles.Top Or System.Windows.Forms.AnchorStyles.Right), System.Windows.Forms.AnchorStyles)
        Me.btnCast.Location = New System.Drawing.Point(751, 185)
        Me.btnCast.Name = "btnCast"
        Me.btnCast.Size = New System.Drawing.Size(106, 36)
        Me.btnCast.TabIndex = 12
        Me.btnCast.Text = "Cast Spell/Psychic"
        Me.btnCast.UseVisualStyleBackColor = True
        '
        'btnAddDamage
        '
        Me.btnAddDamage.Anchor = CType((System.Windows.Forms.AnchorStyles.Top Or System.Windows.Forms.AnchorStyles.Right), System.Windows.Forms.AnchorStyles)
        Me.btnAddDamage.Location = New System.Drawing.Point(751, 143)
        Me.btnAddDamage.Name = "btnAddDamage"
        Me.btnAddDamage.Size = New System.Drawing.Size(106, 36)
        Me.btnAddDamage.TabIndex = 11
        Me.btnAddDamage.Text = "Add Damage"
        Me.btnAddDamage.UseVisualStyleBackColor = True
        '
        'Label1
        '
        Me.Label1.Anchor = CType((System.Windows.Forms.AnchorStyles.Top Or System.Windows.Forms.AnchorStyles.Right), System.Windows.Forms.AnchorStyles)
        Me.Label1.AutoSize = True
        Me.Label1.Font = New System.Drawing.Font("Microsoft Sans Serif", 14.25!, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, CType(0, Byte))
        Me.Label1.ForeColor = System.Drawing.Color.Red
        Me.Label1.Location = New System.Drawing.Point(669, 15)
        Me.Label1.Name = "Label1"
        Me.Label1.Size = New System.Drawing.Size(71, 24)
        Me.Label1.TabIndex = 10
        Me.Label1.Text = "889.99"
        '
        'btnSetAction
        '
        Me.btnSetAction.Anchor = CType((System.Windows.Forms.AnchorStyles.Top Or System.Windows.Forms.AnchorStyles.Right), System.Windows.Forms.AnchorStyles)
        Me.btnSetAction.Location = New System.Drawing.Point(746, 6)
        Me.btnSetAction.Name = "btnSetAction"
        Me.btnSetAction.Size = New System.Drawing.Size(112, 46)
        Me.btnSetAction.TabIndex = 9
        Me.btnSetAction.Text = "Set Action"
        Me.btnSetAction.UseVisualStyleBackColor = True
        '
        'ListBox3
        '
        Me.ListBox3.FormattingEnabled = True
        Me.ListBox3.Location = New System.Drawing.Point(341, 6)
        Me.ListBox3.Name = "ListBox3"
        Me.ListBox3.Size = New System.Drawing.Size(218, 199)
        Me.ListBox3.TabIndex = 8
        '
        'ListBox2
        '
        Me.ListBox2.FormattingEnabled = True
        Me.ListBox2.Location = New System.Drawing.Point(243, 6)
        Me.ListBox2.Name = "ListBox2"
        Me.ListBox2.Size = New System.Drawing.Size(92, 199)
        Me.ListBox2.TabIndex = 7
        '
        'DisplayAttack1
        '
        Me.DisplayAttack1.BorderStyle = System.Windows.Forms.BorderStyle.FixedSingle
        Me.DisplayAttack1.Dock = System.Windows.Forms.DockStyle.Fill
        Me.DisplayAttack1.Location = New System.Drawing.Point(0, 0)
        Me.DisplayAttack1.Name = "DisplayAttack1"
        Me.DisplayAttack1.Size = New System.Drawing.Size(734, 380)
        Me.DisplayAttack1.TabIndex = 21
        '
        'MainForm
        '
        Me.AutoScaleDimensions = New System.Drawing.SizeF(6.0!, 13.0!)
        Me.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font
        Me.ClientSize = New System.Drawing.Size(1196, 734)
        Me.Controls.Add(Me.Panel3)
        Me.Controls.Add(Me.Splitter2)
        Me.Controls.Add(Me.CharacterDisplay)
        Me.Controls.Add(Me.ToolStripContainer1)
        Me.Controls.Add(Me.Splitter1)
        Me.Controls.Add(Me.Panel1)
        Me.MainMenuStrip = Me.MenuStrip1
        Me.Name = "MainForm"
        Me.Text = "MainForm"
        Me.MenuStrip1.ResumeLayout(False)
        Me.MenuStrip1.PerformLayout()
        Me.ToolStripContainer1.TopToolStripPanel.ResumeLayout(False)
        Me.ToolStripContainer1.TopToolStripPanel.PerformLayout()
        Me.ToolStripContainer1.ResumeLayout(False)
        Me.ToolStripContainer1.PerformLayout()
        Me.Panel3.ResumeLayout(False)
        Me.Panel3.PerformLayout()
        Me.Panel2.ResumeLayout(False)
        Me.ResumeLayout(False)

    End Sub
    Friend WithEvents Panel1 As System.Windows.Forms.Panel
    Friend WithEvents Splitter1 As System.Windows.Forms.Splitter
    Friend WithEvents MenuStrip1 As System.Windows.Forms.MenuStrip
    Friend WithEvents FileToolStripMenuItem As System.Windows.Forms.ToolStripMenuItem
    Friend WithEvents EditToolStripMenuItem As System.Windows.Forms.ToolStripMenuItem
    Friend WithEvents CreatureEditingToolStripMenuItem As System.Windows.Forms.ToolStripMenuItem
    Friend WithEvents ToolStripContainer1 As System.Windows.Forms.ToolStripContainer
    Friend WithEvents ListBox1 As System.Windows.Forms.ListBox
    Friend WithEvents CharacterDisplay As System.Windows.Forms.Panel
    Friend WithEvents Splitter2 As System.Windows.Forms.Splitter
    Friend WithEvents Panel3 As System.Windows.Forms.Panel
    Friend WithEvents ListBox3 As System.Windows.Forms.ListBox
    Friend WithEvents ListBox2 As System.Windows.Forms.ListBox
    Friend WithEvents btnSetAction As System.Windows.Forms.Button
    Friend WithEvents Label1 As System.Windows.Forms.Label
    Friend WithEvents btnAddDamage As System.Windows.Forms.Button
    Friend WithEvents btnCast As System.Windows.Forms.Button
    Friend WithEvents btnRollNormal As System.Windows.Forms.Button
    Friend WithEvents btnRollOpen As System.Windows.Forms.Button
    Friend WithEvents PreBuiltCharacterToolStripMenuItem As System.Windows.Forms.ToolStripMenuItem
    Friend WithEvents btnRemoveCurrent As System.Windows.Forms.Button
    Friend WithEvents btnReset As System.Windows.Forms.Button
    Friend WithEvents ListBox4 As System.Windows.Forms.ListBox
    Friend WithEvents ListBox5 As System.Windows.Forms.ListBox
    Friend WithEvents btnStunnedManuver As System.Windows.Forms.Button
    Friend WithEvents Panel2 As System.Windows.Forms.Panel
    Friend WithEvents DisplayAttack1 As CombatTracker.DisplayAttack
    Friend WithEvents Button6 As System.Windows.Forms.Button
End Class

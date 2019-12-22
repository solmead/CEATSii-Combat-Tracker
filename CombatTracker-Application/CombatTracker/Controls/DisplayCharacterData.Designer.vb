<Global.Microsoft.VisualBasic.CompilerServices.DesignerGenerated()> _
Partial Class DisplayCharacterData
    Inherits System.Windows.Forms.UserControl

    'UserControl overrides dispose to clean up the component list.
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
        Me.components = New System.ComponentModel.Container
        Dim resources As System.ComponentModel.ComponentResourceManager = New System.ComponentModel.ComponentResourceManager(GetType(DisplayCharacterData))
        Me.CharName = New System.Windows.Forms.Label
        Me.ActionName = New System.Windows.Forms.Label
        Me.ActionTime = New System.Windows.Forms.Label
        Me.Label3 = New System.Windows.Forms.Label
        Me.ActionNote = New System.Windows.Forms.Label
        Me.Initiative = New System.Windows.Forms.Label
        Me.Hits = New System.Windows.Forms.Label
        Me.Label7 = New System.Windows.Forms.Label
        Me.ArmorType = New System.Windows.Forms.Label
        Me.Weapon = New System.Windows.Forms.Label
        Me.Label9 = New System.Windows.Forms.Label
        Me.DB = New System.Windows.Forms.Label
        Me.Label10 = New System.Windows.Forms.Label
        Me.OB = New System.Windows.Forms.Label
        Me.Label11 = New System.Windows.Forms.Label
        Me.ImageList1 = New System.Windows.Forms.ImageList(Me.components)
        Me.HasteIcon = New System.Windows.Forms.PictureBox
        Me.SupriseIcon = New System.Windows.Forms.PictureBox
        Me.ConcetrationIcon = New System.Windows.Forms.PictureBox
        Me.AdrenalIcon = New System.Windows.Forms.PictureBox
        Me.Label8 = New System.Windows.Forms.Label
        Me.Modifiers = New System.Windows.Forms.Label
        Me.Exhaustion = New System.Windows.Forms.Label
        Me.PowerPoints = New System.Windows.Forms.Label
        Me.CriticalType = New System.Windows.Forms.Label
        Me.Ignore = New System.Windows.Forms.Label
        Me.StunIcon = New System.Windows.Forms.PictureBox
        Me.ParryIcon = New System.Windows.Forms.PictureBox
        Me.StunRounds = New System.Windows.Forms.Label
        Me.ParryRounds = New System.Windows.Forms.Label
        Me.Level = New System.Windows.Forms.Label
        Me.Label2 = New System.Windows.Forms.Label
        Me.ContextMenuStrip1 = New System.Windows.Forms.ContextMenuStrip(Me.components)
        Me.SetConcentrating = New System.Windows.Forms.ToolStripMenuItem
        Me.SetAdrenalDefense = New System.Windows.Forms.ToolStripMenuItem
        Me.SetSuprised = New System.Windows.Forms.ToolStripMenuItem
        CType(Me.HasteIcon, System.ComponentModel.ISupportInitialize).BeginInit()
        CType(Me.SupriseIcon, System.ComponentModel.ISupportInitialize).BeginInit()
        CType(Me.ConcetrationIcon, System.ComponentModel.ISupportInitialize).BeginInit()
        CType(Me.AdrenalIcon, System.ComponentModel.ISupportInitialize).BeginInit()
        CType(Me.StunIcon, System.ComponentModel.ISupportInitialize).BeginInit()
        CType(Me.ParryIcon, System.ComponentModel.ISupportInitialize).BeginInit()
        Me.ContextMenuStrip1.SuspendLayout()
        Me.SuspendLayout()
        '
        'CharName
        '
        Me.CharName.AutoSize = True
        Me.CharName.BackColor = System.Drawing.Color.Transparent
        Me.CharName.Font = New System.Drawing.Font("Microsoft Sans Serif", 9.75!, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, CType(0, Byte))
        Me.CharName.Location = New System.Drawing.Point(44, 0)
        Me.CharName.Name = "CharName"
        Me.CharName.Size = New System.Drawing.Size(154, 16)
        Me.CharName.TabIndex = 0
        Me.CharName.Text = "Deekin Merryweather"
        '
        'ActionName
        '
        Me.ActionName.BackColor = System.Drawing.Color.Transparent
        Me.ActionName.Location = New System.Drawing.Point(54, 15)
        Me.ActionName.Name = "ActionName"
        Me.ActionName.Size = New System.Drawing.Size(175, 14)
        Me.ActionName.TabIndex = 3
        Me.ActionName.Text = "Casting of Non-Instantaneous spell"
        '
        'ActionTime
        '
        Me.ActionTime.AutoSize = True
        Me.ActionTime.BackColor = System.Drawing.Color.Transparent
        Me.ActionTime.Location = New System.Drawing.Point(1, 3)
        Me.ActionTime.Name = "ActionTime"
        Me.ActionTime.Size = New System.Drawing.Size(40, 13)
        Me.ActionTime.TabIndex = 5
        Me.ActionTime.Text = "314.15"
        '
        'Label3
        '
        Me.Label3.AutoSize = True
        Me.Label3.BackColor = System.Drawing.Color.Transparent
        Me.Label3.Location = New System.Drawing.Point(14, 29)
        Me.Label3.Name = "Label3"
        Me.Label3.Size = New System.Drawing.Size(33, 13)
        Me.Label3.TabIndex = 6
        Me.Label3.Text = "Note:"
        '
        'ActionNote
        '
        Me.ActionNote.BackColor = System.Drawing.Color.Transparent
        Me.ActionNote.Font = New System.Drawing.Font("Microsoft Sans Serif", 8.25!, System.Drawing.FontStyle.Italic, System.Drawing.GraphicsUnit.Point, CType(0, Byte))
        Me.ActionNote.Location = New System.Drawing.Point(44, 29)
        Me.ActionNote.Name = "ActionNote"
        Me.ActionNote.Size = New System.Drawing.Size(185, 13)
        Me.ActionNote.TabIndex = 7
        Me.ActionNote.Text = "After 9 rounds of Preparation of spell"
        '
        'Initiative
        '
        Me.Initiative.AutoSize = True
        Me.Initiative.BackColor = System.Drawing.Color.Transparent
        Me.Initiative.Location = New System.Drawing.Point(23, 16)
        Me.Initiative.Name = "Initiative"
        Me.Initiative.Size = New System.Drawing.Size(25, 13)
        Me.Initiative.TabIndex = 5
        Me.Initiative.Text = "100"
        '
        'Hits
        '
        Me.Hits.AutoSize = True
        Me.Hits.BackColor = System.Drawing.Color.Transparent
        Me.Hits.Location = New System.Drawing.Point(230, 3)
        Me.Hits.Name = "Hits"
        Me.Hits.Size = New System.Drawing.Size(48, 13)
        Me.Hits.TabIndex = 10
        Me.Hits.Text = "888/888"
        '
        'Label7
        '
        Me.Label7.AutoSize = True
        Me.Label7.BackColor = System.Drawing.Color.Transparent
        Me.Label7.Location = New System.Drawing.Point(104, 67)
        Me.Label7.Name = "Label7"
        Me.Label7.Size = New System.Drawing.Size(43, 13)
        Me.Label7.TabIndex = 12
        Me.Label7.Text = "Armor->"
        '
        'ArmorType
        '
        Me.ArmorType.AutoSize = True
        Me.ArmorType.BackColor = System.Drawing.Color.Transparent
        Me.ArmorType.Location = New System.Drawing.Point(144, 67)
        Me.ArmorType.Name = "ArmorType"
        Me.ArmorType.Size = New System.Drawing.Size(19, 13)
        Me.ArmorType.TabIndex = 13
        Me.ArmorType.Text = "12"
        '
        'Weapon
        '
        Me.Weapon.AutoSize = True
        Me.Weapon.BackColor = System.Drawing.Color.Transparent
        Me.Weapon.Location = New System.Drawing.Point(144, 80)
        Me.Weapon.Name = "Weapon"
        Me.Weapon.Size = New System.Drawing.Size(64, 13)
        Me.Weapon.TabIndex = 15
        Me.Weapon.Text = "Long Sword"
        '
        'Label9
        '
        Me.Label9.AutoSize = True
        Me.Label9.BackColor = System.Drawing.Color.Transparent
        Me.Label9.Location = New System.Drawing.Point(90, 80)
        Me.Label9.Name = "Label9"
        Me.Label9.Size = New System.Drawing.Size(57, 13)
        Me.Label9.TabIndex = 14
        Me.Label9.Text = "Weapon->"
        '
        'DB
        '
        Me.DB.AutoSize = True
        Me.DB.BackColor = System.Drawing.Color.Transparent
        Me.DB.Location = New System.Drawing.Point(249, 67)
        Me.DB.Name = "DB"
        Me.DB.Size = New System.Drawing.Size(25, 13)
        Me.DB.TabIndex = 17
        Me.DB.Text = "100"
        '
        'Label10
        '
        Me.Label10.AutoSize = True
        Me.Label10.BackColor = System.Drawing.Color.Transparent
        Me.Label10.Location = New System.Drawing.Point(223, 67)
        Me.Label10.Name = "Label10"
        Me.Label10.Size = New System.Drawing.Size(31, 13)
        Me.Label10.TabIndex = 16
        Me.Label10.Text = "DB->"
        '
        'OB
        '
        Me.OB.AutoSize = True
        Me.OB.BackColor = System.Drawing.Color.Transparent
        Me.OB.Location = New System.Drawing.Point(249, 80)
        Me.OB.Name = "OB"
        Me.OB.Size = New System.Drawing.Size(25, 13)
        Me.OB.TabIndex = 19
        Me.OB.Text = "100"
        '
        'Label11
        '
        Me.Label11.AutoSize = True
        Me.Label11.BackColor = System.Drawing.Color.Transparent
        Me.Label11.Location = New System.Drawing.Point(223, 80)
        Me.Label11.Name = "Label11"
        Me.Label11.Size = New System.Drawing.Size(31, 13)
        Me.Label11.TabIndex = 18
        Me.Label11.Text = "OB->"
        '
        'ImageList1
        '
        Me.ImageList1.ImageStream = CType(resources.GetObject("ImageList1.ImageStream"), System.Windows.Forms.ImageListStreamer)
        Me.ImageList1.TransparentColor = System.Drawing.Color.Transparent
        Me.ImageList1.Images.SetKeyName(0, "")
        Me.ImageList1.Images.SetKeyName(1, "W95MBX03.ICO")
        Me.ImageList1.Images.SetKeyName(2, "TIMER01.ICO")
        Me.ImageList1.Images.SetKeyName(3, "TRFFC16.ICO")
        Me.ImageList1.Images.SetKeyName(4, "CLOUD.ICO")
        Me.ImageList1.Images.SetKeyName(5, "MISC20.ICO")
        Me.ImageList1.Images.SetKeyName(6, "W95MBX01.ICO")
        Me.ImageList1.Images.SetKeyName(7, "TRFFC10B.ICO")
        '
        'HasteIcon
        '
        Me.HasteIcon.Location = New System.Drawing.Point(3, 55)
        Me.HasteIcon.Name = "HasteIcon"
        Me.HasteIcon.Size = New System.Drawing.Size(16, 16)
        Me.HasteIcon.TabIndex = 20
        Me.HasteIcon.TabStop = False
        '
        'SupriseIcon
        '
        Me.SupriseIcon.Location = New System.Drawing.Point(25, 55)
        Me.SupriseIcon.Name = "SupriseIcon"
        Me.SupriseIcon.Size = New System.Drawing.Size(16, 16)
        Me.SupriseIcon.TabIndex = 21
        Me.SupriseIcon.TabStop = False
        '
        'ConcetrationIcon
        '
        Me.ConcetrationIcon.Location = New System.Drawing.Point(3, 77)
        Me.ConcetrationIcon.Name = "ConcetrationIcon"
        Me.ConcetrationIcon.Size = New System.Drawing.Size(16, 16)
        Me.ConcetrationIcon.TabIndex = 22
        Me.ConcetrationIcon.TabStop = False
        '
        'AdrenalIcon
        '
        Me.AdrenalIcon.Location = New System.Drawing.Point(25, 77)
        Me.AdrenalIcon.Name = "AdrenalIcon"
        Me.AdrenalIcon.Size = New System.Drawing.Size(16, 16)
        Me.AdrenalIcon.TabIndex = 23
        Me.AdrenalIcon.TabStop = False
        '
        'Label8
        '
        Me.Label8.AutoSize = True
        Me.Label8.BackColor = System.Drawing.Color.Transparent
        Me.Label8.Location = New System.Drawing.Point(102, 55)
        Me.Label8.Name = "Label8"
        Me.Label8.Size = New System.Drawing.Size(52, 13)
        Me.Label8.TabIndex = 24
        Me.Label8.Text = "Modifiers:"
        '
        'Modifiers
        '
        Me.Modifiers.AutoSize = True
        Me.Modifiers.BackColor = System.Drawing.Color.Transparent
        Me.Modifiers.Location = New System.Drawing.Point(144, 55)
        Me.Modifiers.Name = "Modifiers"
        Me.Modifiers.Size = New System.Drawing.Size(54, 13)
        Me.Modifiers.TabIndex = 25
        Me.Modifiers.Text = "-100/-100"
        '
        'Exhaustion
        '
        Me.Exhaustion.AutoSize = True
        Me.Exhaustion.BackColor = System.Drawing.Color.Transparent
        Me.Exhaustion.Location = New System.Drawing.Point(230, 16)
        Me.Exhaustion.Name = "Exhaustion"
        Me.Exhaustion.Size = New System.Drawing.Size(48, 13)
        Me.Exhaustion.TabIndex = 26
        Me.Exhaustion.Text = "888/888"
        '
        'PowerPoints
        '
        Me.PowerPoints.AutoSize = True
        Me.PowerPoints.BackColor = System.Drawing.Color.Transparent
        Me.PowerPoints.Location = New System.Drawing.Point(230, 29)
        Me.PowerPoints.Name = "PowerPoints"
        Me.PowerPoints.Size = New System.Drawing.Size(48, 13)
        Me.PowerPoints.TabIndex = 27
        Me.PowerPoints.Text = "888/888"
        '
        'CriticalType
        '
        Me.CriticalType.AutoSize = True
        Me.CriticalType.BackColor = System.Drawing.Color.Transparent
        Me.CriticalType.Location = New System.Drawing.Point(99, 42)
        Me.CriticalType.Name = "CriticalType"
        Me.CriticalType.Size = New System.Drawing.Size(99, 13)
        Me.CriticalType.TabIndex = 28
        Me.CriticalType.Text = "SuperLarge_Critical"
        '
        'Ignore
        '
        Me.Ignore.AutoSize = True
        Me.Ignore.Location = New System.Drawing.Point(197, 42)
        Me.Ignore.Name = "Ignore"
        Me.Ignore.Size = New System.Drawing.Size(81, 13)
        Me.Ignore.TabIndex = 29
        Me.Ignore.Text = "Ignore Bleeding"
        '
        'StunIcon
        '
        Me.StunIcon.Location = New System.Drawing.Point(47, 55)
        Me.StunIcon.Name = "StunIcon"
        Me.StunIcon.Size = New System.Drawing.Size(16, 16)
        Me.StunIcon.TabIndex = 30
        Me.StunIcon.TabStop = False
        '
        'ParryIcon
        '
        Me.ParryIcon.Location = New System.Drawing.Point(47, 77)
        Me.ParryIcon.Name = "ParryIcon"
        Me.ParryIcon.Size = New System.Drawing.Size(16, 16)
        Me.ParryIcon.TabIndex = 31
        Me.ParryIcon.TabStop = False
        '
        'StunRounds
        '
        Me.StunRounds.AutoSize = True
        Me.StunRounds.Location = New System.Drawing.Point(70, 57)
        Me.StunRounds.Name = "StunRounds"
        Me.StunRounds.Size = New System.Drawing.Size(13, 13)
        Me.StunRounds.TabIndex = 32
        Me.StunRounds.Text = "5"
        '
        'ParryRounds
        '
        Me.ParryRounds.AutoSize = True
        Me.ParryRounds.Location = New System.Drawing.Point(70, 77)
        Me.ParryRounds.Name = "ParryRounds"
        Me.ParryRounds.Size = New System.Drawing.Size(13, 13)
        Me.ParryRounds.TabIndex = 33
        Me.ParryRounds.Text = "5"
        '
        'Level
        '
        Me.Level.AutoSize = True
        Me.Level.BackColor = System.Drawing.Color.Transparent
        Me.Level.Location = New System.Drawing.Point(204, 3)
        Me.Level.Name = "Level"
        Me.Level.Size = New System.Drawing.Size(25, 13)
        Me.Level.TabIndex = 34
        Me.Level.Text = "100"
        '
        'Label2
        '
        Me.Label2.AutoSize = True
        Me.Label2.Location = New System.Drawing.Point(3, 16)
        Me.Label2.Name = "Label2"
        Me.Label2.Size = New System.Drawing.Size(24, 13)
        Me.Label2.TabIndex = 35
        Me.Label2.Text = "Init:"
        '
        'ContextMenuStrip1
        '
        Me.ContextMenuStrip1.Items.AddRange(New System.Windows.Forms.ToolStripItem() {Me.SetConcentrating, Me.SetAdrenalDefense, Me.SetSuprised})
        Me.ContextMenuStrip1.Name = "ContextMenuStrip1"
        Me.ContextMenuStrip1.Size = New System.Drawing.Size(166, 92)
        '
        'SetConcentrating
        '
        Me.SetConcentrating.CheckOnClick = True
        Me.SetConcentrating.Name = "SetConcentrating"
        Me.SetConcentrating.Size = New System.Drawing.Size(165, 22)
        Me.SetConcentrating.Text = "Concentrating"
        '
        'SetAdrenalDefense
        '
        Me.SetAdrenalDefense.CheckOnClick = True
        Me.SetAdrenalDefense.Name = "SetAdrenalDefense"
        Me.SetAdrenalDefense.Size = New System.Drawing.Size(165, 22)
        Me.SetAdrenalDefense.Text = "Adrenal Defense"
        '
        'SetSuprised
        '
        Me.SetSuprised.CheckOnClick = True
        Me.SetSuprised.Name = "SetSuprised"
        Me.SetSuprised.Size = New System.Drawing.Size(165, 22)
        Me.SetSuprised.Text = "Suprised"
        '
        'DisplayCharacterData
        '
        Me.AutoScaleDimensions = New System.Drawing.SizeF(6.0!, 13.0!)
        Me.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font
        Me.BackColor = System.Drawing.Color.WhiteSmoke
        Me.BorderStyle = System.Windows.Forms.BorderStyle.FixedSingle
        Me.ContextMenuStrip = Me.ContextMenuStrip1
        Me.Controls.Add(Me.Label2)
        Me.Controls.Add(Me.Initiative)
        Me.Controls.Add(Me.Level)
        Me.Controls.Add(Me.ParryRounds)
        Me.Controls.Add(Me.StunRounds)
        Me.Controls.Add(Me.ParryIcon)
        Me.Controls.Add(Me.StunIcon)
        Me.Controls.Add(Me.Ignore)
        Me.Controls.Add(Me.CriticalType)
        Me.Controls.Add(Me.PowerPoints)
        Me.Controls.Add(Me.Exhaustion)
        Me.Controls.Add(Me.Modifiers)
        Me.Controls.Add(Me.Label8)
        Me.Controls.Add(Me.AdrenalIcon)
        Me.Controls.Add(Me.ConcetrationIcon)
        Me.Controls.Add(Me.SupriseIcon)
        Me.Controls.Add(Me.HasteIcon)
        Me.Controls.Add(Me.OB)
        Me.Controls.Add(Me.Label11)
        Me.Controls.Add(Me.DB)
        Me.Controls.Add(Me.Label10)
        Me.Controls.Add(Me.Weapon)
        Me.Controls.Add(Me.Label9)
        Me.Controls.Add(Me.ArmorType)
        Me.Controls.Add(Me.Label7)
        Me.Controls.Add(Me.ActionNote)
        Me.Controls.Add(Me.Label3)
        Me.Controls.Add(Me.Hits)
        Me.Controls.Add(Me.ActionTime)
        Me.Controls.Add(Me.ActionName)
        Me.Controls.Add(Me.CharName)
        Me.Name = "DisplayCharacterData"
        Me.Size = New System.Drawing.Size(279, 97)
        CType(Me.HasteIcon, System.ComponentModel.ISupportInitialize).EndInit()
        CType(Me.SupriseIcon, System.ComponentModel.ISupportInitialize).EndInit()
        CType(Me.ConcetrationIcon, System.ComponentModel.ISupportInitialize).EndInit()
        CType(Me.AdrenalIcon, System.ComponentModel.ISupportInitialize).EndInit()
        CType(Me.StunIcon, System.ComponentModel.ISupportInitialize).EndInit()
        CType(Me.ParryIcon, System.ComponentModel.ISupportInitialize).EndInit()
        Me.ContextMenuStrip1.ResumeLayout(False)
        Me.ResumeLayout(False)
        Me.PerformLayout()

    End Sub
    Friend WithEvents Label1 As System.Windows.Forms.Label
    Friend WithEvents CharName As System.Windows.Forms.Label
    Friend WithEvents ActionTime As System.Windows.Forms.Label
    Friend WithEvents ActionName As System.Windows.Forms.Label
    Friend WithEvents Label3 As System.Windows.Forms.Label
    Friend WithEvents ActionNote As System.Windows.Forms.Label
    Friend WithEvents Initiative As System.Windows.Forms.Label
    Friend WithEvents Hits As System.Windows.Forms.Label
    Friend WithEvents Label7 As System.Windows.Forms.Label
    Friend WithEvents ArmorType As System.Windows.Forms.Label
    Friend WithEvents Weapon As System.Windows.Forms.Label
    Friend WithEvents Label9 As System.Windows.Forms.Label
    Friend WithEvents DB As System.Windows.Forms.Label
    Friend WithEvents Label10 As System.Windows.Forms.Label
    Friend WithEvents OB As System.Windows.Forms.Label
    Friend WithEvents Label11 As System.Windows.Forms.Label
    Friend WithEvents ImageList1 As System.Windows.Forms.ImageList
    Friend WithEvents HasteIcon As System.Windows.Forms.PictureBox
    Friend WithEvents SupriseIcon As System.Windows.Forms.PictureBox
    Friend WithEvents ConcetrationIcon As System.Windows.Forms.PictureBox
    Friend WithEvents AdrenalIcon As System.Windows.Forms.PictureBox
    Friend WithEvents Label8 As System.Windows.Forms.Label
    Friend WithEvents Modifiers As System.Windows.Forms.Label
    Friend WithEvents Exhaustion As System.Windows.Forms.Label
    Friend WithEvents PowerPoints As System.Windows.Forms.Label
    Friend WithEvents CriticalType As System.Windows.Forms.Label
    Friend WithEvents Ignore As System.Windows.Forms.Label
    Friend WithEvents StunIcon As System.Windows.Forms.PictureBox
    Friend WithEvents ParryIcon As System.Windows.Forms.PictureBox
    Friend WithEvents StunRounds As System.Windows.Forms.Label
    Friend WithEvents ParryRounds As System.Windows.Forms.Label
    Friend WithEvents Level As System.Windows.Forms.Label
    Friend WithEvents Label2 As System.Windows.Forms.Label
    Friend WithEvents ContextMenuStrip1 As System.Windows.Forms.ContextMenuStrip
    Friend WithEvents SetConcentrating As System.Windows.Forms.ToolStripMenuItem
    Friend WithEvents SetAdrenalDefense As System.Windows.Forms.ToolStripMenuItem
    Friend WithEvents SetSuprised As System.Windows.Forms.ToolStripMenuItem

End Class

<Global.Microsoft.VisualBasic.CompilerServices.DesignerGenerated()> _
Partial Class DisplayCreature
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
        Me.Label2 = New System.Windows.Forms.Label
        Me.BaseLevel = New System.Windows.Forms.TextBox
        Me.LevelMod = New System.Windows.Forms.ListBox
        Me.BSize = New System.Windows.Forms.ListBox
        Me.Label3 = New System.Windows.Forms.Label
        Me.MS = New System.Windows.Forms.ListBox
        Me.Label4 = New System.Windows.Forms.Label
        Me.AQ = New System.Windows.Forms.ListBox
        Me.Label5 = New System.Windows.Forms.Label
        Me.BaseMove = New System.Windows.Forms.TextBox
        Me.Label6 = New System.Windows.Forms.Label
        Me.MaxPace = New System.Windows.Forms.ListBox
        Me.Label7 = New System.Windows.Forms.Label
        Me.MMBonus = New System.Windows.Forms.TextBox
        Me.Label8 = New System.Windows.Forms.Label
        Me.HitMod = New System.Windows.Forms.ListBox
        Me.BaseHits = New System.Windows.Forms.TextBox
        Me.Label9 = New System.Windows.Forms.Label
        Me.Critical = New System.Windows.Forms.ListBox
        Me.Label10 = New System.Windows.Forms.Label
        Me.AT = New System.Windows.Forms.TextBox
        Me.Label11 = New System.Windows.Forms.Label
        Me.DB = New System.Windows.Forms.TextBox
        Me.Label12 = New System.Windows.Forms.Label
        Me.MaxEncountered = New System.Windows.Forms.TextBox
        Me.Label13 = New System.Windows.Forms.Label
        Me.MinEncountered = New System.Windows.Forms.TextBox
        Me.Label14 = New System.Windows.Forms.Label
        Me.Label15 = New System.Windows.Forms.Label
        Me.GroupBox1 = New System.Windows.Forms.GroupBox
        Me.IgnoreBleeders = New System.Windows.Forms.RadioButton
        Me.IgnoreStun = New System.Windows.Forms.RadioButton
        Me.Ignore = New System.Windows.Forms.RadioButton
        Me.BookList = New System.Windows.Forms.ListBox
        Me.CreatureName = New System.Windows.Forms.TextBox
        Me.Label1 = New System.Windows.Forms.Label
        Me.Page = New System.Windows.Forms.TextBox
        Me.Panel1 = New System.Windows.Forms.Panel
        Me.Attacks = New System.Windows.Forms.ListBox
        Me.AddAttack = New System.Windows.Forms.Button
        Me.Description = New System.Windows.Forms.TextBox
        Me.DisplayAttack1 = New CombatTracker.DisplayAttack
        Me.RemoveAttack = New System.Windows.Forms.Button
        Me.GroupBox1.SuspendLayout()
        Me.Panel1.SuspendLayout()
        Me.SuspendLayout()
        '
        'Label2
        '
        Me.Label2.AutoSize = True
        Me.Label2.Location = New System.Drawing.Point(14, 117)
        Me.Label2.Name = "Label2"
        Me.Label2.Size = New System.Drawing.Size(63, 13)
        Me.Label2.TabIndex = 1
        Me.Label2.Text = "Base Level:"
        '
        'BaseLevel
        '
        Me.BaseLevel.Location = New System.Drawing.Point(83, 117)
        Me.BaseLevel.Name = "BaseLevel"
        Me.BaseLevel.Size = New System.Drawing.Size(21, 20)
        Me.BaseLevel.TabIndex = 2
        Me.BaseLevel.Text = "50"
        '
        'LevelMod
        '
        Me.LevelMod.FormattingEnabled = True
        Me.LevelMod.Location = New System.Drawing.Point(110, 117)
        Me.LevelMod.Name = "LevelMod"
        Me.LevelMod.Size = New System.Drawing.Size(35, 69)
        Me.LevelMod.TabIndex = 4
        '
        'BSize
        '
        Me.BSize.FormattingEnabled = True
        Me.BSize.Location = New System.Drawing.Point(195, 117)
        Me.BSize.Name = "BSize"
        Me.BSize.Size = New System.Drawing.Size(59, 69)
        Me.BSize.TabIndex = 6
        '
        'Label3
        '
        Me.Label3.AutoSize = True
        Me.Label3.Location = New System.Drawing.Point(159, 117)
        Me.Label3.Name = "Label3"
        Me.Label3.Size = New System.Drawing.Size(30, 13)
        Me.Label3.TabIndex = 5
        Me.Label3.Text = "Size:"
        '
        'MS
        '
        Me.MS.FormattingEnabled = True
        Me.MS.Location = New System.Drawing.Point(292, 117)
        Me.MS.Name = "MS"
        Me.MS.Size = New System.Drawing.Size(108, 69)
        Me.MS.TabIndex = 8
        '
        'Label4
        '
        Me.Label4.AutoSize = True
        Me.Label4.Location = New System.Drawing.Point(260, 117)
        Me.Label4.Name = "Label4"
        Me.Label4.Size = New System.Drawing.Size(26, 13)
        Me.Label4.TabIndex = 7
        Me.Label4.Text = "MS:"
        '
        'AQ
        '
        Me.AQ.FormattingEnabled = True
        Me.AQ.Location = New System.Drawing.Point(437, 117)
        Me.AQ.Name = "AQ"
        Me.AQ.Size = New System.Drawing.Size(108, 69)
        Me.AQ.TabIndex = 10
        '
        'Label5
        '
        Me.Label5.AutoSize = True
        Me.Label5.Location = New System.Drawing.Point(406, 117)
        Me.Label5.Name = "Label5"
        Me.Label5.Size = New System.Drawing.Size(25, 13)
        Me.Label5.TabIndex = 9
        Me.Label5.Text = "AQ:"
        '
        'BaseMove
        '
        Me.BaseMove.Location = New System.Drawing.Point(83, 203)
        Me.BaseMove.Name = "BaseMove"
        Me.BaseMove.Size = New System.Drawing.Size(30, 20)
        Me.BaseMove.TabIndex = 12
        Me.BaseMove.Text = "120"
        '
        'Label6
        '
        Me.Label6.AutoSize = True
        Me.Label6.Location = New System.Drawing.Point(13, 203)
        Me.Label6.Name = "Label6"
        Me.Label6.Size = New System.Drawing.Size(64, 13)
        Me.Label6.TabIndex = 11
        Me.Label6.Text = "Base Move:"
        '
        'MaxPace
        '
        Me.MaxPace.FormattingEnabled = True
        Me.MaxPace.Location = New System.Drawing.Point(195, 203)
        Me.MaxPace.Name = "MaxPace"
        Me.MaxPace.Size = New System.Drawing.Size(91, 69)
        Me.MaxPace.TabIndex = 14
        '
        'Label7
        '
        Me.Label7.AutoSize = True
        Me.Label7.Location = New System.Drawing.Point(131, 203)
        Me.Label7.Name = "Label7"
        Me.Label7.Size = New System.Drawing.Size(58, 13)
        Me.Label7.TabIndex = 13
        Me.Label7.Text = "Max Pace:"
        '
        'MMBonus
        '
        Me.MMBonus.Location = New System.Drawing.Point(436, 200)
        Me.MMBonus.Name = "MMBonus"
        Me.MMBonus.Size = New System.Drawing.Size(30, 20)
        Me.MMBonus.TabIndex = 16
        Me.MMBonus.Text = "120"
        '
        'Label8
        '
        Me.Label8.AutoSize = True
        Me.Label8.Location = New System.Drawing.Point(367, 203)
        Me.Label8.Name = "Label8"
        Me.Label8.Size = New System.Drawing.Size(61, 13)
        Me.Label8.TabIndex = 15
        Me.Label8.Text = "MM Bonus:"
        '
        'HitMod
        '
        Me.HitMod.FormattingEnabled = True
        Me.HitMod.Location = New System.Drawing.Point(127, 288)
        Me.HitMod.Name = "HitMod"
        Me.HitMod.Size = New System.Drawing.Size(35, 69)
        Me.HitMod.TabIndex = 19
        '
        'BaseHits
        '
        Me.BaseHits.Location = New System.Drawing.Point(83, 288)
        Me.BaseHits.Name = "BaseHits"
        Me.BaseHits.Size = New System.Drawing.Size(38, 20)
        Me.BaseHits.TabIndex = 18
        Me.BaseHits.Text = "999"
        '
        'Label9
        '
        Me.Label9.AutoSize = True
        Me.Label9.Location = New System.Drawing.Point(22, 288)
        Me.Label9.Name = "Label9"
        Me.Label9.Size = New System.Drawing.Size(55, 13)
        Me.Label9.TabIndex = 17
        Me.Label9.Text = "Base Hits:"
        '
        'Critical
        '
        Me.Critical.FormattingEnabled = True
        Me.Critical.Location = New System.Drawing.Point(221, 288)
        Me.Critical.Name = "Critical"
        Me.Critical.Size = New System.Drawing.Size(121, 69)
        Me.Critical.TabIndex = 21
        '
        'Label10
        '
        Me.Label10.AutoSize = True
        Me.Label10.Location = New System.Drawing.Point(169, 291)
        Me.Label10.Name = "Label10"
        Me.Label10.Size = New System.Drawing.Size(46, 13)
        Me.Label10.TabIndex = 20
        Me.Label10.Text = "Criticals:"
        '
        'AT
        '
        Me.AT.Location = New System.Drawing.Point(535, 285)
        Me.AT.Name = "AT"
        Me.AT.Size = New System.Drawing.Size(30, 20)
        Me.AT.TabIndex = 25
        Me.AT.Text = "120"
        '
        'Label11
        '
        Me.Label11.AutoSize = True
        Me.Label11.Location = New System.Drawing.Point(505, 288)
        Me.Label11.Name = "Label11"
        Me.Label11.Size = New System.Drawing.Size(24, 13)
        Me.Label11.TabIndex = 24
        Me.Label11.Text = "AT:"
        '
        'DB
        '
        Me.DB.Location = New System.Drawing.Point(535, 308)
        Me.DB.Name = "DB"
        Me.DB.Size = New System.Drawing.Size(30, 20)
        Me.DB.TabIndex = 27
        Me.DB.Text = "120"
        '
        'Label12
        '
        Me.Label12.AutoSize = True
        Me.Label12.Location = New System.Drawing.Point(505, 311)
        Me.Label12.Name = "Label12"
        Me.Label12.Size = New System.Drawing.Size(25, 13)
        Me.Label12.TabIndex = 26
        Me.Label12.Text = "DB:"
        '
        'MaxEncountered
        '
        Me.MaxEncountered.Location = New System.Drawing.Point(82, 401)
        Me.MaxEncountered.Name = "MaxEncountered"
        Me.MaxEncountered.Size = New System.Drawing.Size(30, 20)
        Me.MaxEncountered.TabIndex = 31
        Me.MaxEncountered.Text = "120"
        '
        'Label13
        '
        Me.Label13.AutoSize = True
        Me.Label13.Location = New System.Drawing.Point(52, 404)
        Me.Label13.Name = "Label13"
        Me.Label13.Size = New System.Drawing.Size(30, 13)
        Me.Label13.TabIndex = 30
        Me.Label13.Text = "Max:"
        '
        'MinEncountered
        '
        Me.MinEncountered.Location = New System.Drawing.Point(83, 375)
        Me.MinEncountered.Name = "MinEncountered"
        Me.MinEncountered.Size = New System.Drawing.Size(30, 20)
        Me.MinEncountered.TabIndex = 29
        Me.MinEncountered.Text = "120"
        '
        'Label14
        '
        Me.Label14.AutoSize = True
        Me.Label14.Location = New System.Drawing.Point(52, 381)
        Me.Label14.Name = "Label14"
        Me.Label14.Size = New System.Drawing.Size(27, 13)
        Me.Label14.TabIndex = 28
        Me.Label14.Text = "Min:"
        '
        'Label15
        '
        Me.Label15.AutoSize = True
        Me.Label15.Location = New System.Drawing.Point(5, 359)
        Me.Label15.Name = "Label15"
        Me.Label15.Size = New System.Drawing.Size(116, 13)
        Me.Label15.TabIndex = 32
        Me.Label15.Text = "Numbers Encountered:"
        '
        'GroupBox1
        '
        Me.GroupBox1.Controls.Add(Me.IgnoreBleeders)
        Me.GroupBox1.Controls.Add(Me.IgnoreStun)
        Me.GroupBox1.Controls.Add(Me.Ignore)
        Me.GroupBox1.Location = New System.Drawing.Point(345, 285)
        Me.GroupBox1.Name = "GroupBox1"
        Me.GroupBox1.Size = New System.Drawing.Size(154, 72)
        Me.GroupBox1.TabIndex = 36
        Me.GroupBox1.TabStop = False
        '
        'IgnoreBleeders
        '
        Me.IgnoreBleeders.AutoSize = True
        Me.IgnoreBleeders.Location = New System.Drawing.Point(6, 49)
        Me.IgnoreBleeders.Name = "IgnoreBleeders"
        Me.IgnoreBleeders.Size = New System.Drawing.Size(145, 17)
        Me.IgnoreBleeders.TabIndex = 38
        Me.IgnoreBleeders.TabStop = True
        Me.IgnoreBleeders.Text = "Ignore Stun and Bleeders"
        Me.IgnoreBleeders.UseVisualStyleBackColor = True
        '
        'IgnoreStun
        '
        Me.IgnoreStun.AutoSize = True
        Me.IgnoreStun.Location = New System.Drawing.Point(6, 31)
        Me.IgnoreStun.Name = "IgnoreStun"
        Me.IgnoreStun.Size = New System.Drawing.Size(80, 17)
        Me.IgnoreStun.TabIndex = 37
        Me.IgnoreStun.TabStop = True
        Me.IgnoreStun.Text = "Ignore Stun"
        Me.IgnoreStun.UseVisualStyleBackColor = True
        '
        'Ignore
        '
        Me.Ignore.AutoSize = True
        Me.Ignore.Location = New System.Drawing.Point(6, 13)
        Me.Ignore.Name = "Ignore"
        Me.Ignore.Size = New System.Drawing.Size(101, 17)
        Me.Ignore.TabIndex = 36
        Me.Ignore.TabStop = True
        Me.Ignore.Text = "Nothing Ignored"
        Me.Ignore.UseVisualStyleBackColor = True
        '
        'BookList
        '
        Me.BookList.FormattingEnabled = True
        Me.BookList.Location = New System.Drawing.Point(292, 6)
        Me.BookList.Name = "BookList"
        Me.BookList.Size = New System.Drawing.Size(120, 95)
        Me.BookList.TabIndex = 37
        '
        'CreatureName
        '
        Me.CreatureName.Location = New System.Drawing.Point(7, 6)
        Me.CreatureName.Name = "CreatureName"
        Me.CreatureName.Size = New System.Drawing.Size(273, 20)
        Me.CreatureName.TabIndex = 38
        '
        'Label1
        '
        Me.Label1.AutoSize = True
        Me.Label1.Location = New System.Drawing.Point(422, 10)
        Me.Label1.Name = "Label1"
        Me.Label1.Size = New System.Drawing.Size(35, 13)
        Me.Label1.TabIndex = 39
        Me.Label1.Text = "Page:"
        '
        'Page
        '
        Me.Page.Location = New System.Drawing.Point(464, 5)
        Me.Page.Name = "Page"
        Me.Page.Size = New System.Drawing.Size(35, 20)
        Me.Page.TabIndex = 40
        '
        'Panel1
        '
        Me.Panel1.Anchor = CType((((System.Windows.Forms.AnchorStyles.Top Or System.Windows.Forms.AnchorStyles.Bottom) _
                    Or System.Windows.Forms.AnchorStyles.Left) _
                    Or System.Windows.Forms.AnchorStyles.Right), System.Windows.Forms.AnchorStyles)
        Me.Panel1.AutoScroll = True
        Me.Panel1.Controls.Add(Me.DisplayAttack1)
        Me.Panel1.Location = New System.Drawing.Point(162, 363)
        Me.Panel1.Name = "Panel1"
        Me.Panel1.Size = New System.Drawing.Size(402, 278)
        Me.Panel1.TabIndex = 42
        Me.Panel1.Visible = False
        '
        'Attacks
        '
        Me.Attacks.FormattingEnabled = True
        Me.Attacks.Location = New System.Drawing.Point(15, 431)
        Me.Attacks.Name = "Attacks"
        Me.Attacks.Size = New System.Drawing.Size(129, 121)
        Me.Attacks.TabIndex = 43
        '
        'AddAttack
        '
        Me.AddAttack.Location = New System.Drawing.Point(17, 559)
        Me.AddAttack.Name = "AddAttack"
        Me.AddAttack.Size = New System.Drawing.Size(127, 23)
        Me.AddAttack.TabIndex = 44
        Me.AddAttack.Text = "Add Attack"
        Me.AddAttack.UseVisualStyleBackColor = True
        '
        'Description
        '
        Me.Description.Location = New System.Drawing.Point(8, 29)
        Me.Description.Multiline = True
        Me.Description.Name = "Description"
        Me.Description.Size = New System.Drawing.Size(271, 71)
        Me.Description.TabIndex = 45
        '
        'DisplayAttack1
        '
        Me.DisplayAttack1.BorderStyle = System.Windows.Forms.BorderStyle.FixedSingle
        Me.DisplayAttack1.Dock = System.Windows.Forms.DockStyle.Fill
        Me.DisplayAttack1.Location = New System.Drawing.Point(0, 0)
        Me.DisplayAttack1.Name = "DisplayAttack1"
        Me.DisplayAttack1.Size = New System.Drawing.Size(402, 278)
        Me.DisplayAttack1.TabIndex = 41
        '
        'RemoveAttack
        '
        Me.RemoveAttack.Location = New System.Drawing.Point(17, 588)
        Me.RemoveAttack.Name = "RemoveAttack"
        Me.RemoveAttack.Size = New System.Drawing.Size(127, 23)
        Me.RemoveAttack.TabIndex = 46
        Me.RemoveAttack.Text = "Remove Attack"
        Me.RemoveAttack.UseVisualStyleBackColor = True
        '
        'DisplayCreature
        '
        Me.AutoScaleDimensions = New System.Drawing.SizeF(6.0!, 13.0!)
        Me.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font
        Me.BorderStyle = System.Windows.Forms.BorderStyle.Fixed3D
        Me.Controls.Add(Me.RemoveAttack)
        Me.Controls.Add(Me.Description)
        Me.Controls.Add(Me.AddAttack)
        Me.Controls.Add(Me.Attacks)
        Me.Controls.Add(Me.Panel1)
        Me.Controls.Add(Me.Page)
        Me.Controls.Add(Me.Label1)
        Me.Controls.Add(Me.CreatureName)
        Me.Controls.Add(Me.BookList)
        Me.Controls.Add(Me.GroupBox1)
        Me.Controls.Add(Me.Label15)
        Me.Controls.Add(Me.MaxEncountered)
        Me.Controls.Add(Me.Label13)
        Me.Controls.Add(Me.MinEncountered)
        Me.Controls.Add(Me.Label14)
        Me.Controls.Add(Me.DB)
        Me.Controls.Add(Me.Label12)
        Me.Controls.Add(Me.AT)
        Me.Controls.Add(Me.Label11)
        Me.Controls.Add(Me.Critical)
        Me.Controls.Add(Me.Label10)
        Me.Controls.Add(Me.HitMod)
        Me.Controls.Add(Me.BaseHits)
        Me.Controls.Add(Me.Label9)
        Me.Controls.Add(Me.MMBonus)
        Me.Controls.Add(Me.Label8)
        Me.Controls.Add(Me.MaxPace)
        Me.Controls.Add(Me.Label7)
        Me.Controls.Add(Me.BaseMove)
        Me.Controls.Add(Me.Label6)
        Me.Controls.Add(Me.AQ)
        Me.Controls.Add(Me.Label5)
        Me.Controls.Add(Me.MS)
        Me.Controls.Add(Me.Label4)
        Me.Controls.Add(Me.BSize)
        Me.Controls.Add(Me.Label3)
        Me.Controls.Add(Me.LevelMod)
        Me.Controls.Add(Me.BaseLevel)
        Me.Controls.Add(Me.Label2)
        Me.Name = "DisplayCreature"
        Me.Size = New System.Drawing.Size(568, 650)
        Me.GroupBox1.ResumeLayout(False)
        Me.GroupBox1.PerformLayout()
        Me.Panel1.ResumeLayout(False)
        Me.ResumeLayout(False)
        Me.PerformLayout()

    End Sub
    Friend WithEvents Label2 As System.Windows.Forms.Label
    Friend WithEvents BaseLevel As System.Windows.Forms.TextBox
    Friend WithEvents LevelMod As System.Windows.Forms.ListBox
    Friend WithEvents BSize As System.Windows.Forms.ListBox
    Friend WithEvents Label3 As System.Windows.Forms.Label
    Friend WithEvents MS As System.Windows.Forms.ListBox
    Friend WithEvents Label4 As System.Windows.Forms.Label
    Friend WithEvents AQ As System.Windows.Forms.ListBox
    Friend WithEvents Label5 As System.Windows.Forms.Label
    Friend WithEvents BaseMove As System.Windows.Forms.TextBox
    Friend WithEvents Label6 As System.Windows.Forms.Label
    Friend WithEvents MaxPace As System.Windows.Forms.ListBox
    Friend WithEvents Label7 As System.Windows.Forms.Label
    Friend WithEvents MMBonus As System.Windows.Forms.TextBox
    Friend WithEvents Label8 As System.Windows.Forms.Label
    Friend WithEvents HitMod As System.Windows.Forms.ListBox
    Friend WithEvents BaseHits As System.Windows.Forms.TextBox
    Friend WithEvents Label9 As System.Windows.Forms.Label
    Friend WithEvents Critical As System.Windows.Forms.ListBox
    Friend WithEvents Label10 As System.Windows.Forms.Label
    Friend WithEvents AT As System.Windows.Forms.TextBox
    Friend WithEvents Label11 As System.Windows.Forms.Label
    Friend WithEvents DB As System.Windows.Forms.TextBox
    Friend WithEvents Label12 As System.Windows.Forms.Label
    Friend WithEvents MaxEncountered As System.Windows.Forms.TextBox
    Friend WithEvents Label13 As System.Windows.Forms.Label
    Friend WithEvents MinEncountered As System.Windows.Forms.TextBox
    Friend WithEvents Label14 As System.Windows.Forms.Label
    Friend WithEvents Label15 As System.Windows.Forms.Label
    Friend WithEvents GroupBox1 As System.Windows.Forms.GroupBox
    Friend WithEvents IgnoreBleeders As System.Windows.Forms.RadioButton
    Friend WithEvents IgnoreStun As System.Windows.Forms.RadioButton
    Friend WithEvents Ignore As System.Windows.Forms.RadioButton
    Friend WithEvents BookList As System.Windows.Forms.ListBox
    Friend WithEvents CreatureName As System.Windows.Forms.TextBox
    Friend WithEvents Label1 As System.Windows.Forms.Label
    Friend WithEvents Page As System.Windows.Forms.TextBox
    Friend WithEvents DisplayAttack1 As CombatTracker.DisplayAttack
    Friend WithEvents Panel1 As System.Windows.Forms.Panel
    Friend WithEvents Attacks As System.Windows.Forms.ListBox
    Friend WithEvents AddAttack As System.Windows.Forms.Button
    Friend WithEvents Description As System.Windows.Forms.TextBox
    Friend WithEvents RemoveAttack As System.Windows.Forms.Button

End Class

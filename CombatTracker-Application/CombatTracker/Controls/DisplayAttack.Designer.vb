<Global.Microsoft.VisualBasic.CompilerServices.DesignerGenerated()> _
Partial Class DisplayAttack
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
        Dim resources As System.ComponentModel.ComponentResourceManager = New System.ComponentModel.ComponentResourceManager(GetType(DisplayAttack))
        Me.GroupBox1 = New System.Windows.Forms.GroupBox
        Me.AttackX = New System.Windows.Forms.TextBox
        Me.Label3 = New System.Windows.Forms.Label
        Me.DamageX = New System.Windows.Forms.TextBox
        Me.Label2 = New System.Windows.Forms.Label
        Me.MaxOB = New System.Windows.Forms.TextBox
        Me.Label5 = New System.Windows.Forms.Label
        Me.Percent = New System.Windows.Forms.TextBox
        Me.Label4 = New System.Windows.Forms.Label
        Me.GroupBox2 = New System.Windows.Forms.GroupBox
        Me.CriticalPoss = New System.Windows.Forms.ListBox
        Me.IsOr = New System.Windows.Forms.CheckBox
        Me.CritAlso = New System.Windows.Forms.RadioButton
        Me.CritType = New System.Windows.Forms.ListBox
        Me.CritInstead = New System.Windows.Forms.RadioButton
        Me.CritNormal = New System.Windows.Forms.RadioButton
        Me.AttackType = New System.Windows.Forms.ListBox
        Me.BSize = New System.Windows.Forms.ListBox
        Me.OB = New System.Windows.Forms.TextBox
        Me.Label1 = New System.Windows.Forms.Label
        Me.Panel1 = New System.Windows.Forms.Panel
        Me.AttackNextRound = New System.Windows.Forms.CheckBox
        Me.ImageList1 = New System.Windows.Forms.ImageList(Me.components)
        Me.CausesAttack = New System.Windows.Forms.CheckBox
        Me.Panel2 = New System.Windows.Forms.Panel
        Me.WeaponType = New System.Windows.Forms.ListBox
        Me.GroupBox1.SuspendLayout()
        Me.GroupBox2.SuspendLayout()
        Me.SuspendLayout()
        '
        'GroupBox1
        '
        Me.GroupBox1.Controls.Add(Me.WeaponType)
        Me.GroupBox1.Controls.Add(Me.AttackX)
        Me.GroupBox1.Controls.Add(Me.Label3)
        Me.GroupBox1.Controls.Add(Me.DamageX)
        Me.GroupBox1.Controls.Add(Me.Label2)
        Me.GroupBox1.Controls.Add(Me.MaxOB)
        Me.GroupBox1.Controls.Add(Me.Label5)
        Me.GroupBox1.Controls.Add(Me.Percent)
        Me.GroupBox1.Controls.Add(Me.Label4)
        Me.GroupBox1.Controls.Add(Me.GroupBox2)
        Me.GroupBox1.Controls.Add(Me.AttackType)
        Me.GroupBox1.Controls.Add(Me.BSize)
        Me.GroupBox1.Controls.Add(Me.OB)
        Me.GroupBox1.Controls.Add(Me.Label1)
        Me.GroupBox1.Location = New System.Drawing.Point(0, 0)
        Me.GroupBox1.Name = "GroupBox1"
        Me.GroupBox1.Size = New System.Drawing.Size(363, 235)
        Me.GroupBox1.TabIndex = 0
        Me.GroupBox1.TabStop = False
        '
        'AttackX
        '
        Me.AttackX.Location = New System.Drawing.Point(182, 93)
        Me.AttackX.Name = "AttackX"
        Me.AttackX.Size = New System.Drawing.Size(22, 20)
        Me.AttackX.TabIndex = 8
        Me.AttackX.Text = "10"
        '
        'Label3
        '
        Me.Label3.AutoSize = True
        Me.Label3.Location = New System.Drawing.Point(104, 96)
        Me.Label3.Name = "Label3"
        Me.Label3.Size = New System.Drawing.Size(72, 13)
        Me.Label3.TabIndex = 7
        Me.Label3.Text = "Attack Times:"
        '
        'DamageX
        '
        Me.DamageX.Location = New System.Drawing.Point(76, 93)
        Me.DamageX.Name = "DamageX"
        Me.DamageX.Size = New System.Drawing.Size(22, 20)
        Me.DamageX.TabIndex = 6
        Me.DamageX.Text = "10"
        '
        'Label2
        '
        Me.Label2.AutoSize = True
        Me.Label2.Location = New System.Drawing.Point(10, 96)
        Me.Label2.Name = "Label2"
        Me.Label2.Size = New System.Drawing.Size(60, 13)
        Me.Label2.TabIndex = 5
        Me.Label2.Text = "Damage X:"
        '
        'MaxOB
        '
        Me.MaxOB.Location = New System.Drawing.Point(33, 41)
        Me.MaxOB.Name = "MaxOB"
        Me.MaxOB.Size = New System.Drawing.Size(29, 20)
        Me.MaxOB.TabIndex = 14
        Me.MaxOB.Text = "250"
        '
        'Label5
        '
        Me.Label5.AutoSize = True
        Me.Label5.Location = New System.Drawing.Point(3, 44)
        Me.Label5.Name = "Label5"
        Me.Label5.Size = New System.Drawing.Size(30, 13)
        Me.Label5.TabIndex = 13
        Me.Label5.Text = "Max:"
        '
        'Percent
        '
        Me.Percent.Location = New System.Drawing.Point(33, 67)
        Me.Percent.Name = "Percent"
        Me.Percent.Size = New System.Drawing.Size(29, 20)
        Me.Percent.TabIndex = 12
        Me.Percent.Text = "250"
        '
        'Label4
        '
        Me.Label4.AutoSize = True
        Me.Label4.Location = New System.Drawing.Point(11, 70)
        Me.Label4.Name = "Label4"
        Me.Label4.Size = New System.Drawing.Size(18, 13)
        Me.Label4.TabIndex = 11
        Me.Label4.Text = "%:"
        '
        'GroupBox2
        '
        Me.GroupBox2.Controls.Add(Me.CriticalPoss)
        Me.GroupBox2.Controls.Add(Me.IsOr)
        Me.GroupBox2.Controls.Add(Me.CritAlso)
        Me.GroupBox2.Controls.Add(Me.CritType)
        Me.GroupBox2.Controls.Add(Me.CritInstead)
        Me.GroupBox2.Controls.Add(Me.CritNormal)
        Me.GroupBox2.Location = New System.Drawing.Point(6, 112)
        Me.GroupBox2.Name = "GroupBox2"
        Me.GroupBox2.Size = New System.Drawing.Size(338, 117)
        Me.GroupBox2.TabIndex = 10
        Me.GroupBox2.TabStop = False
        Me.GroupBox2.Text = "Criticals"
        '
        'CriticalPoss
        '
        Me.CriticalPoss.FormattingEnabled = True
        Me.CriticalPoss.Location = New System.Drawing.Point(284, 13)
        Me.CriticalPoss.Name = "CriticalPoss"
        Me.CriticalPoss.Size = New System.Drawing.Size(52, 95)
        Me.CriticalPoss.TabIndex = 7
        Me.CriticalPoss.Visible = False
        '
        'IsOr
        '
        Me.IsOr.AutoSize = True
        Me.IsOr.Location = New System.Drawing.Point(56, 83)
        Me.IsOr.Name = "IsOr"
        Me.IsOr.Size = New System.Drawing.Size(37, 17)
        Me.IsOr.TabIndex = 10
        Me.IsOr.Text = "Or"
        Me.IsOr.UseVisualStyleBackColor = True
        Me.IsOr.Visible = False
        '
        'CritAlso
        '
        Me.CritAlso.AutoSize = True
        Me.CritAlso.Location = New System.Drawing.Point(12, 60)
        Me.CritAlso.Name = "CritAlso"
        Me.CritAlso.Size = New System.Drawing.Size(67, 17)
        Me.CritAlso.TabIndex = 2
        Me.CritAlso.TabStop = True
        Me.CritAlso.Text = "Use Also"
        Me.CritAlso.UseVisualStyleBackColor = True
        '
        'CritType
        '
        Me.CritType.FormattingEnabled = True
        Me.CritType.Location = New System.Drawing.Point(100, 13)
        Me.CritType.Name = "CritType"
        Me.CritType.Size = New System.Drawing.Size(180, 95)
        Me.CritType.Sorted = True
        Me.CritType.TabIndex = 9
        Me.CritType.Visible = False
        '
        'CritInstead
        '
        Me.CritInstead.AutoSize = True
        Me.CritInstead.Location = New System.Drawing.Point(12, 39)
        Me.CritInstead.Name = "CritInstead"
        Me.CritInstead.Size = New System.Drawing.Size(82, 17)
        Me.CritInstead.TabIndex = 1
        Me.CritInstead.TabStop = True
        Me.CritInstead.Text = "Use Instead"
        Me.CritInstead.UseVisualStyleBackColor = True
        '
        'CritNormal
        '
        Me.CritNormal.AutoSize = True
        Me.CritNormal.Location = New System.Drawing.Point(12, 18)
        Me.CritNormal.Name = "CritNormal"
        Me.CritNormal.Size = New System.Drawing.Size(58, 17)
        Me.CritNormal.TabIndex = 0
        Me.CritNormal.TabStop = True
        Me.CritNormal.Text = "Normal"
        Me.CritNormal.UseVisualStyleBackColor = True
        '
        'AttackType
        '
        Me.AttackType.FormattingEnabled = True
        Me.AttackType.Location = New System.Drawing.Point(68, 18)
        Me.AttackType.Name = "AttackType"
        Me.AttackType.Size = New System.Drawing.Size(124, 69)
        Me.AttackType.Sorted = True
        Me.AttackType.TabIndex = 3
        '
        'BSize
        '
        Me.BSize.FormattingEnabled = True
        Me.BSize.Location = New System.Drawing.Point(198, 18)
        Me.BSize.Name = "BSize"
        Me.BSize.Size = New System.Drawing.Size(59, 69)
        Me.BSize.TabIndex = 2
        '
        'OB
        '
        Me.OB.Location = New System.Drawing.Point(33, 18)
        Me.OB.Name = "OB"
        Me.OB.Size = New System.Drawing.Size(29, 20)
        Me.OB.TabIndex = 1
        Me.OB.Text = "250"
        '
        'Label1
        '
        Me.Label1.AutoSize = True
        Me.Label1.Location = New System.Drawing.Point(11, 21)
        Me.Label1.Name = "Label1"
        Me.Label1.Size = New System.Drawing.Size(25, 13)
        Me.Label1.TabIndex = 0
        Me.Label1.Text = "OB:"
        '
        'Panel1
        '
        Me.Panel1.Anchor = CType((((System.Windows.Forms.AnchorStyles.Top Or System.Windows.Forms.AnchorStyles.Bottom) _
                    Or System.Windows.Forms.AnchorStyles.Left) _
                    Or System.Windows.Forms.AnchorStyles.Right), System.Windows.Forms.AnchorStyles)
        Me.Panel1.AutoScroll = True
        Me.Panel1.Location = New System.Drawing.Point(384, 18)
        Me.Panel1.Name = "Panel1"
        Me.Panel1.Size = New System.Drawing.Size(394, 269)
        Me.Panel1.TabIndex = 3
        Me.Panel1.Visible = False
        '
        'AttackNextRound
        '
        Me.AttackNextRound.Appearance = System.Windows.Forms.Appearance.Button
        Me.AttackNextRound.AutoSize = True
        Me.AttackNextRound.ImageIndex = 2
        Me.AttackNextRound.ImageList = Me.ImageList1
        Me.AttackNextRound.Location = New System.Drawing.Point(340, 59)
        Me.AttackNextRound.Name = "AttackNextRound"
        Me.AttackNextRound.Size = New System.Drawing.Size(38, 38)
        Me.AttackNextRound.TabIndex = 4
        Me.AttackNextRound.UseVisualStyleBackColor = True
        '
        'ImageList1
        '
        Me.ImageList1.ImageStream = CType(resources.GetObject("ImageList1.ImageStream"), System.Windows.Forms.ImageListStreamer)
        Me.ImageList1.TransparentColor = System.Drawing.Color.Transparent
        Me.ImageList1.Images.SetKeyName(0, "ARW06DN.ICO")
        Me.ImageList1.Images.SetKeyName(1, "ARW06LT.ICO")
        Me.ImageList1.Images.SetKeyName(2, "ARW06RT.ICO")
        Me.ImageList1.Images.SetKeyName(3, "ARW06UP.ICO")
        '
        'CausesAttack
        '
        Me.CausesAttack.Appearance = System.Windows.Forms.Appearance.Button
        Me.CausesAttack.AutoSize = True
        Me.CausesAttack.ImageIndex = 0
        Me.CausesAttack.ImageList = Me.ImageList1
        Me.CausesAttack.Location = New System.Drawing.Point(287, 214)
        Me.CausesAttack.Name = "CausesAttack"
        Me.CausesAttack.Size = New System.Drawing.Size(38, 38)
        Me.CausesAttack.TabIndex = 5
        Me.CausesAttack.UseVisualStyleBackColor = True
        '
        'Panel2
        '
        Me.Panel2.AutoScroll = True
        Me.Panel2.Location = New System.Drawing.Point(18, 258)
        Me.Panel2.Name = "Panel2"
        Me.Panel2.Size = New System.Drawing.Size(394, 269)
        Me.Panel2.TabIndex = 6
        Me.Panel2.Visible = False
        '
        'WeaponType
        '
        Me.WeaponType.FormattingEnabled = True
        Me.WeaponType.Location = New System.Drawing.Point(198, 18)
        Me.WeaponType.Name = "WeaponType"
        Me.WeaponType.Size = New System.Drawing.Size(127, 69)
        Me.WeaponType.Sorted = True
        Me.WeaponType.TabIndex = 15
        Me.WeaponType.Visible = False
        '
        'DisplayAttack
        '
        Me.AutoScaleDimensions = New System.Drawing.SizeF(6.0!, 13.0!)
        Me.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font
        Me.BorderStyle = System.Windows.Forms.BorderStyle.FixedSingle
        Me.Controls.Add(Me.Panel2)
        Me.Controls.Add(Me.CausesAttack)
        Me.Controls.Add(Me.AttackNextRound)
        Me.Controls.Add(Me.Panel1)
        Me.Controls.Add(Me.GroupBox1)
        Me.Name = "DisplayAttack"
        Me.Size = New System.Drawing.Size(380, 255)
        Me.GroupBox1.ResumeLayout(False)
        Me.GroupBox1.PerformLayout()
        Me.GroupBox2.ResumeLayout(False)
        Me.GroupBox2.PerformLayout()
        Me.ResumeLayout(False)
        Me.PerformLayout()

    End Sub
    Friend WithEvents GroupBox1 As System.Windows.Forms.GroupBox
    Friend WithEvents BSize As System.Windows.Forms.ListBox
    Friend WithEvents OB As System.Windows.Forms.TextBox
    Friend WithEvents Label1 As System.Windows.Forms.Label
    Friend WithEvents AttackType As System.Windows.Forms.ListBox
    Friend WithEvents Label2 As System.Windows.Forms.Label
    Friend WithEvents AttackX As System.Windows.Forms.TextBox
    Friend WithEvents Label3 As System.Windows.Forms.Label
    Friend WithEvents DamageX As System.Windows.Forms.TextBox
    Friend WithEvents CritType As System.Windows.Forms.ListBox
    Friend WithEvents GroupBox2 As System.Windows.Forms.GroupBox
    Friend WithEvents CritAlso As System.Windows.Forms.RadioButton
    Friend WithEvents CritInstead As System.Windows.Forms.RadioButton
    Friend WithEvents CritNormal As System.Windows.Forms.RadioButton
    Friend WithEvents IsOr As System.Windows.Forms.CheckBox
    Friend WithEvents Panel1 As System.Windows.Forms.Panel
    Friend WithEvents AttackNextRound As System.Windows.Forms.CheckBox
    Friend WithEvents ImageList1 As System.Windows.Forms.ImageList
    Friend WithEvents CausesAttack As System.Windows.Forms.CheckBox
    Friend WithEvents Panel2 As System.Windows.Forms.Panel
    Friend WithEvents Percent As System.Windows.Forms.TextBox
    Friend WithEvents Label4 As System.Windows.Forms.Label
    Friend WithEvents MaxOB As System.Windows.Forms.TextBox
    Friend WithEvents Label5 As System.Windows.Forms.Label
    Friend WithEvents CriticalPoss As System.Windows.Forms.ListBox
    Friend WithEvents WeaponType As System.Windows.Forms.ListBox

End Class

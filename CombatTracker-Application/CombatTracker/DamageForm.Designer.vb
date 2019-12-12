<Global.Microsoft.VisualBasic.CompilerServices.DesignerGenerated()> _
Partial Class DamageForm
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
        Me.ListBox1 = New System.Windows.Forms.ListBox
        Me.Label1 = New System.Windows.Forms.Label
        Me.Damage = New System.Windows.Forms.TextBox
        Me.IsCritical = New System.Windows.Forms.CheckBox
        Me.GroupBox1 = New System.Windows.Forms.GroupBox
        Me.MustParryNeg = New System.Windows.Forms.TextBox
        Me.PosBonus = New System.Windows.Forms.TextBox
        Me.PosRounds = New System.Windows.Forms.TextBox
        Me.Label8 = New System.Windows.Forms.Label
        Me.NegBonus = New System.Windows.Forms.TextBox
        Me.NegRounds = New System.Windows.Forms.TextBox
        Me.Label7 = New System.Windows.Forms.Label
        Me.Bleeding = New System.Windows.Forms.TextBox
        Me.Label6 = New System.Windows.Forms.Label
        Me.RoundsNoParry = New System.Windows.Forms.TextBox
        Me.Label5 = New System.Windows.Forms.Label
        Me.RoundsMustParry = New System.Windows.Forms.TextBox
        Me.Label4 = New System.Windows.Forms.Label
        Me.StunRounds = New System.Windows.Forms.TextBox
        Me.Label3 = New System.Windows.Forms.Label
        Me.AdditionalHits = New System.Windows.Forms.TextBox
        Me.Label2 = New System.Windows.Forms.Label
        Me.ListBox2 = New System.Windows.Forms.ListBox
        Me.Ok = New System.Windows.Forms.Button
        Me.Cancel = New System.Windows.Forms.Button
        Me.GroupBox1.SuspendLayout()
        Me.SuspendLayout()
        '
        'ListBox1
        '
        Me.ListBox1.FormattingEnabled = True
        Me.ListBox1.Location = New System.Drawing.Point(12, 12)
        Me.ListBox1.Name = "ListBox1"
        Me.ListBox1.Size = New System.Drawing.Size(173, 121)
        Me.ListBox1.TabIndex = 0
        '
        'Label1
        '
        Me.Label1.AutoSize = True
        Me.Label1.Location = New System.Drawing.Point(191, 12)
        Me.Label1.Name = "Label1"
        Me.Label1.Size = New System.Drawing.Size(50, 13)
        Me.Label1.TabIndex = 1
        Me.Label1.Text = "Damage:"
        '
        'Damage
        '
        Me.Damage.Location = New System.Drawing.Point(248, 12)
        Me.Damage.Name = "Damage"
        Me.Damage.Size = New System.Drawing.Size(40, 20)
        Me.Damage.TabIndex = 2
        '
        'IsCritical
        '
        Me.IsCritical.AutoSize = True
        Me.IsCritical.Location = New System.Drawing.Point(0, 0)
        Me.IsCritical.Name = "IsCritical"
        Me.IsCritical.Size = New System.Drawing.Size(68, 17)
        Me.IsCritical.TabIndex = 3
        Me.IsCritical.Text = "Is Critical"
        Me.IsCritical.UseVisualStyleBackColor = True
        '
        'GroupBox1
        '
        Me.GroupBox1.Controls.Add(Me.MustParryNeg)
        Me.GroupBox1.Controls.Add(Me.PosBonus)
        Me.GroupBox1.Controls.Add(Me.PosRounds)
        Me.GroupBox1.Controls.Add(Me.Label8)
        Me.GroupBox1.Controls.Add(Me.NegBonus)
        Me.GroupBox1.Controls.Add(Me.NegRounds)
        Me.GroupBox1.Controls.Add(Me.Label7)
        Me.GroupBox1.Controls.Add(Me.Bleeding)
        Me.GroupBox1.Controls.Add(Me.Label6)
        Me.GroupBox1.Controls.Add(Me.RoundsNoParry)
        Me.GroupBox1.Controls.Add(Me.Label5)
        Me.GroupBox1.Controls.Add(Me.RoundsMustParry)
        Me.GroupBox1.Controls.Add(Me.Label4)
        Me.GroupBox1.Controls.Add(Me.StunRounds)
        Me.GroupBox1.Controls.Add(Me.Label3)
        Me.GroupBox1.Controls.Add(Me.AdditionalHits)
        Me.GroupBox1.Controls.Add(Me.Label2)
        Me.GroupBox1.Controls.Add(Me.IsCritical)
        Me.GroupBox1.Location = New System.Drawing.Point(207, 38)
        Me.GroupBox1.Name = "GroupBox1"
        Me.GroupBox1.Size = New System.Drawing.Size(209, 203)
        Me.GroupBox1.TabIndex = 4
        Me.GroupBox1.TabStop = False
        '
        'MustParryNeg
        '
        Me.MustParryNeg.Location = New System.Drawing.Point(160, 69)
        Me.MustParryNeg.Name = "MustParryNeg"
        Me.MustParryNeg.Size = New System.Drawing.Size(40, 20)
        Me.MustParryNeg.TabIndex = 20
        '
        'PosBonus
        '
        Me.PosBonus.Location = New System.Drawing.Point(135, 172)
        Me.PosBonus.Name = "PosBonus"
        Me.PosBonus.Size = New System.Drawing.Size(40, 20)
        Me.PosBonus.TabIndex = 19
        '
        'PosRounds
        '
        Me.PosRounds.Location = New System.Drawing.Point(89, 172)
        Me.PosRounds.Name = "PosRounds"
        Me.PosRounds.Size = New System.Drawing.Size(40, 20)
        Me.PosRounds.TabIndex = 18
        '
        'Label8
        '
        Me.Label8.AutoSize = True
        Me.Label8.Location = New System.Drawing.Point(6, 175)
        Me.Label8.Name = "Label8"
        Me.Label8.Size = New System.Drawing.Size(61, 13)
        Me.Label8.TabIndex = 17
        Me.Label8.Text = "Pos Bonus:"
        '
        'NegBonus
        '
        Me.NegBonus.Location = New System.Drawing.Point(135, 146)
        Me.NegBonus.Name = "NegBonus"
        Me.NegBonus.Size = New System.Drawing.Size(40, 20)
        Me.NegBonus.TabIndex = 16
        '
        'NegRounds
        '
        Me.NegRounds.Location = New System.Drawing.Point(89, 146)
        Me.NegRounds.Name = "NegRounds"
        Me.NegRounds.Size = New System.Drawing.Size(40, 20)
        Me.NegRounds.TabIndex = 15
        '
        'Label7
        '
        Me.Label7.AutoSize = True
        Me.Label7.Location = New System.Drawing.Point(6, 149)
        Me.Label7.Name = "Label7"
        Me.Label7.Size = New System.Drawing.Size(63, 13)
        Me.Label7.TabIndex = 14
        Me.Label7.Text = "Neg Bonus:"
        '
        'Bleeding
        '
        Me.Bleeding.Location = New System.Drawing.Point(75, 121)
        Me.Bleeding.Name = "Bleeding"
        Me.Bleeding.Size = New System.Drawing.Size(40, 20)
        Me.Bleeding.TabIndex = 13
        '
        'Label6
        '
        Me.Label6.AutoSize = True
        Me.Label6.Location = New System.Drawing.Point(6, 124)
        Me.Label6.Name = "Label6"
        Me.Label6.Size = New System.Drawing.Size(63, 13)
        Me.Label6.TabIndex = 12
        Me.Label6.Text = "Bleeding at:"
        '
        'RoundsNoParry
        '
        Me.RoundsNoParry.Location = New System.Drawing.Point(124, 95)
        Me.RoundsNoParry.Name = "RoundsNoParry"
        Me.RoundsNoParry.Size = New System.Drawing.Size(40, 20)
        Me.RoundsNoParry.TabIndex = 11
        '
        'Label5
        '
        Me.Label5.AutoSize = True
        Me.Label5.Location = New System.Drawing.Point(6, 98)
        Me.Label5.Name = "Label5"
        Me.Label5.Size = New System.Drawing.Size(103, 13)
        Me.Label5.TabIndex = 10
        Me.Label5.Text = "Rounds of No Parry:"
        '
        'RoundsMustParry
        '
        Me.RoundsMustParry.Location = New System.Drawing.Point(114, 69)
        Me.RoundsMustParry.Name = "RoundsMustParry"
        Me.RoundsMustParry.Size = New System.Drawing.Size(40, 20)
        Me.RoundsMustParry.TabIndex = 9
        '
        'Label4
        '
        Me.Label4.AutoSize = True
        Me.Label4.Location = New System.Drawing.Point(6, 72)
        Me.Label4.Name = "Label4"
        Me.Label4.Size = New System.Drawing.Size(112, 13)
        Me.Label4.TabIndex = 8
        Me.Label4.Text = "Rounds of Must Parry:"
        '
        'StunRounds
        '
        Me.StunRounds.Location = New System.Drawing.Point(89, 43)
        Me.StunRounds.Name = "StunRounds"
        Me.StunRounds.Size = New System.Drawing.Size(40, 20)
        Me.StunRounds.TabIndex = 7
        '
        'Label3
        '
        Me.Label3.AutoSize = True
        Me.Label3.Location = New System.Drawing.Point(6, 46)
        Me.Label3.Name = "Label3"
        Me.Label3.Size = New System.Drawing.Size(84, 13)
        Me.Label3.TabIndex = 6
        Me.Label3.Text = "Rounds of Stun:"
        '
        'AdditionalHits
        '
        Me.AdditionalHits.Location = New System.Drawing.Point(89, 17)
        Me.AdditionalHits.Name = "AdditionalHits"
        Me.AdditionalHits.Size = New System.Drawing.Size(40, 20)
        Me.AdditionalHits.TabIndex = 5
        '
        'Label2
        '
        Me.Label2.AutoSize = True
        Me.Label2.Location = New System.Drawing.Point(6, 20)
        Me.Label2.Name = "Label2"
        Me.Label2.Size = New System.Drawing.Size(77, 13)
        Me.Label2.TabIndex = 4
        Me.Label2.Text = "Additional Hits:"
        '
        'ListBox2
        '
        Me.ListBox2.FormattingEnabled = True
        Me.ListBox2.Location = New System.Drawing.Point(12, 137)
        Me.ListBox2.Name = "ListBox2"
        Me.ListBox2.Size = New System.Drawing.Size(173, 186)
        Me.ListBox2.TabIndex = 5
        '
        'Ok
        '
        Me.Ok.Location = New System.Drawing.Point(227, 253)
        Me.Ok.Name = "Ok"
        Me.Ok.Size = New System.Drawing.Size(124, 23)
        Me.Ok.TabIndex = 6
        Me.Ok.Text = "Ok"
        Me.Ok.UseVisualStyleBackColor = True
        '
        'Cancel
        '
        Me.Cancel.Location = New System.Drawing.Point(227, 282)
        Me.Cancel.Name = "Cancel"
        Me.Cancel.Size = New System.Drawing.Size(124, 24)
        Me.Cancel.TabIndex = 7
        Me.Cancel.Text = "Cancel"
        Me.Cancel.UseVisualStyleBackColor = True
        '
        'DamageForm
        '
        Me.AutoScaleDimensions = New System.Drawing.SizeF(6.0!, 13.0!)
        Me.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font
        Me.ClientSize = New System.Drawing.Size(428, 343)
        Me.Controls.Add(Me.Cancel)
        Me.Controls.Add(Me.Ok)
        Me.Controls.Add(Me.ListBox2)
        Me.Controls.Add(Me.GroupBox1)
        Me.Controls.Add(Me.Damage)
        Me.Controls.Add(Me.Label1)
        Me.Controls.Add(Me.ListBox1)
        Me.Name = "DamageForm"
        Me.Text = "DamageForm"
        Me.GroupBox1.ResumeLayout(False)
        Me.GroupBox1.PerformLayout()
        Me.ResumeLayout(False)
        Me.PerformLayout()

    End Sub
    Friend WithEvents ListBox1 As System.Windows.Forms.ListBox
    Friend WithEvents Label1 As System.Windows.Forms.Label
    Friend WithEvents Damage As System.Windows.Forms.TextBox
    Friend WithEvents IsCritical As System.Windows.Forms.CheckBox
    Friend WithEvents GroupBox1 As System.Windows.Forms.GroupBox
    Friend WithEvents PosBonus As System.Windows.Forms.TextBox
    Friend WithEvents PosRounds As System.Windows.Forms.TextBox
    Friend WithEvents Label8 As System.Windows.Forms.Label
    Friend WithEvents NegBonus As System.Windows.Forms.TextBox
    Friend WithEvents NegRounds As System.Windows.Forms.TextBox
    Friend WithEvents Label7 As System.Windows.Forms.Label
    Friend WithEvents Bleeding As System.Windows.Forms.TextBox
    Friend WithEvents Label6 As System.Windows.Forms.Label
    Friend WithEvents RoundsNoParry As System.Windows.Forms.TextBox
    Friend WithEvents Label5 As System.Windows.Forms.Label
    Friend WithEvents RoundsMustParry As System.Windows.Forms.TextBox
    Friend WithEvents Label4 As System.Windows.Forms.Label
    Friend WithEvents StunRounds As System.Windows.Forms.TextBox
    Friend WithEvents Label3 As System.Windows.Forms.Label
    Friend WithEvents AdditionalHits As System.Windows.Forms.TextBox
    Friend WithEvents Label2 As System.Windows.Forms.Label
    Friend WithEvents ListBox2 As System.Windows.Forms.ListBox
    Friend WithEvents Ok As System.Windows.Forms.Button
    Friend WithEvents Cancel As System.Windows.Forms.Button
    Friend WithEvents MustParryNeg As System.Windows.Forms.TextBox
End Class

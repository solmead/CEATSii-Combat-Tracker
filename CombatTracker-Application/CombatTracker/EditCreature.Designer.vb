<Global.Microsoft.VisualBasic.CompilerServices.DesignerGenerated()> _
Partial Class EditCreature
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
        Me.Button1 = New System.Windows.Forms.Button
        Me.AddNew = New System.Windows.Forms.Button
        Me.Panel1 = New System.Windows.Forms.Panel
        Me.Button2 = New System.Windows.Forms.Button
        Me.Button3 = New System.Windows.Forms.Button
        Me.CD = New CombatTracker.DisplayCreature(DB)
        Me.Button4 = New System.Windows.Forms.Button
        Me.Panel1.SuspendLayout()
        Me.SuspendLayout()
        '
        'ListBox1
        '
        Me.ListBox1.FormattingEnabled = True
        Me.ListBox1.Location = New System.Drawing.Point(15, 37)
        Me.ListBox1.Name = "ListBox1"
        Me.ListBox1.Size = New System.Drawing.Size(228, 238)
        Me.ListBox1.Sorted = True
        Me.ListBox1.TabIndex = 0
        '
        'Button1
        '
        Me.Button1.Location = New System.Drawing.Point(42, 320)
        Me.Button1.Name = "Button1"
        Me.Button1.Size = New System.Drawing.Size(149, 25)
        Me.Button1.TabIndex = 1
        Me.Button1.Text = "Create Single Creature"
        Me.Button1.UseVisualStyleBackColor = True
        '
        'AddNew
        '
        Me.AddNew.Location = New System.Drawing.Point(42, 285)
        Me.AddNew.Name = "AddNew"
        Me.AddNew.Size = New System.Drawing.Size(149, 25)
        Me.AddNew.TabIndex = 2
        Me.AddNew.Text = "Add New"
        Me.AddNew.UseVisualStyleBackColor = True
        '
        'Panel1
        '
        Me.Panel1.Anchor = CType((((System.Windows.Forms.AnchorStyles.Top Or System.Windows.Forms.AnchorStyles.Bottom) _
                    Or System.Windows.Forms.AnchorStyles.Left) _
                    Or System.Windows.Forms.AnchorStyles.Right), System.Windows.Forms.AnchorStyles)
        Me.Panel1.Controls.Add(Me.CD)
        Me.Panel1.Location = New System.Drawing.Point(282, 28)
        Me.Panel1.Name = "Panel1"
        Me.Panel1.Size = New System.Drawing.Size(585, 640)
        Me.Panel1.TabIndex = 3
        '
        'Button2
        '
        Me.Button2.Location = New System.Drawing.Point(42, 387)
        Me.Button2.Name = "Button2"
        Me.Button2.Size = New System.Drawing.Size(149, 25)
        Me.Button2.TabIndex = 4
        Me.Button2.Text = "Save"
        Me.Button2.UseVisualStyleBackColor = True
        '
        'Button3
        '
        Me.Button3.Location = New System.Drawing.Point(42, 353)
        Me.Button3.Name = "Button3"
        Me.Button3.Size = New System.Drawing.Size(149, 25)
        Me.Button3.TabIndex = 5
        Me.Button3.Text = "Create Encounter"
        Me.Button3.UseVisualStyleBackColor = True
        '
        'CD
        '
        Me.CD.BorderStyle = System.Windows.Forms.BorderStyle.Fixed3D
        Me.CD.Dock = System.Windows.Forms.DockStyle.Fill
        Me.CD.Location = New System.Drawing.Point(0, 0)
        Me.CD.Name = "CD"
        Me.CD.Size = New System.Drawing.Size(585, 640)
        Me.CD.TabIndex = 0
        '
        'Button4
        '
        Me.Button4.Location = New System.Drawing.Point(42, 418)
        Me.Button4.Name = "Button4"
        Me.Button4.Size = New System.Drawing.Size(149, 27)
        Me.Button4.TabIndex = 6
        Me.Button4.Text = "Copy"
        Me.Button4.UseVisualStyleBackColor = True
        '
        'EditCreature
        '
        Me.AutoScaleDimensions = New System.Drawing.SizeF(6.0!, 13.0!)
        Me.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font
        Me.ClientSize = New System.Drawing.Size(879, 680)
        Me.Controls.Add(Me.Button4)
        Me.Controls.Add(Me.Button3)
        Me.Controls.Add(Me.Button2)
        Me.Controls.Add(Me.Panel1)
        Me.Controls.Add(Me.AddNew)
        Me.Controls.Add(Me.Button1)
        Me.Controls.Add(Me.ListBox1)
        Me.Name = "EditCreature"
        Me.Text = "Form1"
        Me.Panel1.ResumeLayout(False)
        Me.ResumeLayout(False)

    End Sub
    Friend WithEvents ListBox1 As System.Windows.Forms.ListBox
    Friend WithEvents Button1 As System.Windows.Forms.Button
    Friend WithEvents AddNew As System.Windows.Forms.Button
    Friend WithEvents Panel1 As System.Windows.Forms.Panel
    Friend WithEvents Button2 As System.Windows.Forms.Button
    Friend WithEvents Button3 As System.Windows.Forms.Button
    Friend WithEvents CD As CombatTracker.DisplayCreature
    Friend WithEvents Button4 As System.Windows.Forms.Button

End Class

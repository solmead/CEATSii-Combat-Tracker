Public Class EditCreature
    Private DB As RMSSDataDataContext
    Public GI As New Game
    Public Sub New(ByVal TheDB As RMSSDataDataContext, ByVal TheGI As Game)
        GI = TheGI
        DB = TheDB
        Me.InitializeComponent()
    End Sub
    Private Sub CD_NameChange() Handles CD.NameChange
        Dim Cr, Cr2 As Creature
        Cr2 = ListBox1.SelectedItem
        ListBox1.Items.Clear()
        For Each Cr In From C In DB.Creatures Order By C.TypeName Select C
            ListBox1.Items.Add(Cr)
        Next
        ListBox1.SelectedItem = Cr2
    End Sub
    'Public CD As CreatureDisplay
    Private Sub Button1_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles Button1.Click
        If ListBox1.SelectedItem IsNot Nothing Then
            Dim Cr As Creature = ListBox1.SelectedItem
            Dim Ca As Actor
            Ca = Cr.GetActor(DB, GI)
            'Ca.Name = Cr.TypeName
            'GI.Chars.Add(Ca)
            'Dim SC As CritAffects
            'SC = New CritAffects
            'SC.IsStunned = True
            'MD.AddCritToChar(Ca, SC, 3)
            'SC = New CritAffects
            'SC.IsStunned = True
            'SC.Parry = CritAffects.ParryType.No_Parry
            'SC.Negative = -20
            'MD.AddCritToChar(Ca, SC, 1)
            Cr.Save(DB)
            Me.Hide()
        End If
    End Sub

    Private Sub AddNew_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles AddNew.Click
        Dim TypeName As String = InputBox("What is Type Name?")
        Dim Cr As New Creature
        Cr.TypeName = TypeName
        Cr.Save(DB)
        'MD.CreatureList.Add(Cr)
        ListBox1.Items.Add(Cr)
        ListBox1.SelectedItem = Cr
    End Sub

    Private Sub ListBox1_SelectedIndexChanged(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles ListBox1.SelectedIndexChanged
        If CD IsNot Nothing AndAlso CD.Monster Is ListBox1.SelectedItem Then
            Exit Sub
        ElseIf CD IsNot Nothing Then
            Panel1.Controls.Remove(CD)
            CD.Dispose()
        End If
        CD = New DisplayCreature(DB, ListBox1.SelectedItem)
        CD.Dock = DockStyle.Fill
        Panel1.Controls.Add(CD)

    End Sub

    Private Sub Button2_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles Button2.Click
        CD.Monster.Save(DB)
        'MD.Save()

    End Sub

    Private Sub Form1_Load(ByVal sender As Object, ByVal e As System.EventArgs) Handles Me.Load


        Dim Cr As Creature
        ListBox1.Items.Clear()
        Dim List = (From C In DB.Creatures Order By C.TypeName Select C).ToList
        For Each Cr In List
            ListBox1.Items.Add(Cr)
        Next
        If List.Count > 0 Then ListBox1.SelectedItem = List(0)
    End Sub

    Private Sub Button3_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles Button3.Click
        If ListBox1.SelectedItem IsNot Nothing Then
            Dim Cr As Creature = ListBox1.SelectedItem
            Dim Roll As Integer = Rn.Next(Cr.MinEncountered, Cr.MaxEncountered)
            Debug.WriteLine("Cr.MinEncountered=" & Cr.MinEncountered)
            Debug.WriteLine("Cr.MaxEncountered=" & Cr.MaxEncountered)
            Debug.WriteLine("Roll=" & Roll)

            Dim a As Integer
            For a = 1 To Roll
                Dim Ca As Actor
                Ca = Cr.GetActor(DB, GI)
                Ca.Name = Ca.Name & " " & a
                'GI.Chars.Add(Ca)
                'Dim SC As CritAffects
                'SC = New CritAffects
                'SC.IsStunned = True
                'MD.AddCritToChar(Ca, SC, 3)
                'SC = New CritAffects
                'SC.IsStunned = True
                'SC.Parry = CritAffects.ParryType.No_Parry
                'SC.Negative = -20
                'MD.AddCritToChar(Ca, SC, 1)
            Next
            Me.Hide()
        End If
    End Sub

    'Private Sub Button4_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles Button4.Click
    '    If ListBox1.SelectedItem IsNot Nothing Then
    '        Dim Cr As Creature = CType(ListBox1.SelectedItem, Creature).clone
    '        Cr.TypeName = Cr.TypeName & " 2"
    '        MD.CreatureList.Add(Cr)
    '        ListBox1.Items.Add(Cr)
    '        ListBox1.SelectedItem = Cr
    '    End If
    'End Sub
End Class

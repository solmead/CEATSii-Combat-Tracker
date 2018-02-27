Public Class EditPreBuiltChar
    Public GI As New Game
    Public DB As RMSSDataDataContext
    Public Sub New(ByVal TheDB As RMSSDataDataContext, ByVal TheGI As Game)
        GI = TheGI
        DB = TheDB
        Me.InitializeComponent()
    End Sub


    Private Sub Button1_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles Button1.Click
        If ListBox1.SelectedItem IsNot Nothing Then
            Dim Cr As Character = ListBox1.SelectedItem
            Dim Ca As Actor
            Ca = Cr.GetActor(DB, GI)
            'Ca.Name = Cr.Name
            'GI.Chars.Add(Ca)
        End If
    End Sub

    Private Sub Button2_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles Button2.Click
        CD.Monster.Save(DB)
    End Sub

    Private Sub AddNew_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles AddNew.Click
        Dim TypeName As String = InputBox("What is Pre Built Characters Name?")
        Dim Cr As New Character
        Cr.Name = TypeName
        Cr.Save(DB)
        'MD.PreBuiltCharsList.Add(Cr)
        ListBox1.Items.Add(Cr)
        ListBox1.SelectedItem = Cr
    End Sub

    Private Sub EditHandCreated_Load(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles MyBase.Load
        Dim Cr As Character
        ListBox1.Items.Clear()
        Dim List = (From c In DB.Characters Select c).ToList
        For Each Cr In List
            ListBox1.Items.Add(Cr)
        Next
        If List.Count > 0 Then ListBox1.SelectedItem = List(0)
    End Sub

    Private Sub ListBox1_SelectedIndexChanged(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles ListBox1.SelectedIndexChanged
        If CD IsNot Nothing Then
            Panel1.Controls.Remove(CD)
            CD.Dispose()
        End If
        CD = New DisplayPreBuitChars(ListBox1.SelectedItem)
        CD.Dock = DockStyle.Fill
        Panel1.Controls.Add(CD)
    End Sub


    Private Sub CD_NameChange() Handles CD.NameChange
        ListBox1.Refresh()
    End Sub
End Class
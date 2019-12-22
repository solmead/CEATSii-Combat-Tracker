Public Class CharacterDisplay
    Private Car As Actor
    Public Sub New(ByVal WhoAmI As Actor)
        Me.InitializeComponent()

    End Sub

    Private Sub CharName_TextChanged(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles CharName.TextChanged
        Car.Name = CharName.Text
    End Sub

    Private Sub CharacterDisplay_Load(ByVal sender As Object, ByVal e As System.EventArgs) Handles Me.Load
        CharName.Text = Car.Name

    End Sub
End Class

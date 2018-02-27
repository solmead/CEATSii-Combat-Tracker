Imports System.Net
Imports System.Net.Mail


Public Class SendingEmail
    Public Shared Sub DisplayEmailList(ByVal ToUserList As List(Of SystemUser))
        For Each u In ToUserList
            Debug.WriteLine("     " & u.FullName & " - " & u.EmailAddress)
        Next
    End Sub

    Public Shared Sub SendEmail(ByVal ToUser As MailAddress, ByVal Subject As String, ByVal Body As String)
        Dim Message As New MailMessage()
        Message.To.Add(ToUser)
        Message.Subject = Subject
        Message.Body = Body
        Message.IsBodyHtml = True
        Dim Client = New SmtpClient
        Client.Send(Message)
    End Sub
    Public Shared Sub SendEmail(ByVal ToUserList As List(Of MailAddress), ByVal Subject As String, ByVal Body As String)
        Dim Message As New MailMessage()
        For Each U In ToUserList
            Message.To.Add(U)
        Next
        Message.Subject = Subject
        Message.Body = Body
        Message.IsBodyHtml = True
        Dim Client = New SmtpClient
        Client.Send(Message)
    End Sub
End Class

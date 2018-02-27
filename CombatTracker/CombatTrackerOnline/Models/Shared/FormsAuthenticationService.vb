Public Interface IFormsAuthentication

    Sub SignIn(ByVal userName As String, ByVal createPersistentCookie As Boolean)
    Sub SignOut()

End Interface


Public Class FormsAuthenticationService
    Implements IFormsAuthentication

    Public Sub SignIn(ByVal userName As String, ByVal createPersistentCookie As Boolean) Implements IFormsAuthentication.SignIn
        FormsAuthentication.SetAuthCookie(userName, createPersistentCookie)
    End Sub

    Public Sub SignOut() Implements IFormsAuthentication.SignOut
        FormsAuthentication.SignOut()
    End Sub

End Class

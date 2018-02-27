Imports System.Globalization
Imports System.Security.Principal

<HandleError()> _
Public Class AccountController
    Inherits BaseController

    Private _formsAuth As IFormsAuthentication
    Private _service As IMembershipService

    ' This constructor is used by the MVC framework to instantiate the controller using
    ' the default forms authentication and membership providers.

    Sub New()
        Me.New(Nothing, Nothing)
    End Sub

    ' This constructor is not used by the MVC framework but is instead provided for ease
    ' of unit testing this type. See the comments at the end of this file for more
    ' information.

    Sub New(ByVal formsAuth As IFormsAuthentication, ByVal service As IMembershipService)
        If formsAuth IsNot Nothing Then
            _DB = Nothing
        End If
        _formsAuth = If(formsAuth, New FormsAuthenticationService())
        _service = If(service, New AccountMembershipService())
    End Sub

    ReadOnly Property FormsAuth() As IFormsAuthentication
        Get
            Return _formsAuth
        End Get
    End Property

    Public Function GetRoles() As List(Of Mvc.SelectListItem)
        Dim RoleList As New List(Of Mvc.SelectListItem)
        RoleList.Add(New Mvc.SelectListItem() With {.Text = "", .Value = "None"})
        RoleList.Add(New Mvc.SelectListItem() With {.Text = "Administrator", .Value = "Administrator"})
        RoleList.Add(New Mvc.SelectListItem() With {.Text = "GM", .Value = "GM"})
        RoleList.Add(New Mvc.SelectListItem() With {.Text = "Player", .Value = "Player"})
        Return RoleList
    End Function

    ReadOnly Property MembershipService() As IMembershipService
        Get
            Return _service
        End Get
    End Property

    Function Login() As ActionResult

        ViewData("Title") = "Log On"

        Return View()
    End Function

    <Authorize(Roles:="Administrator")> _
    <AcceptVerbs(HttpVerbs.Post)> _
    Function Activate(ByVal id As Guid) As ActionResult
        Dim SU = SystemUser.Load(DB, id)
        SU.IsApproved = True
        Try
            SU.Save(DB)
        Catch ex As Exception

        End Try
        Return RedirectToAction("Edit", "Account", New With {.ID = SU.UserId})
    End Function

    <Authorize(Roles:="Administrator")> _
    <AcceptVerbs(HttpVerbs.Post)> _
    Function Deactivate(ByVal id As Guid) As ActionResult
        Dim SU = SystemUser.Load(DB, id)
        SU.IsApproved = False
        Try
            SU.Save(DB)
        Catch ex As Exception

        End Try
        Return RedirectToAction("Edit", "Account", New With {.ID = SU.UserId})
    End Function

    <Authorize(Roles:="Administrator")> _
    <AcceptVerbs(HttpVerbs.Post)> _
    Function Unlock(ByVal id As Guid) As ActionResult
        Dim SU = SystemUser.Load(DB, id)
        SU.IsLockedOut = False
        Try
            SU.Save(DB)
        Catch ex As Exception

        End Try
        Return RedirectToAction("Edit", "Account", New With {.ID = SU.UserId})
    End Function

    <Authorize(Roles:="Administrator")> _
    Function Index(ByVal page As Nullable(Of Integer), ByVal Format As Nullable(Of ReturnFormat)) As ActionResult
        Dim PaginatedItems As PaginatedList(Of SystemUser)
        If Not (Format.HasValue AndAlso (Format = ReturnFormat.JSON OrElse Format = ReturnFormat.XML)) Then
            If Not page.HasValue Then page = 1
        End If
        Dim CList = From U In DB.SystemUsers Order By U.LastName, U.UserName Select U

        If page.HasValue Then
            PaginatedItems = New PaginatedList(Of SystemUser)(CList, page, 10, "Account", "DefaultPaging")
        Else
            PaginatedItems = New PaginatedList(Of SystemUser)(CList, page, CList.Count + 10, "Account", "DefaultPaging")
        End If

        If Format = ReturnFormat.JSON Then
            Dim List = From C In PaginatedItems.ToList Select C.UserId, C.UserName, C.EmailAddress
            Return Json(List)
        Else
            Return View(PaginatedItems)
        End If
    End Function

    <AcceptVerbs(HttpVerbs.Post)> _
    <System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Design", "CA1054:UriParametersShouldNotBeStrings", _
            Justification:="Needs to take same parameter type as Controller.Redirect()")> _
    Function Login(ByVal userName As String, ByVal password As String, ByVal rememberMe As Boolean, ByVal returnUrl As String) As ActionResult

        ViewData("Title") = "Log On"

        If Not ValidateLogOn(userName, password) Then
            ViewData("rememberMe") = rememberMe
            Return View()
        End If

        FormsAuth.SignIn(userName, rememberMe)
        If Not String.IsNullOrEmpty(returnUrl) Then
            Return Redirect(returnUrl)
        Else
            Return RedirectToRoute("default", New With {.controller = "Game", .action = "Index"})
        End If

    End Function

    <Authorize()> _
    Function LogOff() As ActionResult

        FormsAuth.SignOut()
        Return RedirectToRoute("default", New With {.controller = "Account", .action = "Login"})
    End Function

    Function Register() As ActionResult
        Dim SU = New SystemUser

        ViewData("Title") = "Register"
        ViewData("PasswordLength") = MembershipService.MinPasswordLength

        Return View(SU)
    End Function

    <AcceptVerbs(HttpVerbs.Post)> _
    Function Register(ByVal collection As FormCollection) As ActionResult
        Dim SU = New SystemUser
        ViewData("Title") = "Register"
        ViewData("PasswordLength") = MembershipService.MinPasswordLength
        Try
            UpdateModel(SU)
            SU.IsApproved = True
            SU = SystemUser.CreateUser(DB, SU)
            FormsAuth.SignIn(SU.UserName, False)
            Return RedirectToRoute("default")
        Catch ex As Exception

            AddRuleViolations(SU.GetRuleViolations)
            ModelState.AddModelError("_FORM", ex.Message)
            Return View(SU)
        End Try

    End Function


    '
    ' GET: /Comment/Create
    <Authorize(Roles:="Administrator")> _
    Function Create() As ActionResult
        Dim SU = New SystemUser
        ViewData("Title") = "Create New User"
        ViewData("PasswordLength") = MembershipService.MinPasswordLength
        ViewData("rolelist") = GetRoles()





        Return View(SU)
    End Function

    '
    ' POST: /Comment/Create
    <Authorize(Roles:="Administrator")> _
    <AcceptVerbs(HttpVerbs.Post)> _
    Function Create(ByVal collection As FormCollection) As ActionResult
        Dim SU = New SystemUser

        ViewData("Title") = "Create New User"
        ViewData("PasswordLength") = MembershipService.MinPasswordLength

        Try
            UpdateModel(SU)
            SU.IsApproved = True


            SU = SystemUser.CreateUser(DB, SU)


            Return RedirectToAction("Index", "Account")
        Catch ex As Exception

            AddRuleViolations(SU.GetRuleViolations)
            ModelState.AddModelError("_FORM", ex.Message)
            ViewData("rolelist") = GetRoles()
            Return View(SU)
        End Try

    End Function

    '
    ' GET: /Admin/Tag/Delete/5
    <Authorize(Roles:="Administrator")> _
    <AcceptVerbs(HttpVerbs.Post)> _
    Function Delete(ByVal id As Guid) As ActionResult
        Dim V = SystemUser.Load(DB, id)
        Try
            For Each SU In V.Games
                SU.DeletePartial(DB)
            Next
            For Each SU In V.GamesPlayers
                SU.DeletePartial(DB)
            Next
            DB.SubmitChanges()
            V.DeleteSpecial()
        Catch ex As Exception

        End Try
        Return RedirectToAction("Index")
    End Function

    '
    ' GET: /Comment/Edit/5
    <Authorize(Roles:="Administrator")> _
    Function Edit(ByVal id As Guid) As ActionResult
        Dim SU = SystemUser.Load(DB, id)

        ViewData("rolelist") = GetRoles()
        Return View(SU)
    End Function

    '
    ' POST: /Comment/Edit/5
    <Authorize(Roles:="Administrator")> _
    <AcceptVerbs(HttpVerbs.Post)> _
    Function Edit(ByVal id As Guid, ByVal collection As FormCollection) As ActionResult
        Dim SU = SystemUser.Load(DB, id)
        Try
            ' TODO: Add update logic here
            UpdateModel(SU)


            SU.Save(DB)

            Return RedirectToAction("Index", "Account")
        Catch ex As Exception
            AddRuleViolations(SU.GetRuleViolations)
            ModelState.AddModelError("_FORM", ex.Message)

            ViewData("rolelist") = GetRoles()
            Return View(SU)
        End Try
    End Function

    Function ForgotPassword() As ActionResult
        Return View()
    End Function

    '
    ' POST: /Comment/Edit/5
    <AcceptVerbs(HttpVerbs.Post)> _
    Function ForgotPassword(ByVal collection As FormCollection) As ActionResult

        Try
            Dim U = SystemUser.LoadByUserName(DB, collection("UserName"))
            If U IsNot Nothing Then
                Dim Pword = U.User.ResetPassword()
                Dim Body As String = U.UserName & " your password on the Combat Tracker site was changed to:<br/><br/>" & Pword & ""
                SendingEmail.SendEmail(New System.Net.Mail.MailAddress(U.EmailAddress, U.FullName), "CVP - Email Address Change", Body)
            Else
                Throw New Exception("User Name not found.")
            End If

            Return RedirectToRoute("default", New With {.controller = "Account", .action = "ForgotPasswordOk"})

        Catch ex As Exception

            ModelState.AddModelError("_FORM", ex.Message)
            Return View()
        End Try
    End Function

    Function ForgotPasswordOk() As ActionResult
        Return View()
    End Function


    '
    ' GET: /Admin/Tag/Edit/5
    <Authorize()> _
    Function Manage() As ActionResult
        Dim SU = SystemUser.CurrentUser(DB)
        Return View(SU)
    End Function

    '
    ' POST: /Admin/Tag/Edit/5
    <Authorize()> _
    <AcceptVerbs(HttpVerbs.Post)> _
    Function Manage(ByVal collection As FormCollection) As ActionResult
        Dim U = SystemUser.CurrentUser(DB)
        Try
            UpdateModel(U)
            U.Save(DB)
            Return View(U)
        Catch
            AddRuleViolations(U.GetRuleViolations)
            Return View(U)
        End Try
    End Function
    '<Authorize()> _
    'Function ChangePassword() As ActionResult

    '    ViewData("Title") = "Change Password"
    '    ViewData("PasswordLength") = MembershipService.MinPasswordLength

    '    Return View()
    'End Function

    '<Authorize()> _
    '<AcceptVerbs(HttpVerbs.Post)> _
    '<System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Design", "CA1031:DoNotCatchGeneralExceptionTypes", _
    '        Justification:="Exceptions result in password not being changed.")> _
    'Function ChangePassword(ByVal currentPassword As String, ByVal newPassword As String, ByVal confirmPassword As String) As ActionResult

    '    ViewData("Title") = "Change Password"
    '    ViewData("PasswordLength") = MembershipService.MinPasswordLength

    '    If Not ValidateChangePassword(currentPassword, newPassword, confirmPassword) Then
    '        Return View()
    '    End If

    '    Try
    '        If MembershipService.ChangePassword(User.Identity.Name, currentPassword, newPassword) Then
    '            Return RedirectToAction("ChangePasswordSuccess")
    '        Else
    '            ModelState.AddModelError("_FORM", "The current password is incorrect or the new password is invalid.")
    '            Return View()
    '        End If
    '    Catch ex As Exception
    '        ModelState.AddModelError("_FORM", "The current password is incorrect or the new password is invalid.")
    '        Return View()
    '    End Try
    'End Function

    'Function ChangePasswordSuccess() As ActionResult

    '    ViewData("Title") = "Change Password"

    '    Return View()
    'End Function

    Protected Overrides Sub OnActionExecuting(ByVal filterContext As System.Web.Mvc.ActionExecutingContext)
        MyBase.OnActionExecuting(filterContext)
        If TypeOf filterContext.HttpContext.User.Identity Is WindowsIdentity Then
            Throw New InvalidOperationException("Windows authentication is not supported.")
        End If
    End Sub
#Region "Validation Methods"

    Private Function ValidateChangePassword(ByVal currentPassword As String, ByVal newPassword As String, ByVal confirmPassword As String) As Boolean
        If String.IsNullOrEmpty(currentPassword) Then
            ModelState.AddModelError("currentPassword", "You must specify a current password.")
        End If

        If newPassword Is Nothing OrElse newPassword.Length < MembershipService.MinPasswordLength Then
            ModelState.AddModelError("newPassword", String.Format(CultureInfo.CurrentCulture, _
                                                   "You must specify a new password of {0} or more characters.", _
                                                   MembershipService.MinPasswordLength))
        End If

        If Not String.Equals(newPassword, confirmPassword, StringComparison.Ordinal) Then
            ModelState.AddModelError("_FORM", "The new password and confirmation password do not match.")
        End If

        Return ModelState.IsValid
    End Function

    Private Function ValidateLogOn(ByVal userName As String, ByVal password As String) As Boolean
        If String.IsNullOrEmpty(userName) Then
            ModelState.AddModelError("username", "You must specify a username.")
        End If

        If String.IsNullOrEmpty(password) Then
            ModelState.AddModelError("password", "You must specify a password.")
        End If

        If Not MembershipService.ValidateUser(userName, password) Then
            ModelState.AddModelError("_FORM", "The username or password provided is incorrect.")
        End If

        Return ModelState.IsValid
    End Function

    'Private Function ValidateRegistration(ByVal userName As String, ByVal email As String, ByVal password As String, ByVal confirmPassword As String) As Boolean
    '    If String.IsNullOrEmpty(userName) Then
    '        ModelState.AddModelError("username", "You must specify a username.")
    '    End If

    '    If String.IsNullOrEmpty(email) Then
    '        ModelState.AddModelError("email", "You must specify an email address.")
    '    End If

    '    If password Is Nothing OrElse password.Length < MembershipService.MinPasswordLength Then
    '        ModelState.AddModelError("password", String.Format(CultureInfo.CurrentCulture, _
    '                                               "You must specify a password of {0} or more characters.", _
    '                                               MembershipService.MinPasswordLength))
    '    End If

    '    If Not String.Equals(password, confirmPassword, StringComparison.Ordinal) Then
    '        ModelState.AddModelError("_FORM", "The new password and confirmation password do not match.")
    '    End If

    '    Return ModelState.IsValid
    'End Function


#End Region

End Class


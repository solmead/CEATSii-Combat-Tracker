Imports System.Web.Security
Imports System.Globalization
Imports System.Security.Principal
<Flags()> _
Public Enum UserRolesEnum
    None = 1
    Administrator = 2
    GM = 4
    Player = 8
End Enum

'Partial Class SystemUser
'    Inherits IEntity(Of SystemUser)

'    Private m_User As MembershipUser

'    Private m_Role As UserRolesEnum = UserRolesEnum.None
'    'User.ChangePassword()
'    '        User.ChangePasswordQuestionAndAnswer()
'    '        User.ResetPassword()
'    '        User.UnlockUser()


'    Private m_EmailAddress As String = ""
'    Private m_LastActivityDate As Date = Now
'    Private m_IsOnline As Boolean = False
'    Private m_IsLockedOut As Boolean = False
'    Private m_IsApproved As Boolean = False
'    Private m_Comment As String = ""
'    Private m_PasswordQuestion As String = ""
'    Private m_LastPasswordChangedDate As Date = Now
'    Private m_LastLockoutDate As Date = Now
'    Private m_CreationDate As Date = Now
'    Private m_LastLoginDate As Date = Now

'    Private PasswordChanged As Boolean = False
'    Private m_Password As String = ""
'    Private m_OldPassword As String = ""
'    Private m_confirmPassword As String = ""

'    Private DBBK As RMSSDataDataContext

'    Public ReadOnly Property GamesPlayed(ByVal DB As RMSSDataDataContext) As IQueryable(Of Game)
'        Get
'            Return From GU In DB.GamesPlayers Where GU.Player Is Me Order By GU.Game.Name Select GU.Game
'        End Get
'    End Property

'    Public ReadOnly Property GamesPlayed() As IQueryable(Of Game)
'        Get
'            Return (From GU In GamesPlayers Order By GU.Game.Name Select GU.Game).AsQueryable
'        End Get
'    End Property

'    Public ReadOnly Property GamesGMed(ByVal DB As RMSSDataDataContext) As IQueryable(Of Game)
'        Get
'            Return From GU In DB.Games Where GU.GM Is Me Order By GU.Name Select GU
'        End Get
'    End Property

'    Public ReadOnly Property GamesGMed() As IQueryable(Of Game)
'        Get
'            Return (From GU In Games Order By GU.Name Select GU).AsQueryable
'        End Get
'    End Property

'    Public Shared Function LoadByUserName(ByVal DB As RMSSDataDataContext, ByVal UserName As String) As SystemUser
'        Dim SU = (From U In DB.SystemUsers Where U.UserName = UserName Select U).FirstOrDefault
'        If SU IsNot Nothing Then
'            SU.DBBK = DB
'        End If
'        Return SU
'    End Function

'    Public Overloads Shared Function Load(ByVal DB As RMSSDataDataContext, ByVal ID As Guid) As SystemUser
'        Dim SU = (From U In DB.SystemUsers Where U.UserId = ID Select U).FirstOrDefault
'        If SU IsNot Nothing Then
'            SU.DBBK = DB
'        End If
'        Return SU
'    End Function

'    Public ReadOnly Property FullName() As String
'        Get
'            If FirstName = "" AndAlso LastName = "" Then
'                Return UserName
'            Else
'                Return FirstName & " " & LastName
'            End If
'        End Get
'    End Property
'    Public Property confirmPassword() As String
'        Get
'            Return m_confirmPassword
'        End Get
'        Set(ByVal Value As String)
'            m_confirmPassword = Value
'            If Value <> "" AndAlso Value <> "xxxxxx" Then
'                PasswordChanged = True
'            End If
'        End Set
'    End Property
'    Public Property OldPassword() As String
'        Get
'            Return m_OldPassword
'        End Get
'        Set(ByVal Value As String)
'            m_OldPassword = Value
'            If Value <> "" AndAlso Value <> "xxxxxx" Then
'                PasswordChanged = True
'            End If
'        End Set
'    End Property
'    Public Property Password() As String
'        Get
'            Return m_Password
'        End Get
'        Set(ByVal Value As String)
'            m_Password = Value
'            If Value <> "" AndAlso Value <> "xxxxxx" Then
'                PasswordChanged = True
'            End If
'        End Set
'    End Property
'    Public ReadOnly Property LastLoginDate() As Date
'        Get
'            Return m_LastLoginDate
'        End Get
'    End Property
'    Public ReadOnly Property CreationDate() As Date
'        Get
'            Return m_CreationDate
'        End Get
'    End Property
'    Public ReadOnly Property LastLockoutDate() As Date
'        Get
'            Return m_LastLockoutDate
'        End Get
'    End Property
'    Public ReadOnly Property LastPasswordChangedDate() As Date
'        Get
'            Return m_LastPasswordChangedDate
'        End Get
'    End Property
'    Public Property PasswordQuestion() As String
'        Get
'            Return m_PasswordQuestion
'        End Get
'        Set(ByVal Value As String)
'            m_PasswordQuestion = Value
'        End Set
'    End Property
'    Public Property Comment() As String
'        Get
'            Return m_Comment
'        End Get
'        Set(ByVal Value As String)
'            m_Comment = Value
'        End Set
'    End Property
'    Public Property IsApproved() As Boolean
'        Get
'            Return m_IsApproved
'        End Get
'        Set(ByVal Value As Boolean)
'            m_IsApproved = Value
'        End Set
'    End Property
'    Public Property IsLockedOut() As Boolean
'        Get
'            Return m_IsLockedOut
'        End Get
'        Set(ByVal Value As Boolean)
'            m_IsLockedOut = Value
'        End Set
'    End Property
'    Public ReadOnly Property IsOnline() As Boolean
'        Get
'            Return m_IsOnline
'        End Get
'    End Property
'    Public Property LastActivityDate() As Date
'        Get
'            Return m_LastActivityDate
'        End Get
'        Set(ByVal Value As Date)
'            m_LastActivityDate = Value
'        End Set
'    End Property
'    Public Property EmailAddress() As String
'        Get
'            Return m_EmailAddress
'        End Get
'        Set(ByVal Value As String)
'            m_EmailAddress = Value
'        End Set
'    End Property
'    Public Property User() As MembershipUser
'        Get
'            Return m_User
'        End Get
'        Set(ByVal Value As MembershipUser)
'            m_User = Value
'        End Set
'    End Property
'    Public Shared Function GetAllRoles() As List(Of String)
'        Return System.Web.Security.Roles.GetAllRoles().ToList
'    End Function
'    Public Property Role() As UserRolesEnum
'        Get
'            If m_Role = UserRolesEnum.None Then
'                For Each r In System.Web.Security.Roles.GetRolesForUser(UserName)
'                    Try
'                        m_Role = [Enum].Parse(GetType(UserRolesEnum), r)
'                    Catch ex As Exception

'                    End Try
'                Next
'            End If
'            Return m_Role
'        End Get
'        Set(ByVal Value As UserRolesEnum)
'            m_Role = Value
'        End Set
'    End Property

'    Public Shared Function CurrentUser(ByVal DB As RMSSDataDataContext) As SystemUser
'        Dim SU As SystemUser = Nothing
'        If System.Web.Security.Membership.GetUser IsNot Nothing Then
'            SU = SystemUser.Load(DB, System.Web.Security.Membership.GetUser.ProviderUserKey)
'        Else
'            SU = New SystemUser
'        End If
'        If SU IsNot Nothing Then
'            SU.DBBK = DB
'        End If
'        Return SU
'    End Function

'    Private Sub OnValidate(ByVal action As System.Data.Linq.ChangeAction)
'        If Not IsValid Then
'            Throw New ApplicationException("Rule violations prevent saving")
'        End If
'    End Sub

'    Private Sub OnUserIdChanged()
'        OnLoaded()
'    End Sub

'    Public Shared Function CreateUser(ByVal DB As RMSSDataDataContext, ByVal U As SystemUser) As SystemUser
'        'If U.UsersProjects.Count > 0 Then
'        '    Throw New Exception("Cannot attach Projects until after User Created.")
'        'End If
'        'If U.Consumer IsNot Nothing Then
'        '    Throw New Exception("Cannot attach Consumer until after User Created.")
'        'End If
'        If U IsNot Nothing Then
'            U.DBBK = DB
'        End If
'        If Not U.IsValid Then
'            Throw New Exception("Could not create user.")
'        End If
'        Dim status As MembershipCreateStatus
'        Dim mUser As MembershipUser = Membership.CreateUser(U.UserName, U.Password, U.EmailAddress, Nothing, Nothing, U.IsApproved, Nothing, status)
'        If Not (status = MembershipCreateStatus.Success) Then
'            Throw New Exception(ErrorCodeToString(status))
'        End If
'        Dim U2 = SystemUser.Load(DB, mUser.ProviderUserKey)
'        U2.DBBK = DB
'        U2.Comment = U.Comment
'        U2.Role = U.Role
'        U2.FirstName = U.FirstName
'        U2.LastName = U.LastName
'        U2.IsLockedOut = U.IsLockedOut
'        U2.IsApproved = U.IsApproved
'        U2.PasswordQuestion = U.PasswordQuestion

'        U2.Save(DB)
'        Return U2
'    End Function

'    Protected Overrides Sub HandleLocalSave()
'        If Not IsValid Then
'            Throw New ApplicationException("Rule violations prevent saving")
'        End If
'        If User Is Nothing Then
'            Throw New Exception("User must be created first using create user.")
'        End If
'        'User.UserName = UserName
'        User.Email = EmailAddress
'        'User.LastActivityDate = LastActivityDate
'        ''User.IsOnline = IsOnline
'        ''User.IsLockedOut = IsLockedOut

'        User.IsApproved = IsApproved
'        User.Comment = Comment
'        'User.PasswordQuestion = PasswordQuestion
'        ''User.LastPasswordChangedDate = LastPasswordChangedDate
'        ''User.LastLockoutDate = LastLockoutDate
'        ''User.CreationDate = CreationDate
'        'User.LastLoginDate = LastLoginDate


'        Membership.UpdateUser(User)
'        If Not IsLockedOut AndAlso User.IsLockedOut Then
'            User.UnlockUser()
'        End If

'        If PasswordQuestion <> User.PasswordQuestion Then
'            User.ChangePasswordQuestionAndAnswer(User.GetPassword, PasswordQuestion, "")
'        End If

'        Dim R = System.Web.Security.Roles.GetRolesForUser(User.UserName)
'        If R.Count > 0 Then
'            System.Web.Security.Roles.RemoveUserFromRoles(User.UserName, R)
'        End If
'        If Role <> UserRolesEnum.None Then
'            System.Web.Security.Roles.AddUserToRole(User.UserName, Role.ToString)
'        End If
'        If Me.PasswordChanged Then
'            Dim Pword = User.ResetPassword()
'            User.ChangePassword(Pword, Password)
'        End If
'    End Sub
'    Public Overrides Function GetRuleViolations() As System.Collections.Generic.List(Of RuleViolation)
'        Dim L As New List(Of RuleViolation)
'        If String.IsNullOrEmpty(UserName) Then
'            L.Add(New RuleViolation("You must specify a username.", "username"))
'        ElseIf DBBK IsNot Nothing Then
'            Dim U As SystemUser = SystemUser.LoadByUserName(DBBK, UserName)
'            If U IsNot Nothing AndAlso U.UserId <> UserId Then
'                L.Add(New RuleViolation("User name already exists.", "username"))
'            End If
'        End If
'        If String.IsNullOrEmpty(EmailAddress) Then
'            L.Add(New RuleViolation("You must specify an email address.", "EmailAddress"))
'        End If
'        'If Role = UserRolesEnum.None Then
'        '    L.Add(New RuleViolation("You must specify a role.", "Role"))
'        'End If

'        If PasswordChanged Then
'            If Password Is Nothing OrElse Password.Length < Membership.Provider.MinRequiredPasswordLength Then
'                L.Add(New RuleViolation(String.Format(CultureInfo.CurrentCulture, "You must specify a password of {0} or more characters.", Membership.Provider.MinRequiredPasswordLength), "password"))
'            End If
'            If Not String.Equals(Password, confirmPassword, StringComparison.Ordinal) Then
'                L.Add(New RuleViolation("The new password and confirmation password do not match.", "password"))
'            End If
'        ElseIf UserId = Guid.Empty Then
'            If Password Is Nothing OrElse Password.Length < Membership.Provider.MinRequiredPasswordLength Then
'                L.Add(New RuleViolation(String.Format(CultureInfo.CurrentCulture, "You must specify a password of {0} or more characters.", Membership.Provider.MinRequiredPasswordLength), "password"))
'            End If
'            If Not String.Equals(Password, confirmPassword, StringComparison.Ordinal) Then
'                L.Add(New RuleViolation("The new password and confirmation password do not match.", "password"))
'            End If
'        End If

'        Return L
'    End Function

'    Private Sub OnLoaded()
'        User = Membership.GetUser(UserId)
'        m_EmailAddress = User.Email
'        m_LastActivityDate = User.LastActivityDate
'        m_IsOnline = User.IsOnline
'        m_IsLockedOut = User.IsLockedOut
'        m_IsApproved = User.IsApproved
'        m_Comment = User.Comment
'        m_PasswordQuestion = User.PasswordQuestion
'        m_LastPasswordChangedDate = User.LastPasswordChangedDate
'        m_LastLockoutDate = User.LastLockoutDate
'        m_CreationDate = User.CreationDate
'        m_LastLoginDate = User.LastLoginDate
'        m_OldPassword = "xxxxxx"
'        m_Password = "xxxxxx"
'        m_confirmPassword = "xxxxxx"
'        m_Role = UserRolesEnum.None
'        For Each r In System.Web.Security.Roles.GetRolesForUser(UserName)
'            Try
'                m_Role = [Enum].Parse(GetType(UserRolesEnum), r)
'            Catch ex As Exception

'            End Try
'        Next
'    End Sub

'    Private Shared Function ErrorCodeToString(ByVal createStatus As MembershipCreateStatus) As String
'        ' See http://msdn.microsoft.com/en-us/library/system.web.security.membershipcreatestatus.aspx for
'        ' a full list of status codes.
'        Select Case createStatus
'            Case MembershipCreateStatus.DuplicateUserName
'                Return "Username already exists. Please enter a different user name."

'            Case MembershipCreateStatus.DuplicateEmail
'                Return "A username for that e-mail address already exists. Please enter a different e-mail address."

'            Case MembershipCreateStatus.InvalidPassword
'                Return "The password provided is invalid. Please enter a valid password value."

'            Case MembershipCreateStatus.InvalidEmail
'                Return "The e-mail address provided is invalid. Please check the value and try again."

'            Case MembershipCreateStatus.InvalidAnswer
'                Return "The password retrieval answer provided is invalid. Please check the value and try again."

'            Case MembershipCreateStatus.InvalidQuestion
'                Return "The password retrieval question provided is invalid. Please check the value and try again."

'            Case MembershipCreateStatus.InvalidUserName
'                Return "The user name provided is invalid. Please check the value and try again."

'            Case MembershipCreateStatus.ProviderError
'                Return "The authentication provider returned an error. Please verify your entry and try again. If the problem persists, please contact your system administrator."

'            Case MembershipCreateStatus.UserRejected
'                Return "The user creation request has been canceled. Please verify your entry and try again. If the problem persists, please contact your system administrator."

'            Case Else
'                Return "An unknown error occurred. Please verify your entry and try again. If the problem persists, please contact your system administrator."
'        End Select

'    End Function

'    Public Sub DeleteSpecial()
'        Membership.DeleteUser(UserName)
'    End Sub
'    Protected Overrides Sub HandleLocalDelete()
'        MyBase.HandleLocalDelete()

'        Membership.DeleteUser(UserName)
'    End Sub

'    Private Sub OnCreated()
'        UserName = ""
'    End Sub
'End Class

'This class is to be used by the controllers so that each controller by default has access to the DB context.
Public Enum ReturnFormat
    Normal
    JSON
    XML
End Enum

Public MustInherit Class BaseController
    Inherits System.Web.Mvc.Controller

    Private m_DB As RMSSDataDataContext

    Private m_CurrentUser As SystemUser
    Private m_CurrentGame As Game
    Protected Property CurrentGame() As Game
        Get
            Return m_CurrentGame
        End Get
        Set(ByVal value As Game)
            m_CurrentGame = value
            Session("CurrentGame_ID") = value.ID
            ViewData("CurrentGame") = value
        End Set
    End Property
    Protected Property CurrentUser() As SystemUser
        Get
            Return m_CurrentUser
        End Get
        Set(ByVal Value As SystemUser)
            m_CurrentUser = Value
        End Set
    End Property
    Protected Property _DB() As RMSSDataDataContext
        Get
            Return m_DB
        End Get
        Set(ByVal value As RMSSDataDataContext)
            m_DB = value
        End Set
    End Property

    Public ReadOnly Property DB() As RMSSDataDataContext
        Get
            Return m_DB
        End Get
    End Property

    Public Sub New()
    End Sub


    Protected Overrides Sub OnActionExecuting(ByVal filterContext As System.Web.Mvc.ActionExecutingContext)
        MyBase.OnActionExecuting(filterContext)

        m_DB = New RMSSDataDataContext(DataHandling.Settings.ConnectionString)
        Dim CGID As Integer = ControllerContext.HttpContext.Session("CurrentGame_ID")
        m_CurrentGame = Game.Load(DB, CGID, True)
        CurrentUser = SystemUser.CurrentUser(DB)
        ViewData("CurrentUser") = CurrentUser
        ViewData("CurrentGame") = CurrentGame
    End Sub

    Public Sub AddRuleViolations(ByVal errors As IEnumerable(Of RuleViolation))
        For Each issue In errors
            ModelState.AddModelError(issue.PropertyName, issue.ErrorMessage)
        Next
    End Sub
End Class

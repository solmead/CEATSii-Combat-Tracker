Imports System.Reflection
Imports System.Data
Imports System.Data.Linq

Public Class RuleViolation
    Private m_ErrorMessage As String = ""
    Private m_PropertyName As String = ""
    Public Property ErrorMessage() As String
    	Get
    		Return m_ErrorMessage
    	End Get
    	Set(ByVal Value As String)
    		m_ErrorMessage = Value
    	End Set
    End Property

    Public Property PropertyName() As String
    	Get
    		Return m_PropertyName
    	End Get
    	Set(ByVal Value As String)
    		m_PropertyName = Value
    	End Set
    End Property

    Public Sub New()

    End Sub
    Public Sub New(ByVal errorMessage As String)
        Me.ErrorMessage = errorMessage
    End Sub
    Public Sub New(ByVal errorMessage As String, ByVal propertyName As String)
        Me.ErrorMessage = errorMessage
        Me.PropertyName = propertyName
    End Sub

End Class

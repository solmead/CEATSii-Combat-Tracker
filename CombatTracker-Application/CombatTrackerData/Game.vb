<Bind(Include:="Name")> _
Partial Class Game
    Inherits IEntity(Of Game)

    'Private mColors() As String = {"128,128,128", "0,128,0", "128,0,0", "0,0,128", "128,128,0", "128,0,128", "0,128,128", "165,42,42", "199,21,133", "139,0,0", "0,100,0", "138,43,226", "47,79,79", "70,130,160"}

    Private mColors() As String = {"255,0,0", "0,255,0", "0,0,255", "0,255,255", "128,128,128", "255,128,0", "0,128,255", "128,255,0", "128,0,255", "255,0,128", "0,255,128"}
    Public ReadOnly Property Colors() As List(Of String)
        Get
            Return mColors.ToList
        End Get
    End Property

    Public Shared Function LoadByName(ByVal DB As RMSSDataDataContext, ByVal Name As String) As Game
        Return (From CT In DB.Games Where CT.Name = Name Select CT).FirstOrDefault
    End Function
    Public ReadOnly Property NextAction() As Action
        Get
            Return (ActionsSorted()).FirstOrDefault
        End Get
    End Property
    Public ReadOnly Property LastAction() As Action
        Get
            Return (ActionsSorted()).LastOrDefault
        End Get
    End Property

    Public Function ActionsSorted(ByVal DB As RMSSDataDataContext) As List(Of Action)
        Dim List = (From a In DB.Actions Where a.Game Is Me Order By a.EndTime Select a).ToList
        Dim First = List.FirstOrDefault
        Dim Last = List.LastOrDefault

        Dim MP = 1 ' 300 - 144 'Total Width - Width of One
        Dim RT As Double
        If Last.EndTime = First.EndTime Then
            RT = MP / (0.000001)
        Else
            RT = MP / (Last.EndTime - First.EndTime)
        End If

        For Each item In List
            Dim Left = (item.EndTime - First.EndTime) * RT

            item.LeftPercent = Left
        Next


        Return List
    End Function
    Public Function ActionsSorted() As List(Of Action)
        Dim List = (From a In GameActions Order By a.EndTime Select a).ToList
        Dim First = List.FirstOrDefault
        Dim Last = List.LastOrDefault
        If Last IsNot Nothing AndAlso First IsNot Nothing Then
            Dim MP = 1 ' 300 - 144 'Total Width - Width of One
            Dim RT As Double
            If Last.EndTime = First.EndTime Then
                RT = MP / (0.000001)
            Else
                RT = MP / (Last.EndTime - First.EndTime)
            End If

            For Each item In List
                Dim Left = (item.EndTime - First.EndTime) * RT

                item.LeftPercent = Left
            Next
        End If

        Return List
    End Function

    'Public ReadOnly Property Players(ByVal DB As RMSSDataDataContext) As IQueryable(Of SystemUser)
    '    Get
    '        Return From GU In DB.GamesPlayers Where GU.Game Is Me Order By GU.Player.UserName Select GU.Player
    '    End Get
    'End Property

    'Public ReadOnly Property Players() As IQueryable(Of SystemUser)
    '    Get
    '        Return (From GU In GamesPlayers Order By GU.Player.UserName Select GU.Player).AsQueryable
    '    End Get
    'End Property



    Private Sub OnCreated()
        Name = ""

    End Sub



    Private Sub OnValidate(ByVal action As System.Data.Linq.ChangeAction)
        If action <> Data.Linq.ChangeAction.Delete AndAlso Not IsValid Then
            Throw New ApplicationException("Rule violations prevent saving")
        End If
    End Sub

    Public Overrides Function GetRuleViolations() As System.Collections.Generic.List(Of RuleViolation)
        Dim L As New List(Of RuleViolation)
        If String.IsNullOrEmpty(Name) Then
            L.Add(New RuleViolation("Name Required", "Name"))
        End If
        'If GM Is Nothing AndAlso GM_ID Is Nothing Then
        '    L.Add(New RuleViolation("GM Required", "GM_ID"))
        'End If
        Return L
    End Function
End Class

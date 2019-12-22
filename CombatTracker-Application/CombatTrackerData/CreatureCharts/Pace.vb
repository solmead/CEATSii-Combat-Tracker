Partial Class Pace
    Inherits IEntity(Of Pace)
    Public Overrides Function ToString() As String
        Return Name
    End Function

    Public Shared Function LoadByName(ByVal DB As RMSSDataDataContext, ByVal Name As String) As Pace
        Return (From SC In DB.Paces Where SC.Name = Name Select SC).FirstOrDefault
    End Function


    Private Sub OnValidate(ByVal action As System.Data.Linq.ChangeAction)
        If action <> Data.Linq.ChangeAction.Delete AndAlso Not IsValid Then
            Throw New ApplicationException("Rule violations prevent saving")
        End If
    End Sub

    Public Overrides Function GetRuleViolations() As System.Collections.Generic.List(Of RuleViolation)
        Dim L As New List(Of RuleViolation)
        'If String.IsNullOrEmpty(Name) Then
        '    L.Add(New RuleViolation("Name Required", "Name"))
        'End If
        Return L
    End Function

End Class

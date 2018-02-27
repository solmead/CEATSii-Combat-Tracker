<Bind(Include:="Type,Description,MovingManeuverMod,DB")> _
Partial Class Armor
    Inherits IEntity(Of Armor)
    Public Overrides Function ToString() As String
        Return Type
    End Function

    Private Sub OnCreated()
        Description = ""

    End Sub



    Private Sub OnValidate(ByVal action As System.Data.Linq.ChangeAction)
        If action <> Data.Linq.ChangeAction.Delete AndAlso Not IsValid Then
            Throw New ApplicationException("Rule violations prevent saving")
        End If
    End Sub

    Public Overrides Function GetRuleViolations() As System.Collections.Generic.List(Of RuleViolation)
        Dim L As New List(Of RuleViolation)
        If Me.Type <= 0 Then
            L.Add(New RuleViolation("Type Required", "Type"))
        End If
        Return L
    End Function
End Class

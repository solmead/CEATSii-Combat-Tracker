<Bind(Include:="Critical")> _
Partial Class AttacksAddCrit
    Inherits IEntity(Of AttacksAddCrit)

    Private Sub OnCreated()
        'Critical = CritTypes.None
    End Sub


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
        If Attack Is Nothing Then
            L.Add(New RuleViolation("Must be on an attack", "AttackID"))
        End If
        If CriticalType Is Nothing AndAlso Critical_ID = 0 Then
            L.Add(New RuleViolation("Critical must be set.", "Critical_ID"))
        End If
        Return L
    End Function
End Class

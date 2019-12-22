Partial Class ConstitutionBonusChart
    Inherits IEntity(Of ConstitutionBonusChart)
    Public Overrides Function ToString() As String
        Return Code
    End Function

    Public Shared Function LoadByName(ByVal DB As RMSSDataDataContext, ByVal Name As String) As ConstitutionBonusChart
        Return (From SC In DB.ConstitutionBonusCharts Where SC.Code = Name Select SC).FirstOrDefault
    End Function

    Public Function LookupStamina(ByVal Roll As Integer) As Integer
        Return (From CBC In Me.ConstitutionBonusChartValues Where CBC.Min <= Roll AndAlso Roll <= CBC.Max Select CBC.Mod).FirstOrDefault
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

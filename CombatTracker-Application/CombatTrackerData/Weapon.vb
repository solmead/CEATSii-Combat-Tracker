<Bind(Include:="Name,MinWeight,MaxWeight,Weight,Bonus,Is2Handed,OB")> _
Partial Class Weapon
    Inherits IEntity(Of Weapon)

    Public Overrides Function ToString() As String
        Return Name
    End Function

    Private Sub OnCreated()
        Name = "New"
        Me.Bonus = 0
        Me.Is2Handed = False
        Me.MinWeight = 0
        Me.OB = 0
        Me.MaxWeight = 0
        Me.Weight = 0
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
        Return L
    End Function
End Class

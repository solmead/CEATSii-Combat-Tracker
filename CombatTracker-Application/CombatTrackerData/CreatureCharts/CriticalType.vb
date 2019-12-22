Partial Class CriticalType
    Inherits IEntity(Of CriticalType)

    Public Overrides Function ToString() As String
        Return Name
    End Function

    Public Shared Function LoadByName(ByVal DB As RMSSDataDataContext, ByVal Name As String) As CriticalType
        Return (From CT In DB.CriticalTypes Where CT.Name = Name Select CT).FirstOrDefault
    End Function
End Class

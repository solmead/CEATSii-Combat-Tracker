Partial Class WeaponType
    Inherits IEntity(Of WeaponType)

    Public Overrides Function ToString() As String
        Return Name
    End Function

    Shared Function LoadWithName(ByVal db As RMSSDataDataContext, ByVal Name As String) As WeaponType
        Return (From WT In db.WeaponTypes Where WT.Name = Name Select WT).FirstOrDefault
    End Function
End Class

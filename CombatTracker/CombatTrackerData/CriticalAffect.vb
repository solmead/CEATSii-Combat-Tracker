
Public Enum ParryType
    Fine
    Must_Parry
    No_Parry
End Enum
Partial Class CriticalAffect
    Inherits IEntity(Of CriticalAffect)

    Public ReadOnly Property Action() As CriticalAction
        Get
            Return (From CA In Me.CriticalActions Select CA).FirstOrDefault
        End Get
    End Property

End Class

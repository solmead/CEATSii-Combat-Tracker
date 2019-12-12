Module Module1
    Public Rn As New Random
    'Public RMSS As New RMSSData

    Public ReadOnly Property BaseRoundTime()
        Get
            'Return 10
            Return 6
        End Get
    End Property
    Function RollD100OpenEnded() As Integer
        Dim Roll As Integer = RollOnes() * 10 + RollOnes()
        If Roll = 0 Then Roll = 100
        Dim Tot As Integer = Roll
        If Roll >= 96 Then
            While Roll >= 96
                Roll = RollOnes() * 10 + RollOnes()
                If Roll = 0 Then Roll = 100
                Tot += Roll
            End While
        ElseIf Roll <= 5 Then
            Roll = RollOnes() * 10 + RollOnes()
            If Roll = 0 Then Roll = 100
            Tot -= Roll
            While Roll >= 96
                Roll = RollOnes() * 10 + RollOnes()
                If Roll = 0 Then Roll = 100
                Tot -= Roll
            End While
        End If
        Debug.WriteLine("Rolled Open Ended:" & Tot)
        Return Tot
    End Function
    Function RollD100() As Integer
        Dim Roll As Integer = RollOnes() * 10 + RollOnes()
        If Roll = 0 Then Roll = 100
        Debug.WriteLine("Rolled:" & Roll)
        Return Roll
    End Function
    Function RollOnes() As Integer
        Return Rn.Next(0, 9)
    End Function
End Module

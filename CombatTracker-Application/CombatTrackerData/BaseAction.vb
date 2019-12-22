Public Enum BaseActionType
    None
    Normal
    Attack
    Spell
    Prep
    Movement
End Enum
<Bind(Include:="Name,BasePercent,Type")> _
Partial Class BaseAction
    Inherits IEntity(Of BaseAction)
    Public Overrides Function ToString() As String
        Return Name
    End Function

    Public Function GetStandardAction(ByVal PrevAction As Action, ByVal Whom As Actor) As Action
        Dim SA As Action = Nothing

        Select Case Type
            Case BaseActionType.Normal
                SA = New StandardAction
                SA.Name = Name
                SA.BasePercent = BasePercent
            Case BaseActionType.Spell
                SA = New SpellAction
                SA.Name = Name
                SA.BasePercent = BasePercent
            Case BaseActionType.Attack
                SA = New AttackAction
                SA.Name = Name
                SA.BasePercent = BasePercent
            Case BaseActionType.Prep
                Dim PA As PrepAction
                Try
                    PA = PrevAction
                    If PA Is Nothing Then
                        PA = New PrepAction(0)
                    End If
                Catch ex As Exception
                    PA = New PrepAction(0)
                End Try
                SA = New PrepAction(PA.CurrentRound + 1)
                SA.Name = Name & " Round " & CType(SA, PrepAction).CurrentRound
                SA.BasePercent = BasePercent

            Case BaseActionType.Movement
                SA = New MovementAction
                SA.Name = Name
                SA.BasePercent = 10 / (Whom.Movement * BasePercent)

            Case Else
                SA = New StandardAction
                SA.Name = Name
                SA.BasePercent = BasePercent
        End Select
        SA.Base = Me
        SA.WhoIsActing = Whom
        Return SA
    End Function

    Private Sub OnCreated()
        Name = ""
        Type = BaseActionType.Normal
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
        If Group Is Nothing Then
            L.Add(New RuleViolation("Group Required", "ActionGroup_ID"))
        End If
        Return L
    End Function
End Class

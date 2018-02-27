Partial Class RMSSDataDataContext

    Private Sub UpdateActor(ByVal instance As Actor)
        ExecuteDynamicUpdate(instance)
    End Sub
    Private Sub DeleteAction(ByVal instance As Action)

        ExecuteDynamicDelete(instance)
    End Sub

    Private Sub DeleteGame(ByVal instance As Game)
        For Each i In instance.GameActions
            DeleteAction(i)
        Next
        For Each i In instance.Actors
            DeleteActor(i)
        Next
        For Each i In instance.GamesPlayers
            DeleteGamesPlayer(i)
        Next

        ExecuteDynamicDelete(instance)
    End Sub

    Private Sub DeleteGamesPlayer(ByVal instance As GamesPlayer)

        ExecuteDynamicDelete(instance)
    End Sub

    Private Sub DeleteActor(ByVal instance As Actor)
        If Not (instance.CurrentArmor.Actors.Count > 1 OrElse instance.CurrentArmor.Character IsNot Nothing) Then
            DeleteArmor(instance.CurrentArmor)
        End If
        For Each i In instance.CriticalAffects
            DeleteCriticalAffect(i)
        Next
        For Each i In instance.Actions
            DeleteAction(i)
        Next
        For Each i In instance.ActorsAttacks
            DeleteActorsAttack(i)
        Next

        ExecuteDynamicDelete(instance)
    End Sub

    Private Sub DeleteArmor(ByVal instance As Armor)

        ExecuteDynamicDelete(instance)
    End Sub

    Private Sub DeleteActorsAttack(ByVal instance As ActorsAttack)
        ExecuteDynamicDelete(instance)
        If Not (instance.Attack.Creature IsNot Nothing OrElse instance.Attack.ParentAttack IsNot Nothing OrElse instance.Attack.Actions.Count > 0) Then
            DeleteAttack(instance.Attack)
        End If
        ExecuteDynamicDelete(instance)
    End Sub

    Private Sub DeleteCriticalAffect(ByVal instance As CriticalAffect)

        ExecuteDynamicDelete(instance)
    End Sub

    Private Sub DeleteAttack(ByVal instance As Attack)
        If instance.WeaponUsed IsNot Nothing AndAlso instance.WeaponUsed.Character Is Nothing AndAlso instance.WeaponUsed.Attacks.Count = 0 Then
            DeleteWeapon(instance.WeaponUsed)
        End If
        If instance.ThisRoundSuccess IsNot Nothing Then
            DeleteAttack(instance.ThisRoundSuccess)
        End If
        If instance.NextRoundSuccess IsNot Nothing Then
            DeleteAttack(instance.NextRoundSuccess)
        End If
        For Each item In instance.AdditionalCrits
            DeleteAttacksAddCrit(item)
        Next
        ExecuteDynamicDelete(instance)
    End Sub

    Private Sub DeleteWeapon(ByVal instance As Weapon)

        ExecuteDynamicDelete(instance)
    End Sub

    Private Sub DeleteAttacksAddCrit(ByVal instance As AttacksAddCrit)

        ExecuteDynamicDelete(instance)
    End Sub


    Private Sub DeleteCharacter(ByVal instance As Character)
        For Each Item In instance.Actors
            DeleteActor(Item)
        Next
        For Each Item In instance.Armors
            DeleteArmor(Item)
        Next
        For Each Item In instance.Weapons
            DeleteWeapon(Item)
        Next
        ExecuteDynamicDelete(instance)
    End Sub

    Private Sub DeleteCreature(ByVal instance As Creature)
        For Each Item In instance.Actors
            DeleteActor(Item)
        Next
        For Each item In instance.Attacks
            DeleteAttack(item)
        Next
        ExecuteDynamicDelete(instance)
    End Sub

End Class


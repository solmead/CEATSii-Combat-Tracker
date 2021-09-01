using CombatTracker.Entities.Current;
using System;
using System.Collections.Generic;
using System.Text;

namespace CombatTracker.Entities.Abstract.Services
{
    public interface INotificationService
    {

        void OnActorAddedNotification(Game currentGame, Actor whom);
        void OnActorUpdatedNotification(Game currentGame, Actor whom);
        void OnActorRemovedNotification(Game currentGame, Actor whom);
        void OnActionFinishedNotification(Game currentGame, Actor whom, BaseAction action);
        void OnIndepedentActionReoccurringNotification(Game currentGame, Actor whom, BaseAction action);
        void OnIndepedentActionEndNotification(Game currentGame, Actor whom, BaseAction action);

        //EventRemovedActionAsync
        void OnActionRemovedNotification(Game currentGame, Actor whom, BaseAction action);
        void OnActionUpdatedNotification(Game currentGame, Actor whom, BaseAction action);
        void OnGameUpdatedNotification(Game currentGame);

        void OnMoveNext(Game currentGame, MoveNextResult result);
    }
}

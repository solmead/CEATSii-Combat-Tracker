using System;
using System.Threading.Tasks;
using CombatTracker.Entities.Current;

namespace CombatTracker.Services.Abstract
{
    public interface IEncounterNotification
    {

        Task EventRemovedActionAsync(int gameId, BaseAction action);
        Task EventUpdatedActionAsync(int gameId, BaseAction action);
        Task EventUpdatedActionsAsync(int gameId, BaseAction[] actions);

        Task EventRemovedActorAsync(int gameId, Actor actor);
        Task EventUpdatedActorAsync(int gameId, Actor actor);
        Task EventUpdatedActorsAsync(int gameId, Actor[] actors);

        Task EventUpdateGame(int gameId, Game game);
    }
}

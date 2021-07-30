using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using CombatTracker.Entities.Abstract.Repos;
using CombatTracker.Entities.Abstract.Services;
using CombatTracker.Entities.Current;
using CombatTracker.Services.Abstract;
using Microsoft.AspNetCore.SignalR;

namespace CombatTracker.Web.Hubs
{

    public interface IEncounterHub
    {
        Task RemovedAction(BaseAction action);
        Task UpdatedAction(BaseAction action);
        Task UpdatedActions(List<BaseAction> actions);
        Task RemovedActor(Actor actor);
        Task UpdatedActor(Actor actor);
        Task UpdatedActors(List<Actor> actors);
    }

    public class EncounterHub : Hub<IEncounterHub> {

        public EncounterHub()
        {

        }

        public async Task RegisterForGame(int gameId)
        {
            await Groups.AddToGroupAsync(Context.ConnectionId, "GAME_" + gameId);
        }
    };



    public class EncounterNotification : IEncounterNotification
    {
        public IHubContext<EncounterHub> HubContext { get; }

        public EncounterNotification(IHubContext<EncounterHub> hubContext)
        {
            HubContext = hubContext;
        }

        public async Task EventUpdateGame(int gameId, Game game)
        {
            await HubContext.Clients.Group("GAME_" + gameId).SendAsync("UpdateGame", game);
        }

        public async Task EventRemovedActionAsync(int gameId, BaseAction action)
        {
            await HubContext.Clients.Group("GAME_" + gameId).SendAsync("RemovedAction", action);
        }

        public async Task EventUpdatedActionAsync(int gameId, BaseAction action)
        {
            await HubContext.Clients.Group("GAME_" + gameId).SendAsync("UpdatedAction", action);
        }

        public async Task EventUpdatedActionsAsync(int gameId, BaseAction[] actions)
        {
            await HubContext.Clients.Group("GAME_" + gameId).SendAsync("UpdatedActions", actions);
        }

        public async Task EventRemovedActorAsync(int gameId, Actor actor)
        {
            await HubContext.Clients.Group("GAME_" + gameId).SendAsync("RemovedActor", actor);
        }

        public async Task EventUpdatedActorAsync(int gameId, Actor actor)
        {
            await HubContext.Clients.Group("GAME_" + gameId).SendAsync("UpdatedActor", actor);
        }

        public async Task EventUpdatedActorsAsync(int gameId, Actor[] actors)
        {
            await HubContext.Clients.Group("GAME_" + gameId).SendAsync("UpdatedActors", actors);
        }
    }
}

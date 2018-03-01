using System;
using System.Collections.Generic;
using System.Text;
using CombatTracker.Entities.Current;
using CombatTracker.Entities.Reference.Attacks;

namespace CombatTracker.Entities.Repositories
{
    public interface IGameRepository
    {


        List<Game> GetGames();
        Game GetGame(int id);
        Game GetGame(string name);
        Game SaveGame(Game game);
        void DeleteGame(Game game);
        void DeleteGame(int id);


        List<Actor> GetActors(int gameId);
        Actor GetActor(int id);
        Actor SaveActor(Actor actor);
        void DeleteActor(Actor actor);
        void DeleteActor(int id);


        List<CriticalEffect> GetCriticalEffects(int actorId);
        CriticalEffect GetCriticalEffect(int id);
        CriticalEffect SaveCriticalEffect(CriticalEffect criticalEffect);
        void DeleteCriticalEffect(CriticalEffect criticalEffect);
        void DeleteCriticalEffect(int id);

        List<Attack> GetAttacks(int actorId);
        Attack SaveAttack(Actor actor, Attack attack);


        List<BaseAction> GetActionsOnActor(int actorId);
        List<BaseAction> GetActionsOnActor(Actor actor);
        List<BaseAction> GetActionsInGame(int gameId);
        List<BaseAction> GetActionsInGame(Game game);
        BaseAction GetAction(int id);
        BaseAction SaveAction(BaseAction action);
        void DeleteAction(BaseAction action);
        void DeleteAction(int id);




    }
}

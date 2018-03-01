using System;
using System.Collections.Generic;
using System.Text;
using CombatTracker.Entities.Current;
using CombatTracker.Entities.Reference.Attacks;
using CombatTracker.Entities.Repositories;

namespace CombatTracker.Domain.Repositories
{
    public class GameRepository : IGameRepository
    {

        private TrackerContext db;

        public GameRepository(TrackerContext context)
        {
            db = context;
        }


        public List<Game> GetGames()
        {
            throw new NotImplementedException();
        }

        public Game GetGame(int id)
        {
            throw new NotImplementedException();
        }

        public Game GetGame(string name)
        {
            throw new NotImplementedException();
        }

        public Game SaveGame(Game game)
        {
            throw new NotImplementedException();
        }

        public void DeleteGame(Game game)
        {
            throw new NotImplementedException();
        }

        public void DeleteGame(int id)
        {
            throw new NotImplementedException();
        }

        public List<Actor> GetActors(int gameId)
        {
            throw new NotImplementedException();
        }

        public Actor GetActor(int id)
        {
            throw new NotImplementedException();
        }

        public Actor SaveActor(Actor actor)
        {
            throw new NotImplementedException();
        }

        public void DeleteActor(Actor actor)
        {
            throw new NotImplementedException();
        }

        public void DeleteActor(int id)
        {
            throw new NotImplementedException();
        }

        public List<CriticalEffect> GetCriticalEffects(int actorId)
        {
            throw new NotImplementedException();
        }

        public CriticalEffect GetCriticalEffect(int id)
        {
            throw new NotImplementedException();
        }

        public CriticalEffect SaveCriticalEffect(CriticalEffect criticalEffect)
        {
            throw new NotImplementedException();
        }

        public void DeleteCriticalEffect(CriticalEffect criticalEffect)
        {
            throw new NotImplementedException();
        }

        public void DeleteCriticalEffect(int id)
        {
            throw new NotImplementedException();
        }

        public List<Attack> GetAttacks(int actorId)
        {
            throw new NotImplementedException();
        }

        public Attack SaveAttack(Actor actor, Attack attack)
        {
            throw new NotImplementedException();
        }

        public List<BaseAction> GetActionsOnActor(int actorId)
        {
            throw new NotImplementedException();
        }

        public List<BaseAction> GetActionsOnActor(Actor actor)
        {
            throw new NotImplementedException();
        }

        public List<BaseAction> GetActionsInGame(int gameId)
        {
            throw new NotImplementedException();
        }

        public List<BaseAction> GetActionsInGame(Game game)
        {
            throw new NotImplementedException();
        }

        public BaseAction GetAction(int id)
        {
            throw new NotImplementedException();
        }

        public BaseAction SaveAction(BaseAction action)
        {
            throw new NotImplementedException();
        }

        public void DeleteAction(BaseAction action)
        {
            throw new NotImplementedException();
        }

        public void DeleteAction(int id)
        {
            throw new NotImplementedException();
        }
    }
}

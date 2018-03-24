using System;
using System.Collections.Generic;
using System.Text;
using System.Linq;
using CombatTracker.Entities.Current;
using CombatTracker.Entities.Reference.Attacks;
using CombatTracker.Entities.Repositories;
using Utilities.Caching;
using CombatTracker.Domain.Models;


namespace CombatTracker.Domain.Repositories
{
    public class GameRepository : IGameRepository
    {

        private TrackerContext db;
        private readonly ICreatureRepository _creatureRepository;
        private readonly ICharacterRepository _characterRepository;
        private readonly ICombatRepository _combatRepository;
        private readonly IChartRepository _chartRepository;


        public GameRepository(TrackerContext context,
                              ICreatureRepository creatureRepository,
                              ICharacterRepository characterRepository,
                              ICombatRepository combatRepository,
                              IChartRepository chartRepository)
        {
            db = context;
            _creatureRepository = creatureRepository;
            _characterRepository = characterRepository;
            _combatRepository = combatRepository;
            _chartRepository = chartRepository;

        }


        public List<Game> GetGames()
        {
            return Cache.GetItem<List<Game>>(CacheArea.Global, "Games", () =>
            {
                var list = (from a in db.Games
                            select new Game()
                            {
                                ID = a.ID,
                                CurrentTime = a.CurrentTime,
                                Name = a.Name,
                                GameTypeString = a.GameType
                            }).ToList();


                list.ForEach((g)=>{
                    //g.Actors = GetActors(g.ID);

                    //g.GameActions = GetActionsInGame(g.ID);
                    Cache.SetItem<Game>(CacheArea.Global, "Games_" + g.ID, g);
                });
                return list;
            }, "game");
        }

        public Game GetGame(int id)
        {
            return Cache.GetItem<Game>(CacheArea.Global, "Games_" + id, () =>
            {
                var g = (from a in db.Games
                            where a.ID == id
                            select new Game()
                            {
                                ID = a.ID,
                                CurrentTime = a.CurrentTime,
                                Name = a.Name,
                                GameTypeString = a.GameType
                            }).FirstOrDefault();
                    //g.Actors = GetActors(g.ID);
                    //g.GameActions = GetActionsInGame(g.ID);
                return g;
            }, "game");
        }

        public Game GetGame(string name)
        {
            var item = (from c in db.Games where c.Name == name select c).FirstOrDefault();
            return GetGame(item.ID);
        }

        public Game SaveGame(Game game)
        {
            var item = (from c in db.Games where c.ID == game.ID select c).FirstOrDefault();
            if (item == null)
            {
                item = new DbGame();
                db.Games.Add(item);
            }
            item.CurrentTime = game.CurrentTime;
            item.Name = game.Name;
            item.GameType = game.GameTypeString;

            db.SaveChanges();
            game.ID = item.ID;
            Cache.SetItem<Game>(CacheArea.Global, "Games_" + game.ID, game);

            var items = GetGames();
            if (!items.Contains(game))
            {
                items.Add(game);
            }

            return GetGame(game.ID);
        }

        public void DeleteGame(Game game)
        {
            Cache.SetItem<Game>(CacheArea.Global, "Games_" + game.ID, game);
            var items = GetGames();
            if (items.Contains(game))
            {
                items.Remove(game);
            }
            var item = (from c in db.Games where c.ID == game.ID select c).FirstOrDefault();
            if (item != null)
            {
                db.Games.Remove(item);
                db.SaveChanges();
            }
        }

        public void DeleteGame(int id)
        {
            var item = GetGame(id);
            if (item != null)
            {
                DeleteGame(item);
            }
        }

        private IQueryable<Actor> GetActors(IQueryable<DbActor> actors) {
            return (from a in actors
                    select new Actor()
                    {
                        ID = a.ID,
                        Name = a.Name,
                        BaseInititive = a.BaseInititive,
                        Color = a.Color,
                        ConstitutionStat = a.ConstitutionStat,
                        CritNegatives = a.CritNegatives,
                        ExhaustionRemaining = a.ExhaustionRemaining,
                        ExhaustionTotal = a.ExhaustionTotal,
                        Game_ID = a.Game_ID,
                        HitsRemaining = a.HitsRemaining,
                        HitsTotal = a.HitsTotal,
                        IsConcentrating = a.IsConcentrating,
                        IsMoving = a.IsMoving,
                        Level = a.Level,
                        Movement = a.Movement,
                        NextSpellTime = a.NextSpellTime,
                        PercentAction = a.PercentAction,
                        PercentRequiredAdrenalDB = a.PercentRequiredAdrenalDB,
                        PowerPointsRemaining = a.PowerPointsRemaining,
                        PowerPointsTotal = a.PowerPointsTotal,
                        RolledInititive = a.RolledInititive,
                        StrengthBonus = a.StrengthBonus,
                        Suprised = a.Suprised,
                        UsingAdrenalDB = a.UsingAdrenalDB,
                        TypeString = a.Type,
                        BaseCreature_ID = a.BaseCreature_ID,
                        BaseCharacter_ID = a.BaseCharacter_ID,
                        CurrentArmor_ID = a.CurrentArmor_ID
                    });
        }


        public List<Actor> GetActors(int gameId)
        {

            return Cache.GetItem<List<Actor>>(CacheArea.Global, "Actors_" + gameId, () =>
            {
                var q = (from a in db.Actors
                         where a.Game_ID == gameId
                         select a);
                var list = GetActors(q).ToList();

                list.ForEach((act) =>
                {
                    //if (act.BaseCreature_ID.HasValue)
                    //{
                    //    act.Base = _creatureRepository.GetCreature(act.BaseCreature_ID.Value);
                    //}
                    //if (act.BaseCharacter_ID.HasValue)
                    //{
                    //    act.Base = _characterRepository.GetCharacter(act.BaseCharacter_ID.Value);
                    //}

                    act.CriticalEffects = new Stack<CriticalEffect>(GetCriticalEffects(act.ID));

                    if (act.CurrentArmor_ID.HasValue)
                    {
                        act.CurrentArmor = _combatRepository.GetArmor(act.CurrentArmor_ID.Value);
                    }
                    Cache.SetItem<Actor>(CacheArea.Global, "Actor_" + act.ID, act);
                });
                return list;
            }, "game");


        }

        public Actor GetActor(int id)
        {
            return Cache.GetItem<Actor>(CacheArea.Global, "Actor_" + id, () =>
            {
                var q = (from a in db.Actors
                         where a.ID == id
                         select a);
                var act = GetActors(q).FirstOrDefault();



                //if (act.BaseCreature_ID.HasValue)
                //{
                //    act.Base = _creatureRepository.GetCreature(act.BaseCreature_ID.Value);
                //}
                //if (act.BaseCharacter_ID.HasValue)
                //{
                //    act.Base = _characterRepository.GetCharacter(act.BaseCharacter_ID.Value);
                //}
                if (act.CurrentArmor_ID.HasValue)
                {
                    act.CurrentArmor = _combatRepository.GetArmor(act.CurrentArmor_ID.Value);
                }

                return act;
            }, "game");
        }

        public Actor SaveActor(Actor actor)
        {

            var item = (from c in db.Actors where c.ID == actor.ID select c).FirstOrDefault();
            if (item == null)
            {
                item = new DbActor();
                db.Actors.Add(item);
            }
            item.BaseCharacter_ID = actor.BaseCharacter_ID;
            item.BaseCreature_ID = actor.BaseCreature_ID;
            item.BaseInititive = actor.BaseInititive;
            item.Color = actor.Color;
            item.ConstitutionStat = actor.ConstitutionStat;
            item.CritNegatives = actor.CritNegatives;
            item.CurrentArmor_ID = actor.CurrentArmor_ID;
            item.ExhaustionRemaining = actor.ExhaustionRemaining;
            item.ExhaustionTotal = actor.ExhaustionTotal;
            item.Game_ID = actor.Game_ID;
            item.HitsRemaining = actor.HitsRemaining;
            item.HitsTotal = actor.HitsTotal;
            item.IsConcentrating = actor.IsConcentrating;
            item.IsMoving = actor.IsMoving;
            item.Level = actor.Level;
            item.Movement = actor.Movement;
            item.Name = actor.Name;
            item.NextSpellTime = actor.NextSpellTime;
            item.PercentAction = actor.PercentAction;
            item.PercentRequiredAdrenalDB = actor.PercentRequiredAdrenalDB;
            item.PowerPointsRemaining = actor.PowerPointsRemaining;
            item.PowerPointsTotal = actor.PowerPointsTotal;
            item.RolledInititive = actor.RolledInititive;
            item.StrengthBonus = actor.StrengthBonus;
            item.Suprised = actor.Suprised;
            item.Type = actor.TypeString;
            item.UsingAdrenalDB = actor.UsingAdrenalDB;



            db.SaveChanges();
            actor.ID = item.ID;
            Cache.SetItem<Actor>(CacheArea.Global, "Actor_" + actor.ID, actor);

            var items = GetActors(actor.Game_ID);
            if (!items.Contains(actor))
            {
                items.Add(actor);
            }

            return GetActor(actor.ID);
        }

        public void DeleteActor(Actor actor)
        {
            var list = GetActors(actor.Game_ID);
            Cache.SetItem<Actor>(CacheArea.Global, "Actor_" + actor.ID, null);
            if (list.Contains(actor))
            {
                list.Remove(actor);
            }
            var item = (from c in db.Actors where c.ID == actor.ID select c).FirstOrDefault();
            if (item != null)
            {
                db.Actors.Remove(item);
                db.SaveChanges();
            }
        }

        public void DeleteActor(int id)
        {
            var item = GetActor(id);
            if (item != null)
            {
                DeleteActor(item);
            }
        }

        public List<CriticalEffect> GetCriticalEffects(int actorId)
        {
            return Cache.GetItem<List<CriticalEffect>>(CacheArea.Global, "CriticalEffects_" + actorId, () =>
            {
                var q = (from a in db.CriticalAffects
                         where a.Actor_ID == actorId
                         select a);
                var list = (from a in q
                            select new CriticalEffect()
                            {
                                ID = a.ID,
                                IsStunned = a.IsStunned,
                                Negative = a.Negative,
                                ParryString = a.Parry,
                                ParryNegative = a.ParryNegative,
                                TimeEnd = a.TimeEnd,
                                TimeStart = a.TimeStart,
                                Actor_ID = a.Actor_ID
                            }).ToList();

                list.ForEach((act) =>
                {
                    Cache.SetItem<CriticalEffect>(CacheArea.Global, "CriticalEffect_" + act.ID, act);
                });
                return list;
            }, "game");
        }

        public CriticalEffect GetCriticalEffect(int id)
        {
            return Cache.GetItem<CriticalEffect>(CacheArea.Global, "CriticalEffect_" + id, () =>
            {
                var g = (from a in db.CriticalAffects
                         where a.ID == id
                         select new CriticalEffect()
                         {
                             ID = a.ID,
                             IsStunned = a.IsStunned,
                             Negative = a.Negative,
                             ParryString = a.Parry,
                             ParryNegative = a.ParryNegative,
                             TimeEnd = a.TimeEnd,
                             TimeStart = a.TimeStart,
                             Actor_ID = a.Actor_ID
                         }).FirstOrDefault();

                return g;
            }, "game");
        }

        public CriticalEffect SaveCriticalEffect(CriticalEffect criticalEffect)
        {

            var item = (from c in db.CriticalAffects where c.ID == criticalEffect.ID select c).FirstOrDefault();
            if (item == null)
            {
                item = new DbCriticalAffect();
                db.CriticalAffects.Add(item);
            }
            item.IsStunned = criticalEffect.IsStunned;
            item.Negative = criticalEffect.Negative;
            item.Parry = criticalEffect.ParryString;
            item.ParryNegative = criticalEffect.ParryNegative;
            item.TimeEnd = criticalEffect.TimeEnd;
            item.TimeStart = criticalEffect.TimeStart;
            item.Actor_ID = criticalEffect.Actor_ID;


            db.SaveChanges();
            criticalEffect.ID = item.ID;
            Cache.SetItem<CriticalEffect>(CacheArea.Global, "CriticalEffect_" + criticalEffect.ID, criticalEffect);

            var items = GetCriticalEffects(criticalEffect.Actor_ID);
            if (!items.Contains(criticalEffect))
            {
                items.Add(criticalEffect);
            }

            return GetCriticalEffect(criticalEffect.ID);
        }

        public void DeleteCriticalEffect(CriticalEffect criticalEffect)
        {
            Cache.SetItem<CriticalEffect>(CacheArea.Global, "CriticalEffect_" + criticalEffect.ID, null);
            var list = GetCriticalEffects(criticalEffect.Actor_ID);
            if (list.Contains(criticalEffect)) {
                list.Remove(criticalEffect);
            }


            var item = (from c in db.CriticalAffects where c.ID == criticalEffect.ID select c).FirstOrDefault();
            if (item != null)
            {
                db.CriticalAffects.Remove(item);
                db.SaveChanges();
            }
        }

        public void DeleteCriticalEffect(int id)
        {
            var item = GetCriticalEffect(id);
            DeleteCriticalEffect(item);
        }

        public List<BaseAction> GetActionsOnActor(int actorId)
        {
            var act = GetActor(actorId);
            return GetActionsOnActor(act);
        }

        public List<BaseAction> GetActionsOnActor(Actor actor)
        {
            return (from a in GetActionsInGame(actor.Game_ID)
                    where a.WhoIsActing_ID == actor.ID
                    select a).ToList();
        }

        public List<BaseAction> GetActionsInGame(int gameId)
        {
            var aList = Cache.GetItem<List<BaseAction>>(CacheArea.Global, "ActionsInGame_" + gameId, () =>
            {
                var list = (from a in db.ActorsActions
                            where a.Game_ID==gameId
                            select new BaseAction()
                            {
                                ID = a.ID,
                                Name = a.Name,
                                BaseAction_ID = a.BaseAction_ID,
                                BasePercent = a.BasePercent,
                                CriticalGiven = a.CriticalGiven,
                                CurrentAttack_ID = a.CurrentAttack_ID,
                                CurrentModifier = a.CurrentModifier,
                                EndTime = a.EndTime,
                                Game_ID = a.Game_ID,
                                Interrupted = a.Interrupted,
                                LeftPercent = a.LeftPercent,
                                Note = a.Note,
                                StartTime = a.StartTime,
                                WhoIsActing_ID = a.WhoIsActing_ID,
                                TypeString = a.Type,
                                StateString = a.State,
                                ActionTypeString = a.ActionType,
                                Reoccuring = a.Reoccuring,
                                CharacterAction  =a.CharacterAction,
                                Bleeder = a.Bleeder,
                                Count = a.Count,
                                TotalRounds = a.TotalRounds,
                                LevelDifference = a.LevelDifference,
                                IsHasted = a.IsHasted,
                                IsSlowed = a.IsSlowed,
                                HastedPercent = a.HastedPercent,
                                Critical_ID = a.Critical_ID
                            }).ToList();

                list.ForEach((g) =>
                {
                    if (g.BaseAction_ID.HasValue)
                    {
                        g.Base = _chartRepository.GetAction(g.BaseAction_ID.Value);
                    }
                    if (g.CurrentAttack_ID.HasValue) {
                        g.CurrentAttack = _combatRepository.GetAttack(g.CurrentAttack_ID.Value);
                    }
                    g.WhoIsActing = GetActor(g.WhoIsActing_ID);

                    if (g.Critical_ID.HasValue)
                    {
                        
                    }
                    
                    //if (g.Type== Entities.Reference.ActorActionType.Attack)
                    //{
                    //    g.CharacterAction = true;
                    //    g.Reoccuring = false;
                    //}
                    //if (g.Type == Entities.Reference.ActorActionType.Bleed)
                    //{
                    //    g.CharacterAction = true;
                    //    g.Reoccuring = false;
                    //}
                    //if (g.Type == Entities.Reference.ActorActionType.Critical)
                    //{
                    //    g.CharacterAction = false;
                    //    g.Reoccuring = false;
                    //}
                    //if (g.Type == Entities.Reference.ActorActionType.Death)
                    //{
                    //    g.CharacterAction = true;
                    //    g.Reoccuring = g.WhoIsActing.HitsRemaining<0;
                    //}
                    //if (g.Type == Entities.Reference.ActorActionType.Movement)
                    //{
                    //    g.CharacterAction = true;
                    //    g.Reoccuring = false;
                    //}
                    //if (g.Type == Entities.Reference.ActorActionType.Prep)
                    //{
                    //    g.CharacterAction = true;
                    //    g.Reoccuring = false;
                    //}
                    //if (g.Type == Entities.Reference.ActorActionType.Psychic)
                    //{
                    //    g.CharacterAction = false;
                    //    g.Reoccuring = false;
                    //}
                    //if (g.Type == Entities.Reference.ActorActionType.Spell)
                    //{
                    //    g.CharacterAction = true;
                    //    g.Reoccuring = false;
                    //}
                    //if (g.Type == Entities.Reference.ActorActionType.SpellEffect)
                    //{
                    //    g.CharacterAction = false;
                    //    g.Reoccuring = false;
                    //}
                    //if (g.Type == Entities.Reference.ActorActionType.Normal)
                    //{
                    //    g.CharacterAction = true;
                    //    g.Reoccuring = false;
                    //}


                    Cache.SetItem<BaseAction>(CacheArea.Global, "Action_" + g.ID, g);
                });
                //list = (from ac in list orderby ac.EndTime select ac).ToList();
                return list;
            }, "game");

            aList.Sort((x, y) => x.EndTime.CompareTo(y.EndTime));
            return aList;
        }

        public List<BaseAction> GetActionsInGame(Game game)
        {
            return GetActionsInGame(game.ID);
        }

        public BaseAction GetAction(int id)
        {
            var act = db.ActorsActions.FirstOrDefault((a) => a.ID == id);
            var lst = GetActionsInGame(act.Game_ID);
            return lst.FirstOrDefault((a) => a.ID == id);
        }

        public BaseAction SaveAction(BaseAction action)
        {

            var item = (from c in db.ActorsActions where c.ID == action.ID select c).FirstOrDefault();
            if (item == null)
            {
                item = new DbActorsAction();
                db.ActorsActions.Add(item);
            }


            item.Name = action.Name;
            item.BaseAction_ID = action.BaseAction_ID;
            item.BasePercent = action.BasePercent;
            item.CriticalGiven = action.CriticalGiven;
            item.CurrentAttack_ID = action.CurrentAttack_ID;
            item.CurrentModifier = action.CurrentModifier;
            item.EndTime = action.EndTime;
            item.Game_ID = action.Game_ID;
            item.Interrupted = action.Interrupted;
            item.LeftPercent = action.LeftPercent;
            item.Note = action.Note;
            item.StartTime = action.StartTime;
            item.WhoIsActing_ID = action.WhoIsActing_ID;
            item.Type = action.TypeString;
            item.State = action.StateString;
            item.ActionType = action.ActionTypeString;
            item.Reoccuring = action.Reoccuring;
            item.CharacterAction = action.CharacterAction;
            item.Bleeder = action.Bleeder;
            item.Count = action.Count;
            item.TotalRounds = action.TotalRounds;
            item.LevelDifference = action.LevelDifference;
            item.IsHasted = action.IsHasted;
            item.IsSlowed = action.IsSlowed;
            item.HastedPercent = action.HastedPercent;
            item.Critical_ID = action.Critical_ID;


            db.SaveChanges();
            action.ID = item.ID;

            var items = GetActionsInGame(action.Game_ID);
            if (!items.Contains(action))
            {
                items.Add(action);
            }

            return GetAction(action.ID);
        }

        public void DeleteAction(BaseAction action)
        {

            var items = GetActionsInGame(action.Game_ID);
            var act = GetAction(action.ID);
            if (items.Contains(act))
            {
                items.Remove(act);
            }

            var item = (from c in db.ActorsActions where c.ID == action.ID select c).FirstOrDefault();
            if (item != null)
            {
                db.ActorsActions.Remove(item);
                db.SaveChanges();
            }
        }

        public void DeleteAction(int id)
        {
            var item = GetAction(id);
            DeleteAction(item);
        }
    }
}

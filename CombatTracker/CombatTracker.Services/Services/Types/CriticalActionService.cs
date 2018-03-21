using CombatTracker.Entities.Current;
using CombatTracker.Entities.Reference;
using CombatTracker.Entities.Reference.Actions;
using CombatTracker.Entities.Service;
using System;
using System.Collections.Generic;
using System.Text;

namespace CombatTracker.Services.Services.Types
{
    public class CriticalActionService : IActionServices
    {
        public BaseAction GetSpecialAction(ActorActionType action, Actor whom, Game game, int count = 0)
        {
            var sa = new BaseAction();
            sa.Name = null;
            sa.Note = null;
            sa.BasePercent = 1;
            sa.WhoIsActing = whom;
            sa.WhoIsActing_ID = whom.ID;
            sa.Type = ActorActionType.Critical;
            sa.ActionType = ActionTypeEnum.Effect;
            sa.State = ActionProblem.IsOK;
            sa.CharacterAction = false;
            
            Actor Ch = sa.WhoIsActing;
            var CriticalAffect = Ch.CurrentCrits;
            sa.Critical_ID = CriticalAffect.ID;
            // Me.WhoIsActing = Ch
            string N1 = "";
            string N2 = "";
            string N3 = "";
            string N4 = "";
            if ((Ch.StunRounds > 0))
            {
                N1 = (Ch.StunRounds + " Rnds of Stun");
            }

            if ((Ch.ParryRounds > 0))
            {
                N2 = (Ch.ParryRounds + " Rnds of Parry");
            }

            if ((Ch.NegativeRounds > 0))
            {
                N3 = (Ch.NegativeRounds + " Rnds at Mods");
            }

            sa.Note = (N1 + (" " + (N2 + (" " + N3))));
            sa.BasePercent = 1;
            sa.StartTime = game.CurrentTime;
            sa.EndTime = CriticalAffect.TimeEnd;
            if (CriticalAffect.IsStunned)
            {
                sa.Name = "Stun";
            }

            if ((CriticalAffect.Parry != ParryType.Fine))
            {
                if ((sa.Name.Length > 0))
                {
                    sa.Name = (sa.Name + (" & " + CriticalAffect.Parry.ToString()));
                }
                else
                {
                    sa.Name = CriticalAffect.Parry.ToString();
                }

            }

            return sa;
        }

        public BaseAction GetStandardAction(ActionDefinition action, BaseAction prevAction, Actor whom, Game game)
        {
            throw new NotImplementedException();
        }

        public MoveNextResult ProcessAction(BaseAction action, Actor whom, IGameService gameService)
        {
            gameService.RemoveCriticalsFromActor(whom, 1);

            return new MoveNextResult()
            {
                Response = ResponseEnum.AutoAdvance
            };
        }

        public BaseAction RefreshData(BaseAction action, Actor whom, Game game)
        {
            var Ch = whom;
            var sa = action;
            var CriticalAffect = Ch.CurrentCrits;

            string N1 = "";
            string N2 = "";
            string N3 = "";
            string N4 = "";
            if ((Ch.StunRounds > 0))
            {
                N1 = (Ch.StunRounds + " Rnds of Stun");
            }

            if ((Ch.ParryRounds > 0))
            {
                N2 = (Ch.ParryRounds + " Rnds of Parry");
            }

            if ((Ch.NegativeRounds > 0))
            {
                N3 = (Ch.NegativeRounds + " Rnds at Mods");
            }

            sa.Note = (N1 + (" " + (N2 + (" " + N3))));
            sa.BasePercent = 1;
            sa.StartTime = game.CurrentTime;
            sa.EndTime = CriticalAffect.TimeEnd;
            if (CriticalAffect.IsStunned)
            {
                sa.Name = "Stun";
            }

            if ((CriticalAffect.Parry != ParryType.Fine))
            {
                if ((sa.Name.Length > 0))
                {
                    sa.Name = (sa.Name + (" & " + CriticalAffect.Parry.ToString()));
                }
                else
                {
                    sa.Name = CriticalAffect.Parry.ToString();
                }

            }

            return sa;
        }

        public BaseAction EndEffect(BaseAction action, Actor whom)
        {
            return action;
        }
    }
}

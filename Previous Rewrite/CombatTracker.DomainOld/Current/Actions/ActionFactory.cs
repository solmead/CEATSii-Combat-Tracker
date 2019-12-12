using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using CombatTracker.Domain.Reference;

namespace CombatTracker.Domain.Current.Actions
{
    public static class ActionFactory
    {

        public static BaseAction GetStandardAction(this Reference.Actions.Action action, BaseAction prevAction, Actor whom, double currentTime)
        {
            BaseAction sa = null;

            if (action.Type == BaseActionType.Normal)
            {
                sa = new StandardAction(whom, currentTime, action);
            }
            if (action.Type == BaseActionType.Spell)
            {
                sa = new SpellAction(whom, currentTime, action);
            }
            if (action.Type == BaseActionType.Attack)
            {
                sa = new AttackAction(whom, currentTime, action);
            }
            if (action.Type == BaseActionType.Prep)
            {
                PrepAction pa;
                try
                {
                    pa = prevAction as PrepAction;
                    if (pa == null)
                    {
                        pa = new PrepAction(0, currentTime, action);
                    }
                }
                catch (Exception)
                {
                    pa = new PrepAction(0, currentTime, action);
                }

                sa = new PrepAction(pa.CurrentRound + 1, currentTime, action);
                sa.WhoIsActing = whom;

            }
            if (action.Type == BaseActionType.Movement)
            {
                sa = new MovementAction(whom, currentTime, action);
            }



            if (sa == null)
            {
                sa = new StandardAction(whom, currentTime, action);
            }

            //sa.Base = action;
            //sa.WhoIsActing = whom;
            return sa;
        }
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace CombatTracker.Domain.Reference
{
    static public class Dice
    {
        private static Random rn = new Random();


        public static int RollOnes()
        {
            return rn.Next(0, 9);
        }
        public static int RollOnes10High()
        {
            return rn.Next(1, 10);
        }
        public static int RollAddOnes(int count)
        {
            var tot = 0;
            for (int a = 0; a < count; a++)
            {
                tot = tot + RollOnes();
            }
            return tot;
        }
        public static int RollAddOnes10High(int count)
        {

            var tot = 0;
            for (int a = 0; a < count; a++)
            {
                tot = tot + RollOnes10High();
            }
            return tot;
        }

        public static int RollD100()
        {
            var roll = RollOnes()*10 + RollOnes();
            if (roll == 0)
            {
                roll = 100;
            }
            return roll;
        }

        public static int RollD100OpenEnded()
        {
            var roll = RollD100();

            var tot = roll;
            if (roll >= 96)
            {
                while (roll > 96)
                {
                    roll = RollD100();
                    tot += roll;
                }
            }
            if (roll <= 5)
            {
                roll = RollD100();
                tot -= roll;
                while (roll > 96)
                {
                    roll = RollD100();
                    tot -= roll;
                }
            }

            return tot;
        }
    }
}

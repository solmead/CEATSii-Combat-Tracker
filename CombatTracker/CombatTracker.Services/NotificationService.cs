using CombatTracker.Entities.Abstract.Repos;
using CombatTracker.Entities.Abstract.Services;
using CombatTracker.Entities.Current;
using CombatTracker.Entities.Reference;
using CombatTracker.Base.Utilities;
using CombatTracker.Services.Abstract;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using CombatTracker.Base.Reference;

namespace CombatTracker.Services
{
    public class NotificationService : INotificationService
    {
        private readonly IGameRepository _gameRepository;
        private readonly IEncounterNotification _encounterNotification;

        //public async Task AddMessageAsync(int gameId, string text, MessageTypeEnum messageType = MessageTypeEnum.Normal)
        //{
        //    var msg = new Message()
        //    {
        //         DateTimeStamp = DateTime.Now,
        //          Game_ID = gameId,
        //           MessageType = messageType,
        //            Text = text
        //    };

        //    var msg2 = _gameRepository.SaveMessage(msg);

        //    await _encounterNotification.MessageAddedEventAsync(gameId, msg2);
        //}
        //public void AddMessage(int gameId, string text, MessageTypeEnum messageType = MessageTypeEnum.Normal)
        //{
        //    var msg = new Message()
        //    {
        //        DateTimeStamp = DateTime.Now,
        //        Game_ID = gameId,
        //        MessageType = messageType,
        //        Text = text
        //    };

        //    var msg2 = _gameRepository.SaveMessage(msg);

        //    var t = new Task(async () =>
        //    {
        //        await _encounterNotification.MessageAddedEventAsync(gameId, msg2);
        //    });

        //    t.Start();
        //}
        //public void AddedActorMessage(Actor whom)
        //{
        //  _encounterNotification.EventUpdatedActorAsync(CurrentGame.ID, actor);
        //    AddMessage(CurrentGame.ID,"<span class='currentTimeArea'>" + CurrentGame.CurrentTime.ToString("0.00") + "</span>" + "<span>Added:</span><span class='whomName' style='color:rgb(" + whom.Color + ");'>" + whom.Name + "</span>");
        //}
        //public void OnActionFinishedMessage(Actor whom, BaseAction action)
        //{
        //    AddMessage(CurrentGame.ID, "<span class='currentTimeArea'>" + CurrentGame.CurrentTime.ToString("0.00") + "</span>" + "<span class='whomName' style='color:rgb(" + whom.Color + ");'>" + whom.Name + "</span><span>finished</span><span class='actionName'>" + action.Name + "</span>");
        //}
        //public void OnIndepedentActionReoccurringMessage(Actor whom, BaseAction action)
        //{
        //    AddMessage(CurrentGame.ID, "<span class='currentTimeArea'>" + CurrentGame.CurrentTime.ToString("0.00") + "</span>" + "<span class='whomName' style='color:rgb(" + whom.Color + ");'>" + whom.Name + "</span><span class='actionName'>" + action.Name + "</span><span class='actionNote'>" + action.Note + "</span>");
        //}
        //public void OnIndepedentActionEndMessage(Actor whom, BaseAction action)
        //{
        //    AddMessage(CurrentGame.ID, "<span class='currentTimeArea'>" + CurrentGame.CurrentTime.ToString("0.00") + "</span>" + "<span class='actionName'>" + action.Name + "</span><span>on</span><span class='whomName' style='color:rgb(" + whom.Color + ");'>" + whom.Name + "</span><span>Ended</span>");
        //}

        //_encounterNotification.EventRemovedActionAsync(CurrentGame.ID, act);

        //_encounterNotification.EventUpdatedActionAsync(CurrentGame.ID, CurAction);


        public NotificationService(IGameRepository gameRepository,
            IEncounterNotification encounterNotification)
        {
            _gameRepository = gameRepository;
            _encounterNotification = encounterNotification;
        }

        public void AddMessage(Game game, Actor whom = null, BaseAction action = null, bool reverseOrder = false, string beginText= "", string betweenText = "", string endText = "", MessageTypeEnum messageType = MessageTypeEnum.Normal)
        {
            var msg = new Message()
            {
                GameTime = game.CurrentTime,
                Game_ID = game.ID,
                MessageType = messageType,
                BeginText = beginText,
                BetweenText = betweenText,
                EndText = endText,
                ReverseOrder = reverseOrder,
                Whom = whom?.Name,
                Action = action?.Name,
                WhomColor = whom?.Color
            };

            var msg2 = _gameRepository.SaveMessage(msg);

            var t = new Task(async () =>
            {
                await _encounterNotification.MessageAddedEventAsync(game.ID, msg2);
            });

            t.Start();
        }

        public void OnActionFinishedNotification(Game currentGame, Actor whom, BaseAction action)
        {
            //    AddMessage(CurrentGame.ID, "<span class='currentTimeArea'>" + CurrentGame.CurrentTime.ToString("0.00") + "</span>" + "<span class='whomName' style='color:rgb(" + whom.Color + ");'>" + whom.Name + "</span><span>finished</span><span class='actionName'>" + action.Name + "</span>");

            AddMessage(currentGame, whom, action, betweenText: "finished");
        }

        public void OnActionRemovedNotification(Game currentGame, Actor whom, BaseAction action)
        {
            _encounterNotification.EventRemovedActionAsync(currentGame.ID, action);
        }

        public void OnActionUpdatedNotification(Game currentGame, Actor whom, BaseAction action)
        {
            _encounterNotification.EventUpdatedActionAsync(currentGame.ID, action);
        }

        public void OnActorAddedNotification(Game currentGame, Actor whom)
        {
            _encounterNotification.EventUpdatedActorAsync(currentGame.ID, whom);
            AddMessage(currentGame, whom, beginText:"Added:");
        }

        public void OnActorRemovedNotification(Game currentGame, Actor whom)
        {
            _encounterNotification.EventRemovedActorAsync(currentGame.ID, whom);
        }

        public void OnActorUpdatedNotification(Game currentGame, Actor whom)
        {
            _encounterNotification.EventUpdatedActorAsync(currentGame.ID, whom);
        }

        public void OnGameUpdatedNotification(Game currentGame)
        {
            _encounterNotification.EventUpdateGame(currentGame.ID, currentGame);
        }

        public void OnIndepedentActionEndNotification(Game currentGame, Actor whom, BaseAction action)
        {
            //    AddMessage(CurrentGame.ID, "<span class='currentTimeArea'>" + CurrentGame.CurrentTime.ToString("0.00") + "</span>" + "<span class='actionName'>" + action.Name + "</span><span>on</span><span class='whomName' style='color:rgb(" + whom.Color + ");'>" + whom.Name + "</span><span>Ended</span>");

            AddMessage(currentGame, whom, action, true, endText: "Ended");
        }

        public void OnIndepedentActionReoccurringNotification(Game currentGame, Actor whom, BaseAction action)
        {
            //    AddMessage(CurrentGame.ID, "<span class='currentTimeArea'>" + CurrentGame.CurrentTime.ToString("0.00") + "</span>" + "<span class='whomName' style='color:rgb(" + whom.Color + ");'>" + whom.Name + "</span><span class='actionName'>" + action.Name + "</span><span class='actionNote'>" + action.Note + "</span>");

            AddMessage(currentGame, whom, action, endText: action.Note);
        }

        public void OnMoveNext(Game currentGame, MoveNextResult result)
        {
            if (result.Response == ResponseEnum.DisplayMessage)
            {
                AddMessage(currentGame, endText: result.Message, messageType: MessageTypeEnum.Alert);
            }
        }
    }
}

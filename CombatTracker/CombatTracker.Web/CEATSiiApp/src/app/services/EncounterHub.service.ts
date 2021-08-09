import { EventEmitter, Injectable } from '@angular/core';
import { HubConnection, HubConnectionBuilder } from '@microsoft/signalr';
import { Actor, BaseAction, Game } from '@/entities';
import * as signalR from '@microsoft/signalr';
import { whenTrue } from '@/_helpers/Tasks';


class retryPolicy implements signalR.IRetryPolicy {

    nextRetryDelayInMilliseconds(retryContext: signalR.RetryContext): number {
        return 15000;
    }

}


@Injectable()
export class EncounterHubService {
    actorRemoved = new EventEmitter<Actor>();
    actorUpdated = new EventEmitter<Actor>();
    actorsUpdated = new EventEmitter<Actor[]>();
    actionRemoved = new EventEmitter<BaseAction>();
    actionUpdated = new EventEmitter<BaseAction>();
    actionsUpdated = new EventEmitter<BaseAction[]>();
    gameUpdated = new EventEmitter<Game>();

    connectionEstablished = new EventEmitter<Boolean>();

    private connectionIsEstablished = false;
    private _hubConnection: HubConnection;

    private gId: number = 0;

    constructor() {
        this.createConnection();
        this.registerOnServerEvents();
        this.startConnection();
    }

    public async registerForGame(gameId: number): Promise<void> {
        await whenTrue(() => this.connectionIsEstablished);

        await this._hubConnection.invoke('registerForGame', gameId);
        this.gId = gameId;
    }

    private createConnection() {
        this._hubConnection = new HubConnectionBuilder()
            .configureLogging(signalR.LogLevel.Information)
            .withUrl('/hubs/EncounterHub')
            .withAutomaticReconnect(new retryPolicy())
            .build();
    }

    private startConnection(): void {
        this._hubConnection
            .start()
            .then(() => {
                this.connectionIsEstablished = true;
                console.log('Hub connection started');
                this.connectionEstablished.emit(true);
            })
            .catch(err => {
                console.log('Error while establishing connection, retrying...');
                setTimeout(()=> { this.startConnection(); }, 5000);
            });
    }

    private registerOnServerEvents(): void {
        //this._hubConnection.

        this._hubConnection.onreconnected((id) => {
            if (this.gId > 0) {
                this.registerForGame(this.gId);
            }
        });

        this._hubConnection.on('RemovedAction', (data: any) => {
            this.actionRemoved.emit(data);
        });
        this._hubConnection.on('UpdatedAction', (data: any) => {
            this.actionUpdated.emit(data);
        });
        this._hubConnection.on('UpdatedActions', (data: any) => {
            this.actionsUpdated.emit(data);
        });
        this._hubConnection.on('RemovedActor', (data: any) => {
            this.actorRemoved.emit(data);
        });
        this._hubConnection.on('UpdatedActor', (data: any) => {
            this.actorUpdated.emit(data);
        });
        this._hubConnection.on('UpdatedActors', (data: any) => {
            this.actorsUpdated.emit(data);
        });
        //UpdateGame
        this._hubConnection.on('UpdateGame', (data: any) => {
            this.gameUpdated.emit(data);
        });
    }
}    
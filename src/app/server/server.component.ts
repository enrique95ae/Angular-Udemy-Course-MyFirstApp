import { Component } from "@angular/core";
import { ColdObservable } from "rxjs/internal/testing/ColdObservable";

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})

export class ServerComponent 
{
    serverId: number = 10;
    serverStatus: string = 'offline';

    constructor() {
        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offiline';
    }

    getServerStatus() {
        return this,this.serverStatus;
    }

    getColor() {
        return this.serverStatus === 'online' ? 'green' : 'red';
    }
}
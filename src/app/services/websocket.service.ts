import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs';
import { environment } from "../../environments/environment";
import * as Rx from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {
  private socket;

  constructor() { }

  connect(): Rx.Subject<MessageEvent> {
    this.socket = io(environment.ws_url);

    let observable = new Observable(observer => {
      this.socket.on('new message', (data) => {
        console.log("Received a message from Web Server");
        observer.next(data)
      })
      return () => {
        this.socket.disconnect();
      }
    })
    let observer = {
      next: (data: Object) => {
        this.socket.emit('send message', JSON.stringify(data))
      }
    };
    return Rx.Subject.create(observer, observable)
  }

}

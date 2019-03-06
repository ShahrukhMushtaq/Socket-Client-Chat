import { Injectable } from '@angular/core';
import { WebsocketService } from "./websocket.service";
import { Observable, Subject } from "rxjs";
import { map } from 'rxjs/operators';
import * as io from 'socket.io-client'
import { environment } from "../../environments/environment";
@Injectable({
  providedIn: 'root'
})
export class ChatService {
  // private socket = io(environment.ws_url)
  message: Subject<any>;
  constructor(private websocket: WebsocketService) {
    this.message = <Subject<any>>websocket
      .connect()
      .pipe(map(
        (response: any): any => {
          return response;
        }
      ))
  }

  sendMessage(msg) {
    this.message.next(msg)
  }
}

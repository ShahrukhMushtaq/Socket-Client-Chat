import { Component } from '@angular/core';
import { WebsocketService } from "./services/websocket.service";
import { ChatService } from "./services/chat.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'socket-client chat app';
  msg;
  displayMsg = [];
  constructor(private chat: ChatService) { }
  ngOnInit(): void {
    // this.chat.message.subscribe((msg) => {
    //   this.displayMsg.push(msg)
    //   console.log(this.displayMsg)
    // })
    this.chat.receiveMessage().subscribe((msg) => {
      this.displayMsg.push(msg)
    })
  }
  sendMsg() {
    this.chat.sendMessage(this.msg)
    this.msg = ''
  }
}

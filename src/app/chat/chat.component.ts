import { Component, OnInit } from '@angular/core';
import { ChatService } from "../services/chat.service";
import * as _ from 'lodash';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  msg;
  displayMsg = [];
  username;
  onlineUsers = [];
  flag = true;
  errors = '';
  constructor(private chat: ChatService) { }

  ngOnInit() {
    this.chat.receiveMessage().subscribe((msg) => {
      this.displayMsg.push(msg)
    })

    this.chat.reveiveUsers()
      .subscribe(data => {
        console.log(data)
        if (data == true) {
          this.errors = "UserName Already Exist"
          this.flag = true;
        }
        else {
          // for (let i = 0; i < data.length; i++) {
          //   if (data[i] == this.username) {
          //     data.splice(i, 1)
          //   } else {
          //     this.onlineUsers.push(data[i])
          //   }
          // }
          this.onlineUsers = data;
          this.flag = false;
        }
      })

    this.chat.receiveOldMsg()
      .subscribe(data => {
        this.displayMsg = data.map(doc => doc)
      })
  }
  sendMsg() {
    this.chat.sendMessage(this.msg)
    this.msg = ''
  }
  setUserName() {
    this.chat.setUserName(this.username);
    this.flag = false;
    this.errors = ''
  }

}

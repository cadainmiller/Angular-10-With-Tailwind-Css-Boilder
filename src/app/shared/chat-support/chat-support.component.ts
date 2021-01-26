import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-support',
  templateUrl: './chat-support.component.html',
  styleUrls: ['./chat-support.component.scss'],
})
export class ChatSupportComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const chatModal = document.querySelector('.chat-modal');
    const chatServices = document.querySelector('.chat-services');

    const showChat = document.querySelector('.show-chat');
    const closeChat = document.querySelector('.close-chat');

    showChat.addEventListener('click', function () {
      chatModal.classList.add('show');
      showChat.classList.add('hidden');
      setTimeout(() => {
        chatServices.classList.add('expand');
      }, 500);
    });

    closeChat.addEventListener('click', function () {
      setTimeout(() => {
        showChat.classList.remove('hidden');
      }, 820);
      chatServices.classList.remove('expand');
      setTimeout(() => {
        chatModal.classList.remove('show');
      }, 500);
    });
  }
}

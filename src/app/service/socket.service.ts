import { Injectable } from '@angular/core';
import { Environment } from 'environment';
import { Observable } from 'rxjs';
import { connect, Socket } from 'socket.io-client';

@Injectable({
  providedIn: 'root',
})
export class SocketService {
  // import socket for using socket after established
  socket: Socket;

  // initial connection between client and server at constructor
  constructor() {
    this.socket = connect(Environment.shared.socketBaseUrl);
  }

  // Action: listen on `priceList` event to fetch fresh price list
  priceListener(): Observable<any> {
    return new Observable((subscribe) => {
      this.socket.on('priceList', (data) => subscribe.next(data));
    });
  }
}

import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Client } from './client';



@Injectable()
export class ClientService {
  private clients: Client[] = [];
  clientSubject = new Subject<Client[]>();

  emitClients() {
    this.clientSubject.next(this.clients.slice());
  }

  addClient(Client: Client) {
    this.clients.push(Client);
    this.emitClients();
  }

  constructor() { }

}
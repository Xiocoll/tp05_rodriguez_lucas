import { Component, OnInit, OnDestroy, Pipe } from '@angular/core';
import { Subscription } from 'rxjs';
import { Client } from '../../client';
import { ClientService } from '../../client.service';


@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit, OnDestroy {

  clients: Client[];
  clientSubscription: Subscription;

  constructor(private clientService: ClientService) { }

  ngOnInit() {
    this.clientSubscription = this.clientService.clientSubject.subscribe((clients: Client[]) => {
      this.clients = clients;
    }
  );
  this.clientService.emitClients();

  }
  ngOnDestroy() {
    this.clientSubscription.unsubscribe();
  }
}

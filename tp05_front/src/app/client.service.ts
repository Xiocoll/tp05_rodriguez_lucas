import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Client } from './client';
import { environment } from './environment';



@Injectable()
export class ClientService {
  private clients: Client[] = [];
  clientSubject = new Subject<Client[]>();

  constructor(private http: HttpClient) { }

  emitClients() {
    this.clientSubject.next(this.clients.slice());
  }

  addClient(nom: string, prenom: string,adresse: string, ville: string,codePostal: string, telephone: string, mail: string,login: string, password: string) : Observable<any> {
    let body: URLSearchParams = new URLSearchParams();
    body.set('nom', nom);
    body.set('prenom', prenom);
    body.set('adresse', adresse);
    body.set('codePostal', codePostal);
    body.set('ville', ville);
    body.set('telephone', telephone);
    body.set('mail', mail);
    body.set('login', password);
    body.set('password', password);

        return this.http.post<any>(
            environment.register,
            body.toString(),
            {
                headers: { 'content-type': 'application/x-www-form-urlencoded' },
                observe: "response"
            }
        )
  }
  

}
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import {Client} from '../shared/client.model'


@Injectable({
    providedIn:'root'
})

export class ClientsService{


    constructor(private http:HttpClient){

    }

    public listAll():Observable<Client[]>{

        const url = `${environment.baseUrlBackend}/clients`

        return this.http.get(url).pipe(
            map(this.mapToClients)
        )

    }


    private mapToClients(data:any):Array<Client>{
        const listClients: Client[] = [];

        data.forEach((e:any) => listClients.push(Object.assign(new Client, e)))

        return listClients;
    }

}
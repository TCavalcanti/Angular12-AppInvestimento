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

    public listById(id:number): Observable<Client>{

        const url = `${environment.baseUrlBackend}/clients/${id}`

        return this.http.get(url).pipe(
            map(this.mapToClient)
        )

    }



    public saveNew(newClient:Client):Observable<Client>{
        
        const url = `${environment.baseUrlBackend}/clients`

        return this.http.post(url, newClient).pipe(
            map(this.mapToClient)
        )
    }


    public update(client:Client):Observable<Client>{
        
        const url = `${environment.baseUrlBackend}/clients/${client.id}`

        return this.http.put(url, client).pipe(
            map(this.mapToClient)
        )
    }


    public delete(clientId:number):Observable<any>{

        const url = `${environment.baseUrlBackend}/clients/${clientId}`
        return this.http.delete(url, {responseType:'json'})
    }



    private mapToClients(data:any):Array<Client>{
        const listClients: Client[] = [];

        data.forEach((e:any) => listClients.push(Object.assign(new Client, e)))

        return listClients;
    }


    private mapToClient(data:any):Client{
        

        return (Object.assign(new Client, data))

    }

}
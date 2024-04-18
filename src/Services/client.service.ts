import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from 'src/Modeles/Client';
import { GLOBAL } from 'src/app/app-config';

@Injectable({
  providedIn: 'root'  
})
export class ClientService {
  tab:Client[]=GLOBAL.DB.clients;
  constructor(private httpClient:HttpClient) { }
  ONSAVE(clientToSave:any):Observable<any>
  {
    const lastId = this.tab.length > 0 ? this.tab[this.tab.length - 1].id : 0;
    const newId =Number(lastId) + 1;
         //return this.httpClient.post('127.0.01.8080/api/Member',memberToSave)
         const client1={
          ...clientToSave,
          id: newId,
          createdDate:new Date ().toString
         }
         this.tab.push(client1);
         return new Observable(observer=>observer.next())
  }
ONDELETE(id:string):Observable<any>
{
    //return this.httpClient.delete('127.0.0.1:8080/api/Member/$(id)');
    this.tab=this.tab.filter(item=>item.id!=id)
    return new Observable(observer=>observer.next())
  
}
getClientById(id :string):Observable<Client>{
 // return this.httpClient.get<Member>('127.0.0.1:8080/api/Member/$('id')
 return new Observable(observer=>observer.next(
  this.tab.filter(item=>item.id==id)[0] ?? null
))}
updateClient(idcourant:string,form:any):Observable<any>
{
  //return this.httpClient.put('linktorestAPI',form);
  const index= this.tab.findIndex(item=>item.id==idcourant);
  this.tab[index]={
    id:idcourant,
    ...form,
    createdDate:new Date().toISOString()
  }
  return new Observable(observer=>observer.next());
}
  
}

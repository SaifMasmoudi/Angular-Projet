import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Salle } from 'src/Modeles/Salle';
import { GLOBAL } from 'src/app/app-config';
@Injectable({
  providedIn: 'root'
})
export class SalleService {

  tab:Salle[]=GLOBAL.DB.salles;
  constructor() { }
  ONSAVE(clientToSave:any):Observable<any>
  {
         //return this.httpClient.post('127.0.01.8080/api/Member',memberToSave)
         const Salle1={
          ...clientToSave,
          id: Math.ceil(Math.random()*1000),
          createdDate:new Date ().toString
         }
         this.tab.push(Salle1);
         return new Observable(observer=>observer.next())
  }
ONDELETE(id:string):Observable<any>
{
    //return this.httpClient.delete('127.0.0.1:8080/api/Member/$(id)');
    this.tab=this.tab.filter(item=>item.id!=id)
    return new Observable(observer=>observer.next())
  
}
getSalleById(id :string):Observable<Salle>{
 // return this.httpClient.get<Member>('127.0.0.1:8080/api/Member/$('id')
 return new Observable(observer=>observer.next(
  this.tab.filter(item=>item.id==id)[0] ?? null
))}
updateSalle(idcourant:string,form:any):Observable<any>
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

import { Injectable } from '@angular/core';
import { of } from 'rxjs/internal/observable/of';
import { Observable, observable} from 'rxjs';
import {HttpClientModule ,HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(public httpobj:HttpClient) {

   }
   Validateadmin(username:string,password:string):Observable<boolean>{
     let u="https://localhost:44352/Home/checkadmin";
    // this.httpobj.post<any>(u,{user:username,pass:password}).subscribe(
    //   m=>{
    //     console.log(m);
    //   }
    // );

     if(username=="admin" && password=="admin")
     {
    return of(true);
    }
    else{
      return of(false);
     }
    //   return of(false);
   }
}

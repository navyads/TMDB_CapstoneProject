import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class LoginuserService {
  
  constructor(private _http:HttpClient){ }

  public loginUserFromRemote(user: User):Observable<any>{
    return this._http.post("http://localhost:8090/login",user)
  }
}

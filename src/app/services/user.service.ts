import { EventEmitter, Injectable } from '@angular/core';
import { IsignIn, IsignUp } from '../data-type.model';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  isUserLoggedIn = new BehaviorSubject<boolean>(false)/**/
  invalidUserAuth = new EventEmitter<boolean>(false)

constructor(private http: HttpClient, private router: Router) { }

userSignUp(user: IsignUp){
  this.http.post(environment.users, user, {observe:'response'}).subscribe((result)=>{
      if(result){
        sessionStorage.setItem('user',JSON.stringify(result.body))
        this.router.navigate(['/home'])
      }
    })
}

userSignin(data: IsignIn){
  this.http.get<IsignUp[]>(environment.users + `?email=${data.email}&password=${data.password}`,
  {observe: 'response'}).subscribe((result)=>{
    if(result && result.body?.length){
      sessionStorage.setItem('user',JSON.stringify(result.body[0]))
      this.router.navigate(['/home'])
      this.invalidUserAuth.emit(false)
    }
    else{
      this.invalidUserAuth.emit(true)
    }
    })
}

userAuthReload(){
  if(sessionStorage.getItem('user')){
    this.isUserLoggedIn.next(true)/**/
    this.router.navigate(['/home'])
  }
}



}

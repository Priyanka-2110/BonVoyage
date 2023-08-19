import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { IsignUp } from '../../data-type.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  showSignIn = true
  authError: string = ''

  constructor(private adminService: AdminService) {
    this.adminService.reloadAdmin()
   }

  ngOnInit() {
  }

  signUp(data: IsignUp): void{
    console.log(data)
    this.adminService.userSignUp(data)
  }
  signIn(data: IsignUp): void{
    this.adminService.userSignIn(data)
    this.adminService.isLoginError.subscribe((isError)=>{
      if(isError) {
        this.authError="Invalid Login Credentials ☹️"
      }
    })
  }

  openSignIn(){
    this.showSignIn = true
  }
  openSignUp(){
    this.showSignIn = false
  }
}

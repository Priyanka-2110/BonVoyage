import { Component, OnInit } from '@angular/core';
import { IFavorites, IPackage, IsignIn, IsignUp } from '../data-type.model';
import { UserService } from '../services/user.service';
import { PackageService } from '../services/package.service';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  showSignIn: boolean = true
  authError: string = ""

  constructor(private userService: UserService, private packageService: PackageService, private adminService: AdminService) { }

  ngOnInit() {
    this.userService.userAuthReload()
    this.adminService.reloadAdmin()
  }
  signUp(data: IsignUp){
    this.userService.userSignUp(data)
  }
  signIn(data: IsignIn){
    this.userService.userSignin(data)
    this.userService.invalidUserAuth.subscribe((result)=>{
      console.log(result)
      if(result){
        this.authError = "Invalid Login Credentials ☹️"
      }
      else{
        this.localFavToRemoteFav()
      }
    })

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
  localFavToRemoteFav(){
    let data = sessionStorage.getItem('localFav')
    let user = sessionStorage.getItem('user')
    let userId = user && JSON.parse(user).id
    if(data){
      let favDataList: IPackage[] = JSON.parse(data)
      favDataList.forEach((pack: IPackage, index)=>{
        let favData: IFavorites={
          ...pack,
          packageId: pack.id,
          userId
        }
        delete favData.id
        setTimeout(()=>{
          this.packageService.addToFav(favData).subscribe((result)=>{
            if(result){
              console.log("data stored in DB")
            }
          })
        }, 500)
        if(favDataList.length === index+1){
          sessionStorage.removeItem('localFav')
        }
      })
    }
    setTimeout(()=>{
      this.packageService.getFavList(userId)
    },2000)
  }
}

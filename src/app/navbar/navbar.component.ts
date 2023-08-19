import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PackageService } from '../services/package.service';
import { IPackage } from '../data-type.model';
import { NgSwitch } from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  isAdmin: boolean = false;
  isUser: boolean = false;
  isSidebarOpen: boolean = false;
  isDropdownOpen: boolean = false;
  menuType: string = 'default';
  adminName: string = ""
  userName: string = ""
  searchResult: undefined | IPackage[]
  searchSouthResult: undefined | IPackage[]
  searchEastResult: undefined | IPackage[]
  searchWestResult: undefined | IPackage[]
  favItems = 0

  constructor(private router: Router, private packageService: PackageService) { }

  ngOnInit() {
    this.router.events.subscribe((value: any) => {
      if(value.url){
        //console.warn(value.url)
        if(sessionStorage.getItem('admin') && value.url.includes('admin')){
          //console.warn("Admin Page")
          let adminStore = sessionStorage.getItem('admin');
          let adminData = adminStore && JSON.parse(adminStore)[0];
          this.adminName = adminData.name;
          this.menuType = 'admin';
          //console.warn(this.menuType)
        }
        else if(sessionStorage.getItem('user')){
          let userStore = sessionStorage.getItem('user');
          let userData = userStore && JSON.parse(userStore)
          this.userName = userData.name
          this.menuType = 'user';
          console.warn(this.userName)
          //console.warn(this.menuType)
          this.packageService.getFavList(userData.id)
        }
        else{
          //console.warn("Outside Admin Page")
          this.menuType = 'default';
          //console.warn(this.menuType)
        }
      }
    })


    const adminData = sessionStorage.getItem('admin');
    const userData = sessionStorage.getItem('user');
    const currentUrl = this.router.url;

    if (adminData && currentUrl.includes('admin')) {
      this.isAdmin = true;
    } else if (userData) {
      this.isUser = true;
    }

    let favData = sessionStorage.getItem('localFav')
    if(favData){
      this.favItems = JSON.parse(favData).length
    }
    this.packageService.favData.subscribe((items)=>{
      this.favItems = items.length
    })
  }
  logout() {
    sessionStorage.removeItem('admin')
    this.router.navigate(['/home'])
  }
  userLogout() {
    sessionStorage.removeItem('user')
    this.router.navigate(['/auth'])
    this.packageService.favData.emit([])
  }

  searchPackage(query:KeyboardEvent){
    if(query){
      const element = query.target as HTMLInputElement;
      this.packageService.searchPackage(element.value).subscribe((result)=>{
        if(result.length>4){
          result.length=length
        }
        this.searchResult=result;
      })

      this.packageService.searchSouthPackage(element.value).subscribe((result)=>{
        if(result.length>4){
          result.length=length
        }
        this.searchSouthResult=result;
      })

      this.packageService.searchEastPackage(element.value).subscribe((result)=>{
        if(result.length>4){
          result.length=length
        }
        this.searchEastResult=result;
      })

      this.packageService.searchWestPackage(element.value).subscribe((result)=>{
        if(result.length>4){
          result.length=length
        }
        this.searchWestResult=result;
      })
    }
  }

  hideSearch(){
    this.searchResult = undefined
  }
  redirectToDetails(id: number){
    this.router.navigate(['/details/'+id])
    //this.router.navigate(['/southDetails/'+id])
  }
  redirectToSouthDetails(id: number){
    this.router.navigate(['/southDetails/'+id])
  }
  redirectToEastDetails(id: number){
    this.router.navigate(['/eastDetails/'+id])
  }
  redirectToWestDetails(id: number){
    this.router.navigate(['/westDetails/'+id])
  }
  submitSearch(val: string){
    console.log(val)
    this.router.navigate([`search/${val}`])
  }

  toggleSidebar(): void {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
  toggleDropdown(): void {
    this.isDropdownOpen = !this.isDropdownOpen;
  }
}

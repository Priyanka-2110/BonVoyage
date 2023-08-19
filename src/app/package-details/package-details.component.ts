import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PackageService } from '../services/package.service';
import { IFavorites, IPackage } from '../data-type.model';

@Component({
  selector: 'app-package-details',
  templateUrl: './package-details.component.html',
  styleUrls: ['./package-details.component.css']
})
export class PackageDetailsComponent implements OnInit {

  packageList: IPackage[] | undefined/* */
  packageData: IPackage | undefined/* */
  removeFav = false
  favData: IPackage | undefined
  //isIconDisabled = true;/* */


  constructor(private activatedRoute: ActivatedRoute, private packageService: PackageService, private router: Router) { }

  ngOnInit() {
    let packageId = this.activatedRoute.snapshot.paramMap.get('packageId')
    console.log(packageId)
    packageId && this.packageService.getPackage(packageId).subscribe((result)=>{
      this.packageData = result
      let favData = sessionStorage.getItem('localFav')
      if(packageId && favData){
        let items = JSON.parse(favData)
        items = items.filter((item:IPackage)=>packageId === item.id.toString())
        console.warn("items", items)
        if(items.length){
          this.removeFav = true
        }
        else{
          this.removeFav = false
        }
      }
      let user = sessionStorage.getItem('user')
      if(user){
        let userId = user && JSON.parse(user).id
        this.packageService.getFavList(userId)

        this.packageService.favData.subscribe((result)=>{
          let item = result.filter((item: IPackage)=>packageId?.toString()===item.packageId?.toString())
          if(item.length){
            this.favData = item[0]
            this.removeFav = true
          }
        })
      }
    })
  }

  addToFavorites(){
    if(this.packageData){
      //console.warn(this.packageData)
      if(!sessionStorage.getItem('user')){
        this.packageService.localAddToFavorites(this.packageData)
        this.removeFav = true
        //this.isIconDisabled = true;/* */
      }

      else{
        //this.isIconDisabled = false;/* */
        let user = sessionStorage.getItem('user')
        let userId = user && JSON.parse(user).id
        let favData: IFavorites={
          ...this.packageData,
          userId,
          packageId: this.packageData.id
        }
        delete favData.id
        this.packageService.addToFav(favData).subscribe((result)=>{
          if(result){
            this.packageService.getFavList(userId)
            this.removeFav = true
          }
        })
      }
    }
  }
  removeFavorites(packageId: number){
    if(!sessionStorage.getItem('user')){
      this.packageService.removeItemFromFav(packageId)
    }
    else{
      console.warn("FAV DATA", this.favData)
      this.favData && this.packageService.removeFav(this.favData.id).subscribe((result)=>{
      let user = sessionStorage.getItem('user')
      let userId = user && JSON.parse(user).id
      this.packageService.getFavList(userId)
      })
    }
    this.removeFav = false
  }
  booknow(){
    this.router.navigate(['/booknow'])
  }
}

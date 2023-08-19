import { Component, OnInit } from '@angular/core';
import { IFavorites, IPackage } from '../data-type.model';
import { PackageService } from '../services/package.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-eastIndia',
  templateUrl: './eastIndia.component.html',
  styleUrls: ['./eastIndia.component.css']
})
export class EastIndiaComponent implements OnInit {

  url = "/assets/images/EastIndia.jpg"
  eastIndianPackages: IPackage[] | undefined

  constructor(private packageService: PackageService) { }

  ngOnInit() {
    this.packageService.eastIndianPackages().subscribe((data: any)=>{
      this.eastIndianPackages = data
    })
  }

}













/*export class EastIndiaComponent implements OnInit {

  url = "/assets/images/EastIndia.jpg"
  eastIndianPackages: IPackage[] | undefined
  favData: IFavorites[] = [];
  selectedItemId: number | null = null;

  constructor(private packageService: PackageService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    let packageId = this.activatedRoute.snapshot.paramMap.get('packageId');
    console.log(packageId);

    this.packageService.eastIndianPackages().subscribe((data: any)=>{
      this.eastIndianPackages = data

      let user = sessionStorage.getItem('user');
      if (user) {
        let userId = JSON.parse(user).id;
        this.packageService.gotFavList(userId).subscribe((result: IFavorites[]) => {
          this.favData = result;
          if (packageId) {
            this.setSelectedItem(packageId);
          }
        });
      }
      else {
        if (packageId) {
          this.setSelectedItem(packageId);
        }
      }
    })
  }
  setSelectedItem(packageId: string) {
    this.selectedItemId = Number(packageId);
  }

  isFavorite(item: IPackage): boolean {
    return !!this.favData.find((favItem) => favItem.packageId === item.id);
  }

  addToFavorites(item: IPackage) {
    if (!sessionStorage.getItem('user')) {
      this.packageService.localAddToFavorites(item);
    }
    else {
      let user = sessionStorage.getItem('user');
      let userId = user && JSON.parse(user).id;
      let favData: IFavorites = {
        ...item,
        userId: userId!,
        packageId: item.id,
      };
      this.packageService.addToFav(favData).subscribe((result) => {
        if (result) {
          //this.packageService.getFavList(userId!);
          this.packageService.gotFavList(userId!).subscribe((favorites) => {
            this.favData = favorites;
          });
        }
      });
    }
  }

  removeFavorites(item: IPackage) {
    let user = sessionStorage.getItem('user');
    let userId = user && JSON.parse(user).id;
    let favItem = this.favData.find((fav) => fav.packageId === item.id);
    if (favItem) {
      this.packageService.removeFav(favItem.id!).subscribe((result) => {
        //this.packageService.getFavList(userId!);
        this.packageService.gotFavList(userId!).subscribe((favorites) => {
          this.favData = favorites;
        });
      });
    }
  }


}*/

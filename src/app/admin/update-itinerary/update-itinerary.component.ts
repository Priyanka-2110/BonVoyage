import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { IItinerary, IPackage } from 'src/app/data-type.model';
import { PackageService } from 'src/app/services/package.service';


@Component({
  selector: 'app-update-itinerary',
  templateUrl: './update-itinerary.component.html',
  styleUrls: ['./update-itinerary.component.css']
})
export class UpdateItineraryComponent implements OnInit {

  packageData: IPackage | undefined;
  packageMessage: string | undefined;
  newItems: { title: string; details: string; }[] = [];

  constructor(private route: ActivatedRoute, private packageService: PackageService, private router: Router) {}

  ngOnInit() {
    let packageId = this.route.snapshot.paramMap.get('id');
    console.log(packageId);
    packageId && this.packageService.getPackage(packageId).subscribe((data)=>{
      console.log(data);
      this.packageData = data;
    })
  }

  addItem() {
    this.newItems.push({ title: '', details: '' });
  }

  removeExistingField(index: number) {
    if (this.packageData) {
      this.packageData.itinerary.splice(index, 1);
    }
  }

  removeItem(index: number) {
    this.newItems.splice(index, 1);
  }

  updatePackageData() {
    if (this.packageData) {
      const newItineraryItems: IItinerary[] = [];

      for (let newItem of this.newItems) {
        if (newItem.title && newItem.details) {
          const newId = this.packageData.itinerary.length + 1;

          const newItineraryItem: IItinerary = {
            id: newId,
            title: newItem.title,
            details: newItem.details,
          };

          newItineraryItems.push(newItineraryItem);
        }
      }

      this.packageData.itinerary = [...this.packageData.itinerary, ...newItineraryItems];

      this.packageService.updateItinerary(this.packageData).subscribe((result) => {
        if (result) {
          this.packageMessage = "Package has been updated successfully";
          setTimeout(() => {
            const nextId = result.id;
            this.router.navigate([`admin/updateGallery/${nextId}/`]);
          }, 1000);
        }
      });
    }
  }
}





/*export class UpdateItineraryComponent implements OnInit {

  packageData:  IPackage | undefined
  packageMessage: string | undefined
  newItems: { title: string; details: string; }[] = [];


  constructor(private route: ActivatedRoute, private packageService: PackageService, private router: Router) {}

  ngOnInit() {
    let packageId = this.route.snapshot.paramMap.get('id');
    console.log(packageId);
    packageId && this.packageService.getPackage(packageId).subscribe((data)=>{
      console.log(data);
      this.packageData = data;
    })
  }

  addItem() {
    this.newItems.push({ title: '', details: '' });
  }

  removeItem(index: number) {
    this.newItems.splice(index, 1);
  }

  updatePackageData() {
    if (this.packageData) {
      for (let newItem of this.newItems) {
        if (newItem.title && newItem.details) {
          const lastItineraryItem = this.packageData.itinerary[
            this.packageData.itinerary.length - 1
          ];
          const newId = lastItineraryItem.id + 1;

          const newItineraryItem: IItinerary = {
            id: newId,
            title: newItem.title,
            details: newItem.details,
          };

          this.packageData.itinerary.push(newItineraryItem);
        }
      }

      this.packageService
        .updateItinerary(this.packageData)
        .subscribe((result) => {
          if (result) {
            this.packageMessage = "Package has been updated successfully";
            setTimeout(() => {
              this.router.navigate(['/admin/home']);
            }, 3000);
          }
        });
    }
  }


  submit(data: any){
    if(this.packageData){
      data.id = this.packageData.id
    }
    this.packageService.updateItinerary(data).subscribe((result)=>{
      if(result){
        this.packageMessage = "Package has been updated successfully"
      }
    })
    setTimeout(()=>{
      this.packageMessage = undefined
      this.router.navigate(['/admin/home']);
    }, 1000)
    console.log(data)
  }

}
*/

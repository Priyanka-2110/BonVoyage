import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IItinerary, IPackage } from 'src/app/data-type.model';
import { PackageService } from 'src/app/services/package.service';

@Component({
  selector: 'app-update-westItinerary',
  templateUrl: './update-westItinerary.component.html',
  styleUrls: ['./update-westItinerary.component.css']
})
export class UpdateWestItineraryComponent implements OnInit {

  packageData: IPackage | undefined;
  packageMessage: string | undefined;
  newItems: { title: string; details: string; }[] = [];

  constructor(private route: ActivatedRoute, private packageService: PackageService, private router: Router) {}

  ngOnInit() {
    let packageId = this.route.snapshot.paramMap.get('id');
    console.log(packageId);
    packageId && this.packageService.getWestPackage(packageId).subscribe((data)=>{
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

      this.packageService.updateWestItinerary(this.packageData).subscribe((result) => {
        if (result) {
          this.packageMessage = "Package has been updated successfully";
          setTimeout(() => {
            const nextId = result.id;
            this.router.navigate([`admin/updateWestGallery/${nextId}/`]);
          }, 1000);
        }
      });
    }
  }

}

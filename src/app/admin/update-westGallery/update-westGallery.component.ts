import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IGallery, IPackage } from 'src/app/data-type.model';
import { PackageService } from 'src/app/services/package.service';

@Component({
  selector: 'app-update-westGallery',
  templateUrl: './update-westGallery.component.html',
  styleUrls: ['./update-westGallery.component.css']
})
export class UpdateWestGalleryComponent implements OnInit {

  packageData: IPackage | undefined;
  packageMessage: string | undefined;
  newItems: {img: string;}[] = [];

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
    this.newItems.push({img: ''});
  }

  removeExistingField(index: number) {
    if (this.packageData) {
      this.packageData.gallery.splice(index, 1);
    }
  }

  removeItem(index: number) {
    this.newItems.splice(index, 1);
  }

  updatePackageData() {
    if (this.packageData) {
      const newGalleryItems: IGallery[] = [];

      for (let newItem of this.newItems) {
        if (newItem.img) {
          const newId = this.packageData.gallery.length + 1;

          const newItineraryItem: IGallery = {
            id: newId,
            img: newItem.img,
          };

          newGalleryItems.push(newItineraryItem);
        }
      }

      this.packageData.gallery = [...this.packageData.gallery, ...newGalleryItems];

      this.packageService.updateWestItinerary(this.packageData).subscribe((result) => {
        if (result) {
          this.packageMessage = "Gallery has been updated successfully";
          setTimeout(() => {
            this.router.navigate(['/admin/home']);
          }, 1000);
        }
      });
    }
  }

}

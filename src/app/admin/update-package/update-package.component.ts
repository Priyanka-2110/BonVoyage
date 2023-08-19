import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { IPackage } from 'src/app/data-type.model';
import { PackageService } from 'src/app/services/package.service';

@Component({
  selector: 'app-update-package',
  templateUrl: './update-package.component.html',
  styleUrls: ['./update-package.component.css']
})
export class UpdatePackageComponent implements OnInit {

  packageData: undefined | IPackage
  packageMessage: string | undefined

  constructor(private route: ActivatedRoute, private packageService: PackageService, private router: Router) { }

  ngOnInit() {
    let packageId = this.route.snapshot.paramMap.get('id');
    console.log(packageId);
    packageId && this.packageService.getPackage(packageId).subscribe((data)=>{
      console.log(data);
      this.packageData = data;
    })
  }

  submit(data: any){
    if(this.packageData){
      data.itinerary = this.packageData.itinerary;
      data.gallery = this.packageData.gallery;
      data.id = this.packageData.id
    }
    this.packageService.updatePackage(data).subscribe((result)=>{
      if(result){
        this.packageMessage = "Package has been updated successfully"
        setTimeout(()=>{
          this.packageMessage = undefined
          const nextId = result.id;
          this.router.navigate([`admin/updateItinerary/${nextId}/`]);
        }, 1000)
      }
    })
  }

}

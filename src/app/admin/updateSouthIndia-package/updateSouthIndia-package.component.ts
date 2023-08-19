import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { IPackage } from 'src/app/data-type.model';
import { PackageService } from 'src/app/services/package.service';

@Component({
  selector: 'app-updateSouthIndia-package',
  templateUrl: './updateSouthIndia-package.component.html',
  styleUrls: ['./updateSouthIndia-package.component.css']
})
export class UpdateSouthIndiaPackageComponent implements OnInit {

  packageData: undefined | IPackage
  packageMessage: string | undefined

  constructor(private route: ActivatedRoute, private packageService: PackageService, private router: Router) { }

  ngOnInit() {
    let packageId = this.route.snapshot.paramMap.get('id');
    console.log(packageId);
    packageId && this.packageService.getSouthPackage(packageId).subscribe((data)=>{
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
    this.packageService.updateSouthPackage(data).subscribe((result)=>{
      if(result){
        this.packageMessage = "Package has been updated successfully"
        setTimeout(()=>{
          this.packageMessage = undefined
          //this.router.navigate(['/admin/home']);
          const nextId = result.id;
          this.router.navigate([`admin/updateSouthItinerary/${nextId}/`]);
        }, 1000)
      }
    })

  }

}

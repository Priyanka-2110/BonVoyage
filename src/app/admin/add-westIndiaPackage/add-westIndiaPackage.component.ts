import { Component, OnInit } from '@angular/core';
import { PackageService } from '../../services/package.service';
import { IPackage } from '../../data-type.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-westIndiaPackage',
  templateUrl: './add-westIndiaPackage.component.html',
  styleUrls: ['./add-westIndiaPackage.component.css']
})
export class AddWestIndiaPackageComponent implements OnInit {

  addPackageMessage: string | undefined
  //@ViewChild('addPackage') addPackageForm!: NgForm;

  constructor(private packageService: PackageService, private router: Router) { }

  ngOnInit() {
  }

  /*selectedImage: string | undefined;
  selectedVideo: string | undefined;
  onSelectFile(event: any) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);

      reader.onload = (e: any) => {
        this.selectedImage = e.target.result;
      };
    }
  }
  onSelectVideo(event: any) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);

      reader.onload = (e: any) => {
        this.selectedVideo = e.target.result;
      };
    }
  }*/

  submit(data: IPackage){
    this.packageService.addWestPackage(data).subscribe((result:any)=>{
      console.log(result)
      if(result){
        this.addPackageMessage = "New Package is added successfully!"
        setTimeout(()=>{
          this.addPackageMessage=undefined
          const nextId = result.id;
          this.router.navigate([`admin/addWestItinerary/${nextId}/`]);
        },1000)
      }
    })

  }

}

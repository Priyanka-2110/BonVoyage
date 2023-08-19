import { Component, OnInit } from '@angular/core';
import { PackageService } from '../../services/package.service';
import { IPackage } from '../../data-type.model';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormArray, FormBuilder } from '@angular/forms'  /* */
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-EastGallery',
  templateUrl: './add-EastGallery.component.html',
  styleUrls: ['./add-EastGallery.component.css']
})
export class AddEastGalleryComponent implements OnInit {

  GalleryForm: FormGroup;
  addGalleryMessage: string | undefined
  packageData: undefined | IPackage
  title: string | undefined

  constructor(private fb:FormBuilder, private route: ActivatedRoute, private packageService: PackageService, private router: Router, private http: HttpClient) {

    this.GalleryForm = this.fb.group({
      gallery: this.fb.array([])
    });
  }
  ngOnInit() {
    let packageId = this.route.snapshot.paramMap.get('id');
    console.log(packageId);
    packageId && this.packageService.getEastPackage(packageId).subscribe((data)=>{
      console.log(data);
      this.packageData = data;
    })
  }

  gallery() : FormArray {
    return this.GalleryForm.get("gallery") as FormArray
  }

  newGallery(): FormGroup {
    return this.fb.group({
      img: ''
    })
  }

  addGallery() {
    this.gallery().push(this.newGallery());
  }

  removeGallery(i:number) {
    this.gallery().removeAt(i);
  }

  submit(data: IPackage){
    console.log(this.GalleryForm.value);
    if(this.packageData){
      data.id = this.packageData.id
    }

    this.packageService.addEastGallery(data).subscribe((result)=>{
      console.log(result)
      if(result){
        this.addGalleryMessage = "New gallery is added successfully!"
      }
    })
    setTimeout(()=>{
      this.addGalleryMessage=undefined
      this.router.navigate(['admin/home'])
    },3000)
  }



}

import { Component, OnInit } from '@angular/core';
import { PackageService } from '../../services/package.service';
import { IPackage } from '../../data-type.model';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormArray, FormBuilder } from '@angular/forms'  /* */
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-eastItinerary',
  templateUrl: './add-eastItinerary.component.html',
  styleUrls: ['./add-eastItinerary.component.css']
})
export class AddEastItineraryComponent implements OnInit {

  itineraryForm: FormGroup;
  addItineraryMessage: string | undefined
  packageData: undefined | IPackage


  constructor(private fb:FormBuilder, private route: ActivatedRoute, private packageService: PackageService, private router: Router, private http: HttpClient) {

    this.itineraryForm = this.fb.group({
      itinerary: this.fb.array([])
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

  itinerary() : FormArray {
    return this.itineraryForm.get("itinerary") as FormArray
  }

  newItinerary(): FormGroup {
    return this.fb.group({
      title: '',
      details: '',
    })
  }

  addItinerary() {
    this.itinerary().push(this.newItinerary());
  }

  removeItinerary(i:number) {
    this.itinerary().removeAt(i);
  }

  submit(data: IPackage){
    console.log(this.itineraryForm.value);
    if(this.packageData){
      data.id = this.packageData.id
    }

    this.packageService.addEastItinerary(data).subscribe((result)=>{
      console.log(result)
      if(result){
        this.addItineraryMessage = "New Itinerary is added successfully!"
        setTimeout(()=>{
          this.addItineraryMessage=undefined
          const nextId = result.id;
          this.router.navigate([`admin/addEastGallery/${nextId}/`])
        },1000)
      }
    })

  }

}

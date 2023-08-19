import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { IPackage } from 'src/app/data-type.model';
import { PackageService } from 'src/app/services/package.service';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  @Output() confirmed = new EventEmitter<boolean>();

  packageList: IPackage[] | undefined
  southPackageList: IPackage[] | undefined
  eastPackageList: IPackage[] | undefined
  westPackageList: IPackage[] | undefined
  packageMessage: string | undefined
  trashIcon = faTrash
  editIcon = faEdit

  constructor(private packageService: PackageService) { }

  ngOnInit() {
    this.list()
  }

  deletePackage(id: number){
    const confirmation = confirm("This Package will be deleted")
    this.packageService.deletePackage(id).subscribe((result)=>{
      if(result && confirmation){
        this.packageMessage = "Package is deleted successfully"
        this.list()
      }
    })
    setTimeout(()=>{
      this.packageMessage = undefined
    }, 3000)

    this.packageService.deleteSouthPackage(id).subscribe((result)=>{
      if(result){
        this.packageMessage = "Package is deleted successfully"
        this.list()
      }
    })
    setTimeout(()=>{
      this.packageMessage = undefined
    }, 3000)

    this.packageService.deleteEastPackage(id).subscribe((result)=>{
      if(result){
        this.packageMessage = "Package is deleted successfully"
        this.list()
      }
    })
    setTimeout(()=>{
      this.packageMessage = undefined
    }, 3000)

    this.packageService.deleteWestPackage(id).subscribe((result)=>{
      if(result){
        this.packageMessage = "Package is deleted successfully"
        this.list()
      }
    })
    setTimeout(()=>{
      this.packageMessage = undefined
    }, 3000)
  }



  list(){
    this.packageService.packageList().subscribe((result) => {
      if(result){
        this.packageList = result
      }
    })

    this.packageService.SouthpackageList().subscribe((result) => {
      if(result){
        this.southPackageList = result
      }
    })

    this.packageService.EastpackageList().subscribe((result) => {
      if(result){
        this.eastPackageList = result
      }
    })

    this.packageService.WestpackageList().subscribe((result) => {
      if(result){
        this.westPackageList = result
      }
    })

  }


}

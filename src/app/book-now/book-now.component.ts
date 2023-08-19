import { Component, OnInit } from '@angular/core';
import { PackageService } from '../services/package.service';
import { IOrder, IPackage } from '../data-type.model';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-book-now',
  templateUrl: './book-now.component.html',
  styleUrls: ['./book-now.component.css']
})
export class BookNowComponent implements OnInit {

  userData: any = {};
  packageData: any
  orderMsg: string | undefined
  selectedPackageType: string | undefined
  selectedDestination: string | undefined
  isDropdownValid = false
  packagePrice: any
  totalPeople: any
  tomorrow: string | undefined
  dropdownData: IPackage[] | undefined
  dropdownSouthData: IPackage[] | undefined
  dropdownEastData: IPackage[] | undefined
  dropdownWestData: IPackage[] | undefined

  calculatePackagePrice() {

    let packagePrice = 0;

    const selectedItem1 = this.dropdownData?.find(item => item.name === this.selectedDestination);
    if (selectedItem1) {
      packagePrice += selectedItem1.price;
    }
    const selectedItem2 = this.dropdownSouthData?.find(item => item.name === this.selectedDestination);
    if (selectedItem2) {
      packagePrice += selectedItem2.price;
    }
    const selectedItem3 = this.dropdownEastData?.find(item => item.name === this.selectedDestination);
    if (selectedItem3) {
      packagePrice += selectedItem3.price;
    }
    const selectedItem4 = this.dropdownWestData?.find(item => item.name === this.selectedDestination);
    if (selectedItem4) {
      packagePrice += selectedItem4.price;
    }

    console.log(packagePrice)
    if (this.selectedPackageType === 'Standard') {
      packagePrice += 1500 * this.totalPeople;
    } else if (this.selectedPackageType === 'Deluxe') {
      packagePrice += 3000 * this.totalPeople;
    } else if (this.selectedPackageType === 'Premium') {
      packagePrice += 5000 * this.totalPeople;
    } else if (this.selectedPackageType === 'Group') {
      packagePrice += 500 * this.totalPeople;
    }
    console.log(packagePrice)
    const gst = packagePrice * 0.15; /*15% */
    packagePrice += gst;
    console.log(packagePrice)
    packagePrice = Math.round(packagePrice * 100) / 100;

    this.packagePrice = packagePrice;
    console.log(packagePrice)

  }

  updateDropdownValidity() {
    this.isDropdownValid = !!this.selectedDestination && !!this.selectedPackageType;
  }


  constructor(private packageService: PackageService, private activatedRoute: ActivatedRoute, private router: Router) {
    const data = sessionStorage.getItem('user');
    console.log(data)
    if (data) {
      this.userData = JSON.parse(data);
    }

    const today = new Date();
    today.setDate(today.getDate() + 1);
    this.tomorrow = today.toISOString().split('T')[0];
  }

  ngOnInit() {
    /*this.packageService.currentFav().subscribe((result)=>{
    })*/
    this.packageService.northIndianPackages().subscribe((data: any)=>{
      this.dropdownData = data
    })
    this.packageService.southIndianPackages().subscribe((data: any)=>{
      this.dropdownSouthData = data
    })
    this.packageService.eastIndianPackages().subscribe((data: any)=>{
      this.dropdownEastData = data
    })
    this.packageService.westIndianPackages().subscribe((data: any)=>{
      this.dropdownWestData = data
    })
  }

  orderNow(data: {userName: string, email: string, address: string, contact: string, destination: string, strength: number, date: number, packageType: string,status: string}){
    let user = sessionStorage.getItem('user')
    let userId = user && JSON.parse(user).id
    let currentDate = new Date();
    let day = String(currentDate.getDate()).padStart(2, '0');
    let month = String(currentDate.getMonth() + 1).padStart(2, '0');
    let year = currentDate.getFullYear();

    /*const travelDate = new Date(data.date);
    if (travelDate <= currentDate || travelDate.getDate() === currentDate.getDate()) {
      data.status = 'Expired';
    }
    else {
      data.status = 'Active';
    }*/

    let orderData: IOrder={
      ...data,
      userId,
      id: undefined,
      packagePrice: this.packagePrice,
      //packagePrice
      userName: this.userData.name,
      email: this.userData.email,
      orderDate: `${day}-${month}-${year}`,
      status: "Active"
    }
    console.log(orderData)
    this.packageService.orderNow(orderData).subscribe((result)=>{
      if(result){
        console.log(result)
        this.orderMsg = "Order has been placed";
        alert("Thank You For Choosing Us❤️ Our Team Will Contact You Shortly For Further Details")
        //this.router.navigate(['/orders'])

      }
    })
    setTimeout(() => {
      //this.orderMsg = undefined;
      //this.orderMsg = "Order has been placed";
      this.router.navigate(['/orders'])
    }, 2000);
  }
}

  /*orderNow(orderData: IOrder) {
    let user = sessionStorage.getItem('user');
    let userId = user && JSON.parse(user).id;

    let data: IOrder = {
      ...orderData,
      userId,
      id: undefined,
      userName: orderData.userName,
      email: orderData.email,
      packageName: orderData.packageName
    };

    console.log(data);

    this.packageService.orderNow(data).subscribe((result) => {
      if (result) {
        console.log(result);
        this.orderMsg = 'Order has been placed';
        alert('Thank You For Choosing Us❤️ Our Team Will Contact You Shortly For Further Details');
        this.router.navigate(['/home']);
      }
    });
  }
}*/


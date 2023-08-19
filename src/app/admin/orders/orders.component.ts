import { Component, OnInit } from '@angular/core';
import { IOrder } from 'src/app/data-type.model';
import { PackageService } from 'src/app/services/package.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  bookings: IOrder[] = []
  status: string = 'All';
  filteredBookings: IOrder[] | undefined; 

  constructor(private packageService: PackageService) { }

  ngOnInit() {
    this.list()
    this.status = 'All';
  }
  onStatusFilterChange() {
    if (this.status === 'All') {
      this.filteredBookings = undefined;
    } else {
      this.filteredBookings = this.bookings.filter(item => this.getStatus(item) === this.status);
    }
  }

  getStatus(item: any): string {
    const currentDate = new Date();
    const travelDate = new Date(item.date);
    if (item.status === 'Cancelled') {

      return 'Cancelled';
    }
    if (travelDate <= currentDate || travelDate.getDate() === currentDate.getDate() ) {
      return 'Expired';
    }
    return 'Active'
  }

  getStatusColor(item: any): string {
    const status = this.getStatus(item);

    if (status === 'Active') {
      return 'green';
    } else if (status === 'Expired') {
      return 'black';
    } else if (status === 'Cancelled') {
      return 'red';
    } else {
      return 'inherit';
    }
  }


  list(){
    this.packageService.bookings().subscribe((result) => {
      if(result){
        //this.bookings = result
        this.bookings = result.sort((a, b) => {
          if (a.id && b.id) {
            return b.id - a.id;
          }
          return 0;
        });
        this.status = 'All';
        this.onStatusFilterChange();
      }
    })
  }
  /*callNumber(phoneNumber: string) {
    const telLink = 'tel:' + phoneNumber;
    window.open(telLink);
  }*/

}

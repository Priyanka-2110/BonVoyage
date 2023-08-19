import { Component, OnInit } from '@angular/core';
import { IOrder, IPackage } from '../data-type.model';
import { PackageService } from '../services/package.service';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent implements OnInit {

  orderData: IOrder[] | undefined
  packageList: IPackage[] | undefined


  constructor(private packageService: PackageService) { }

  ngOnInit() {
    this.getOrderList()
  }

  getStatus(order: any): string {
    const currentDate = new Date();
    const travelDate = new Date(order.date);
    if (order.status === 'Cancelled') {
      return 'Cancelled';
    }
    if (travelDate <= currentDate || travelDate.getDate() === currentDate.getDate()) {
      return 'Expired';
    }
    return 'Active'
  }

  cancelOrder(orderId: number | undefined){
    orderId && this.packageService.cancelOrder(orderId).subscribe((result) => {
      if(result){
        this.getOrderList()
      }
    })
  }
  getOrderList(){
    this.packageService.orderList().subscribe((result)=>{
      //this.orderData = result
      this.orderData = result.sort((a, b) => {
        if (a.id && b.id) {
          return b.id - a.id;
        }
        return 0;
      });
    })
    console.log(this.orderData)
  }
  list(){
    this.packageService.packageList().subscribe((result) => {
      if(result){
        this.packageList = result
      }
    })
  }

}

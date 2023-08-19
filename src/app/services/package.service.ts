import { EventEmitter, Injectable } from '@angular/core';
import { IFavorites, IItinerary, IOrder, IPackage } from '../data-type.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PackageService {

id: any
favData = new EventEmitter<IPackage[] | [] >()
//private apiUrl = 'http://localhost:3000/packages';

constructor(private http: HttpClient) { }


addPackage(data: IPackage){
  //return this.http.post('http://localhost:3000/packages', data)
  return this.http.post(environment.package, data)
}
addSouthPackage(data: IPackage){
  return this.http.post(environment.southPackage, data)
}
addEastPackage(data: IPackage){
  return this.http.post(environment.eastPackage, data)
}
addWestPackage(data: IPackage){
  return this.http.post(environment.westPackage, data)
}

addItinerary(data: IPackage){
  return this.http.patch<IPackage>(environment.package + `/${data.id}`, data)
}
addSouthItinerary(data: IPackage){
  return this.http.patch<IPackage>(environment.southPackage + `/${data.id}`, data)
}
addEastItinerary(data: IPackage){
  return this.http.patch<IPackage>(environment.eastPackage + `/${data.id}`, data)
}
addWestItinerary(data: IPackage){
  return this.http.patch<IPackage>(environment.westPackage + `/${data.id}`, data)
}


addGallery(data: IPackage){
  //return this.http.patch<IPackage>(`http://localhost:3000/packages/${data.id}`, data)
  return this.http.patch<IPackage>(environment.package + `/${data.id}`, data)
}
addSouthGallery(data: IPackage){
  return this.http.patch<IPackage>(environment.southPackage + `/${data.id}`, data)
}
addEastGallery(data: IPackage){
  return this.http.patch<IPackage>(environment.eastPackage + `/${data.id}`, data)
}
addWestGallery(data: IPackage){
  return this.http.patch<IPackage>(environment.westPackage + `/${data.id}`, data)
}

packageList(){
  //return this.http.get<IPackage[]>('http://localhost:3000/packages')\
  return this.http.get<IPackage[]>(environment.package)
}
SouthpackageList(){
  return this.http.get<IPackage[]>(environment.southPackage)
}
EastpackageList(){
  return this.http.get<IPackage[]>(environment.eastPackage)
}
WestpackageList(){
  return this.http.get<IPackage[]>(environment.westPackage)
}


deletePackage(id: number){
  //return this.http.delete(`http://localhost:3000/packages/${id}`)
  return this.http.delete(environment.package + `/${id}`)
}
deleteSouthPackage(id: number){
  return this.http.delete(environment.southPackage + `/${id}`)
}
deleteEastPackage(id: number){
  return this.http.delete(environment.eastPackage + `/${id}`)
}
deleteWestPackage(id: number){
  return this.http.delete(environment.westPackage + `/${id}`)
}


getPackage(id: string){
  return this.http.get<IPackage>(environment.package + `/${id}`)
}
getSouthPackage(id: string){
  return this.http.get<IPackage>(environment.southPackage + `/${id}`)
}
getEastPackage(id: string){
  return this.http.get<IPackage>(environment.eastPackage + `/${id}`)
}
getWestPackage(id: string){
  return this.http.get<IPackage>(environment.westPackage + `/${id}`)
}


updatePackage(pack: IPackage){
  //return this.http.put<IPackage>(`http://localhost:3000/packages/${pack.id}`, pack)
  return this.http.put<IPackage>(environment.package + `/${pack.id}`, pack)
}
updateSouthPackage(pack: IPackage){
  return this.http.put<IPackage>(environment.southPackage + `/${pack.id}`, pack)
}
updateEastPackage(pack: IPackage){
  return this.http.put<IPackage>(environment.eastPackage + `/${pack.id}`, pack)
}
updateWestPackage(pack: IPackage){
  return this.http.put<IPackage>(environment.westPackage + `/${pack.id}`, pack)
}


updateItinerary(pack: IPackage){
  //return this.http.patch<IPackage>(`http://localhost:3000/packages/${pack.id}`, pack)
  return this.http.patch<IPackage>(environment.package + `/${pack.id}`, pack)
}
updateSouthItinerary(pack: IPackage){
  return this.http.patch<IPackage>(environment.southPackage + `/${pack.id}`, pack)
}
updateEastItinerary(pack: IPackage){
  return this.http.patch<IPackage>(environment.eastPackage + `/${pack.id}`, pack)
}
updateWestItinerary(pack: IPackage){
  return this.http.patch<IPackage>(environment.westPackage + `/${pack.id}`, pack)
}

northIndianPackages(){
  //return this.http.get<IPackage[]>("http://localhost:3000/packages")
  return this.http.get<IPackage[]>(environment.northIndianPackages)
}
southIndianPackages(){
  return this.http.get<IPackage[]>(environment.southIndianPackages)
}
eastIndianPackages(){
  return this.http.get<IPackage[]>(environment.eastIndianPackages)
}
westIndianPackages(){
  return this.http.get<IPackage[]>(environment.westIndianPackages)
}


searchPackage(query: string){
  return this.http.get<IPackage[]>(environment.searchPackage + `/packages?q=${query}`)
}
searchSouthPackage(query: string){
  return this.http.get<IPackage[]>(environment.searchPackage + `/southIndia?q=${query}`)
}
searchEastPackage(query: string){
  return this.http.get<IPackage[]>(environment.searchPackage + `/eastIndia?q=${query}`)
}
searchWestPackage(query: string){
  return this.http.get<IPackage[]>(environment.searchPackage + `/westIndia?q=${query}`)
}


orderNow(data: IOrder){
  return this.http.post(environment.orders, data)
}
orderList(){
  let userStore = sessionStorage.getItem('user')
  let userData = userStore && JSON.parse(userStore)
  return this.http.get<IOrder[]>(environment.orders + '?userId='+userData.id)
}
cancelOrder(orderId: number){
  const url = environment.orders + '/' + orderId;
  const updatedOrder = { status: 'Cancelled' };
  return this.http.patch(url, updatedOrder);
}
/*cancelOrder(orderId: number){
  return this.http.delete('http://localhost:3000/orders/'+orderId)
}*/
bookings(){
  return this.http.get<IOrder[]>(environment.orders)
}







localAddToFavorites(data: IPackage){
  let favData = []
  let localFav = sessionStorage.getItem('localFav')
  if(!localFav){
    sessionStorage.setItem('localFav',JSON.stringify([data]))
    this.favData.emit([data])
  }
  else{
    favData = JSON.parse(localFav)
    favData.push(data)
    sessionStorage.setItem('localFav',JSON.stringify(favData))
    this.favData.emit(favData)
  }
}
removeItemFromFav(packageId: number){
  let favData = sessionStorage.getItem('localFav')
  if(favData){
    let items: IPackage[] = JSON.parse(favData)
    items = items.filter((item:IPackage)=>packageId!==item.id)
    sessionStorage.setItem('localFav',JSON.stringify(items))
    this.favData.emit(items)
  }
}

addToFav(favData: IFavorites){
  return this.http.post('http://localhost:3000/favorites', favData)
}
getFavList(userId: number){
  return this.http.get<IPackage[]>('http://localhost:3000/favorites?userId='+userId,{
    observe: 'response'
  }).subscribe((result)=>{
    if(result && result.body){
      this.favData.emit(result.body)
    }
  })
}
removeFav(favId:number){
  return this.http.delete('http://localhost:3000/favorites/'+favId)
}


/*gotFavList(userId: number): Observable<IFavorites[]> {
  return this.http.get<IFavorites[]>('http://localhost:3000/favorites?userId=' + userId)
}*/


currentFav(){
  let userStore = sessionStorage.getItem('user')
  let userData = userStore && JSON.parse(userStore)
  return this.http.get<IFavorites[]>('http://localhost:3000/favorites?userId='+userData.id)
}

}

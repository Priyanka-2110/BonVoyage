import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin-login/admin.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { AuthGuard } from './auth.guard';
import { AddPackageComponent } from './admin/add-package/add-package.component';
import { UpdatePackageComponent } from './admin/update-package/update-package.component';
import { NorthIndiaComponent } from './northIndia/northIndia.component';
import { SearchComponent } from './search/search.component';
import { PackageDetailsComponent } from './package-details/package-details.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { BookNowComponent } from './book-now/book-now.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { SouthindiaComponent } from './southindia/southindia.component';
import { SouthIndiaDetailsComponent } from './southIndia-details/southIndia-details.component';
import { AuthUserGuard } from './auth-user.guard';
import { AddSouthIndiaPackageComponent } from './admin/add-southIndiaPackage/add-southIndiaPackage.component';
import { AddEastIndiaPackageComponent } from './admin/add-eastIndiaPackage/add-eastIndiaPackage.component';
import { AddWestIndiaPackageComponent } from './admin/add-westIndiaPackage/add-westIndiaPackage.component';
import { UpdateSouthIndiaPackageComponent } from './admin/updateSouthIndia-package/updateSouthIndia-package.component';
import { UpdateEastIndiaPackageComponent } from './admin/updateEastIndia-package/updateEastIndia-package.component';
import { UpdateWestIndiaPackageComponent } from './admin/updateWestIndia-package/updateWestIndia-package.component';
import { EastIndiaComponent } from './eastIndia/eastIndia.component';
import { WestIndiaComponent } from './westIndia/westIndia.component';
import { EastIndiaDetailsComponent } from './eastIndia-details/eastIndia-details.component';
import { WestIndiaDetailsComponent } from './westIndia-details/westIndia-details.component';
import { AddItineraryComponent } from './admin/add-itinerary/add-itinerary.component';
import { AddSouthItineraryComponent } from './admin/add-southItinerary/add-southItinerary.component';
import { AddEastItineraryComponent } from './admin/add-eastItinerary/add-eastItinerary.component';
import { AddWestItineraryComponent } from './admin/add-westItinerary/add-westItinerary.component';
import { UpdateItineraryComponent } from './admin/update-itinerary/update-itinerary.component';
import { OrdersComponent } from './admin/orders/orders.component';
import { AddGalleryComponent } from './admin/add-gallery/add-gallery.component';
import { AddSouthGalleryComponent } from './admin/add-SouthGallery/add-SouthGallery.component';
import { AddEastGalleryComponent } from './admin/add-EastGallery/add-EastGallery.component';
import { AddWestGalleryComponent } from './admin/add-WestGallery/add-WestGallery.component';
import { ErrorComponent } from './error/error.component';
import { UpdateSouthItineraryComponent } from './admin/update-southItinerary/update-southItinerary.component';
import { UpdateEastitineraryComponent } from './admin/update-eastitinerary/update-eastitinerary.component';
import { UpdateWestItineraryComponent } from './admin/update-westItinerary/update-westItinerary.component';
import { UpdateGalleryComponent } from './admin/update-gallery/update-gallery.component';
import { UpdateSouthGalleryComponent } from './admin/update-southGallery/update-southGallery.component';
import { UpdateEastGalleryComponent } from './admin/update-EastGallery/update-EastGallery.component';
import { UpdateWestGalleryComponent } from './admin/update-westGallery/update-westGallery.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'northindia', component: NorthIndiaComponent },
  { path: 'SouthIndia', component: SouthindiaComponent },
  { path: 'EastIndia', component: EastIndiaComponent },
  { path: 'WestIndia', component: WestIndiaComponent },
  { path: 'search/:query', component: SearchComponent },
  { path: 'details/:packageId', component: PackageDetailsComponent },
  { path: 'southDetails/:packageId', component: SouthIndiaDetailsComponent },
  { path: 'eastDetails/:packageId', component: EastIndiaDetailsComponent },
  { path: 'westDetails/:packageId', component: WestIndiaDetailsComponent },
  { path: 'favorites', component: FavoritesComponent, canActivate: [AuthUserGuard] },
  { path: 'booknow', component: BookNowComponent, canActivate: [AuthUserGuard] },
  { path: 'orders', component: MyOrdersComponent, canActivate: [AuthUserGuard] },
  { path: 'admin', component: AdminComponent },
  { path: 'auth', component: UserLoginComponent },
  { path: 'admin/home', component:  AdminHomeComponent, canActivate: [AuthGuard] },
  { path: 'admin/bookings', component: OrdersComponent, canActivate: [AuthGuard] },
  { path: 'admin/addPackage', component: AddPackageComponent, canActivate: [AuthGuard] },
  { path: 'admin/addSouthIndia', component: AddSouthIndiaPackageComponent, canActivate: [AuthGuard] },
  { path: 'admin/addEastIndia', component: AddEastIndiaPackageComponent, canActivate: [AuthGuard] },
  { path: 'admin/addItinerary/:id', component: AddItineraryComponent, canActivate: [AuthGuard] },
  { path: 'admin/addSouthItinerary/:id', component: AddSouthItineraryComponent, canActivate: [AuthGuard] },
  { path: 'admin/addEastItinerary/:id', component: AddEastItineraryComponent, canActivate: [AuthGuard] },
  { path: 'admin/addWestItinerary/:id', component: AddWestItineraryComponent, canActivate: [AuthGuard] },
  { path: 'admin/addGallery/:id', component: AddGalleryComponent, canActivate: [AuthGuard] },
  { path: 'admin/addSouthGallery/:id', component: AddSouthGalleryComponent, canActivate: [AuthGuard] },
  { path: 'admin/addEastGallery/:id', component: AddEastGalleryComponent, canActivate: [AuthGuard] },
  { path: 'admin/addWestGallery/:id', component: AddWestGalleryComponent, canActivate: [AuthGuard] },
  { path: 'admin/updateItinerary/:id', component: UpdateItineraryComponent, canActivate: [AuthGuard] },
  { path: 'admin/updateSouthItinerary/:id', component: UpdateSouthItineraryComponent, canActivate: [AuthGuard] },
  { path: 'admin/updateEastItinerary/:id', component: UpdateEastitineraryComponent, canActivate: [AuthGuard] },
  { path: 'admin/updateWestItinerary/:id', component: UpdateWestItineraryComponent, canActivate: [AuthGuard] },
  { path: 'admin/addWestIndia', component: AddWestIndiaPackageComponent, canActivate: [AuthGuard] },
  { path: 'admin/updatePackage/:id', component: UpdatePackageComponent, canActivate: [AuthGuard] },
  { path: 'admin/updateSouthPackage/:id', component: UpdateSouthIndiaPackageComponent, canActivate: [AuthGuard] },
  { path: 'admin/updateEastPackage/:id', component: UpdateEastIndiaPackageComponent, canActivate: [AuthGuard] },
  { path: 'admin/updateWestPackage/:id', component: UpdateWestIndiaPackageComponent, canActivate: [AuthGuard] },
  { path: 'admin/updateGallery/:id', component: UpdateGalleryComponent, canActivate: [AuthGuard] },
  { path: 'admin/updateSouthGallery/:id', component: UpdateSouthGalleryComponent, canActivate: [AuthGuard] },
  { path: 'admin/updateEastGallery/:id', component: UpdateEastGalleryComponent, canActivate: [AuthGuard] },
  { path: 'admin/updateWestGallery/:id', component: UpdateWestGalleryComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', pathMatch: 'full', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

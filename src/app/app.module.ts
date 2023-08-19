import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';

import { AdminService } from './services/admin.service';
import { PackageService } from './services/package.service';
import { UserService } from './services/user.service';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin-login/admin.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { AddPackageComponent } from './admin/add-package/add-package.component';
import { AddSouthIndiaPackageComponent } from './admin/add-southIndiaPackage/add-southIndiaPackage.component';
import { AddEastIndiaPackageComponent } from './admin/add-eastIndiaPackage/add-eastIndiaPackage.component';
import { AddWestIndiaPackageComponent } from './admin/add-westIndiaPackage/add-westIndiaPackage.component';
import { UpdatePackageComponent } from './admin/update-package/update-package.component';
import { UpdateSouthIndiaPackageComponent } from './admin/updateSouthIndia-package/updateSouthIndia-package.component';
import { UpdateEastIndiaPackageComponent } from './admin/updateEastIndia-package/updateEastIndia-package.component';
import { UpdateWestIndiaPackageComponent } from './admin/updateWestIndia-package/updateWestIndia-package.component';
import { NorthIndiaComponent } from './northIndia/northIndia.component';
import { SearchComponent } from './search/search.component';
import { PackageDetailsComponent } from './package-details/package-details.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { BookNowComponent } from './book-now/book-now.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { SouthindiaComponent } from './southindia/southindia.component';
import { SouthIndiaDetailsComponent } from './southIndia-details/southIndia-details.component';
import { EastIndiaComponent } from './eastIndia/eastIndia.component';
import { WestIndiaComponent } from './westIndia/westIndia.component';
import { EastIndiaDetailsComponent } from './eastIndia-details/eastIndia-details.component';
import { WestIndiaDetailsComponent } from './westIndia-details/westIndia-details.component';
import { FooterComponent } from './footer/footer.component';
import { AddItineraryComponent } from './admin/add-itinerary/add-itinerary.component';
import { AddSouthItineraryComponent } from './admin/add-southItinerary/add-southItinerary.component';
import { AddEastItineraryComponent } from './admin/add-eastItinerary/add-eastItinerary.component';
import { AddWestItineraryComponent } from './admin/add-westItinerary/add-westItinerary.component';
import { UpdateItineraryComponent } from './admin/update-itinerary/update-itinerary.component';
import { OrdersComponent } from './admin/orders/orders.component';
import { GalleryDirective } from './gallery.directive';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { AddGalleryComponent } from './admin/add-gallery/add-gallery.component';
import { AddSouthGalleryComponent } from './admin/add-SouthGallery/add-SouthGallery.component';
import { AddEastGalleryComponent } from './admin/add-EastGallery/add-EastGallery.component';
import { AddWestGalleryComponent } from './admin/add-WestGallery/add-WestGallery.component';
import { CommonModule } from '@angular/common';
import { ErrorComponent } from './error/error.component';
import { UpdateSouthItineraryComponent } from './admin/update-southItinerary/update-southItinerary.component';
import { UpdateEastitineraryComponent } from './admin/update-eastitinerary/update-eastitinerary.component';
import { UpdateWestItineraryComponent } from './admin/update-westItinerary/update-westItinerary.component';
import { UpdateGalleryComponent } from './admin/update-gallery/update-gallery.component';
import { UpdateSouthGalleryComponent } from './admin/update-southGallery/update-southGallery.component';
import { UpdateEastGalleryComponent } from './admin/update-EastGallery/update-EastGallery.component';
import { UpdateWestGalleryComponent } from './admin/update-westGallery/update-westGallery.component';


@NgModule({
  declarations: [
    AppComponent,
      NavbarComponent,
      FooterComponent,
      HomeComponent,
      AdminComponent,
      AdminHomeComponent,
      OrdersComponent,
      AddPackageComponent,
      AddSouthIndiaPackageComponent,
      AddEastIndiaPackageComponent,
      AddWestIndiaPackageComponent,
      UpdatePackageComponent,
      UpdateSouthIndiaPackageComponent,
      UpdateEastIndiaPackageComponent,
      UpdateWestIndiaPackageComponent,
      NorthIndiaComponent,
      SouthindiaComponent,
      SearchComponent,
      FavoritesComponent,
      BookNowComponent,
      MyOrdersComponent,
      PackageDetailsComponent,
      SouthIndiaDetailsComponent,
      UserLoginComponent,
      EastIndiaComponent,
      WestIndiaComponent,
      EastIndiaDetailsComponent,
      WestIndiaDetailsComponent,
      AddItineraryComponent,
      AddSouthItineraryComponent,
      AddEastItineraryComponent,
      AddWestItineraryComponent,
      UpdateItineraryComponent,
      GalleryDirective,
      AddGalleryComponent,
      AddSouthGalleryComponent,
      AddEastGalleryComponent,
      AddWestGalleryComponent,
      UpdateItineraryComponent,
      ErrorComponent,
      UpdateSouthItineraryComponent,
      UpdateEastitineraryComponent,
      UpdateWestItineraryComponent,
      UpdateGalleryComponent,
      UpdateSouthGalleryComponent,
      UpdateEastGalleryComponent,
      UpdateWestGalleryComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule,
    NgbModule,
    RouterModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    SlickCarouselModule,
    CommonModule
  ],
  providers: [
    AdminService,
    PackageService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

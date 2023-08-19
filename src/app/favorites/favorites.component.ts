import { Component, OnInit } from '@angular/core';
import { PackageService } from '../services/package.service';
import { IFavorites } from '../data-type.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  favData: IFavorites[] | undefined

  constructor(private packageService: PackageService, private router: Router) { }

  ngOnInit() {
    this.packageService.currentFav().subscribe((result)=>{
      this.favData = result
      console.log(this.favData)
    })
  }
  booknow(){
    this.router.navigate(['/booknow'])
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PackageService } from '../services/package.service';
import { IPackage } from '../data-type.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchResult: undefined | IPackage[]
  searchSouthResult: undefined | IPackage[]
  searchEastResult: undefined | IPackage[]
  searchWestResult: undefined | IPackage[]

  constructor(private activatedRoute: ActivatedRoute, private packageService: PackageService) { }

  ngOnInit() {
    let query = this.activatedRoute.snapshot.paramMap.get('query')
    console.log(query)
    query && this.packageService.searchPackage(query).subscribe((result)=>{
      this.searchResult = result
    })
    query && this.packageService.searchSouthPackage(query).subscribe((result)=>{
      this.searchSouthResult = result
    })
    query && this.packageService.searchEastPackage(query).subscribe((result)=>{
      this.searchEastResult = result
    })
    query && this.packageService.searchWestPackage(query).subscribe((result)=>{
      this.searchWestResult = result
    })
  }

}

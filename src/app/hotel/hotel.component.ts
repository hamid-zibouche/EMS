import { Component, OnInit } from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {CommonModule, CurrencyPipe, DatePipe, LowerCasePipe, NgForOf, NgIf, UpperCasePipe} from "@angular/common";
import {FormsModule} from "@angular/forms";

import {registerLocaleData} from "@angular/common";
import localeFr from '@angular/common/locales/fr';
import {IHotel} from "./IHotel";
import {ReplaceComma} from "../shared/pipes/Replace-comma.pipe";
import {StarRatingComponent} from "../shared/components/star-rating.component";
import {hide} from "@popperjs/core";
import {HotelListService} from "../services/hotel-list.service";

registerLocaleData(localeFr,'fr')

@Component({
  selector: 'app-hotel',
  standalone: true,
  imports: [RouterOutlet,
    NgIf,
    NgForOf,
    FormsModule,
    CurrencyPipe,
    LowerCasePipe,
    UpperCasePipe,
    DatePipe,
    ReplaceComma,
    StarRatingComponent,
    RouterLink,
    CommonModule,
    RouterLinkActive],
  templateUrl: './hotel.component.html',
  styleUrl: './hotel.component.css'
})
export class HotelComponent implements OnInit {


  title = 'hotel1';

  public getDate():Date{
    return new Date();
  }

  public hotels: IHotel[]= [];
  public showBadge : boolean =true;

  public IsNewBadge():void{
    this.showBadge=!this.showBadge;
  }

  private _hotelFilter='';

  public filtereHotels:IHotel[] = [];

  public errMsg:String='';

  ngOnInit(): void {
    this.hotelListService.getAllHotels().subscribe({
      next: hotels => {
        this.hotels = hotels;
        this.filtereHotels= this.hotels;
        },
      error: error => this.errMsg = error
    })
    this.hotelFilter = this._hotelFilter;
  }

  public get hotelFilter(): string {
    return this._hotelFilter;
  }

  public set hotelFilter(value: string) {
    this._hotelFilter = value;


    this.filtereHotels = this.hotelFilter ? this.filterHotels(this.hotelFilter) : this.hotels;
  }

  private filterHotels(criteria:string): IHotel[]{
    criteria = criteria.toLocaleLowerCase();

    const res = this.hotels.filter(
      (hotel:IHotel)=> hotel.hotelName.toLocaleLowerCase().indexOf(criteria.toLocaleLowerCase()) > -1
    );

    return res;
  }

  public receivedRating:String ="";

  public receiveRatingClick(message:String):void{
    this.receivedRating=message;
    this.isHidden = true;
  }

  public isHidden :boolean=false;

  public hiddenBox():void{
    this.isHidden = !this.isHidden;
  }

  constructor(private hotelListService: HotelListService) {
  }

  protected readonly ongotpointercapture = ongotpointercapture;
}

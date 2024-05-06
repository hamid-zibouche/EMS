import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {HotelListService} from "../../services/hotel-list.service";
import {IHotel} from "../IHotel";

@Component({
  selector: 'app-hotel-detail',
  standalone: true,
  imports: [],
  templateUrl: './hotel-detail.component.html',
  styleUrl: './hotel-detail.component.css'
})
export class HotelDetailComponent implements OnInit {

  public idHotel:number = 0;
  public hotel :IHotel | undefined = <IHotel>{};


  constructor(private router: Router, private route: ActivatedRoute,public hotelService: HotelListService) {}

  ngOnInit(): void {

    const id:number = this.route.snapshot.params['id'];

    this.hotelService.getAllHotels().subscribe((hotels: IHotel[])=>{
      this.hotel = hotels.find(hotel => hotel.hotelId == id);
      console.log('hotel : ',this.hotel);
    })

    this.idHotel = id;
    console.log(id);
  }



}

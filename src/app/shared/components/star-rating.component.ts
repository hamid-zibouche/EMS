import {Component, EventEmitter, Input, OnChanges, Output} from "@angular/core";

@Component({
  selector: "app-star-rating",
  templateUrl: "./star-rating.component.html",
  standalone: true,
  styleUrls: ["./star-rating.component.css"]
})

export class StarRatingComponent implements OnChanges{


  @Input()
  public rating: number = 2;
  public starWidth: number=0 ;

  @Output()
  public starRatingClicked: EventEmitter<String> = new EventEmitter<String>();

  public sendRating(){
    this.starRatingClicked.emit(`la note rating est de ${this.rating} `);
  }

  ngOnChanges(){
    this.starWidth = this.rating * 125 / 5;
  }
}

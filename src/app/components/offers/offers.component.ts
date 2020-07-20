import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../services/data-api.service';
@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent implements OnInit {

  constructor(private dataApi: DataApiService) { }
  public books = [];
  public book = [];
  ngOnInit() {
    this.dataApi.getAllBooks().subscribe(books =>{
      console.log('BOOKS', books);
      this.books = books;
    })
  }

}

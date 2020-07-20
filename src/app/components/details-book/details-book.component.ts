import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../services/data-api.service';
import { BookInterface } from '../../models/book';
@Component({
  selector: 'app-details-book',
  templateUrl: './details-book.component.html',
  styleUrls: ['./details-book.component.css']
})
export class DetailsBookComponent implements OnInit {

  constructor(private dataApi: DataApiService) { }
  public book: BookInterface;
  ngOnInit() {
    const idBook = 'ZHNLY6NX34iwZfa0P04N';
    this.dataApi.getOneBook(idBook).subscribe(book => {
      console.log(book);
    });
  }

}

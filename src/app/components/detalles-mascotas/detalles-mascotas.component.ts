import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../services/data-api.service';
import { BookInterface } from '../../models/book';
import{ ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-detalles-mascotas',
  templateUrl: './detalles-mascotas.component.html',
  styleUrls: ['./detalles-mascotas.component.css']
})
export class DetallesMascotasComponent implements OnInit {

  constructor(private dataApi: DataApiService, private route: ActivatedRoute) { }
  public book: BookInterface = {};

  ngOnInit() {
    const idBook = this.route.snapshot.params['id'];
    this.getDetails(idBook);
  }
   getDetails(idBook: string ): void{
    this.dataApi.getOneBook(idBook).subscribe(book => {
      this.book = book;
    });
   }
}

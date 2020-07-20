import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../../services/data-api.service';
import { BookInterface } from '../../../models/book';
import { NgForm} from '@angular/forms'; 
@Component({
  selector: 'app-lista-mascotas',
  templateUrl: './lista-mascotas.component.html',
  styleUrls: ['./lista-mascotas.component.css']
})
export class ListaMascotasComponent implements OnInit {

  constructor(private dataApi: DataApiService) { }
  private books: BookInterface [];

  ngOnInit() {
    this.getListBooks();
  }
  getListBooks() {
    this.dataApi.getAllBooks().subscribe(books =>{
      this.books = this.books;
    });
  }
  onDeleteBook(idBook: string){
    console.log('Delete book');
    const confirmar = confirm('¿Quiere eliminar este registro?');
    if (confirmar){
    this.dataApi.deleteBook(idBook);
    
    }
  }
  
}

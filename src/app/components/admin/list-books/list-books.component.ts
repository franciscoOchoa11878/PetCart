import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../../services/data-api.service';
import { BookInterface } from '../../../models/book';
import { NgForm} from '@angular/forms'; 
import { messaging } from 'firebase';
import { AuthService } from '../../../services/auth.service';
import { AngularFireAuth} from '@angular/fire/auth';
import { UserInterface } from '../../../models/user';
@Component({
  selector: 'app-list-books',
  templateUrl: './list-books.component.html',
  styleUrls: ['./list-books.component.css']
})
export class ListBooksComponent implements OnInit {

  constructor(private dataApi: DataApiService, private authService: AuthService) { }
  private books: BookInterface[];
  public isAdmin: any = null;
  public userUid: string =null;
  //private books = {};

  getCurrentUser(){
    this.authService.isAuth().subscribe(auth =>{
      if (auth){
        this.userUid = auth.uid;
        this.authService.isUserAdmin(this.userUid).subscribe(userRol =>{
          this.isAdmin = Object.assign({}, userRol.rol).hasOwnProperty('admin');
        })
      }
    })
  }

  ngOnInit() {
    this.getListBooks();
    this.getCurrentUser();
  }

  getListBooks() {
    this.dataApi.getAllBooks().subscribe(books => {
      this.books = books;
    });
  }

  onDeleteBook(idBook: string): void{
    console.log('Delete book');
    const confirmar = confirm('¿Quiere eliminar este registro?');
    if (confirmar){
    this.dataApi.deleteBook(idBook);
    
    }
  }
  onPreUpdateBook(book: BookInterface){
    this.dataApi.selectedBook = Object.assign({},book);
  }

}


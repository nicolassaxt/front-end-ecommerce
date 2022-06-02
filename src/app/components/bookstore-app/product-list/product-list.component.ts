import { Component, OnInit } from '@angular/core';
import { BooksService } from './product-list.component.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  livros: any;
  bookSrvice : BooksService;

  constructor( bookSrvice :BooksService ) { 

    this.bookSrvice = bookSrvice;
  }

  ngOnInit(): void {

    this.livros = this.bookSrvice.getBook().subscribe((data =>{
      this.livros = data;
      console.log(this.livros);
    }))

  }

}

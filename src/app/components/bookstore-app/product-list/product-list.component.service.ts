import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Book } from "./model/Book";


@Injectable()

export class BooksService
{
    private url = 'https://sheet.best/api/sheets/70f582e1-a775-452f-9343-8346c6179af4';

    httpOptions={
        Headers: new HttpHeaders({'content-type': 'application/json'})
    }

    constructor(private http:HttpClient){}

    getBook(){

        return this.http.get(this.url)
    }
}
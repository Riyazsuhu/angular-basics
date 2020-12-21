import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  constructor() { }
  getAuthor(){
    return ['Riyaz', 'Irfan', 'Suhail']
  }
}

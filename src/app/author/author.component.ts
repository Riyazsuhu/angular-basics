import { AuthorService } from './../author.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {
  title = '3 Authors';
  authors;
  constructor(author: AuthorService) { 
    this.authors = author.getAuthor()
  }

  ngOnInit(): void {
  }

}

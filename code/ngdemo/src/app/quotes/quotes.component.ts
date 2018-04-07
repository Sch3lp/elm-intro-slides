import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Quote } from '../model/quote';

@Component({
  selector: 'quotes',
  template: `
  <ul *ngFor="let quote of quotes">
    <li>{{quote.author}}: "{{quote.text}}"</li>
  </ul>
  <p *ngIf="quotes.length == 0">
    We currently have no quotes in our system. Why don't you do something about that?!
  </p>
  `,
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  private quotes: Set<Quote>;
  private amount: Number;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http
      .get<Set<Quote>>(`http://localhost:3000/api/quotes`)
      .subscribe(quotes => {
        this.quotes = quotes;
        this.amount = quotes.size;
      });
  }

}

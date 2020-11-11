import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-visitors',
  templateUrl: './visitors.component.html',
  styleUrls: ['./visitors.component.css']
})

export class VisitorsComponent implements OnInit {

  url = "http://localhost:3000/visitors";
  visitors: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.http.get(this.url).subscribe(response => {
      this.visitors = response
    })
  }
}

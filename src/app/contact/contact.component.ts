import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  lat: number = 41.682547;
  lng: number = -83.723143;
  constructor() {
  }

  ngOnInit() {
  }
}

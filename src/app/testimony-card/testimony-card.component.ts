import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-testimony-card',
  templateUrl: './testimony-card.component.html',
  styleUrls: ['./testimony-card.component.css']
})
export class TestimonyCardComponent implements OnInit {
@Input() data;
  constructor() { }

  ngOnInit() {
  }

}

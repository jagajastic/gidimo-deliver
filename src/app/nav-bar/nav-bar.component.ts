import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-nav-bar",
  templateUrl: "./nav-bar.component.html",
  styleUrls: ["./nav-bar.component.css"]
})
export class NavBarComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  clickHandBurger(show: boolean) {
    const el = document.querySelector(".main-nav-bar");
    el.classList.toggle("show-menu");
  }
}

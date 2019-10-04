import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  appData = {
    recom: {
      title: "Recommended Restaurants",
      view: "View All Restaurants",
      restaurants: [
        {
          title: "Restaurant A",
          rate: 3
        },
        {
          title: "Restaurant B",
          rate: 3
        },
        {
          title: "Restaurant C",
          rate: 3
        },
        {
          title: "Restaurant D",
          rate: 3
        }
      ]
    },
    popular: {
      title: "Recommended Restaurants",
      restaurants: [
        {
          title: "Restaurant A",
          rate: 3
        },
        {
          title: "Restaurant B",
          rate: 3
        },
        {
          title: "Restaurant C",
          rate: 3
        },
        {
          title: "Restaurant D",
          rate: 3
        }
      ]
    },
  };
  title = "gidimo-deliver";
}

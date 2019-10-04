import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  recom = {
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
  };
  popular = {
    title: "Popular Restaurants",
    view: false,
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
  };

  howItWork = {
    title: "How It Works",
    steps: [
      {
        title: "Select Your Restaurant",
        context:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, quibusdam! Omnis et, id nesciunt laboriosam quae culpa eos sed enim, ut quas error ducimus unde, quidem quaerat hic blanditiis. Totam."
      },
      {
        title: "Select Your Desired Meal",
        context:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, quibusdam! Omnis et, id nesciunt laboriosam quae culpa eos sed enim, ut quas error ducimus unde, quidem quaerat hic blanditiis. Totam."
      },
      {
        title: "Get It Deliver Fast",
        context:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, quibusdam! Omnis et, id nesciunt laboriosam quae culpa eos sed enim, ut quas error ducimus unde, quidem quaerat hic blanditiis. Totam."
      }
    ]
  };
  title = "gidimo-deliver";
}

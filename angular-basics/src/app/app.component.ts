import { Component } from '@angular/core';
import {User} from "./contact-card/user.model";
import {TestService} from "./test.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Basics';
  user: User;
  inputValue: string;

  constructor (private testSvc: TestService, private http: HttpClient) {
    this.user = new User();
    this.user.name = "Shrii";
    this.user.address = "1093 E Duane Ave";
    this.user.designation = "Software Engg";
    this.user.phone  = ["121-1231-12", "122-1213-122"];

    this.testSvc.writeToConsole("Writing to console");

  }

  ngOnInit() {
    let options = {
      "headers" : {
        "user-agent": "http"
      }
    };

    let obs = this.http.get("https://api.github.com/users/jamal90", options);
    obs.subscribe((resp) => {
      console.log("Got the response: " + JSON.stringify(resp));
    })
  }
}

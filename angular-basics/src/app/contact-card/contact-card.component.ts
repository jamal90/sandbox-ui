import {Component, Input, OnInit} from '@angular/core';
import {User} from "./user.model";

@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.css']
})
export class ContactCardComponent implements OnInit {

  @Input("user")
  user: User;

  isCollapsed: boolean = false;

  constructor() {

  }

  ngOnInit() {

  }

  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;
  }

}

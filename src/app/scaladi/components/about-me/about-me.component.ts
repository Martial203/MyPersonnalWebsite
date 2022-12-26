import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {

  constructor() { }

  myServices !: string[];

  ngOnInit(): void {
    this.myServices = ["Showcase websites development", "Landing pages development", "Customized web application development based on your needs", "Mobile applications development"]
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-development',
  templateUrl: './app-development.component.html',
  styleUrls: ['./app-development.component.css']
})
export class AppDevelopmentComponent implements OnInit {
  serviceImage = "./../../../../assets/images/appDevelopment.png";
  serviceTitle = "App Development";
  paragraphOne = `
    We create responsive mobile and web-based applications which focus on capability without the complexity.
    There were over 218 billion apps downloaded last year – App development is the future!
  `;
  paragraphTwo = `
    We use the most innovative and up to date technologies in app development to ensure we deliver outstanding apps and software solutions.
  `;

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-websites',
  templateUrl: './websites.component.html',
  styleUrls: ['./websites.component.css']
})
export class WebsitesComponent implements OnInit {
  serviceImage = "./../../../../assets/images/websiteDevelopment.png";
  serviceTitle = "Website Development";
  paragraphOne = `From the most basic website and E-commerce platforms, to fully-responsive lead-generating deal-closing websites… we do it all.`;
  paragraphTwo = `Below are a few of the websites we have done, go explore!`;

  constructor() { }

  ngOnInit(): void {
  }

}

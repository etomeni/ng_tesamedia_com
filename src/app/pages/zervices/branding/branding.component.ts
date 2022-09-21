import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-branding',
  templateUrl: './branding.component.html',
  styleUrls: ['./branding.component.css']
})
export class BrandingComponent implements OnInit {
  serviceImage = "./../../../../assets/images/branding.png";
  serviceTitle = "Branding";
  paragraphOne = `We have a wide range of local suppliers for corporate gifting, branding, promotional items, awards and much more! Whether you are looking for elegant executive gifts or appreciation gifts, we have the best option for you.`;
  paragraphTwo = `Branding Options Include: Deboss & Dome, Digital Printing, Domed Stickers, Laser Engraving, Pad Printing, Vinyl Stickers, Heat Transfer Printing, Direct to Product Printing, Sublimation, Foiling.`;

  constructor() { }

  ngOnInit(): void {
  }

}

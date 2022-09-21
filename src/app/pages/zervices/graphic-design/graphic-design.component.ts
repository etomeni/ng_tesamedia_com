import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-graphic-design',
  templateUrl: './graphic-design.component.html',
  styleUrls: ['./graphic-design.component.css']
})
export class GraphicDesignComponent implements OnInit {
  serviceImage = "./../../../../assets/images/graphicDesign.png";
  serviceTitle = "Graphic Design";
  paragraphOne = `You didn’t propose to your wife wearing pyjamas. To guarantee any long-term commitment, you’ve got to look your best. So, we make sure that your business, products and services look so good, that “YES!” is the only answer you get.`;
  paragraphTwo = `We make sure that your business, products and services look good, as the best brands speak without saying a word. – your brand can boast about itself, without you having to sell a thing!`;

  constructor() { }

  ngOnInit(): void {
  }

}

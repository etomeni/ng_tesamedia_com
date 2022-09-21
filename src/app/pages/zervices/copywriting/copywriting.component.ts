import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-copywriting',
  templateUrl: './copywriting.component.html',
  styleUrls: ['./copywriting.component.css']
})
export class CopywritingComponent implements OnInit {
  serviceImage = "./../../../../assets/images/copywriting.png";
  serviceTitle = "Copywriting";
  paragraphOne = `Apart from writing a ransom note, copywriting generates the most money. We don’t just write text to fill the lines. We write text that captivates your audience, causes them to hang off every word, and entices them to engage further with your brand.`;
  paragraphTwo = `We create content and copywriting for all social media posts, websites and print media, covering all your bases!`;

  constructor() { }

  ngOnInit(): void {
  }

}

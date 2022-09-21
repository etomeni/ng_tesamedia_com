import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photography',
  templateUrl: './photography.component.html',
  styleUrls: ['./photography.component.css']
})
export class PhotographyComponent implements OnInit {
  serviceImage = "./../../../../assets/images/photography.png";
  serviceTitle = "Photography";
  paragraphOne = `We shoot people. And we’re really good at it too! (Always wanted to say that!) As the proud co-founders of Studio012, we enjoy the benefits of an on-site fully-equipped photographic studio, located in the heart of Centurion. With a studio readily-available, we offer corporate portrait shoots, product photography, and more…`;
  paragraphTwo = ``;

  constructor() { }

  ngOnInit(): void {
  }

}

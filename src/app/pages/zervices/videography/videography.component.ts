import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-videography',
  templateUrl: './videography.component.html',
  styleUrls: ['./videography.component.css']
})
export class VideographyComponent implements OnInit {
  serviceImage = "./../../../../assets/images/videography.png";
  serviceTitle = "Videography";
  paragraphOne = `Videography is undoubtedly our first love. Having spent – easily – thousands of hours shooting, directing and editing video productions, we have nurtured a passion for visual storytelling through the eye of a lens.`;
  paragraphTwo = `We confidently take first prize in creating the most mind-blowing company videos, ever. Our video production includes corporate shoots, company intro videos, promos and product launches, as well as the live broadcasting of events.`;

  constructor() { }

  ngOnInit(): void {
  }

}

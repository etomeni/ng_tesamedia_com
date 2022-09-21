import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-social-media-marketing',
  templateUrl: './social-media-marketing.component.html',
  styleUrls: ['./social-media-marketing.component.css']
})
export class SocialMediaMarketingComponent implements OnInit {
  serviceImage = "./../../../../assets/images/socialMediaMarketing.png";
  serviceTitle = "Social Media Marketing";
  paragraphOne = `An audience at your fingertips – literally! Engaging with your existing and soon-to-be clients on a daily basis has never been this easy. And what happens after getting engaged? Soon after, you enter into a life-long commitment.`;
  paragraphTwo = ``;
  
  constructor() { }

  ngOnInit(): void {
  }

}

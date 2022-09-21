import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-digital-marketing',
  templateUrl: './digital-marketing.component.html',
  styleUrls: ['./digital-marketing.component.css']
})
export class DigitalMarketingComponent implements OnInit {
  serviceImage = "./../../../../assets/images/digitalMarketing.png";
  serviceTitle = "Digital Marketing";
  paragraphOne = `We don’t only market your business on virtually every platform worth mentioning, but we use the ever-changing science of Social Media, SEO, Google Adwords, Targeting & Email Marketing.`;
  paragraphTwo = `Regardless of whether you’re just starting out or ready to explode your sales, our packages are tailored to suit your needs, your desired results, and your budget.`;

  constructor() { }

  ngOnInit(): void {
  }

}

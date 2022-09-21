import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-service-content',
  templateUrl: './top-service-content.component.html',
  styleUrls: ['./top-service-content.component.css']
})
export class TopServiceContentComponent implements OnInit {
  @Input() imageUrl = '';
  @Input() titleText = 'effvevfd';
  @Input() paragraphText1 = '';
  @Input() paragraphText2 = '';

  constructor() { }

  ngOnInit(): void {
  }

}

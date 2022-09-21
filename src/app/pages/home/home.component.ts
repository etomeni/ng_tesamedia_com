import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  submitted: boolean = false;
  status: boolean = false;

  videoLinks = {
    marketivity: "https://firebasestorage.googleapis.com/v0/b/tesa-radio.appspot.com/o/tesamedia%2Fmarketivity.mp4?alt=media&token=ccf7be2e-0549-4323-a7e7-58d48025e90b",
    headerVideo: "https://firebasestorage.googleapis.com/v0/b/tesa-radio.appspot.com/o/tesamedia%2FheaderVideo.mp4?alt=media&token=94122c4c-1e52-4dca-83e4-70668245b73e",
    bodyVideo: "https://firebasestorage.googleapis.com/v0/b/tesa-radio.appspot.com/o/tesamedia%2FbodyVideo.mp4?alt=media&token=00ee2602-d781-4575-9377-c177d957b3f4",
    aboutUs: "https://firebasestorage.googleapis.com/v0/b/tesa-radio.appspot.com/o/tesamedia%2FaboutUs.mp4?alt=media&token=24e4f5c8-dc0e-414e-be91-20035d2d6603"
  };

  constructor() { }

  ngOnInit(): void {
  }


  onSubmitNewsletter(formDatas: any) {
    this.submitted = true;
    const formData = formDatas.value;

    console.log(formData);
    

  }

}

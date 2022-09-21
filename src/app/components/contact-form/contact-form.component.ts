import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  formStatus = {
    submitted: false,
    success: false,
    error: false,
    message: ''
  }

  httpOptions: { headers: HttpHeaders } = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",

      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': 'true',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',
      
      'Accept': '*/*'
    }),
  };

  constructor(
    private http: HttpClient,
  ) { }

  ngOnInit(): void {
  }

  onSubmitContactUs(formDatas: any) {
    this.formStatus.submitted = true;

    const formValue = this.cleanFrom(formDatas.value);

    // console.log(formValue);

    let mailText = `
      Hello Team Tesa, someone with the details below dropped a message:

      Name: ${ formValue.name },/n
      Email: ${ formValue.email },/n
      Phone Number: ${ formValue.phoneNumber }. /n

      Here is the message: /n /n
      ${ formValue.message }
      /n /n

      Best wishes,
      Team Tesa (tesamedia.com).
    `;

    let htmlText = `
      <p style="text-align: center;"><span style="font-size: 18pt; color: #de2341;"><strong>Contact/Quote Form</strong></span></p>
      <p>&nbsp;</p>

      <p>Hello Team Tesa,</p>

      <p><span style"font-weight: bolder;">${ formValue.name }</span> is interested in this services: </p>
      <div> ${ this.formInterests(formValue.interest) } </div>

      <p>This message was sent along side by <span style"font-weight: bolder;">${ formValue.name }</span>: </p>

      <p style="padding: 12px; border-left: 4px solid #d0d0d0; font-style: italic;"><strong>${ formValue.message }</strong></p>
      <p>&nbsp;</p>

      <div>
        <p>Here is <span style"font-weight: bolder;">${ formValue.name }</span> details: </p>
        <ul>
          <li> Name(s): <span style"font-weight: bolder;">${ formValue.name }</span> </li>
          <li> Email address: <span style"font-weight: bolder;">${ formValue.email }</span> </li>
          <li> Phone Number: <span style"font-weight: bolder;">${ formValue.phoneNumber }</span> </li>
        </ul>
      </div>
      <p>&nbsp;</p>

      <p>Please ensure you respond on time or immediately to the client.</p>

      <p>Thanks for choosing <span style="color: #de2341;">Tesamedia.com</span>.</p>
      <p>&nbsp;</p>

      <p><em>Best wishes,</em><br><strong>Team <span style="color: #de2341;"> Tesa </span></strong></p>
    `;

    const mailData = {
      "htmlText": htmlText,
      "mailText": mailText,
      "subject": `New Contact From ${ formValue.name }`,
      "replyTo": `${ formValue.email }`,
      // "ccEmail": "muiliseun1@gmail.com",
      "receiverEmail": "tesamediaworld@gmail.com",
      "ccEmail": "contact@tesamedia.com, support@tesamedia.com, sundaywht@gmail.com",
      "bccEmail": "contact@tesamedia.com, support@tesamedia.com, sundaywht@gmail.com",
    };

    this.http.post<any>(`https://secretweb.vip/api/sendMail`, mailData, this.httpOptions).subscribe(
      (res: any) => {
        // console.log(res);

        this.formStatus.message = "Thank you for getting in touch with us, we'll get back to you shortly.";

        this.formStatus.success = true;
        this.formStatus.error = false;

        this.formStatus.submitted = false;
        formDatas.reset();
      },
      (err: any) => {
        console.log(err);

        this.formStatus.message = "Oooops an error occurred, please try again.";

        this.formStatus.success = false;
        this.formStatus.error = true;

        this.formStatus.submitted = false;
      }
    );
  }

  formInterests(formDatas: any) {
    let textt = "<ul> ";

    if (formDatas.length) {
      formDatas.forEach((element: any) => {
        textt += `<li style"font-weight: bolder;">${ element }</li>`;
      });
    } else {
      textt += "<li></li>";
    }

    textt += " </ul>";

    return textt;
  }

  cleanFrom (obj: any) {
    const interests = [];

    for (var propName in obj) {
      if (obj[propName] == null || obj[propName] == undefined || obj[propName] === "") {
        delete obj[propName];
      }

      if (obj[propName] === true) {
        // const newPropName = propName.replace(/_/g, " ");
        var newPropName = propName.split("_");

        newPropName = newPropName.map(element => {
          return element.charAt(0).toUpperCase() + element.slice(1).toLowerCase();
        });

        interests.push(newPropName.join(" "));
      }
    }
    
    if (interests.length) {
      obj.interest = interests;
    }

    return obj;
  }
}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ServicesComponent } from './pages/services/services.component';
import { QuoteComponent } from './pages/quote/quote.component';

import { SocialMediaMarketingComponent } from './pages/zervices/social-media-marketing/social-media-marketing.component';
import { WebsitesComponent } from './pages/zervices/websites/websites.component';
import { CopywritingComponent } from './pages/zervices/copywriting/copywriting.component';
import { BrandingComponent } from './pages/zervices/branding/branding.component';
import { PhotographyComponent } from './pages/zervices/photography/photography.component';
import { VideographyComponent } from './pages/zervices/videography/videography.component';
import { AppDevelopmentComponent } from './pages/zervices/app-development/app-development.component';
import { DigitalMarketingComponent } from './pages/zervices/digital-marketing/digital-marketing.component';
import { GraphicDesignComponent } from './pages/zervices/graphic-design/graphic-design.component';

import { FtbgvideosectionComponent } from './components/ftbgvideosection/ftbgvideosection.component';
import { ServicetopsectionComponent } from './components/servicetopsection/servicetopsection.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { TopServiceContentComponent } from './components/top-service-content/top-service-content.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { HttpClientModule } from '@angular/common/http';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';

// import { NgToastModule } from 'ng-angular-popup';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ServicesComponent,
    QuoteComponent,
    SocialMediaMarketingComponent,
    DigitalMarketingComponent,
    GraphicDesignComponent,
    WebsitesComponent,
    CopywritingComponent,
    BrandingComponent,
    PhotographyComponent,
    VideographyComponent,
    AppDevelopmentComponent,
    FtbgvideosectionComponent,
    ServicetopsectionComponent,

    HeaderComponent,
    FooterComponent,
    FtbgvideosectionComponent,
    ServicetopsectionComponent,
    TopServiceContentComponent,
    ContactFormComponent,
    PrivacyPolicyComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,

    // NgToastModule,

    ReactiveFormsModule,
    // HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

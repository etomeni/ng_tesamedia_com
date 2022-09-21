import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';

import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { QuoteComponent } from './pages/quote/quote.component';
import { ServicesComponent } from './pages/services/services.component';
import { AppDevelopmentComponent } from './pages/zervices/app-development/app-development.component';
import { BrandingComponent } from './pages/zervices/branding/branding.component';
import { CopywritingComponent } from './pages/zervices/copywriting/copywriting.component';
import { DigitalMarketingComponent } from './pages/zervices/digital-marketing/digital-marketing.component';
import { GraphicDesignComponent } from './pages/zervices/graphic-design/graphic-design.component';
import { PhotographyComponent } from './pages/zervices/photography/photography.component';
import { SocialMediaMarketingComponent } from './pages/zervices/social-media-marketing/social-media-marketing.component';
import { VideographyComponent } from './pages/zervices/videography/videography.component';
import { WebsitesComponent } from './pages/zervices/websites/websites.component';

const routes: Routes = [
  { 
    path: '',
    // redirectTo: 'home',
    // pathMatch: 'full'
    component: HomeComponent 
  },

  { 
    path: 'home',   
    component: HomeComponent 
  },

  { 
    path: 'about',   
    component: AboutComponent
  },

  { 
    path: 'contact',   
    component: ContactComponent
  },

  { 
    path: 'quote',   
    component: QuoteComponent
  },

  { 
    path: 'services',   
    children: [
      { 
        path: '', 
        component: ServicesComponent,
      },

      { 
        path: 'social-media-marketing', 
        component: SocialMediaMarketingComponent,
      },

      { 
        path: 'websites', 
        component: WebsitesComponent,
      },

      { 
        path: 'copywriting', 
        component: CopywritingComponent,
      },

      { 
        path: 'branding', 
        component: BrandingComponent,
      },

      { 
        path: 'photography', 
        component: PhotographyComponent,
      },

      { 
        path: 'videography', 
        component: VideographyComponent,
      },

      { 
        path: 'app-development', 
        component: AppDevelopmentComponent,
      },

      { 
        path: 'digital-marketing', 
        component: DigitalMarketingComponent,
      },

      { 
        path: 'graphic-design', 
        component: GraphicDesignComponent,
      },
    ]
  },
 
  { 
    path: '**', 
    component: PageNotFoundComponent 
  },  // Wildcard route for a 404 page
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

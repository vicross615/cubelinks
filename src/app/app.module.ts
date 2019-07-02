import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OutlookComponent } from './outlook/outlook.component';
import { Office365Component } from './office365/office365.component';
import { CubeComponent } from './cube/cube.component';
import { CubeHeaderComponent } from './cube/cube-header/cube-header.component';
import { CubeFooterComponent } from './cube/cube-footer/cube-footer.component';
import { RequestComponent } from './cube/request/request.component';
import { CubeDashboardComponent } from './cube/cube-dashboard/cube-dashboard.component';
import { HomeComponent } from './cube/views/home/home.component';
import { AboutUsComponent } from './views/about-us/about-us.component';
import { StudyAbroadComponent } from './views/study-abroad/study-abroad.component';
import { HolidayComponent } from './views/holiday/holiday.component';
import { MigrationComponent } from './views/migration/migration.component';
import { ScholarshipsComponent } from './views/scholarships/scholarships.component';
import { AboutTheTestComponent } from './views/about-the-test/about-the-test.component';
import { PartnershipsComponent } from './views/partnerships/partnerships.component';
import { BlogComponent } from './views/blog/blog.component';
import { NewsComponent } from './views/news/news.component';
import { ContactUsComponent } from './views/contact-us/contact-us.component';
import { TestimonialsComponent } from './cube/views/testimonials/testimonials.component';
import { TempPageComponent } from './cube/auxiliary/temp-page/temp-page.component';
import {  SuccessComponent } from './cube/auxiliary/success/success.component';

@NgModule({
  declarations: [
    AppComponent,
    OutlookComponent,
    Office365Component,
    CubeComponent,
    CubeHeaderComponent,
    CubeFooterComponent,
    RequestComponent,
    CubeDashboardComponent,
    HomeComponent,
    AboutUsComponent,
    StudyAbroadComponent,
    HolidayComponent,
    MigrationComponent,
    ScholarshipsComponent,
    AboutTheTestComponent,
    PartnershipsComponent,
    BlogComponent,
    NewsComponent,
    ContactUsComponent,
    TestimonialsComponent,
    TempPageComponent,
    SuccessComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

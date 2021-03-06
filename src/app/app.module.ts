import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';




import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { AboutUsComponent } from './body/about-us/about-us.component';
import { BlogComponent } from './body/blog/blog.component';
import { ContactUsComponent } from './body/contact-us/contact-us.component';
import { HomeComponent } from './body/home/home.component';
import { FormComponent } from './home/form/form.component';
import { ScriptComponent } from './home/script/script.component';
import { FormService } from './home/form/form.service';
import { AlertModule } from 'ngx-alerts';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    AboutUsComponent,
    BlogComponent,
    ContactUsComponent,
    HomeComponent,
    FormComponent,
    ScriptComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [FormService],
  bootstrap: [AppComponent]
})
export class AppModule { 
}


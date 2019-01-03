import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SignaturePadModule } from 'angular2-signaturepad';

import { AppComponent } from './app.component';
import { LanguagesComponent } from './components/languages/languages.component';
import { FormComponent } from './components/form/form.component';
import { ActionsComponent } from './components/actions/actions.component';
import { IdentificationComponent } from './components/identification/identification.component';
import { SignatureComponent } from './components/signature/signature.component';

@NgModule({
  declarations: [
    AppComponent,
    LanguagesComponent,
    FormComponent,
    ActionsComponent,
    IdentificationComponent,
    SignatureComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    SignaturePadModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

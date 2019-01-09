import { Component, OnInit } from '@angular/core';
import { TranslatedForm } from './classes/translated-form';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'XXXX Casino';
  completedSignature: any;
  signedForm: boolean = false;
  selectedFlag: any;
  language: TranslatedForm = new TranslatedForm();

  ngOnInit() {
    this.selectedFlag = this.language.form.fields.english;
  }

  setSignature(signature?: any):void {
    console.log(`in app component signForm`);
    this.completedSignature = signature;
    if(signature) {
      this.signedForm = true;
    } else {
      this.signedForm = false;
    }
  }

  changedLanguage(language: string):void {
    this.selectedFlag = this.language.form.fields[language];
  }

}

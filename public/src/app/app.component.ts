import { Component, OnInit } from '@angular/core';
import { TranslatedForm } from './classes/translated-form';
import { Form } from './classes/form';
import { PdfService } from './services/pdf.service';

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
  translatedActions: Object;
  newForm: Form = new Form();
  signedDate: string;

  constructor(private _pdf: PdfService) {}

  ngOnInit() {
    this.selectedFlag = this.language.form.fields.english;
    this.translatedActions = {
      "SignatureButton1": this.language.form.fields.english.SignatureButton1,
      "SignatureButton2": this.language.form.fields.english.SignatureButton2,
      "SaveButton": this.language.form.fields.english.SaveButton,
      "ClearButton": this.language.form.fields.english.ClearButton
    }
    console.log('here', this.translatedActions);
  }

  setSignature(signature?: any):void {
    console.log(`in app component signForm`);
    this.completedSignature = signature;
    let options = { year: 'numeric', month: 'long', day: 'numeric' };
    let date = new Date().toLocaleDateString('en-US', options);
    this.signedDate = date;
    if(signature) {
      this.signedForm = true;
    } else {
      this.signedForm = false;
    }
  }

  changedLanguage(language: string):void {
    this.selectedFlag = this.language.form.fields[language];
    this.translatedActions = {
      "SignatureButton1": this.language.form.fields[language].SignatureButton1,
      "SignatureButton2": this.language.form.fields[language].SignatureButton2,
      "SaveButton": this.language.form.fields[language].SaveButton,
      "ClearButton": this.language.form.fields[language].ClearButton
    }
  }

  clearForm(): void {
    this.newForm = new Form();
    this._pdf.clearPDF();
    this.setSignature();
    this.signedDate = undefined;
  }

  saveForm(): void {
    this._pdf.updatePDF(this.newForm);
  }

}

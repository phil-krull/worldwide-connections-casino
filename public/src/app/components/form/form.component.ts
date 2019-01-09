import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PdfService } from 'src/app/services/pdf.service';
import { Form } from 'src/app/classes/form';
import { TranslationService } from 'src/app/services/translation.service';
import { TranslatedForm } from 'src/app/classes/translated-form';

@Component({
  selector: 'app-form',
  templateUrl: './form2.component.html',
  styleUrls: ['./form.component.scss']
})              
export class FormComponent implements OnInit {
  form: Form = new Form();
  translatedForm: TranslatedForm;
  @Input() selectedLanguage: any;
  @Input() signature: any;
  @Output() clearSign = new EventEmitter();

  constructor(private _pdf: PdfService, private _translation: TranslationService) { }

  ngOnInit() {
    this.setForm();
    console.log(this.translatedForm);
  }
  // will be called when each form field is filled in change event
  updateForm() {
    console.log("changed");
  }
  // after form is submitted, disabled until the form is signed
  createPDF() {
    this._pdf.updatePDF(this.form);
    console.log('pdf created');
  }

  setForm() {
    this._pdf.clearPDF();
    this.translatedForm = new TranslatedForm();
    this.form = new Form();
    this._translation.setForm(this.translatedForm);
    this.clearSign.emit();
  }

}

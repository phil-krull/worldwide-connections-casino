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
  @Input() form: Form;
  translatedForm: TranslatedForm;
  @Input() selectedLanguage: any;
  @Input() dateSigned: string;
  @Input() signature: any;
  @Output() clearSign = new EventEmitter();

  constructor(private _pdf: PdfService, private _translation: TranslationService) { }

  ngOnInit() {
    // this.setForm();
    this.translatedForm = this._translation.getForm();
    console.log(this.translatedForm);
  }
  // will be called when each form field is filled in change event
  updateForm() {
    console.log("changed");
  }
  // after form is submitted, disabled until the form is signed
  // moved to action
  createPDF() {
    this._pdf.updatePDF(this.form);
    console.log('pdf created');
  }
  // move to action
  setForm() {
    this._pdf.clearPDF();
    this.translatedForm = new TranslatedForm();
    this.form = new Form();
    this._translation.setForm(this.translatedForm);
    this.clearSign.emit();
  }

}

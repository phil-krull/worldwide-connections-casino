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
  @Input() signature: any;
  @Output() clearSign = new EventEmitter();

  constructor(private _pdf: PdfService, private _translation: TranslationService) { }

  ngOnInit() {
    this.setForm();
    console.log(this.translatedForm);
  }

  updateForm() {
    this._pdf.updatePDF(this.form);
    console.log("changed");
  }

  setForm() {
    this._pdf.clearPDF();
    this.translatedForm = new TranslatedForm();
    this.form = new Form();
    this._translation.setForm(this.translatedForm);
    this.clearSign.emit();
  }

}

import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PdfService } from 'src/app/services/pdf.service';
import { TranslationService } from 'src/app/services/translation.service';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.scss']
})
export class LanguagesComponent implements OnInit {

  @Output() flagSelected = new EventEmitter();
  constructor(private _translation: TranslationService) { }

  ngOnInit() {
  }

  getTranslation(language: string) {
    // this will be changed to get the language from the api
    // this._translation.setTranslation(language);
    this.flagSelected.emit(language);
  }

}

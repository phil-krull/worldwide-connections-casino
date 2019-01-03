import { Component, OnInit } from '@angular/core';
import { PdfService } from 'src/app/services/pdf.service';
import { TranslationService } from 'src/app/services/translation.service';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.scss']
})
export class LanguagesComponent implements OnInit {

  constructor(private _translation: TranslationService) { }

  ngOnInit() {
  }

  getTranslation(language: string) {
    this._translation.setTranslation(language);
  }

}

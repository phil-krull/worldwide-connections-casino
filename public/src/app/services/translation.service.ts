import { Injectable } from '@angular/core';
import { TranslatedForm } from '../classes/translated-form';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {

  translatedForm: TranslatedForm;
  availableLanguages: Object = {
    'english': [
      'Reportable Winnings', 'Date won', ' WINNER\'s name', 'Street address', 'City, state and ZIP'
    ],
    'german': [
      'Berichtspflichtige Gewinne', 'Datum gewonnen', 'Name des Gewinners', 'Adresse', 'Stadt, Bundesland und PLZ'
    ],
    'chinese': [
      '可報告的獎金', '獲胜日期', '獲獎者的名字', '街道地址', '城市，州和郵編'
    ],
    'mexico': [
      'Ganancias reportables', 'Fecha ganada', 'Nombre del ganador', 'Dirección', 'Ciudad, estado y código postal'
    ],
  }
  
  constructor() { }

  // to be replaced and joined with getForm()
  setTranslation(language: string) {
    this.translatedForm.language = language;
    this.translatedForm.formFields.amount_won.value = this.availableLanguages[language][0];
    this.translatedForm.formFields.date.value = this.availableLanguages[language][1];
    this.translatedForm.formFields.name.value = this.availableLanguages[language][2];
    this.translatedForm.formFields.address.value = this.availableLanguages[language][3];
    this.translatedForm.formFields.location.value = this.availableLanguages[language][4];
  }

  setForm(form: TranslatedForm):void {
    this.translatedForm = form;
  }

  getForm(): TranslatedForm {
    return this.translatedForm;
  }
}

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PdfService } from 'src/app/services/pdf.service';
import { TranslationService } from 'src/app/services/translation.service';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.scss']
})
export class ActionsComponent implements OnInit {
  @Input() isSigned:boolean;
  @Input() actions: any;
  @Output() clearF = new EventEmitter();
  @Output() saveF = new EventEmitter();
  test: boolean;

  constructor(private _pdf: PdfService, private _translation: TranslationService) { }
  // will need to change this to a class type

  ngOnInit() {
    this._translation.getIsSigned();
  }

  settings() {
    console.log('in settings');
  }

  print() {
    if(this.isSigned) {
      this._pdf.printPDF();
    } else {
      alert('Please sign and submit form')
    }
    console.log('in print');
  }

  email() {
    console.log('in email');
  }

  download() {
    if(this.isSigned) {
      this._pdf.downloadPDF();
    } else {
      alert('Please sign and submit form');
    }
    console.log('in download');
  }

  save() {
    // if(this.isSigned) {
    //   alert('form is signed');
    // } else {
    //   alert('Please sign and submit form');
    // }
    this.saveF.emit();
    this.clearF.emit();
    console.log('form will be sent to database');
  }

  clear() {
    this.clearF.emit();
  }

}

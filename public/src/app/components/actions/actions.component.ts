import { Component, OnInit } from '@angular/core';
import { PdfService } from 'src/app/services/pdf.service';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.scss']
})
export class ActionsComponent implements OnInit {

  constructor(private _pdf: PdfService) { }

  ngOnInit() {
  }

  settings() {
    console.log('in settings');
  }

  print() {
    this._pdf.printPDF();
    console.log('in print');
  }

  email() {
    console.log('in email');
  }

  download() {
    this._pdf.downloadPDF();
    console.log('in download');
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { PdfService } from 'src/app/services/pdf.service';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.scss']
})
export class ActionsComponent implements OnInit {
  @Input() isSigned:boolean;
  constructor(private _pdf: PdfService) { }

  ngOnInit() {
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
      alert('Please sign and submit form')
    }
    console.log('in download');
  }

}

import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { SignaturePad } from 'angular2-signaturepad/signature-pad';
import { PdfService } from 'src/app/services/pdf.service';

@Component({
  selector: 'app-signature',
  templateUrl: './signature.component.html',
  styleUrls: ['./signature.component.scss']
})
export class SignatureComponent implements OnInit {
  @ViewChild(SignaturePad) signaturePad: SignaturePad;
  @Output() formSigned = new EventEmitter();

  constructor(private _pdf: PdfService) { }

  ngOnInit() {
  }

  private signaturePadOptions: Object = { // passed through to szimek/signature_pad constructor
    'minWidth': 2,
    'canvasWidth': 500,
    'canvasHeight': 60
  };

  clear() {
    // this.signaturePad is now available
    this.signaturePad.set('minWidth', 2); // set szimek/signature_pad options at runtime
    this.signaturePad.clear(); // invoke functions from szimek/signature_pad API
  }

  signForm() {
    this._pdf.signForm(this.signaturePad.toDataURL());
    console.log(this.signaturePad);
    this.formSigned.emit(this.signaturePad.toDataURL());
    this.clear();
  }
 
  drawComplete() {
    // will be notified of szimek/signature_pad's onEnd event
    console.log(this.signaturePad.toDataURL());
  }
 
  drawStart() {
    // will be notified of szimek/signature_pad's onBegin event
    console.log('begin drawing');
  }

}

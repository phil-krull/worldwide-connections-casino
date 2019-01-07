import { Injectable } from '@angular/core';
import * as jspdf from 'jspdf';
import * as form from '../../assets/js/2019.js';
import { Form } from '../classes/form.js';

@Injectable({
  providedIn: 'root'
})
export class PdfService {

  pdf: jspdf;

  constructor() { 
    console.log('in constructor in service');
    this.generatePDF();
  }
  
  generatePDF(): void {
    this.pdf = new jspdf('p', 'mm', 'letter');
    this.pdf.addImage(form.image, 'png', 0, 0, 216, 279);
    this.pdf.setFontSize(12);
  }

  printPDF():void {
    console.log(this.pdf);
    console.log(this.pdf.output('blob'));
    // const blob = new Blob([this.pdf.output('blob')]);
    // const blobUrl = URL.createObjectURL(blob);
    const iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    iframe.src = this.pdf.output('bloburl');
    document.body.appendChild(iframe);
    iframe.contentWindow.print();
  }

  downloadPDF():void {
    this.pdf.save('completedForm.pdf');
  }
  
  updatePDF(form: Form):void {
    console.log(form);
    // need to remove the x if unselected
    if(form.Void) {
      this.pdf.text(67, 13, 'X');
    }
    if(form.Corrected) {
      this.pdf.text(88, 13, 'X');
    }
    this.pdf.text(20, 23, form.Payer1);
    this.pdf.text(20, 59, form.Payer2);
    this.pdf.text(65, 59, form.Payer3);
    this.pdf.text(20, 72, form.Winner1);
    this.pdf.text(20, 85, form.Winner2);
    this.pdf.text(20, 98, form.Winner3);
    if(form.Reportings1) {
      this.pdf.text(110, 23, form.Reportings1.toString());
    }
    this.pdf.text(144, 23, form.Reportings2.toString());
    this.pdf.text(110, 32, form.Reportings3);
    if(form.Reportings4) {
      this.pdf.text(144, 32, form.Reportings4.toString());
    }
    this.pdf.text(110, 41, form.Reportings5);
    this.pdf.text(144, 41, form.Reportings6);
    if(form.Reportings7) {
      this.pdf.text(110, 49, form.Reportings7.toString());
    }
    this.pdf.text(144, 49, form.Reportings8);
    this.pdf.text(110, 59, form.Reportings9);
    this.pdf.text(144, 59, form.Reportings10);
    this.pdf.text(110, 72, form.Reportings11);
    this.pdf.text(144, 72, form.Reportings12);
    this.pdf.text(110, 85, form.Reportings13);
    if(form.Reportings14) {
      this.pdf.text(144, 85, form.Reportings14.toString());
    }
    if(form.Reportings15) {
      this.pdf.text(110, 98, form.Reportings15.toString());
    }
    if(form.Reportings16) {
      this.pdf.text(144, 98, form.Reportings16.toString());
    }
    if(form.Reportings17) {
      this.pdf.text(110, 111, form.Reportings17.toString());
    }
    this.pdf.text(144, 111, form.Reportings18);
  }

  emailPDF():void {
    // send pdf to server for emailing
  }

  clearPDF():void {
    // this.pdf.remove({allEntries: true});
    this.generatePDF();
  }

  signForm(signature: string): void {
    let options = { year: 'numeric', month: 'long', day: 'numeric' };
    let date = new Date().toLocaleDateString('en-US', options);
    this.pdf.addImage(signature, 34, 120, 50, 8);
    this.pdf.setFontSize(10);
    this.pdf.text(150, 125, date);
  }
}

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
    console.log(form.name);
    this.pdf.text(20, 72, form.name);
    this.pdf.text(20, 85, form.address);
    this.pdf.text(20, 98, form.location);
    this.pdf.text(110, 23, form.amount_won.toString());
    this.pdf.text(142, 23, form.date);
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
    this.pdf.addImage(signature, 32, 120, 50, 8);
    this.pdf.setFontSize(10);
    this.pdf.text(150, 125, date);
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'XXXX Casino';
  completedSignature: any;
  signedForm: boolean = false;

  setSignature(signature?: any):void {
    console.log(`in app component signForm`);
    this.completedSignature = signature;
    if(signature) {
      this.signedForm = true;
    } else {
      this.signedForm = false;
    }
  }

}

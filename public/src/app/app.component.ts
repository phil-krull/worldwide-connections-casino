import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'XXXX Casino';
  completedSignature: any;

  setSignature(signature?: any):void {
    console.log(`in app component signForm`);
    this.completedSignature = signature;
  }

}

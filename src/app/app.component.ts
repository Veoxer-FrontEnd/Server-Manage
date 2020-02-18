import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  serverElements = [{ name: 'Test Server', type:'server', content:'just a test!'}];

  onServerAdded(serverData: {serverName: string, serverContent: string }){
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }
  onBlueprintAdded(blueprintData: { serverName: string, serverContent: string}){
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent
    });
  }

  onChangeFirstName(){
    this.serverElements[0].name = "changed !";
  }

  onDestroyFirstElement(){
    this.serverElements.splice(0, 1);
  }
}

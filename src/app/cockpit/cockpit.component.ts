import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  @Output('srvCreated') serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  // newServerName = '';
  @ViewChild('serverNameInput', {static : true}) newServerNameInput: ElementRef;
  newServerContent = '';
  
  constructor() { }

  ngOnInit(): void {
    console.log('child content' + this.newServerNameInput.nativeElement.value);
  }

  onAddServer() {
    this.serverCreated.emit({serverName:this.newServerNameInput.nativeElement.value, serverContent:this.newServerContent});
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    this.blueprintCreated.emit({serverName:nameInput.value, serverContent:this.newServerContent});
  }

}

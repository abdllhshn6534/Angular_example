import {Component, ElementRef, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit,OnDestroy{

constructor(private el:ElementRef) {
}
@Output() close = new EventEmitter();
  ngOnInit(): void {
  document.body.appendChild(this.el.nativeElement)
  }
  ngOnDestroy() {  
      this.el.nativeElement.remove()
    //popupstan başka bir yere gittiğimde tetikleniyor
  }
onCloseClick(){
this.close.emit()
}

}

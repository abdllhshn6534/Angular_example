import { Component , Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-itemlist',
  templateUrl: './itemlist.component.html',
  styleUrls: ['./itemlist.component.css']
})
export class ItemlistComponent implements OnInit{
  @Input() items = []
  ngOnInit(): void {
    console.log(this.items)
  }


}

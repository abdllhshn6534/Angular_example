import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts = [
    {
      title: 'Dağ Bisikleti',
      imageUrl: 'assets/biking.jpeg',
      username: 'cbdag',
      content: 'Çok hızlı sürdüm'
    },
    {
      title: 'Doğa Yürüyüsü',
      imageUrl: 'assets/mountain.jpeg',
      username: 'cbdoga',
      content: 'Hadi biraz Maçka parkında turlayalım'
    },
    {
      title: 'Tırmanış',
      imageUrl: 'assets/tree.jpeg',
      username: 'cbuludag',
      content: 'Bugünde iyi tırmandım'
    }
  ]
}

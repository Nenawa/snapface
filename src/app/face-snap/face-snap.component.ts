import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})
export class FaceSnapComponent implements OnInit{
  title!: string;
  description!: string;
  creadetAt!: Date;
  snaps!: number;
  imageUrl!: string;

ngOnInit(): void {
  this.title = 'Go Go Girl!';
  this.description = 'This is the true story of me awakening from my fucking night';
  this.creadetAt = new Date();
  this.snaps = 0;
  this.imageUrl = 'https://www.galerie-com.com/grand_img/0184871001526213614.jpeg'
}
}

import { Component } from '@angular/core';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faMicroscope } from '@fortawesome/free-solid-svg-icons';
import { faChartPie } from '@fortawesome/free-solid-svg-icons';
import { faMicrochip } from '@fortawesome/free-solid-svg-icons';
import { faPalette } from '@fortawesome/free-solid-svg-icons';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import { faBrain } from '@fortawesome/free-solid-svg-icons';
import { faBaseballBatBall } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  faMagnifyingGlass = faMagnifyingGlass;
  faMicroscope = faMicroscope;
  faChartPie = faChartPie;
  faMicrochip = faMicrochip;
  faPalette = faPalette;
  faBook = faBook;
  faBrain = faBrain;
  faBaseballBatBall = faBaseballBatBall;
}

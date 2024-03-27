import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  linkedin = 'https://www.linkedin.com/in/jorge-gregorio-c-a06b20182/';
  gitHub = 'https://github.com/Jorgecaloir1992'

  elements: any[] = [
    {
      name: 'HTML',
      img: '../../../../assets/images/HTML5.png'
    },
    {
      name: 'CSS',
      img: '../../../../assets/images/css-logo.png'
    },
    {
      name: 'JavaScript',
      img: '../../../../assets/images/javaScript.png'
    },
    {
      name: 'Angular',
      img: '../../../../assets/images/angular.png'
    },
    {
      name: 'Git',
      img: '../../../../assets/images/git.png'
    },
    {
      name: 'Node.js',
      img: '../../../../assets/images/nodejs.jpg'
    },
    {
      name: 'Nest.js',
      img: '../../../../assets/images/nestjs.png'
    },
    {
      name: 'Swagger',
      img: '../../../../assets/images/Swagger-logo.png'
    },
    {
      name: 'MySQL',
      img: '../../../../assets/images/logo-mysql-mysql-logo-png-transparent-svg-vector-bie-supply-2.png'
    },
    {
      name: 'MongoDB',
      img: '../../../../assets/images/hhh.png'
    },
  ];

  constructor(
    private router: Router
  ){}

  ngOnInit(){
    this.elements
  }
  
}

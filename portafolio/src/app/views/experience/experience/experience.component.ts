import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  experiences: any[] = [
    {
      cargo: 'Desarrollador de front-end',
      empresa: 'Next Conta',
      resumen: {
        uno: 'Desarrollé y mantuve aplicaciones de frontend utilizando Angular 17, integrando soluciones de diseño responsivo con Bootstrap para ofrecer una experiencia de usuario excepcional.',
        dos: 'Colaboré estrechamente con los equipos de back-end para garantizar la integración eficiente de las API y mejorar la comunicación entre el servidor y el cliente utilizando TypeScript y Node.js.',
        tres: 'Implementé prácticas de desarrollo ágil y metodologías de testing para asegurar la calidad del código y la funcionalidad de las aplicaciones.',
        cuatro: 'Trabajé con MySQL para gestionar bases de datos, asegurando que la integración de datos fuera segura y eficiente.',
        cinco: 'Participé activamente en el proceso de diseño y concepción de proyectos, proporcionando feedback valioso desde la perspectiva del desarrollo frontend.'
      }
    },
    {
      cargo: 'Desarrollador de front-end',
      empresa: 'Facelad',
      resumen: {
        uno: 'Desempeñé el papel de desarrollador front-end, trabajando con diversas tecnologías para crear interfaces de usuario dinámicas y atractivas. Mi experiencia abarcó el uso de tecnologías líderes como Next.js y Angular',
        dos: 'Durante mi tiempo en la empresa, contribuí al diseño y la implementación de soluciones innovadoras, asegurando la integración fluida del front-end para lograr un rendimiento visual óptimo con Bootstrap. Siempre con el impulso de mantenerse al día con las últimas tendencias tecnológicas y comprometido con la entrega de soluciones eficientes y de alta calidad',
        tres: 'Habilidades demostradas en trabajo colaborativo, resolución de problemas y optimización de rendimiento para proporcionar experiencias de usuario excepcionales',
      }
    },
    {
      cargo: 'Desarrollador de front-end Jr',
      empresa: 'BRANEF Innovation & Technology · Jornada completa',
    },
  ]

  constructor() { }

  ngOnInit() {

  }
}

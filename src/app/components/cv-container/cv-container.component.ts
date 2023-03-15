import { Component, OnInit } from '@angular/core';
import { CvItem } from 'src/app/interface/cv.interface';
import Swiper, { SwiperOptions, Navigation } from 'swiper';


@Component({
  selector: 'cv-container',
  templateUrl: './cv-container.component.html',
  styleUrls: ['./cv-container.component.scss']
})
export class CvContainerComponent implements OnInit {


  cv: CvItem[] = [
    {
      position: 'FULLSTACK DEV (FE HEAVY ANGULAR)',
      company: 'BERU (BESKAR)',
      date: 'September 2022 - present day',
      languages: 'Typescript',
      frameworks: 'Angular & Google Cloud Services',
      proyectDescription: 'Beru is a startup powered by Beskar Blockchain. We develop an NFTs marketplace with easy access to the public.',
      tasks:[
          "Complete development of the project's homepage",
          "Complete development of the about-us section of the project",
          "Complete translation of the project using ngx-translate",
          "Implementation of lazy loading in the entire application",
          "Development of the complete search engine of the application",
          "Creation of the transfers feature",
          "3rd party integrations for web3 authentication and payments",
          "Complete development of the user profile",
          "Creating and maintaining Git branches (Bitbucket)",
          "Angular universal instalation and configuration",
          "Much more...",
      ]
    },
    {
      position: 'IONIC & ANGULAR DEVELOPER',
      company: 'IUDU',
      date: 'March 2021 - March 2022',
      languages: 'Typescript',
      frameworks: 'Ionic (Capacitor) & Angular',
      proyectDescription: 'Developing web and mobile applications with Ionic and Angular for Android and IOS.',
      tasks:[
          "Developed a routng Wrapper and an http Wrapper that is still used in the app",
          "Full component development for geneal usage on the application",
          "Continous code refactory for best practices in the whole app.",
          "Development and implementation of different features for the application.",
          "Mantaining the application, debugging and fixing",
          "Much more...",
      ]
    },
    {
      position: 'IONIC & ANGULAR DEVELOPER & NODE',
      company: 'Lion Languages (E-commerce, freelance)',
      date: 'June 2022 - July 2022',
      languages: 'Typescript',
      frameworks: 'Ionic, Angular, NodeJs, ExpressJs, PostgreSql',
      proyectDescription: 'E-commerce to show online courses',
      tasks:[
          "Client management",
          "Web design",
          "Product list, product detail & cart views",
          "Back-office (Product CRUD, Payment Order CRUD, Payment Order status management)",
          "Auth system using JWT",
          "Contact form",
          "Invoice creation (base64, pdf, fileSystem)",
          "Mailing (Nodemailer)",
          "Much more...",
      ]
    },
    {
      position: 'FULLSTACK DEV',
      company: 'Tu tienda web',
      date: 'September 2020 - April 2021',
      languages: 'Javascript, Html, Css',
      frameworks: 'Node, Express, EJS (view engine), MySql',
      proyectDescription: 'E-commerce',
      tasks:[
          "Planning and estimating the page and the web server to be carried out",
          "Translation of the design of a web page to web components.",
          "Handling user interactions and interface animations",
          "Handling asynchronous connections with Ajax and / or Fetch",
          "Implementation of JavaScript validations for forms.",
          "Creation and commissioning of a Web server",
          "Analysis, design and implementation of a database system",
          "Planning and estimation of web server development.",
          "Authentication and management of sessions and users",
          "Handling asynchronous connections to web services",
          "ntegration with other platforms through APIs",
          "Use of session and cookies to store information",
          "Maintenance and troubleshooting",
          "Much more...",
      ]
    },
  ]

  swiperConfig: SwiperOptions = {
    slidesPerView: 1.1,
    spaceBetween: 10,
    navigation: true,
    pagination: false,
    mousewheel: true,
    containerModifierClass: 'cv-slider',
    centerInsufficientSlides: true,
    breakpoints: {
      1024: {
        slidesPerView: 1.4,
        spaceBetween: 10,
      }
    }

  };

  ngOnInit(): void {
    Swiper.use([Navigation]);
  }

}

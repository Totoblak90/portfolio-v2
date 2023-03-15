import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { HttpService } from './services/http.service';
import { HeaderComponent } from './components/header/header.component';
import { ProyectListComponent } from './components/proyect-list/proyect-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @ViewChild('header') header: ElementRef<HeaderComponent> | undefined;
  @ViewChild('proyectList') proyectList: ElementRef<ProyectListComponent> | undefined;
  @ViewChild('backgroundGithub') backgroundGithub: ElementRef<HTMLDivElement> | undefined;
  @ViewChild('backgroundCoding') backgroundCoding: ElementRef<HTMLDivElement> | undefined;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {


    if (this.header && this.proyectList) {
      // @ts-ignore
      const headerBottom: number = this.header.getNativeElement.nativeElement.clientHeight;
      // @ts-ignore
      const proyectListBottom: number = this.proyectList.getNativeElement.nativeElement.getBoundingClientRect().bottom;

      if (this.backgroundCoding && this.backgroundGithub) {
        if (proyectListBottom > headerBottom + 150) {
            this.backgroundCoding.nativeElement.style.display = 'grid';
            this.backgroundGithub.nativeElement.style.display = 'none';
        } else {
            this.backgroundCoding.nativeElement.style.display = 'none';
            this.backgroundGithub.nativeElement.style.display = 'grid';
        }
      }


    }


  }
}

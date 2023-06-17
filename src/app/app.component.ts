import { AfterViewInit, Component, ElementRef, Inject, Optional, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [RouterOutlet],
  standalone: true
})
export class AppComponent implements AfterViewInit {
  title = 'sssrssr';
  @ViewChild('hello') private readonly hello!: ElementRef;
  ngAfterViewInit(): void {
    const {width, backgroundColor, height} = window.getComputedStyle(this.hello.nativeElement);
    console.log(width, backgroundColor, height);
  }
}

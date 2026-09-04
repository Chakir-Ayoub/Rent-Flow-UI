import {
  Component,
  HostListener,
  Inject,
  OnInit,
  PLATFORM_ID,
  signal
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { LayoutComponent } from './layout/layout/layout.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    SidebarComponent,
    LayoutComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  isLeftSidebarCollapsed = signal(false);
  screenWidth = signal(0);

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  @HostListener('window:resize')
  onResize(): void {

    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    this.screenWidth.set(window.innerWidth);

    if (this.screenWidth() < 768) {
      this.isLeftSidebarCollapsed.set(true);
    } else {
      this.isLeftSidebarCollapsed.set(false);
    }
  }

  ngOnInit(): void {

    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    this.screenWidth.set(window.innerWidth);
    this.isLeftSidebarCollapsed.set(this.screenWidth() < 768);
  }

  changeIsLeftSidebarCollapsed(value: boolean): void {
    this.isLeftSidebarCollapsed.set(value);
  }

}

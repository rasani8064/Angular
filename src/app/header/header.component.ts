import { Component, OnInit } from '@angular/core'; 
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  items: MenuItem[] | undefined;

  ngOnInit() {
      this.items = [
          {
              label: 'Home',
              icon: 'pi pi-fw pi-home',
              routerLink: 'home',
              routerLinkActiveOptions: {exact: true}
          },
          {
              label: 'About',
              icon: 'pi pi-fw pi-pencil',
              routerLink: 'about',
              routerLinkActiveOptions: {exact: true}
          },
          {
              label: 'Contact',
              icon: 'pi pi-fw pi-user',
              routerLink: 'contact',
              routerLinkActiveOptions: {exact: true}
          },
      ];
  }
}
 
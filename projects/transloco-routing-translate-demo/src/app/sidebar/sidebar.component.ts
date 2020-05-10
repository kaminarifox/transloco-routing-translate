import { Component, OnInit } from '@angular/core';
import {AvailableLangs, TranslocoService} from '@ngneat/transloco';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  availableLangs: AvailableLangs;

  constructor(private translocoService: TranslocoService) { }

  ngOnInit(): void {
    this.availableLangs = this.translocoService.getAvailableLangs();
  }

  setLang(lang: string) {
    this.translocoService.setActiveLang(lang);
  }
}

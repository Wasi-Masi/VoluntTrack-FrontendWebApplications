import { Component } from '@angular/core';
import {TranslateModule} from "@ngx-translate/core";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-language-switcher-component',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './language-switcher.html',
  styleUrl: './language-switcher.css'
})

export class LanguageSwitcherComponent {

  constructor(private translate: TranslateService) {
    this.translate.addLangs(['de', 'en', 'es']);
    this.translate.setDefaultLang('en');
    this.translate.use('en');
  }
  useLanguage(language: string): void {
    this.translate.use(language);
  }
}

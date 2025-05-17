import { Component } from '@angular/core';
import {TranslateModule} from "@ngx-translate/core";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-language-switcher-component',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './language-switcher.component.html',
  styleUrl: './language-switcher.component.css'
})

export class LanguageSwitcherComponent {

  constructor(private translate: TranslateService) {
    this.translate.addLangs(['en', 'es']);
    this.translate.setDefaultLang('es');
    this.translate.use('es');
  }
  useLanguage(language: string): void {
    this.translate.use(language);
  }
}

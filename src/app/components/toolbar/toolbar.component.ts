import { Component } from '@angular/core';
import { LanguageEnum } from 'src/app/services/enums/language.enum';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
  languageEnum = LanguageEnum
  

  linkedIn() {
    window.location.href = 'https://www.linkedin.com/in/thagner-uramoto-23269488/'
  }

  gitHub() {
    window.location.href = 'https://github.com/thagneruramoto'
  }
}

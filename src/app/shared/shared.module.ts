import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FooterComponent} from "./components/footer/footer.component";
import {HeaderComponent} from "./components/header/header.component";
import {LoaderComponent} from "./components/loader/loader.component";
import {PopUpComponent} from "./components/pop-up/pop-up.component";
import {TeaCardComponent} from "./components/tea-card/tea-card.component";
import {ShortenTextPipe} from "./pipes/shorten-text.pipe";
import {RouterModule} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";
import {NgbModalModule} from "@ng-bootstrap/ng-bootstrap";
import {NgbModalPopup} from "./components/ngb-popup/ngb-popup.component";


@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    LoaderComponent,
    PopUpComponent,
    TeaCardComponent,
    ShortenTextPipe,
    NgbModalPopup
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    NgbModalModule
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    LoaderComponent,
    PopUpComponent,
    TeaCardComponent,
    ShortenTextPipe,
    NgbModalPopup
  ]
})
export class SharedModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TarjetaComponent } from './components/tarjeta/tarjeta.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { DialogModule } from 'primeng/dialog';
import { formatDatePipe } from './pipes/formats-Dates.pipe';
import { DividerModule } from 'primeng/divider';
import { OverlayPanelModule } from 'primeng/overlaypanel';

@NgModule({
  declarations: [
    AppComponent,
    TarjetaComponent,
    HeaderComponent,
    FooterComponent,
    formatDatePipe
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    CardModule,
    DialogModule,
    BrowserAnimationsModule,
    DividerModule,
    OverlayPanelModule
  ],  
  exports: [
    FormsModule,
    CardModule,
    DialogModule,
    DividerModule,
    OverlayPanelModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

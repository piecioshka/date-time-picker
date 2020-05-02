import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    OWL_DATE_TIME_FORMATS,
    DateTimeAdapter,
} from '../../projects/picker/src/public_api';

import { AppComponent } from './app.component';
import { DATE_TIME_FORMATS_PIECIOSHKA } from 'src/app/date-time-format-piecioshka';
import { DateTimeAdapterPiecioshka } from 'src/app/date-time-adapter-piecioshka.class';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        OwlDateTimeModule,
        OwlNativeDateTimeModule,
    ],
    providers: [
        {provide: DateTimeAdapter, useClass: DateTimeAdapterPiecioshka},
        {
            provide: OWL_DATE_TIME_FORMATS,
            useValue: DATE_TIME_FORMATS_PIECIOSHKA,
        },
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}

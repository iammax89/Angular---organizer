import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { CalendarComponent } from "./calendar/calendar.component";
import { SelectorComponent } from "./selector/selector.component";
import { OrganizerComponent } from "./organizer/organizer.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { MomentPipe } from "./common/moment.pipe";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    SelectorComponent,
    OrganizerComponent,
    MomentPipe
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

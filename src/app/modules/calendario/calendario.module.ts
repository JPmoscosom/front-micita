import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CalendarioRoutingModule } from './calendario-routing.module';
import { Calendario } from './pages/calendario.component';
import { ScheduleAllModule, RecurrenceEditorAllModule, DayService, WeekService, WorkWeekService, 
    MonthService, MonthAgendaService } from '@syncfusion/ej2-angular-schedule';

    @NgModule({
        declarations: [
          Calendario
        ],
        imports: [
          CalendarioRoutingModule,
          ScheduleAllModule, RecurrenceEditorAllModule
        ],
        providers: [DayService, WeekService, WorkWeekService, MonthService, MonthAgendaService],
    
      })
      export class CalendarioModule { }
      
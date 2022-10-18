import { TestBed } from "@angular/core/testing";
import { Calendario } from './calendario.component';
import { ScheduleAllModule, RecurrenceEditorAllModule, DayService, WeekService, WorkWeekService, 
    MonthService, MonthAgendaService } from '@syncfusion/ej2-angular-schedule';
import { CalendarioRoutingModule } from '../calendario-routing.module';

describe(`(01) Test del componente "calendario"`, () => {

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [
                Calendario
              ],
              imports: [
                CalendarioRoutingModule,
                ScheduleAllModule, RecurrenceEditorAllModule
              ],
              providers: [DayService, WeekService, WorkWeekService, MonthService, MonthAgendaService],
        }).compileComponents();
    });
    it('Debe existir el componente calendario', () => {
        const fixture = TestBed.createComponent(Calendario);
        const calendario = fixture.componentInstance
        expect(calendario).toBeTruthy();
    });

    

});


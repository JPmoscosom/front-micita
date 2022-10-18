import { Component, ViewChild } from '@angular/core';
import { ScheduleComponent, EventSettingsModel, DayService, WeekService, WorkWeekService, MonthService, View } from '@syncfusion/ej2-angular-schedule';
import { ButtonComponent } from '@syncfusion/ej2-angular-buttons';

@Component({
selector: 'app-calendario',
// specifies the template string for the Schedule component
template: `<button #addButton ejs-button id="addButton" type="button" content="Add" (click)="onButtonClick()"></button>
<ejs-schedule #scheduleObj width='100%' height='520px' [selectedDate]="selectedDate" [eventSettings]="eventSettings" [views]="scheduleViews"></ejs-schedule>`
})
export class Calendario {
@ViewChild("scheduleObj")
public scheduleObj!: ScheduleComponent;
@ViewChild("addButton")
public addButton!: ButtonComponent;
public selectedDate: Date = new Date(2022, 9, 20);
public scheduleViews: View[] = ['Day', 'Week', 'WorkWeek', 'Month'];
public eventSettings: EventSettingsModel = {
    dataSource: [{
        Id: 1,
        Subject: 'Testing',
        StartTime: new Date(2022, 9, 17, 9, 0),
        EndTime: new Date(2022, 9, 17, 10, 0),
        IsAllDay: false
    }, {
        Id: 2,
        Subject: 'Vacation',
        StartTime: new Date(2022, 10, 18, 13, 0),
        EndTime: new Date(2022, 10, 18, 14, 0),
        IsAllDay: false
    }]
}
public onButtonClick(): void {
    let data: Object[] = [{
        Id: 3,
        Subject: 'Conference',
        StartTime: new Date(2018, 1, 12, 9, 0),
        EndTime: new Date(2018, 1, 12, 10, 0),
        IsAllDay: true
    }, {
        Id: 4,
        Subject: 'Meeting',
        StartTime: new Date(2018, 1, 15, 10, 0),
        EndTime: new Date(2018, 1, 15, 11, 30),
        IsAllDay: false
    }];
    this.scheduleObj.addEvent(data);
    this.addButton.element.setAttribute('disabled','true');
}
}
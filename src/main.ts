import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { bootstrapApplication } from '@angular/platform-browser';
import { BrnSelectImports, HlmSelectImports } from './select';
import { upperFirst } from 'lodash';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrnSelectImports,
    HlmSelectImports,
  ],
  template: `
    <h1 style="font-size:30px">
      in frequency select choose Weekly then in duration select choose Monday.
      Then in frequency select choose Daily and then in duration select choose
      Morning (you will see that you can't)
    </h1>
    <hr />
    frequency: {{ frequency | json }}<br />
    duration: {{ duration | json }}<br />
    <hr />

    <hlm-select
      class="inline-block"
      [(ngModel)]="frequency"
      placeholder="Select frequency"
    >
      <hlm-select-trigger class="w-56">
        <hlm-select-value />
      </hlm-select-trigger>
      <hlm-select-content class="w-56">
        <hlm-option
          *ngFor="let frequency of frequencies"
          [value]="frequency.value"
          >{{ frequency.label }}</hlm-option
        >
      </hlm-select-content>
    </hlm-select>

    <hlm-select
      class="inline-block"
      placeholder="Select time/duration"
      [multiple]="frequency === 'daily'"
      [(ngModel)]="duration"
    >
      <hlm-select-trigger class="w-56">
        <hlm-select-value />
      </hlm-select-trigger>
      <hlm-select-content class="w-56">
        <hlm-option
          *ngFor="let duration of durations[frequency!]"
          [value]="duration.value"
        >
          {{ duration.label }}
        </hlm-option>
      </hlm-select-content>
    </hlm-select>
  `,
})
export class AppComponent {
  frequency = null;
  duration = null;

  durations = {
    daily: [
      { label: 'Morning', value: 'morning' },
      { label: 'Afternoon', value: 'afternoon' },
    ],
    weekly: [
      { label: 'Monday', value: 'monday' },
      { label: 'Tuesday', value: 'tuesday' },
      { label: 'Wednesday', value: 'wednesday' },
      { label: 'Thursday', value: 'thursday' },
      { label: 'Friday', value: 'friday' },
    ],
    monthly: [
      { label: 'Start of Month', value: 'startOfMonth' },
      { label: 'End of Month', value: 'endOfMonth' },
    ],
    quarterly: [
      { label: 'Start of Quarter', value: 'startOfQuarter' },
      { label: 'End of Quarter', value: 'endOfQuarter' },
    ],
  };

  frequencies = Object.keys(this.durations).map((k) => ({
    label: upperFirst(k),
    value: k.toLowerCase(),
  }));
}

bootstrapApplication(AppComponent).catch((err) => console.error(err));

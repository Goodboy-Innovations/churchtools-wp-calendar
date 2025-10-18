/**
 * Calendar State and Display Types
 */

import { Appointment } from './api.types';

export interface CalendarState {
  currentMonth: Date;
  selectedDate: Date;
  events: Appointment[];
  loading: boolean;
  error: string | null;
}

export interface DateRange {
  from: string;
  to: string;
}

export interface CalendarDay {
  date: Date;
  isCurrentMonth: boolean;
  isSelected: boolean;
  isToday: boolean;
  hasEvents: boolean;
  events: Appointment[];
}

export interface CalendarSettings {
  baseUrl: string;
  calendarId: string;
}

export interface EventDisplayInfo {
  id: number;
  title: string;
  startTime: string;
  endTime: string;
  description: string;
  allDay: boolean;
  color: string;
  address: string | null;
  imageUrl: string | null;
}

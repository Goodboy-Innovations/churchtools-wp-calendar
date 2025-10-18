/**
 * Custom hook for fetching and managing calendar events
 */

import { useState, useEffect, useCallback } from 'react';
import { ChurchToolsApiService } from '../services/api.service';
import { Appointment } from '../types/api.types';
import { getMonthDateRange } from '../utils/date.utils';

interface UseEventsProps {
  apiService: ChurchToolsApiService;
  calendarId: string;
  currentMonth: Date;
}

export const useEvents = ({ apiService, calendarId, currentMonth }: UseEventsProps) => {
  const [events, setEvents] = useState<Appointment[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchEvents = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const dateRange = getMonthDateRange(currentMonth);
      const fetchedEvents = await apiService.fetchAppointments(calendarId, dateRange);
      setEvents(fetchedEvents);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to load events';
      setError(errorMessage);
      console.error('Error fetching events:', err);
    } finally {
      setLoading(false);
    }
  }, [apiService, calendarId, currentMonth]);

  useEffect(() => {
    fetchEvents();
  }, [fetchEvents]);

  const refetch = useCallback(() => {
    fetchEvents();
  }, [fetchEvents]);

  return {
    events,
    loading,
    error,
    refetch,
  };
};

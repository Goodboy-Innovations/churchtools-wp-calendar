/**
 * Custom hook for managing calendar state
 */

import { useState, useCallback } from 'react';
import { getNextMonth, getPreviousMonth } from '../utils/date.utils';
import { addMonths, subMonths } from 'date-fns';

export const useCalendarState = () => {
  const [currentMonth, setCurrentMonth] = useState<Date>(new Date());
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  const goToNextMonth = useCallback(() => {
    setCurrentMonth((prev) => getNextMonth(prev));
    setSelectedDate((prev) => addMonths(prev, 1));
  }, []);

  const goToPreviousMonth = useCallback(() => {
    setCurrentMonth((prev) => getPreviousMonth(prev));
    setSelectedDate((prev) => subMonths(prev, 1));
  }, []);

  const selectDate = useCallback((date: Date) => {
    setSelectedDate(date);
  }, []);

  return {
    currentMonth,
    selectedDate,
    goToNextMonth,
    goToPreviousMonth,
    selectDate,
  };
};

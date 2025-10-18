/**
 * Custom hook for managing calendar state
 */

import { useState, useCallback } from 'react';
import { getNextMonth, getPreviousMonth } from '../utils/date.utils';

export const useCalendarState = () => {
  const [currentMonth, setCurrentMonth] = useState<Date>(new Date());
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  const goToNextMonth = useCallback(() => {
    setCurrentMonth((prev) => getNextMonth(prev));
  }, []);

  const goToPreviousMonth = useCallback(() => {
    setCurrentMonth((prev) => getPreviousMonth(prev));
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

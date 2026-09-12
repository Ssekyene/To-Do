import { format, isToday, isTomorrow, parseISO } from "date-fns";

export function formatTodoDate(dateString) {
  if (!dateString) return "No due date";
  
  const date = parseISO(dateString);
  
  if (isToday(date)) {
    return "Today";
  }

  if (isTomorrow(date)) {
    return "Tomorrow";
  }

  return format(date, "dd MMM yyyy");
} 
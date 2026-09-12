import { format, parseISO } from "date-fns";

export function formatTodoDate(dateString) {
  if (!dateString) return "No due date";

  return format(parseISO(dateString), "dd MMM yyyy");
} 
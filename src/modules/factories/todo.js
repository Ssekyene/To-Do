function generateId() {
  return crypto.randomUUID();
}

export default function createTodo({
  id = generateId(),
  title,
  description = "",
  dueDate = "",
  priority = "medium",
  completed = false,
}) {

  let isCompleted = completed;

  function toggleComplete() {
    isCompleted = !isCompleted;
  }

  function update(updates) {
    if (updates.title !== undefined) title = updates.title;
    if (updates.description !== undefined) description = updates.description;
    if (updates.dueDate !== undefined) dueDate = updates.dueDate;
    if (updates.priority !== undefined) priority = updates.priority;
  }

  return {
    id,

    get title() {
      return title;
    },

    get description() {
      return description;
    },

    get dueDate() {
      return dueDate;
    },

    get priority() {
      return priority;
    },
    
    get completed() {
      return isCompleted;
    },

    toggleComplete,
    update,
  };
}
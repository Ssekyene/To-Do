function generateId() {
  return crypto.randomUUID();
}

export default function createTodo({
  title,
  description = "",
  dueDate = "",
  priority = "medium",
  notes = "",
}) {
  const id = generateId();

  let completed = false;

  function toggleComplete() {
    completed = !completed;
  }

  function update(updates) {
    if (updates.title !== undefined) title = updates.title;
    if (updates.description !== undefined) description = updates.description;
    if (updates.dueDate !== undefined) dueDate = updates.dueDate;
    if (updates.priority !== undefined) priority = updates.priority;
    if (updates.notes !== undefined) notes = updates.notes;
  }

  return {
    id,

    get title() {
      return title;
    },

    // set title(value) {
    //   this.title = value;
    // },

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
      return completed;
    },

    toggleComplete,
    update,
  };
}
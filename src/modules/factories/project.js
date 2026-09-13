function generateId() {
  return crypto.randomUUID();
}

export default function createProject(name, projectId) {
  const id = projectId ? projectId : generateId();
  const todos = [];

  function addTodo(todo) {
    todos.push(todo);
  }

  function removeTodo(todoId) {
    const index = todos.findIndex((todo) => todo.id === todoId);

    if (index !== -1) {
      todos.splice(index, 1);
    }
  }

  function getTodo(todoId) {
    return todos.find((todo) => todo.id === todoId);
  }

  function getTodos() {
    return todos;
  }

  function rename(newName) {
    name = newName.trim();
  }

  return {
    get id() {
      return id;
    },
    get name() {
      return name;
    },
    get todos() {
      return todos;
    },
    addTodo,
    removeTodo,
    getTodo,
    getTodos,
    rename,
  };
}
function generateId() {
  return crypto.randomUUID();
}

export default function createProject(name) {
  const id = generateId();
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

  return {
    get id() {
      return id;
    },
    get name() {
      return name;
    },
    addTodo,
    removeTodo,
    getTodo,
    getTodos,
  };
}
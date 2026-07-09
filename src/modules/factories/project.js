export default function createProject(name) {
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

  function getTodos() {
    return todos;
  }

  return {
    name,
    addTodo,
    removeTodo,
    getTodos,
  };
}
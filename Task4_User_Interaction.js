function addTodo() {
  const todoInput = document.getElementById('todoInput');
  const text = todoInput.value.trim();
  if (text !== '') {
    const newTodo = {
      id: todos.length + 1,
      text,
      completed: false
    };
    todos.push(newTodo);
    todoInput.value = '';
    renderTodos();
  }
}


function deleteTodo(id) {
  todos = todos.filter(todo => todo.id !== id);
  renderTodos();
}
function editTodo(id,text) {
  todos = todos.map(todo =>
    todo.id === id ? { ...todo, text: text} : todo
  );
  renderTodos();
}


  function markComplete(id) {
  todos.forEach((todo, index) => {
      if (todo.id === id) {
      todo.completed = true;
      completedTodos.push(todo);
      todos.splice(index, 1);
      }
  });
  renderTodos();
  renderCompletedTodos();
}

renderTodos();
function renderTodos() {
  const todoList = document.getElementById('todoList');
  todoList.innerHTML = '';
  todos.forEach(todo => {
    const li = document.createElement('li');
    li.textContent = todo.text;
    const markCompleteButton = document.createElement('button');
    markCompleteButton.textContent = 'Done';
    markCompleteButton.addEventListener('click', (event) => {
      event.stopPropagation();
      markComplete(todo.id);
    });
    li.appendChild(markCompleteButton);
    const editButton = document.createElement('button');
      editButton.textContent = 'Edit';
      editButton.addEventListener('click', (event) => {
      event.stopPropagation();
      const newText = prompt('Enter new text for the todo:', todo.text);
      if (newText !== null && newText.trim() !== '') {
      editTodo(todo.id, newText);
      }
     });
  
    li.appendChild(editButton);
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', (event) => {
      event.stopPropagation();
      deleteTodo(todo.id);
    });
    li.appendChild(deleteButton);
    
    todoList.appendChild(li);
  });
}

function renderCompletedTodos() {
  const completedTodoList = document.getElementById('completedTodoList');
  completedTodoList.innerHTML = '';
  completedTodos.forEach(todo => {
    const li = document.createElement('li');
    li.textContent = todo.text;
    completedTodoList.appendChild(li);
  });
}
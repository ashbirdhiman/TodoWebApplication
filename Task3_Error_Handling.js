let todos = [
    { id: 1, text: 'Finish homework', completed: false },
    { id: 2, text: 'Go for a run', completed: true },
    { id: 3, text: 'Buy groceries', completed: false }
  ];
  
  let completedTodos = [];


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
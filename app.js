document.addEventListener('DOMContentLoaded', function() {
    // Check for saved tasks in local storage
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    renderTasks(tasks);
  });
  
  function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
  
    if (taskText !== '') {
      const tasks = getTasks();
      tasks.push(taskText);
      saveTasks(tasks);
      renderTasks(tasks);
      taskInput.value = '';
    }
  }
  
  function deleteTask(index) {
    const tasks = getTasks();
    tasks.splice(index, 1);
    saveTasks(tasks);
    renderTasks(tasks);
  }
  
  function renderTasks(tasks) {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';
  
    tasks.forEach((task, index) => {
      const li = document.createElement('li');
      li.innerHTML = `
        <span>${task}</span>
        <button onclick="deleteTask(${index})"><abbr style="text-decoration:none;" title="Deleting task">Delete</abbr></button>
      `;
      taskList.appendChild(li);
    });
  }
  
  function getTasks() {
    return JSON.parse(localStorage.getItem('tasks')) || [];
  }
  
  function saveTasks(tasks) {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
  
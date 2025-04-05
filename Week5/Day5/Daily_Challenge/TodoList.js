const tasks = [];

const form = document.getElementById('taskForm');
const input = document.getElementById('taskInput');
const listContainer = document.querySelector('.listTasks');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  addTask();
});

function addTask() {
  const taskText = input.value.trim();

  if (taskText === '') {
    alert('Please enter a task!');
    return;
  }

  // Add to array
  tasks.push(taskText);

  // Create task DOM elements
  const taskDiv = document.createElement('div');
  taskDiv.classList.add('task');

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';

  const label = document.createElement('label');
  label.textContent = taskText;

  const removeBtn = document.createElement('i');
  removeBtn.classList.add('fas', 'fa-times');

  removeBtn.addEventListener('click', () => {
    taskDiv.remove();
    // Optionally remove from the tasks array too
  });

  taskDiv.appendChild(checkbox);
  taskDiv.appendChild(label);
  taskDiv.appendChild(removeBtn);

  listContainer.appendChild(taskDiv);

  // Clear input
  input.value = '';
}

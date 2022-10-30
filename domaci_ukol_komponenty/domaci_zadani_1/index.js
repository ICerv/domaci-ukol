
console.log('funguju!');

import { Task } from "../Task/index.js";

const renderTasks = (tasks) => {
  const taskList = document.querySelector('todo__tasks');
  taskList.innerHTML = tasks.map((task) => Task(task)).join('');
};


fetch('https://apps.kodim.cz/daweb/trening-api/apis/tasks-api/tasks')
  .then((response) => response.json())
  .then(renderTasks);


const filterApi = () => {
  if (document.getElementById('checkbox-undone').checked === true)
    fetch('https://apps.kodim.cz/daweb/trening-api/apis/tasks-api/tasks?done=false').then((response) => response.json()).then(renderTasks);
  else fetch('https://apps.kodim.cz/daweb/trening-api/apis/tasks-api/tasks').then((response) => response.json()).then(renderTasks);
};

const checkBox = document.getElementById('checkbox-undone');
checkBox.addEventListener('change', filterApi);

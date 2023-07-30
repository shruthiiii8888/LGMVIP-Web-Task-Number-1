function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskList = document.getElementById("taskList");
  const taskText = taskInput.value.trim();

  if (taskText !== "") {
    const newTask = document.createElement("li");
    newTask.innerHTML = `
      <input type="checkbox">
      <span>${taskText}</span>
    `;
    taskList.appendChild(newTask);
    taskInput.value = "";
  }
}

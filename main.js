const addTaskBtn = document.querySelector('.add-task-btn');
const addTaskField = document.querySelector('.add-task-field');
const allTasks = document.querySelector('.all-tasks');

// click add task
addTaskBtn.addEventListener('click', e => {
  e.preventDefault();
  // create task container
  if (!addTaskField.value == '') {
    const taskContainer = document.createElement('div');
    taskContainer.classList.add('task');
    // create input task
    const inputTaskField = document.createElement('input');
    inputTaskField.type = 'text';
    inputTaskField.setAttribute('readonly', 'readonly');
    inputTaskField.classList.add('input-task-field');
    inputTaskField.classList.add('cursor');

    inputTaskField.value = addTaskField.value;
    addTaskField.value = '';
    // create edit btn
    const editBtn = document.createElement('button');
    const editBtnText = document.createTextNode('EDIT');
    editBtn.appendChild(editBtnText);
    editBtn.classList.add('edit-task-btn');
    // create done msg
    const doneMsg = document.createElement('span');
    const doneText = document.createTextNode('(DONE)');
    doneMsg.appendChild(doneText);
    doneMsg.classList.add('span');
    // create delete btn
    const deleteBtn = document.createElement('button');
    const deleteBtnText = document.createTextNode('DELETE');
    deleteBtn.appendChild(deleteBtnText);
    deleteBtn.classList.add('delete-task-btn');
    // add task to all tasks
    taskContainer.appendChild(inputTaskField);
    taskContainer.appendChild(editBtn);
    taskContainer.appendChild(deleteBtn);
    allTasks.appendChild(taskContainer);

    // click edit task
    editBtn.addEventListener('click', function (e) {
      e.preventDefault();
      doneMsg.remove();
      inputTaskField.style.textDecoration = '';
      inputTaskField.classList.toggle('cursor');
      // change text content
      if (this.textContent === 'EDIT') {
        this.textContent = 'SAVE';
        inputTaskField.focus();
        inputTaskField.removeAttribute('readonly');
      } else {
        this.textContent = 'EDIT';
        inputTaskField.setAttribute('readonly', 'readonly');
      }
    });
    // click done task
    inputTaskField.addEventListener('click', e => {
      if (
        (inputTaskField.readonly = 'readonly') &&
        !taskContainer.contains(doneMsg)
      ) {
        inputTaskField.style.textDecoration = 'line-through';
        taskContainer.insertBefore(doneMsg, taskContainer.children[1]);
      } else {
        inputTaskField.style.textDecoration = '';
        doneMsg.remove();
      }
      if (editBtn.textContent === 'SAVE') {
        doneMsg.remove();
        inputTaskField.style.textDecoration = '';
      }
    });
    // click delete task
    deleteBtn.addEventListener('click', e => {
      taskContainer.remove();
    });
  } else return;
});

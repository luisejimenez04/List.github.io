(() => {
  const btn = document.querySelector('[data-form-button]');
  const funcion = (eventos) => {
    const inpt = document.querySelector('[data-form-input]');
    eventos.preventDefault();
    const value = inpt.value;
    inpt.value = "";
    const taskContent = document.createElement('div');
    taskContent.appendChild(checkComplete());
    const title = document.createElement('span');
    title.classList.add("task");
    title.innerText = value;
    taskContent.appendChild(title);
 
    
    const content = `

  <span class="task">${value}</span>
<i class="fas fa-trash-alt trashIcon icon"></i>`;

    const item = document.createElement('li');
    // item.innerHTML = content;
    item.classList.add("card");
    const list = document.querySelector('[data-list]');
    list.appendChild(taskContent);
  }
  btn.addEventListener("click", funcion);

  const checkComplete = (eventos) => {
    const i = document.createElement('i');
    i.classList.add("far", "fa-check-square", "icon");
    i.addEventListener('click', completeTask);
    return i;
  }

  const completeTask = (eventos) => {
    const element = eventos.target;
    element.classList.toggle('fas');
    element.classList.toggle('completeIcon');
    element.classList.toggle('far');
  }

  
})();
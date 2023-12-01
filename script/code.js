// let list = [{
//     id: 0,
//     name: 0,
//     createdDate: 0,
//     completed: 0
// }]



// let btnsubmit = document.querySelector([data-submit])
// let btnsort = document.querySelector([data-sort])
// let userinput = document.querySelector([data-input]).value
// let addedtodo = document.querySelector([data-value])

// function inputAdd (){

// }

document.addEventListener("DOMContentLoaded", function () {
    const submitButton = document.querySelector('[data-submit]');
    const sortButton = document.querySelector('[data-sort]');
    const inputField = document.querySelector('input');
    const listContainer = document.querySelector('[data-value]');

    const tasks = [];

    submitButton.addEventListener('click', function () {
        const inputValue = inputField.value.trim();
        if (inputValue !== '') {
            const newTask = {
                id: tasks.length + 1,
                name: inputValue,
                createdDate: new Date().toLocaleString(),
                completed: false
            };

            tasks.push(newTask);
            renderTasks();
            inputField.value = '';
        }
    });

    sortButton.addEventListener('click', function () {
        tasks.sort(function (a, b) {
            return a.name.localeCompare(b.name);
        });
        renderTasks();
    });

    function renderTasks() {
        listContainer.innerHTML = '';
        tasks.forEach(function (task) {
            const listItem = document.createElement('div');
            listItem.innerHTML = `<strong>ID:</strong> ${task.id}, <strong>Name:</strong> ${task.name}, <strong>Created Date:</strong> ${task.createdDate}, <strong>Completed:</strong> ${task.completed ? 'Yes' : 'No'}`;
            listContainer.appendChild(listItem);
        });
    }
});



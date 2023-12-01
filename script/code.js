// // let list = [{
// //     id: 0,
// //     name: 0,
// //     createdDate: 0,
// //     completed: 0
// // }]



// // let btnsubmit = document.querySelector([data-submit])
// // let btnsort = document.querySelector([data-sort])
// // let userinput = document.querySelector([data-input]).value
// // let addedtodo = document.querySelector([data-value])

// // function inputAdd (){

// // }

// document.addEventListener("DOMContentLoaded", function () {
//     const submitButton = document.querySelector('[data-submit]');
//     const sortButton = document.querySelector('[data-sort]');
//     const inputField = document.querySelector('input');
//     const listContainer = document.querySelector('[data-value]');

//     const tasks = [];

//     submitButton.addEventListener('click', function () {
//         const inputValue = inputField.value.trim();
//         if (inputValue !== '') {
//             const newTask = {
//                 id: tasks.length + 1,
//                 name: inputValue,
//                 createdDate: new Date().toLocaleString(),
//                 completed: false
//             };

//             tasks.push(newTask);
//             renderTasks();
//             inputField.value = '';
//         }
//     });

//     sortButton.addEventListener('click', function () {
//         tasks.sort(function (a, b) {
//             return a.name.localeCompare(b.name);
//         });
//         renderTasks();
//     });

//     function renderTasks() {
//         listContainer.innerHTML = '';
//         tasks.forEach(function (task) {
//             const listItem = document.createElement('div');
//             listItem.innerHTML = `<strong>ID:</strong> ${task.id}, <strong>Name:</strong> ${task.name}, <strong>Created Date:</strong> ${task.createdDate}, <strong>Completed:</strong> ${task.completed ? 'Yes' : 'No'}`;
//             listContainer.appendChild(listItem);
//         });
//     }
// });


document.addEventListener("DOMContentLoaded", function () {
    const submitBtn = document.querySelector('[data-submit]');
    const inputField = document.querySelector('[data-input]');
    const valueContainer = document.querySelector('[data-value]');
    const sortBtn = document.querySelector('[data-sort]');

    let todoList = [];

    // Function to add a new item to the To-Do List
    function addItem() {
        const inputValue = inputField.value.trim();
        if (inputValue !== '' && inputValue.length > 3) {
            const newItem = {
                id: Date.now(),
                name: inputValue.charAt(0).toUpperCase() + inputValue.slice(1),
                createdDate: new Date().toLocaleString(),
                completed: false
            };

            todoList.push(newItem);
            renderList();
            inputField.value = ''; // Clear the input field after adding an item
        }
    }

    // Function to render the To-Do List
    function renderList() {
        valueContainer.innerHTML = ''; // Clear existing items

        todoList.forEach(item => {
            const listItem = document.createElement('div');
            listItem.innerHTML = `
                <input type="checkbox" ${item.completed ? 'checked' : ''} data-id="${item.id}">
                <span style="text-decoration: ${item.completed ? 'line-through' : 'none'}">${item.name} - ${item.createdDate}</span>
            `;
            listItem.addEventListener('change', toggleCompleted);
            valueContainer.appendChild(listItem);
        });
    }

    // Function to toggle the completed status of an item
    function toggleCompleted(event) {
        const itemId = parseInt(event.target.dataset.id);
        const selectedItem = todoList.find(item => item.id === itemId);

        if (selectedItem) {
            selectedItem.completed = event.target.checked;
            renderList();
        }
    }

    // Function to sort the To-Do List by completed status
    function sortList() {
        todoList.sort((a, b) => a.completed - b.completed);
        renderList();
    }

    // Event listeners
    submitBtn.addEventListener('click', addItem);
    sortBtn.addEventListener('click', sortList);
});


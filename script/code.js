    let submitBtn = document.querySelector('[data-submit]');
    let userinput = document.querySelector('[data-input]');
    let output = document.querySelector('[data-value]');
    let sortBtn = document.querySelector('[data-sort]');

//empty array for the new items to be added 
    let todoList = [];

//add a new item to the todo List
    function addedlists() {
        let input = userinput.value.trim();
        if (input !== '' && input.length > 3) {
            let newItem = {
                id: Date.now(),
                name: input.charAt(0).toUpperCase() + input.slice(1),
                completed: false
            };

            todoList.push(newItem);
            displayinglist();
            userinput.value = ''; 
        }
    }

// display the todo lists
    function displayinglist() {
        output.innerHTML = ''; 

        todoList.forEach(item => {
            let listItem = document.createElement('div');
            listItem.innerHTML = `
                <input type="checkbox" ${item.completed ? 'checked' : ''} data-id="${item.id}">
                <span style="text-decoration: ${item.completed ? 'line-through' : 'none'}">${item.name}</span>
            `;
            listItem.addEventListener('change', completed);
            output.appendChild(listItem);
        });
    }

// the function for the checkbox to have a passthrough strike
    function completed(event) {
        let itemId = parseInt(event.target.dataset.id);
        let selectedItem = todoList.find(item => item.id === itemId);

        if (selectedItem) {
            selectedItem.completed = event.target.checked;
            displayinglist();
        }
    }

//function thta display it by completed or rather if it have a strike-through to be displayed at the bottom 
    function sortList() {
        todoList.sort((a, b) => a.completed - b.completed);
        displayinglist();
    }

//event listeners for the buttons for oneclick
    submitBtn.addEventListener('click', addedlists);
    sortBtn.addEventListener('click', sortList)


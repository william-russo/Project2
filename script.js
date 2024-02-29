document.addEventListener("DOMContentLoaded", function() {
    const taskForm = document.getElementById('task-form');
    const taskList = document.getElementById('task-list');
    let tasks = [];

    taskForm.onsubmit = function(event) {
        event.preventDefault();
        const title = document.getElementById('task-title').value;
        const priority = document.getElementById('task-priority').value;
        const status = document.querySelector('input[name="task-status"]:checked').value;

        const task = {title, priority, status};
        tasks.push(task);

        const li = document.createElement('li');
        li.className = 'list-group-item';
        li.innerHTML = `
            ${task.title} - ${task.priority} - ${task.status}
            <button class="btn btn-danger btn-sm float-right delete">Remove</button>
            <button class="btn btn-secondary btn-sm float-right complete mr-2">Mark as complete</button>
        `;

        taskList.appendChild(li);

        document.getElementById('task-form').reset();
    };

    taskList.addEventListener('click', function(event) {
        if (event.target.classList.contains('delete')) {
            const li = event.target.parentElement;
            taskList.removeChild(li);
            tasks = tasks.filter(task => task.title !== li.firstChild.textContent.trim());
        }

        if (event.target.classList.contains('complete')) {
            const li = event.target.parentElement;
            li.style.textDecoration = "line-through";
        }
    });
});

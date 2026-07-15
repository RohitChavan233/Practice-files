// Select the input field where user types the task
const inp = document.querySelector("input");

// Select the Add button
const btn = document.querySelector("#add");

// Select the container where all tasks will be displayed
const todoBox = document.querySelector(".todo-list");

// Variable to store the task currently being edited
// Initially no task is selected for editing
let editingTask = null;

// When Add/Update button is clicked
btn.addEventListener("click", () => {

    // Get the input value and remove extra spaces
    const value = inp.value.trim();

    // If input is empty, do nothing
    if (value === "") return;

    // ==========================
    // UPDATE FUNCTIONALITY
    // ==========================

    // If editingTask is not null,
    // it means the user clicked Edit earlier
    if (editingTask) {

        // Find the h3 inside the selected task
        // and replace its text with the new value
        editingTask.querySelector("h3").textContent = value;

        // Reset editing mode
        editingTask = null;

        // Change button text back to Add
        btn.textContent = "Add";

        // Clear the input field
        inp.value = "";

        // Stop further execution
        return;
    }

    // ==========================
    // CREATE NEW TASK
    // ==========================

    // Create the main task container
    const li = document.createElement("div");
    li.className = "li";

    // Create task title
    const title = document.createElement("h3");
    title.textContent = value;

    // Create a container for Edit & Delete buttons
    const btnBox = document.createElement("div");

    // Create Edit button
    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.className = "btn edit";

    // Create Delete button
    const delBtn = document.createElement("button");
    delBtn.textContent = "Delete";
    delBtn.className = "btn del";

    // Add both buttons inside button container
    btnBox.appendChild(editBtn);
    btnBox.appendChild(delBtn);

    // Add title and button container inside task
    li.appendChild(title);
    li.appendChild(btnBox);

    // Add task into Todo List
    todoBox.appendChild(li);

    // Clear input after adding task
    inp.value = "";

    // ==========================
    // DELETE FUNCTIONALITY
    // ==========================

    delBtn.addEventListener("click", () => {

        // Remove the selected task
        li.remove();

        // If the deleted task was being edited
        if (editingTask === li) {

            // Exit editing mode
            editingTask = null;

            // Clear input
            inp.value = "";

            // Change button back to Add
            btn.textContent = "Add";
        }
    });

    // ==========================
    // EDIT FUNCTIONALITY
    // ==========================

    editBtn.addEventListener("click", () => {

        // Put current task text into input field
        inp.value = title.textContent;

        // Store this task so we know which one to update
        editingTask = li;

        // Change button text to Update
        btn.textContent = "Update";

        // Move cursor inside input field
        inp.focus();
    });
});
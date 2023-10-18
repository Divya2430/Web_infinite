document.addEventListener("DOMContentLoaded", function() {
    var taskInput = document.getElementById("task");
    var addTaskButton = document.getElementById("addTask");
    var deleteAllButton = document.getElementById("deleteAll");
    var taskList = document.getElementById("taskList");
    var serialNumber = 1;

    addTaskButton.addEventListener("click", function() {
        var taskText = taskInput.value;
        if (taskText.trim() !== "") {
            var row = taskList.insertRow();
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);
            
            cell1.textContent = serialNumber++;
            cell2.textContent = taskText;

            var deleteButton = document.createElement("button");
            deleteButton.textContent = "Delete";
            deleteButton.className = "delete";
            deleteButton.addEventListener("click", function() {
                taskList.deleteRow(row.rowIndex);
            });
            cell3.appendChild(deleteButton);

            taskInput.value = "";
        }
    });

    deleteAllButton.addEventListener("click", function() {
        var rowCount = taskList.rows.length;
        for (var i = rowCount - 1; i > 0; i--) {
            taskList.deleteRow(i);
        }
        serialNumber = 1;
    });
});

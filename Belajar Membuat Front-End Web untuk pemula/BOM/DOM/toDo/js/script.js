const todos = [];
const RENDER_EVENT = "render-todo";

// Event ketika DOMContent dimuat
document.addEventListener("DOMContentLoaded", function () {
  const submitForm = document.getElementById("form");

  submitForm.addEventListener("submit", function (event) {
    // Mencegah refresh
    event.preventDefault();
    // Jalankan fungsi addTodo
    addTodo();
  });
});

// Function addTodo
function addTodo() {
  // mengambil nilai input title dan date
  const textTodo = document.getElementById("title").value;
  const timestamp = document.getElementById("date").value;

  // jalankan generateID
  const generatedID = generateId();
  // todoObject diisi dengan fungsi generate todoObj
  const todoObject = generateTodoObject(generatedID, textTodo, timestamp, false);
  // push nilai todoObj ke array todos
  todos.push(todoObject);

  // panggil function RENDER_EVENT
  document.dispatchEvent(new Event(RENDER_EVENT));
}

// Function generateId untuk generate id otomatis
function generateId() {
  return +new Date();
}

// Function generateTodoObj
function generateTodoObject(id, task, timestamp, isCompleted) {
  return {
    id,
    task,
    timestamp,
    isCompleted,
  };
}

// Event render
document.addEventListener(RENDER_EVENT, function () {
  // mengisi div todos
  const uncompletedTODOList = document.getElementById("todos");
  uncompletedTODOList.innerHTML = "";

  // mengisi div complete-todos
  const completedTODOList = document.getElementById("completed-todos");
  completedTODOList.innerHTML = "";

  for (todoItem of todos) {
    const todoElement = makeTodo(todoItem);

    if (todoItem.isCompleted == false) uncompletedTODOList.append(todoElement);
    else completedTODOList.append(todoElement);
  }
});

// function membuat component yang harus dilakukan
function makeTodo(todoObject) {
  const textTitle = document.createElement("h2");
  textTitle.innerText = todoObject.task;

  const textTimestamp = document.createElement("p");
  textTimestamp.innerText = todoObject.timestamp;

  const textContainer = document.createElement("div");
  textContainer.classList.add("inner");
  // tag h2 dan p diappend ke div dengan class inner
  textContainer.append(textTitle, textTimestamp);

  const container = document.createElement("div");
  container.classList.add("item", "shadow");
  // div inner di append ke div container
  container.append(textContainer);
  container.setAttribute("id", `todo-${todoObject.id}`);

  // Cek isComplete
  if (todoObject.isCompleted) {
    // jika task ternyata statusnya isComplete buat elemen button undo dan trash
    const undoButton = document.createElement("button");
    undoButton.classList.add("undo-button");
    undoButton.addEventListener("click", function () {
      // Jalankan undo agar menjadi !isComplete
      undoTaskFromCompleted(todoObject.id);
    });

    const trashButton = document.createElement("button");
    trashButton.classList.add("trash-button");
    trashButton.addEventListener("click", function () {
      // Jalankan undo agar task dihapus dari todos
      removeTaskFromCompleted(todoObject.id);
    });

    // append undo dan trash ke container
    container.append(undoButton, trashButton);
  } else {
    // jika !isComplete maka buat button check
    const checkButton = document.createElement("button");
    checkButton.classList.add("check-button");
    checkButton.addEventListener("click", function () {
      // jika diklik maka masukan todo ke isComplete
      addTaskToCompleted(todoObject.id);
    });

    // append button
    container.append(checkButton);
  }

  return container;
}

// function addTaskToCompleted untuk memindahkan iscomplete false ke true
function addTaskToCompleted(todoId) {
  const todoTarget = findTodo(todoId);
  if (todoTarget == null) return;

  // ubah nilai isComplete jadi true dan render
  todoTarget.isCompleted = true;
  document.dispatchEvent(new Event(RENDER_EVENT));
}

// function removeTaskFromCompleted atau hapus dari array todos
function removeTaskFromCompleted(todoId) {
  const todoTarget = findTodoIndex(todoId);
  if (todoTarget === -1) return;
  // hapus sebanyak 1 todo yang ingin dihapus di todos
  todos.splice(todoTarget, 1);

  document.dispatchEvent(new Event(RENDER_EVENT));
}

// Function undoTask memindahkannya ke todo dari completeTodo
function undoTaskFromCompleted(todoId) {
  const todoTarget = findTodo(todoId);
  if (todoTarget == null) return;
  // ubah isCompleted jadi false dan render
  todoTarget.isCompleted = false;
  document.dispatchEvent(new Event(RENDER_EVENT));
}

// function mencari todoId
function findTodo(todoId) {
  for (todoItem of todos) {
    if (todoItem.id === todoId) {
      return todoItem;
    }
  }
  return null;
}

// mencari index dari todo yang ingin dihapus
function findTodoIndex(todoId) {
  for (index in todos) {
    if (todos[index].id === todoId) {
      return index;
    }
  }
  return -1;
}

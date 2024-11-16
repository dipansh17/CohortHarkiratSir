let todos = [
  {
    id: 1,
    title: "Go to Study",
    idEdit: false,
  },
  {
    id: 2,
    title: "Go to Gym",
    idEdit: false,
  },
  {
    id: 3,
    title: "Go to Sleep",
    idEdit: false,
  },
];
let ctr = 1;
function addItem() {
  console.log("addItemCalled");
  todos.push({
    id: ctr++,
    title: document.querySelector("input").value,
  });
  render();
}
function editItem() {
  console.log("EditCalled");
}
function deleteItem() {
  console.log("deleteCalled");
  todos.pop();
  render();
}

function render() {
  for (let i = 0; i < todos.length; i++) {
    console.log(todos[i].title + " " + todos[i].id);
    const divEle = document.createElement("div");
    const h3Ele = document.createElement("h3");
    const editBtn = document.createElement("button");
    const deleteBtn = document.createElement("button");

    h3Ele.innerHTML = todos[i].title;
    editBtn.innerHTML = "Edit";
    deleteBtn.innerHTML = "Delete";

    deleteBtn.setAttribute("id", todos[i].id);
    deleteBtn.setAttribute("onClick", deleteItem());

    editBtn.setAttribute("id", todos[i].id);
    editBtn.setAttribute("onClick", editItem());

    divEle.append(h3Ele);
    divEle.append(editBtn);
    divEle.append(deleteBtn);
    document.querySelector("body").appendChild(divEle);
  }
}
render();

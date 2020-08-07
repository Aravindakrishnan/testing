let todos = [
  {
    id: 1,
    title: "Task 1",
    desc: "Wake up @5:00AM",
  },
  {
    id: 2,
    title: "Task 1",
    desc: "Wake up @5:00AM is second",
  },
  {
    id: 3,
    title: "Task 1",
    desc: "Wake up @5:00AM is third",
  },
];

console.log(JSON.stringify(todos));
let data = document.getElementById("tag");
data.innerHTML = JSON.stringify(todos);

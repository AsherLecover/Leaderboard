const table = document.querySelector("table");
const mainTemplate = ` <table ><tr><th>Rank</th><th>Member Name</th><th>Total Points</th><th>  like</th><th>  deslike</th></tr></table>`;
let templete = "";

let users = [
  { id: 1,  name: "asher1", totalPoints: 700 },
  { id: 2, name: "asher2", totalPoints: 600 },
  { id: 3,  name: "asher3", totalPoints: 500 },
  { id: 4, name: "asher4", totalPoints: 400 },
  { id: 5,  name: "asher5", totalPoints: 300 },
  { id: 6,  name: "asher6", totalPoints: 200 },
  { id: 7,  name: "asher7", totalPoints: 100 }
];

function quick_Sort(origArray) {
  if (origArray.length <= 1) {
    return origArray;
  } else {
    var left = [];
    var right = [];
    var newArray = [];
    var pivot = origArray.pop();
    var length = origArray.length;

    for (var i = 0; i < length; i++) {
      if (origArray[i].totalPoints >= pivot.totalPoints) {
        left.push(origArray[i]);
      } else {
        right.push(origArray[i]);
      }
    }
    return newArray.concat(quick_Sort(left), pivot, quick_Sort(right));
  }
}

function createTemplate() {
  for (let i = 1 ; i <= users.length ; i++) {
    templete += `<tr>
    <td >${i}</td>
    <td>${users[i-1].name} </td>
    <td >${users[i-1].totalPoints}</td>
    <th><i onclick="likeFn(${users[i-1].id})" class="fa fa-thumbs-up" ></i>
      <td><i onclick="deslikFn(${users[i-1].id})" class="fa fa-thumbs-down" ></i>
      </td>
    </tr>
    `;
    
  }

  return templete;
}
table.innerHTML += createTemplate();

function likeFn(id) {
  templete = mainTemplate;
  for (let i = 0; i < users.length; i++) {
    if (id == users[i].id) {
      users[i].totalPoints += 10;
    }
  }
  users = quick_Sort(users);

  table.innerHTML = createTemplate();
}

function deslikFn(id) {
  templete = mainTemplate;
  for (let i = 0; i < users.length; i++) {
    if (id == users[i].id) {
      users[i].totalPoints -= 10;
    }
  }
  users = quick_Sort(users);
  table.innerHTML = createTemplate();
}

const content = document.getElementById("content")
const form = document.getElementById("form")
let data = []

const submitData = () => {
  const namaTugas = document.getElementById("namaTugas").value
  const desc = document.getElementById("desc").value
  const date = document.getElementById("date").value
  if (namaTugas === "" || date === "") {
    alert("Please Input Todo List")
  } else {
    const todo = {
      title: namaTugas, desc: desc, date: date
    }
    data.push(todo)
    console.log(todo)
    menampilkanData()
  }
}

const menampilkanData = () => {
  content.innerHTML = ""
  for (let i = 0; i < data.length; i++) {
    const card = document.createElement("div")
    const cardDesc = document.createElement("div")
    const input = document.createElement("input")
    const taskDesc = document.createElement("div")
    const deskript = document.createElement("div")
    const h1 = document.createElement("h1")
    const button = document.createElement("button")
    const desk = document.createElement("p")
    const icon = document.createElement("div")

    card.classList.add("d-flex")
    card.classList.add("justify-content-between")
    card.classList.add("mb-4")
    card.classList.add("task")

    cardDesc.classList.add("d-flex")
    cardDesc.classList.add("gap-2")

    input.setAttribute("type", "radio")

    taskDesc.classList.add("task-desc")

    deskript.classList.add("d-flex")
    deskript.classList.add("justify-content-between")
    deskript.classList.add("gap-2")

    h1.classList.add("h1")

    button.classList.add("news")

    desk.classList.add("p")

    // icon.classList.add("bi")
    // icon.classList.add("bi-trash")
    icon.innerHTML = `<div><i class="bi bi-trash" onclick="deleteData(${i})"></i></div>`
    h1.innerHTML = `${data[i].title}`
    button.innerHTML = `${data[i].date}`
    desk.innerHTML = `${data[i].desc} `

    content.appendChild(card)
    card.appendChild(cardDesc)
    cardDesc.appendChild(input)
    cardDesc.appendChild(taskDesc)
    taskDesc.appendChild(deskript)
    deskript.appendChild(h1)
    deskript.appendChild(button)
    taskDesc.appendChild(desk)
    card.appendChild(icon)
  }
}

const deleteData = (index) => {
  data.splice(index, 1)
  menampilkanData()
}

// memunculkan form input ketika di clik add 
const addTodo = () => {
  if (form.style.display === "none") {
    form.style.display = "block";
  } else {
    form.style.display = "none";
  }
}



// const check = () => {
//   const clicked = document.getElementById("check")
//   clicked = true
//   clicked.addEventListener("click", function () {
//     clicked = false
//   })
// }
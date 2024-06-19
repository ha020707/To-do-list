function updateTime() {
    const now = new Date()
    const date = document.getElementById('current-date')
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
    }
    const format = now.toLocaleDateString('en-Us', options)
    date.innerText = `Today, ${format}`
}

updateTime()
setInterval(updateTime, 1000)

const listContainer = document.getElementById("list-container")
const inputBox = document.getElementById("input-box")
const addBtn = document.getElementById("btn-add")

function addTaskToList() {
    if (inputBox.value.trim() !== "") {
        let li = document.createElement("li")
        li.classList.add("list-group-item")

        let checkbox = document.createElement("input")
        checkbox.classList.add("from-check-input", "me-1")
        checkbox.type = "checkbox"
        checkbox.value = ""
        checkbox.setAttribute("aria-label", "...")

        let text = document.createTextNode(inputBox.value)
        li.appendChild(checkbox)
        li.appendChild(text)

        listContainer.appendChild(li)

        inputBox.value = ""

        checkbox.addEventListener('click', () => {
            if (this.checked) {
                this.setAttribute("checked", "checked")
                this.setAttribute("disaabled", "disabled")
            }
        })
    } else {
        alert("You should write dowe something")
    }
}

document.body.addEventListener('keypress', (e) => {
    if (e.key == "Enter") {
        addTaskToList()
    }
})

addBtn.addEventListener('click', () => {
    addTaskToList()
})
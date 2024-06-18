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
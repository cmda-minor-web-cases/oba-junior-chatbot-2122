const messageContainer = document.querySelector('#messageContainer')
const nameForm = document.querySelector('#nameForm')
const nameInput = document.querySelector('#name')
const nameMessage = document.querySelector('#nameMessage')

nameForm.addEventListener('submit', (e) => {
    e.preventDefault()

    if (nameInput.value !== '') {
        const item = document.createElement('li')

        item.textContent = `Hallo ${nameInput.value}!`

        messageContainer.appendChild(item)
        nameInput.value = ''
        nameMessage.classList.add('hidden')
    }
})

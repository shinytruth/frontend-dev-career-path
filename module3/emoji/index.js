// Hook an event listener up with the button, and log out the input field's value when it's clicked

const myEmojis = ["👨‍💻", "⛷", "🍲"]
const emojiContainer = document.getElementById("emoji-container")

for (let i = 0; i < myEmojis.length; i++) {
    const emoji = document.createElement('span')
    emoji.textContent = myEmojis[i]
    emojiContainer.append(emoji)
}

const emojiInput = document.getElementById("emoji-input")
const pushBtn = document.getElementById("push-btn")
pushBtn.addEventListener("click", () => console.log(emojiInput.value))

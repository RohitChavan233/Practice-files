const colors = ['red', 'green', 'yellow', 'pink', 'blue', 'orange']

const btn = document.getElementById('btn')
const colorText = document.getElementById('color')

btn.addEventListener('click', function(){
    
    const randomIndex = Math.floor(Math.random() * colors.length)
    const randomColor = colors[randomIndex]
    
    document.body.style.backgroundColor = randomColor
    colorText.textContent = randomColor   
})
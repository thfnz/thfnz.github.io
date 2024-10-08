const correctPassword = 'placeholder'

function displayErrorMessage(message){
    const errorMessage = document.createElement('div')
    errorMessage.classList.add('error-message')
    errorMessage.textContent = message

    errorMessage.addEventListener('click', function() {
        errorMessage.remove()
    })
    
    const errorContainer = document.getElementById('error-container')
    errorContainer.appendChild(errorMessage)
    
    setTimeout(() => {
        errorMessage.classList.add('hide')
        setTimeout(() => errorMessage.remove(), 500)
    }, 5000)
}

function validatePassword(password){
    if (password == correctPassword){
        displayErrorMessage('GG !')
    } else{
        displayErrorMessage('Mot de passe incorrect')
    }
}

document.getElementById('ascii-button').addEventListener('click', function(){
    const passwordInput = document.getElementById('inputPassword').value
    validatePassword(passwordInput)
})

document.getElementById('inputPassword').addEventListener('keydown', function(event){
    if (event.key === 'Enter'){
        const passwordInput = document.getElementById('inputPassword').value
        validatePassword(passwordInput)
    }
})

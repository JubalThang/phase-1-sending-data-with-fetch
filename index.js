// Add your code here
//loadDogs 
document.querySelectorAll('.nav-bar')[0].addEventListener('click', ()=> {
    fetchDogs()
})

const form = document.querySelector('#dog-form')
form.addEventListener('submit', event => {
    event.preventDefault()
    configurationDog(event)
    event.target.reset()
})

function configurationDog(e) {
    const dog = {
        dogName : e.target.dogName.value,
        dogBreed : e.target.dogBreed.value
    }
    console.log(dog)
    handleSubmit(dog,submitDog)
}

function handleSubmit(obj, callback) {
    callback(obj)
}


function submitDog(dog) {
    const configurationObject = {
        method: 'POST',
        headers : {
            'Content-type' : 'application/json',
            'Accept' : 'application/json'
        },
        body : JSON.stringify(dog) 
    }
    fetch('http://localhost:3000/dogs',configurationObject)
    .then(res => res.json())
    .then(obj => displayDog(obj))
}

function fetchDogs() {
    fetch('http://localhost:3000/dogs')
    .then(res => res.json())
    .then(dogs => {
        dogs.forEach(displayDog)
    })
    .catch(error => alert(`Error: ${error.message}`))
}

function displayDog(dog) {
    const dogName = document.createElement('h4')
    dogName.style.textAlign = 'center'
    dogName.textContent = dog.dogName
    const dogBreed = document.createElement('h5')
    dogBreed.textContent = dog.dogBreed
    document.getElementById('dog-lists').append(dogName, dogBreed)
}

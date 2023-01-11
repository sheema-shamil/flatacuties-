document.addEventListener("DOMContentLoaded", () => {
    getChar()
    // displayChar()

})


let url = "http://localhost:3000/characters"


function getChar(){
    fetch(url)
    .then(res => res.json())
    .then(characters => {
        // console.log(info)
        characters.forEach(character => {
        console.log(character);
        displayChars(character);
    
    
    });

})
}



function displayChars(character){
    // characters.preventDefault()
    console.log(character.name);
    let name = document.createElement('p')
    name.textContent = character.name
    let main = document.getElementById("main")
    main.append(name)
    name.addEventListener('click', () =>{
        getOneChar(character)
    })

}

function getOneChar(character){
    document.getElementById("charname").textContent = character.name
    document.getElementById("charimg").src = character.image
    // document.getElementById("charvotes").textContent = `Votes cast: ${characters.votes}`

    
    let btn = document.getElementById("charvotes")
    btn.textContent = `Votes: ${character.votes }`
    btn.addEventListener('click', () => {
        character.votes+=1
        // console.log(character.votes);
        btn.textContent = `Votes: ${character.votes}`

    })

        let btn2 = document.getElementById("reset")
        // btn2.textContent = `Votes: ${characters.votes}`
        btn2.addEventListener('click', () => {
            characters.votes = 0
            btn.textContent = `Votes: ${characters.votes}`
            resetVotes(characters)
            // btn.textContent = `Votes: ${characters.votes}`
        
    })

}



// // function updateVotes(characters){
// //     fetch(`http://localhost:3000/characters/${characters.id}`, {
// //         method:'PATCH',
// //         headers:{
// //             'Content-type': 'application/json'
// //         },
// //         body: JSON.stringify(characters)
// //     })
// //     .then(res => res.json())
// //     .then(characters => console.log(characters))

// // }

// function resetVotes(characters){
//     fetch(`http://localhost:3000/characters/${characters.id}`, {
//         method:'PATCH',
//         headers:{
//             'Content-type': 'application/json'
//         },
//         body: JSON.stringify(characters)
//     })
//     .then(res => res.json())
//     .then(characters => console.log(characters))

// }

// document.addEventListener("DOMContentLoaded", () =>{
//     getCharacters()
//     })

//     const url = "http://localhost:3000/characters"

//     function getCharacters(){
//     fetch(url)
//     .then(res => res.json())
//     .then(data => {
//         console.log(data)
//         data.forEach(characters => {
//         displayCharacters(characters);
//         });
//     })
//     }

//     function displayCharacters(characters){
//         console.log(characters.name);
//         const name = document.createElement('p');
//         name.textContent = characters.name
//         const main = document.getElementById("main")
//         main.append(name)
//         name.addEventListener('click', () =>{
//         getOneChar(characters)
//     })
//        }
//        function getOneChar(characters){
//         document.getElementById("charname").textContent = characters.name
//         document.getElementById("charimg").src = characters.image
//         document.getElementById("charvotes").textContent = `Votes cast: ${characters.votes}`

//         let btn = document.getElementById("charvotes")
//         btn.textContent = `Votes: ${characters.votes}`
//         btn.addEventListener('click', () => {
//             characters.votes+=1
//             btn.textContent = `Votes: ${characters.votes}`
//             //updateVotes(characters)
//             // btn.textContent = `Votes: ${characters.votes}`
//         })
//     }

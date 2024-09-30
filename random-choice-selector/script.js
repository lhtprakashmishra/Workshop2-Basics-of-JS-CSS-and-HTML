const textarea = document.getElementById("text");
const tagElement = document.getElementById("tags");

textarea.focus()

textarea.addEventListener("keyup", (e) => {
    createTag(e.target.value);

    if(e.key == 'Enter'){
        setTimeout(()=>{
            e.target.value = '';
        }, 10)

        selectRandom();
    }
})

const createTag = (input) =>{
    const tags = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim())
    console.log(tags);

    tagElement.innerHTML = '';

    tags.forEach(tag => {
        const tagEl = document.createElement('span');
        tagEl.classList.add('tag')
        tagEl.innerText = tag
        tagElement.appendChild(tagEl)
    });
}

const selectRandom = () => {

    const interval = setInterval(()=>{              
        const randomTag = pickRandom();
        highLightTag(randomTag);                    

        setTimeout(()=>{
            unhighLightTag(randomTag)
        }, 100)
    }, 200)

    setTimeout(() => {                                  
        clearInterval(interval)

        setTimeout(() => {
            const randomTag = pickRandom()                  
            highLightTag(randomTag)
        }, 100)

    },  4000)
}

const pickRandom = () => {
    const tag = document.querySelectorAll(".tag");
    const tagLength = tag.length
    return tag[Math.floor(Math.random() * tagLength)]
}

function highLightTag(randomTag){
    randomTag.classList.add("highlight");
}

function unhighLightTag(randomTag){
    randomTag.classList.remove("highlight");
}


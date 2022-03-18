// https://jsonplaceholder.typicode.com/posts

fetch('https://jsonplaceholder.typicode.com/posts')
    .then((value) => value.json())
    .then((result) =>{
        console.log(result);

        result.forEach(element => { 
        let div =  document.createElement("div");
        div.classList.add("card")
        div.innerHTML = `
            <p class="p1">${element.id} post</p>
            <p class="p2">${element.body}</p> 
            <p class="p3">${element.title}</p>`
        document.body.append(div); 
           
            });
        })
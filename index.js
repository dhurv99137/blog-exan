const blogdata = (e) => {
    e.preventDefault();

    let title = document.createElement("h2");
    title.innerHTML = document.getElementById("title").value;
    let image = document.createElement("img");
    image.src = document.getElementById("img").value; 
    let content = document.createElement("p");
    content.innerHTML = document.getElementById("content").value;
    let username = document.createElement("h4");
    username.innerHTML = document.getElementById("username").value;
    let add = document.createElement("button");
    add.innerHTML = "Delete"
    add.addEventListener("click",(e) =>{
        e.target.parentNode.remove()
    });
    let btt = document.createElement("button");
    btt.innerHTML = "Like";
    btt.addEventListener("click",() =>{
        alert("like");
    });

    let box = document.createElement("div");
    box.classList.add("box");
    box.append(title, image, content, username, add, btt);
    
    document.getElementById("blog").appendChild(box);
}

document.getElementById("data").addEventListener("submit", blogdata);
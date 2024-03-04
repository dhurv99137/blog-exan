const blogdata = (e) => {
    e.preventDefault();

    let title = document.createElement("h2");
    title.innerHTML = document.getElementById("title").value;
    let image = document.createElement("img");
    image.src = document.getElementById("img").value; 
    let content = document.createElement("p");
    content.innerHTML = document.getElementById("content").value;
    let other = document.createElement("h4");
    other.innerHTML = document.getElementById("other").value;
    let add = document.createElement("button");
    add.innerHTML = "Delete"
    add.addEventListener("click",(e) =>{
        e.target.parentNode.remove()
    });
    let btt = document.createElement("button");
    btt.innerHTML = "alert";
    btt.addEventListener("click",() =>{
        alert("like this");
    });

    document.getElementById("blog").append(title,image, content, other, add, btt);
}

document.getElementById("data").addEventListener("submit", blogdata);

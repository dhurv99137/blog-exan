let products = [];

const uimekar = () => {
    document.getElementById("blog").innerHTML = ""
    for (let i = 0; i < products.length; i++) {
        let title = document.createElement("h2");
        title.innerHTML = products[i].title;
        let img = document.createElement("img");
        img.src = products[i].img;
        let content = document.createElement("p");
        content.innerHTML = products[i].content;
        let username = document.createElement("h3");
        username.innerHTML = products[i].username;
        let btn = document.createElement("button");
        btn.innerHTML = "Delete";
        btn.addEventListener("click", () => {
            products.splice(i, 1);
            uimekar();
        });
        let add = document.createElement("button");
        add.innerHTML = "Like";
        add.addEventListener("click", () => {
            alert("like");
        });

        let div = document.createElement("div");
        div.append(title, img, content, username, btn, add);
        document.getElementById("blog").append(div);

    }
}

const printdata = (e) => {
    e.preventDefault();

    let title = document.getElementById("title").value;
    let img = document.getElementById("img").value;
    let content = document.getElementById("content").value;
    let username = document.getElementById("username").value;


    let product = {
        title: title,
        img: img,
        content: content,
        username: username
    };
    products.push(product);

    uimekar();
}

document.getElementById("data").addEventListener("submit", printdata);

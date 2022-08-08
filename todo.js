//creating JavaScript script

const alert = document.querySelector(".alert"); // glob variable

const clearAll = document.querySelector(".clear");

const addItems = document.querySelector("#addItems");

const ul = document.querySelector(".ul");

const text = document.querySelector(".text");

const search = document.querySelector(".searchMe");

const sucessColor = "#006666";

const errorColor = "#151235";

const defaultColor = "#000";

var li = document.querySelectorAll(".ul li");

var i;

for (i = 0; i < li.length; i++) {
    const list = li[i];

    //create icon trash fontawesome;

    const span = document.createElement("span");

    span.className = "fa fa-trash-alt delete";

    //create delete button icon

    list.appendChild(span);
}

//romove note clicking on trash icon

var remove = document.getElementsByClassName("delete");

for (i = 0; i < remove.length; i++) {
    var del = remove[i];

    del.onclick = function () {
        var par = this.parentElement;

        par.remove();

        alert.innerHTML = "<b>" + "Oooos!!" + "</b>" + " Item removed by user.";

        alert.classList.add("active");

        alert.style.backgroundColor = errorColor;

        if (document.querySelector(".ul li") === null) {
            //print no text if there is no notes

            const p = document.createElement("p");

            p.id = "no-notes";

            var txt = document.createTextNode("No any notes found. Please create new notes");

            p.appendChild(txt);
            document.querySelector(".ul").appendChild(p);

            clearAll.classList.add("hide");
        }

        //Aert message for clicking

        setTimeout(function () {
            alert.classList.remove("active");

            alert.style.backgroundColor = defaultColor;
        }, 2000);
    };
}

//add notes

addItems.addEventListener("click", function (e) {
    //alert transition and remove

    alert.classList.add("active");

    //create new list

    const li = document.createElement("li");

    li.appendChild(document.createTextNode(text.value));

    if (text.value == null) {
        alert.innerHTML = "<b>" + "Error !!" + "</b>" + " Write something please";

        alert.style.backgroundColor = errorColor;
    }

    //if note is less than 4 character
    else if (text.value.length < 4) {
        alert.innerHTML = "<b>" + "Sorry!!" + "</b>" + " Note is too short.";
    } else {
        ul.appendChild(li);

        clearAll.classList.remove("hide");

        alert.innerHTML = "<b>" + "Sucess!!" + "</b>" + " Note has been added.";

        alert.style.backgroundColor = sucessColor;

        if (document.querySelector(".ul > #no-notes") !== null) {
            document.querySelector(".ul p").remove();
        }

        console.log("Post Added");
    }

    document.querySelector(".text").value = "";

    const span = document.createElement("span");

    span.className = "fa fa-trash-alt delete";

    li.appendChild(span);

    for (i = 0; i < remove.length; i++) {
        var del = remove[i];

        del.onclick = function () {
            var par = this.parentElement;

            par.remove();

            alert.innerHTML = "<b>" + "Ooops!!" + "</b>" + " Item removed by user.";

            alert.classList.add("active");

            alert.style.backgroundColor = errorColor;

            if (document.querySelector(".ul li") === null) {
                const p = document.createElement("p");

                p.id = "no-notes";

                var txt = document.createTextNode("No any notes found. Please create new notes");

                p.appendChild(txt);
                document.querySelector(".ul").appendChild(p);

                clearAll.classList.add("hide");
            }

            //setTimeout for delete icon

            setTimeout(function () {
                alert.classList.remove("active");

                alert.style.backgroundColor = defaultColor;
            }, 2000);
        };
    }

    //setTimeout for addItems clicking

    setTimeout(function () {
        alert.classList.remove("active");

        alert.style.backgroundColor = defaultColor;
    }, 2000);

    e.preventDefault();
});

//Clear textaea

clearAll.addEventListener("click", function (e) {
    alert.classList.add("active");

    alert.innerHTML = "<b>" + "Ooops!!" + "</b>" + " Note has been deleted.";

    const p = document.createElement("p");

    p.id = "no-notes";

    var txt = document.createTextNode("All notes are deleted by user.");

    p.appendChild(txt);

    const li = document.querySelectorAll(".ul li");

    for (let i = 0; i < li.length; i++) {
        l = li[i];

        l.remove();
    }

    ul.appendChild(p);

    clearAll.classList.add("hide");
setTimeout(function () {
        alert.classList.remove("active");

        alert.style.backgroundColor = defaultColor;
    }, 2000);
});

search.addEventListener("keyup", function (e) {
    const searchText = e.target.value.toLowerCase();

    const lists = document.querySelectorAll(".ul li");

    for (let li of lists) {
        const x = li.textContent;

        if (x.toLowerCase().indexOf(searchText) != -1) {
            li.style.display = "block";

            clearAll.classList.remove("hide");
        } else {
            li.style.display = "none";

            clearAll.classList.add("hide");
        }
    }
});

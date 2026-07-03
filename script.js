function upDate(previewPic){
    console.log("Mouse over:", previewPic.alt);

    document.getElementById("image").style.backgroundImage =
        "url('" + previewPic.src + "')";

    document.getElementById("image").innerHTML = previewPic.alt;
}

function undo(){
    document.getElementById("image").style.backgroundImage = "url('')";

    document.getElementById("image").innerHTML =
        "Hover over an image below to display here.";
}

function addTabIndex(){
    console.log("Page loaded");

    let images = document.querySelectorAll(".preview");

    for(let i = 0; i < images.length; i++){
        images[i].setAttribute("tabindex", "0");
    }
}

window.onload = addTabIndex;

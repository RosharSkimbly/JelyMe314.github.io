isOpen = false

previousText = ""

function MenuClick(index, object){
    if(isOpen){
        object.innerHTML = previousText;
        CloseMainContent();
    }else{
        content = document.getElementById("main-content");
        parent = content.parentNode;
        parent.childNodes.forEach(node => {
            node.style = "opacity: 0; height:0vh; margin:0;";
        });
        object.style = "";
        previousText = object.innerHTML;
        object.innerHTML = " ".repeat(previousText.length/2) + "X" + " ".repeat(previousText.length/2);
        parent.insertBefore(content, object);
        setTimeout(()=>{
            content.style = "height:70vh; opacity:1;";
            isOpen = true;
        },10);
    }
}
function CloseMainContent(){
    parent.childNodes.forEach(node => {
        node.style = "";
    });
    document.getElementById("main-content").style = "height:0vh;";
    isOpen = false;
}
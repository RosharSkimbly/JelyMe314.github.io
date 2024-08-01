isOpen = false

function MenuClick(object){
    if(isOpen){
        CloseMainContent();
    }else{
        isOpen = true;
        if(object.innerHTML.indexOf(" ") != -1) return;
        object.innerHTML = " ".repeat(object.id.length/2) + "X" + " ".repeat(object.id.length/2);
        content = document.getElementById("main-content");
        document.getElementById("content-header").innerText = object.id; 
        parent = content.parentNode;
        parent.childNodes.forEach(node => {
            node.style = "opacity: 0; height:0vh; margin:0;";
        });
        object.style = "";
        parent.insertBefore(content, object);
        setTimeout(()=>{
            content.style = "height:70vh; opacity:1;";
        },10);
    }
}
function CloseMainContent(){
    content = document.getElementById("main-content")
    parent.childNodes.forEach(node => {
        if(node != content){
        node.style = "";
        node.innerHTML = node.id;
        }
    });
    content.style = "height:0vh;";
    isOpen = false;
}
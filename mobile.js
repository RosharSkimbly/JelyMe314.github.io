isOpen = false

index = 0
imageSrcs = []
json = null

function MenuClick(object){
    if(isOpen){
        CloseMainContent();
    }else{
        if(json != null)
        {
            isOpen = true;
            if(object.innerHTML.indexOf(" ") != -1) return;
            object.innerHTML = " ".repeat(object.id.length/2) + "X" + " ".repeat(object.id.length/2);
            content = document.getElementById("main-content");
            document.getElementById("content-text").innerText = json[object.id]["Text"];
            imageSrcs = json[object.id]["ImageSrcs"];
            index = 0;
            document.getElementById("content-image").src = imageSrcs[0];
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

function ChangeImageLoop(){
    if(json != null){
        document.getElementById("content-image").src = imageSrcs[index];
        index += 1;
        if (index >= imageSrcs.length) index = 0;
    }
}

fetch("./intelligences.json").then((res)=>{
    return res.json();
}).then((data)=>{
    json = data;
    setInterval(()=>ChangeImageLoop(),2000);
})
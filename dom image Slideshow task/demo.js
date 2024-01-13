let container=document.createElement("div");
container.setAttribute("id","container");
document.body.append(container)

let images=document.createElement("div");
images.setAttribute("class","my-images")
container.append(images);


let createimg=document.createElement("img");
createimg.setAttribute("src"," ")
images.append(createimg);
createimg.src="my walpaper.jpeg"




let div1=document.createElement("div");
div1.setAttribute('class','slidebutton')
container.append(div1)

let createbtn1=document.createElement("button");
createbtn1.setAttribute('id','btn1')
createbtn1.innerText='previous'
div1.append(createbtn1)


let createbtn2=document.createElement("button");
createbtn2.setAttribute('id','btn2');
createbtn2.innerText='Next'
div1.append(createbtn2);




let imgcount=0;

let imgList=["my walpaper.jpeg","download (1).jpeg","download.jpeg","images (1).jpeg","images (2).jpeg","images (3).jpeg","images.jpeg"];

btn1.addEventListener('click',previous);
btn2.addEventListener("click",next)

function next(){
    if(imgcount==imgList.length-1){
        imgcount=0
    }
    else{
        createimg.style.backgroundImage=imgList[imgcount];
        imgcount++
        createimg.src=imgList[imgcount];
    }
}
function previous(){
    if(imgcount==0){
        imgcount=imgList.length-1
    }
    else{
        createimg.style.backgroundImage=imgList[imgcount]
        imgcount--
        createimg.src=imgList[imgcount]
    }
    
}


var imageDiv;
var originalText;
var originalImage;
function upDate(previewPic){
   imageDiv=document.getElementById("image");
   originalText=imageDiv.innerHTML;
   originalImage=imageDiv.style.backgroundImage;
   imageDiv.style.backgroundImage="url("+previewPic.src+")";
   imageDiv.innerHTML=previewPic.alt;
}


function unDo(){
   imageDiv.style.backgroundImage=originalImage;
   imageDiv.innerHTML=originalText;
}

/*

function upDate(previewPic){

    /*dit con me cai coursera dao van an lon a
    code co may dong thi dao van kieu cac dc a 
    ngu vai lon dit me truong 3 chu 
    oi goi oi dit me truong 3 chu hiep dam con heo day ba gia xuong bien
    document.getElementById("image").innerHTML=previewPic.alt;
    document.querySelector('#image').style.backgroundImage = "url('" + previewPic.src +"')";
       }
   
       function unDo(){

    /*ket qua dung bi dao van dit me bon lam ra phan mem ngu vai
    dit me truong 3 chu 
    dit me turnitin giai phap phan mem oc cac
    document.getElementById("image").innerHTML="Hover over an image below to display here.";
    document.querySelector('#image').style.backgroundImage= "url('')";
       }
       */
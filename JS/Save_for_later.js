let savedimages = [];

function checkRun(){
    if (sessionStorage.getItem("Save_For_LaterRunBefore") === null){
        //alert("if");
        sessionStorage.setItem("arraySavedImages", JSON.stringify(savedimages));
        sessionStorage.setItem("Save_For_LaterRunBefore", true);
    }
    else{
        //alert("else");
        savedimages = JSON.parse(sessionStorage.getItem("arraySavedImages"));
    }
};

function saveImage(event){
    console.log("save Image");
    let imgSrc = $("#" + event.target.id).attr("src");
    if (savedimages.includes(imgSrc)){
        alert("This image has already been saved");
    }
    else{
        savedimages.push(imgSrc);
        sessionStorage.setItem("arraySavedImages", JSON.stringify(savedimages));
        alert("Image Saved");
        //alert(sessionStorage.getItem("arraySavedImages"));
    }
};

function likeImage(event){

};

$(function(){

    checkRun();

    $(".likebutton").hide();
    
    //alert("Page loaded");

    //alert(JSON.stringify(savedimages));

    $("img").mouseover(function(event){
        console.log(`.${event.target.id}btn`);
        $(`#${event.target.id}btn`).show();
        $(`#${event.target.id}btn`).click(function(){
            alert("Image Liked");
        });
        $(".likebutton").click(function(event){
            $(".likebutton").hide();
        });
    });


    $("img").click(function(event){
        let choice = prompt("Would you like to save this image for later? (y/n)","y");
        if (choice == "y"){
            saveImage(event);
        }
        else if(choice == "n"){
            alert("Image not saved");
        }
        else{
            alert(`${choice} is not a valid input.`);
        }
    });
});

function loadSavedImages(){
    for(let imgSrc of savedimages){
        let image = document.createElement("img");
        image.src = imgSrc;
        $(".posts").append(image);
    };
};
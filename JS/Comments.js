let Comments = [];

function checkRun(){
    if (sessionStorage.getItem("CommentsRunBefore") === null){
        //alert("if");
        sessionStorage.setItem("arrayComments", JSON.stringify(Comments));
        sessionStorage.setItem("CommentsRunBefore", true);
    }
    else{
        //alert("else");
        Comments = JSON.parse(sessionStorage.getItem("arrayComments"));
    }
};

function SubmitComment(){
    let sUsername = document.getElementById("sUsername").value;
    let sComment = document.getElementById("sComment").value;
    if ((sComment == "")||(sUsername == "")){
        alert("Please fill your Username and your comment");
    }
    else{
        let Comment = {username:sUsername, commenttext:sComment};
        Comments.push(Comment);
        alert(JSON.stringify(Comments));
        sessionStorage.setItem("arrayComments", JSON.stringify(Comments));
        alert("Comment Saved");
    };
};

function displayComments(){
    for(let Comment of Comments){
        let newP = document.createElement("p");
        newP.innerHTML = `${Comment.username}: <br>${Comment.commenttext} <br>`
        $("#ViewComments").append(newP);
    }
};

$(function(){

    checkRun();

    displayComments();
});
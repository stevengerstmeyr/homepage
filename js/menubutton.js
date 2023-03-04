var clicked = false; //bool
function menubutton() {
    
    if (document.getElementById('menubuttondiv').onclick) {
        if (clicked == false) {
            document.getElementById('mainbody').style.right = "350px";
            document.getElementById('nav').style.right = "350px";
            document.getElementById('sidebar').style.right = "0px";
            document.getElementById('branddiv').style.left = "350px";
            clicked = true;
        } else {
            document.getElementById('mainbody').style.right = "0px";
            document.getElementById('nav').style.right = "0px";
            document.getElementById('sidebar').style.right = "-350px";
            document.getElementById('branddiv').style.left = "0px";
            clicked = false;
        }
    } else {
        alert("button was clicked");
    }
}
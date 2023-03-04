function darkUI() {
    if (document.getElementById('checkboxui').checked) {
        document.getElementById('sidebar').style.background = "#FFFFFF";
        document.getElementById('slider_span').style.background = "#373737";
        document.getElementById('text_sidebar').style.color = "#373737";
        document.getElementById("text_sidebar").innerHTML = "Bright UI";
    } else {
        document.getElementById('sidebar').style.background = "#373737";
        document.getElementById('slider_span').style.background = "#cdcdcd";
        document.getElementById('text_sidebar').style.color = "#FFFFFF";
        document.getElementById("text_sidebar").innerHTML = "Dark UI";
    }
}

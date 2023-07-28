function moblieMenu() {
    if (document.getElementsByClassName('responsiveNavigationDrawerContainer')[0].classList.contains("visible")) {
        document.getElementsByClassName('responsiveNavigationDrawerContainer')[0].classList.remove("visible");  
    } else {
        document.getElementsByClassName('responsiveNavigationDrawerContainer')[0].classList.add("visible");
    }
}
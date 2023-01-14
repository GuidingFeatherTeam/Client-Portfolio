let prevScrollPos = window.scrollY

window.onscroll = () => {
    let currentScrollPos = window.scrollY
    if (prevScrollPos > currentScrollPos) {
        document.getElementsByTagName("nav")[0].style.top = "0"
    } else {
        document.getElementsByTagName("nav")[0].style.top = "-4.9rem"
    }
    prevScrollPos = currentScrollPos
}
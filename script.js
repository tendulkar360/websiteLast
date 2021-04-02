$(document).on('click' , "nav ul li" , function(){
    $(this).addClass('active').siblings().removeClass('active')
})

document.getElementById("hamburg").addEventListener("click" , function(){
    document.getElementById("hamburg").style = "display: none;"
    document.getElementById("cross").style = "display: block;"
    document.getElementById("navbar").classList.add("navbar-resp")
    document.getElementById("text1").classList.add("a-resp")
    document.getElementById("text2").classList.add("a-resp")
    document.getElementById("text3").classList.add("a-resp")
    document.getElementById("text4").classList.add("a-resp")
    document.getElementById("navabrText").classList.add("navabrText-resp")
})

document.getElementById("cross").addEventListener("click" , function(){
    document.getElementById("cross").style = "display: none;"
    document.getElementById("hamburg").style = "display: block;"
    document.getElementById("navbar").classList.remove("navbar-resp")
    document.getElementById("text1").classList.remove("a-resp")
    document.getElementById("text2").classList.remove("a-resp")
    document.getElementById("text3").classList.remove("a-resp")
    document.getElementById("text4").classList.remove("a-resp")
    document.getElementById("navabrText").classList.remove("navabrText-resp")
})
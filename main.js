function zmienTlo() {
    console.log("click");
    for (let i = 0; i < document.getElementsByClassName("paragraf").length; i++){
    document.getElementsByClassName("paragraf")[i].style.backgroundColor = "white";
    document.getElementsByClassName("paragraf")[i].style.color = "red";
    }
}
document.getElementById("btn-main").addEventListener("click", zmienTlo);

document.getElementsByClassName("par")
for (let i = 0; i < document.getElementsByClassName("par").length; i++){
 document.getElementsByClassName("par")[i].innerHTML = "Jestem " + [i + 1] + " paragrafem";
}

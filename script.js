function openLetter() {
    document.getElementById("music").play();
    document.getElementById("page1").classList.remove("active");
    document.getElementById("page2").classList.add("active");
}

function goFinal() {
    document.getElementById("page2").classList.remove("active");
    document.getElementById("page3").classList.add("active");
}

function createStar(e) {
    const star = document.createElement("div");
    star.className = "star";
    star.style.left = e.clientX + "px";
    star.style.top = e.clientY + "px";
    document.body.appendChild(star);
    setTimeout(() => star.remove(), 1000);
}

function surprise() {
    document.getElementById("surprise").style.display = "block";
}
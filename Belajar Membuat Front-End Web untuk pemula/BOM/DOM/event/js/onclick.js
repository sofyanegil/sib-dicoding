function increment() {
  document.getElementById("count").innerText++;

  if (document.getElementById("count").innerText == 7) {
    // Membuat elemen  baru h4
    const hiddenMessage = document.createElement("h4");
    hiddenMessage.innerText = "Selamat! Anda menemukan hadiah tersembunyi...";

    // Membuat elemen  baru image
    const image = document.createElement("img");
    image.setAttribute("src", "https://i.ibb.co/0V49VRZ/catto.jpg");

    const contents = document.querySelector(".contents");
    contents.appendChild(hiddenMessage).appendChild(image);
  }
}

// document.getElementById("incrementButton").onclick = increment;

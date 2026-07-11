const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");
const pteste = document.getElementById('teste')
yesBtn.addEventListener("click", yesClicked);
noBtn.addEventListener("click", noClicked);


function yesClicked() {
    // Change img url
    const img = document.getElementsByClassName("tenor-gif-embed")[0]
    img.src = "https://tenor.com/hT8Tb51uFMU.gif";
    img.width = "400";
    img.height = "480"

    
    document.getElementsByTagName("h1")[0].innerHTML = "Sabia que a poison ivy aceitaria kkkkkkkk 🧡";

    
    yesBtn.style.display = "none";
    noBtn.style.display = "none";
    pteste.style.display = "none";
};


var i = 0;
function noClicked() {
    const btnMessage = [
        "Claro que sim?",
        "Porque não?",
        "Ta falando sério Vitória?",
        "Vou te dar outra chance.",
        "Tem certeza?",
        "Hmm...",
        "Escolheu errado dnv",
        "Escolhe SIM pfv.",
        "Ultima chance!",
    ];

   
    if (i == btnMessage.length) {
        i = 0;
    };
    
    noBtn.innerHTML = btnMessage[i];
    i++;

    
    var noBtnWinFontSize = window.getComputedStyle(noBtn, null).getPropertyValue('font-size');
    var noBtnFontSize = parseFloat(noBtnWinFontSize); 
    noBtn.style.fontSize = (noBtnFontSize - 1) + 'px';

    
    if (noBtnFontSize < 8) {
        noBtn.style.display = "none";
    } else if (noBtnFontSize < 10) {
        noBtn.style.padding = "0";
        noBtn.style.margin = "0";
    } else if (noBtnFontSize < 15) {
        noBtn.style.padding = "5px 10px";
    } else if (noBtnFontSize < 20) {
        noBtn.style.padding = "10px 20px";
    };

    var yesBtnWinFontSize = window.getComputedStyle(yesBtn, null).getPropertyValue('font-size');
    var yesBtnFontSize = parseFloat(yesBtnWinFontSize);
    yesBtn.style.fontSize = (yesBtnFontSize + 30) + 'px';
    
   
    if (yesBtnFontSize >= 400) {
        yesBtn.style.padding = "200px 400px";
    } else if (yesBtnFontSize >= 300) {
        yesBtn.style.padding = "100px 200px";
    } else if (yesBtnFontSize >= 200) {
        yesBtn.style.padding = "50px 100px";
    } else if (yesBtnFontSize >= 100) {
        yesBtn.style.padding = "30px 60px";
    };
    
};


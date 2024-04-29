const container = document.querySelector(".container");
const  qrCodeBtn = document.querySelector("#qr-form button");
const qrCodeInput = document.querySelector("#qr-form input");
const qrCodeImg = document.querySelector("#qr-code img");


  

//  Eventos 

qrCodeInput.addEventListener("input", () => {
    const qrCodeInputValue = qrCodeInput.value;
    if (!qrCodeInputValue) {
        // Se o valor do input estiver vazio, remova a imagem do QR Code
        qrCodeImg.src = "";
        container.classList.remove("active");
        qrCodeBtn.innerText = "Gerar Qr Code";
    }
});

qrCodeBtn.addEventListener("click", () => {
    const qrCodeInputValue = qrCodeInput.value;
    if (qrCodeInputValue) {
        // Se houver algum valor no input, gere o QR Code
        generateQrCode(qrCodeInputValue);
    }
});
qrCodeInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") { // "Key" é uasdo ao invés de "e.code" porque o key verifica a representação visual da tecla, e o code verifica
        //O que a tecla representa.
        e.preventDefault(); // Evita o envio do formulário
        const qrCodeInputValue = qrCodeInput.value;
        if (qrCodeInputValue) {
            // Se houver algum valor no input, gere o QR Code
            generateQrCode(qrCodeInputValue);
        }
    }
});

function generateQrCode(qrCodeInputValue) {
    qrCodeBtn.innerText = "Gerando código..."; // Isso aparece no texto do botão
    qrCodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrCodeInputValue}`;
    qrCodeImg.addEventListener("load", () => {
        container.classList.add("active");
        qrCodeBtn.innerText = "Código Criado!";
    });
}

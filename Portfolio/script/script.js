var tablinks = document.querySelectorAll(".tab-links");
var tabcontents = document.querySelectorAll(".tab-contents");

function opentab(tabname) {
    for (var tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (var tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}


var sidemenu = document.getElementById("sidemenu");
    function openmenu(){
        sidemenu.style.right ="0";
    }
    function closemenu(){
        sidemenu.style.right = "-200px";
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbzww9w-CkSMftU7yc0JMHvsqaK4TolaEpt3VYzNShSb3r7GR40fi3-EKII6X9kt3FdO9Q/exec'

const form = document.forms['contact-form']
const msg = document.getElementById("msg")



form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => {
    msg.innerHTML = "Mensagem Enviada com sucesso!";

    // Ajuste o tempo de exibição da mensagem (por exemplo, 2000 milissegundos ou 2 segundos)
    const displayTime = 2000;

    // Obtenha todos os campos do formulário
    const formFields = form.elements;

    // Guarde os valores atuais dos campos
    const initialValues = Array.from(formFields).map(field => field.value);

    // Redefina os campos gradualmente
    let step = 0;
    const totalSteps = 10; // Número total de etapas

    // A cada intervalo, ajuste o valor de um campo do formulário
    const resetInterval = setInterval(() => {
        Array.from(formFields).forEach((field, index) => {
            // Interpolação linear para suavizar a redefinição
            const targetValue = ''; // Pode ajustar para um valor padrão se necessário
            const currentValue = initialValues[index];
            const newValue = currentValue + (targetValue - currentValue) * (step / totalSteps);
            field.value = newValue;
        });

        step++;

        // Se atingir o número total de etapas, limpe o intervalo, limpe a mensagem e redefina o formulário
        if (step >= totalSteps) {
            clearInterval(resetInterval);
            msg.innerHTML = "";
            form.reset();
        }
    }, displayTime / totalSteps);
})

  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})


var typed = new Typed(".text", {
    strings: ["Frontend Developer", "Web Developer","Backend Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    startDelay: 100,
    loop: true,
    cursorChar: "|",
});
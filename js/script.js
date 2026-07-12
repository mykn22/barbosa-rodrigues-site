// Mudança do menu ao rolar a página

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80){

        header.classList.add("scrolled");

    } else{

        header.classList.remove("scrolled");

    }

});
// ===========================
// Animações ao rolar a página
// ===========================

const elementos = document.querySelectorAll(".animar");

function revelarElementos(){

    const alturaTela = window.innerHeight;

    elementos.forEach((elemento)=>{

        const topo = elemento.getBoundingClientRect().top;

        if(topo < alturaTela - 120){

            elemento.classList.add("aparecer");

        }

    });

}

window.addEventListener("scroll", revelarElementos);

revelarElementos();
// ===========================
// Formulário para WhatsApp
// ===========================

const formulario = document.getElementById("formContato");

formulario.addEventListener("submit", function(event){

    event.preventDefault();

    const nome = document.getElementById("nome").value;

    const email = document.getElementById("email").value;

    const telefone = document.getElementById("telefone").value;

    const mensagem = document.getElementById("mensagem").value;

    const texto =
`Olá!

Meu nome é ${nome}.

E-mail: ${email}

Telefone: ${telefone}

Mensagem:

${mensagem}`;

    const numero = "5522992351550";

    const url =
`https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;

    window.open(url,"_blank");

});
// ===========================
// Botão voltar ao topo
// ===========================

const btnTopo = document.getElementById("btnTopo");

window.addEventListener("scroll", () => {

    if(window.scrollY > 500){

        btnTopo.classList.add("mostrar");

    }else{

        btnTopo.classList.remove("mostrar");

    }

});

btnTopo.addEventListener("click", () => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});
// ===========================
// Menu Mobile
// ===========================

const menuToggle = document.querySelector(".menu-toggle");

const menu = document.getElementById("menu");

menuToggle.addEventListener("click", () => {

    menu.classList.toggle("ativo");

});
const linksMenu = document.querySelectorAll("#menu a");

linksMenu.forEach(link => {

    link.addEventListener("click", () => {

        menu.classList.remove("ativo");

    });

});
// ===========================
// FAQ
// ===========================

const perguntas = document.querySelectorAll(".faq-pergunta");

perguntas.forEach(pergunta => {

    pergunta.addEventListener("click", () => {

        const resposta = pergunta.nextElementSibling;

        if(resposta.style.maxHeight){

            resposta.style.maxHeight = null;

        }else{

            resposta.style.maxHeight =
            resposta.scrollHeight + "px";

        }

    });

});
// ===========================
// Contadores Animados
// ===========================

const contadores = document.querySelectorAll(".contador");

let contadorExecutado = false;

function iniciarContadores(){

    const secao = document.querySelector(".estatisticas");

    if(!secao) return;

    const topo = secao.getBoundingClientRect().top;

    if(topo < window.innerHeight - 100 && !contadorExecutado){

        contadorExecutado = true;

        contadores.forEach(contador =>{

            const alvo = Number(contador.dataset.target);

            let valor = 0;

            const incremento = Math.max(1, Math.ceil(alvo / 60));

            const timer = setInterval(()=>{

                valor += incremento;

                if(valor >= alvo){

                    contador.textContent = alvo;

                    clearInterval(timer);

                }else{

                    contador.textContent = valor;

                }

            },25);

        });

    }

}

window.addEventListener("scroll", iniciarContadores);

iniciarContadores();
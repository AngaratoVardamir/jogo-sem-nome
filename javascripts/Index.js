let Cartas = [...document.querySelectorAll('.Carta')];
let AçãoCartas = [...document.querySelectorAll('.ação')];
let Icones = [...document.querySelectorAll('.Icon')];
let IconList = [`<i class="bi bi-stop-fill"></i>`,`<i class="bi bi-gear"></i>`];
let LinksCards = [`../pages/Game.html`,`../pages/Settings.html`]

AçãoCartas.forEach((cardAction, IndAction) => {
    cardAction.addEventListener('click', (e) => {
        e.stopPropagation(); // Evita que o evento clique suba para a carta
        // vire a Carta sem ativar ela
        cardAction.closest('.Carta').classList.add('revelada');
    });
});

Cartas.forEach((card, Ind) => {
    card.addEventListener('click', () => {
        console.log(`Carta ${Ind} revelada: ${card.classList.contains('revelada')}`);
        // vire a Carta de volta sem ativar ela
        if (card.classList.contains('revelada')) {
            card.classList.remove('revelada');
        } else {
            //Ativar a carta
            Icones[Ind].innerHTML = (IconList[Ind]);
            card.classList.add('CartaAtivanda');
            setTimeout(() => {
                window.open(LinksCards[Ind], '_self');
            }, 500);
        }
    });
});











/*AçãoCartas.map((cardButton, indx) =>{
    //console.log(card);
    if (Cartas.class == "Revelado") {
        console.log(Cartas.classList == "Revelado");
    }
    cardButton.addEventListener('click', () => {
        console.log(Cartas);
        Cartas[indx].classList.toggle('revelada');
    });
    
});
Cartas.map((card) =>{
    card.addEventListener('click', () => {
        if (card.classList.contains('revelada')){
                card.classList.toggle('revelada');
        }
    });
});*/
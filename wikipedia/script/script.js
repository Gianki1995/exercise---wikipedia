const links = document.querySelectorAll('a');
const popupContainer = document.getElementById('avviso')
const pulsanti = document.querySelectorAll('#avviso button');
const DOMINIO_WIKIPEDIA = "https://it.wikipedia.org";
let urlRelativo;

const linksContainer = document.querySelector('main');

linksContainer.addEventListener('click', gestisciClickLink)

// for (let i = 0; i < links.length; i++) {ù
//     if(links[i].getAttribute('href').indexOf('#') !== 0)
//     links[i].addEventListener('click', gestisciClickLink);
// }

for (let y = 0; y < pulsanti.length; y++) {
    pulsanti[y].addEventListener('click', chiudiPopup); 
}

function gestisciClickLink(event) {
    event.preventDefault();

    
    const linkClicked = event.target;

    if(linkClicked.tagName.toLowerCase() === 'a'){
        console.log(linkClicked)
        linkClicked.classList.add('color-link-clicked')
        urlRelativo = linkClicked.getAttribute('href');

        if(urlRelativo.indexOf('#') !== 0){
            popupContainer.classList.add('popup-visibile');
        }
    }
    

}

function chiudiPopup(event) {

    let elementClicked = event.target;
    popupContainer.classList.remove('popup-visibile');

    if(elementClicked.innerHTML === "SI"){
        let urlAssoluto = DOMINIO_WIKIPEDIA + urlRelativo;
        location.href = urlAssoluto;

    }

}

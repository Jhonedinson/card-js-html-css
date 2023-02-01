/*
<div class="card">
    
    <div class="img-principal">
        <img src="https://3ztech.com.co/wp-content/uploads/2022/11/pexels-dominika-roseclay-905163-scaled.jpg" alt="pc">
        <div class="img-secundaria">
            <img src="https://3ztech.com.co/wp-content/uploads/2022/11/foto_jessika.png" alt="Jessika Vallejo">
        </div>
    </div>

    <div class="contenido">
        <h2>Jessika Vallejo</h2>
        <p>Admon Negocios Internacioanles</p>

    </div>

    <div class="contenidoGrid">
        <div class="item"><p>Colombia</p></div>
        <div class="item"><a href="mailto:info@3ztech.com.co">Send Email</a></div>
        <div class="item-2"><a href="https://www.instagram.com/tresztech/" target="_blank"><img src="img/instagram.png" alt="instagram"></a></div>
        <div class="item-2"><a href="https://www.facebook.com/people/3ztech/100087458499061/" target="_blank"><img src="img/facebook.png" alt="facebook"></a></div>
    </div>
        
    <div class="footer"><a href="https://3ztech.com.co/" target="_blank"><p>3ztech</p></a><p>&nbsp; &#169; 2023 </p></div>
</div>
 */

let personList = [
    {
        name: 'Jessika Vallejo',
        imgPrincipal: 'pexels-dominika-roseclay-905163-scaled.jpg',
        imgPerson: 'foto_jessika.png',
        profesion: 'Admon Negocios Internacioanles',
        pais: 'Colombia',
    },  
    {
        name: 'Jhon Mantilla',
        imgPrincipal: 'pexels-sora-shimazaki-5926382.jpg',
        imgPerson: 'JHON.png',
        profesion: 'Ingeniero de Sistemas',
        pais: 'Colombia',
    },
    {
        name: 'Zhoe Acevedo',
        imgPrincipal: 'code-g4c89e7e8f_640.jpg',
        imgPerson: 'ZHOE-removebg-preview-1.png',
        profesion: 'Tec. Análisis y Desarrollo',
        pais: 'Colombia',
    },    {
        name: 'Jessika Vallejo',
        imgPrincipal: 'pexels-dominika-roseclay-905163-scaled.jpg',
        imgPerson: 'foto_jessika.png',
        profesion: 'Admon Negocios Internacioanles',
        pais: 'Colombia',
    },  
    {
        name: 'Jhon Mantilla',
        imgPrincipal: 'pexels-sora-shimazaki-5926382.jpg',
        imgPerson: 'JHON.png',
        profesion: 'Ingeniero de Sistemas',
        pais: 'Colombia',
    },
    {
        name: 'Zhoe Acevedo',
        imgPrincipal: 'code-g4c89e7e8f_640.jpg',
        imgPerson: 'ZHOE-removebg-preview-1.png',
        profesion: 'Tec. Análisis y Desarrollo',
        pais: 'Colombia',
    },

];

const cardContainer = document.querySelector('.cards-container');

for (let person of personList){

    const card = document.createElement('div');
    card.classList.add('card');

    /* Primer bloque */
    const imgPrincipalDiv = document.createElement('div');
    imgPrincipalDiv.classList.add('img-principal');
   
    const imgPrincipal = document.createElement('img');
    imgPrincipal.setAttribute('src', `https://3ztech.com.co/wp-content/uploads/2022/11/${person.imgPrincipal}`);

    const imgPersonDiv = document.createElement('div');
    imgPersonDiv.classList.add('img-secundaria');

    const imgPerson = document.createElement('img');
    imgPerson.setAttribute('src', `https://3ztech.com.co/wp-content/uploads/2022/11/${person.imgPerson}`);

    imgPersonDiv.appendChild(imgPerson);

    imgPrincipalDiv.append(imgPrincipal , imgPersonDiv);

    /* Fin Primer bloque */

    /* Segundo bloque */
    const contenidoDiv = document.createElement('div');
    contenidoDiv.classList.add('contenido');

    const h2Contenido = document.createElement('h2');
    h2Contenido.innerText = person.name;

    const pContenido = document.createElement('p');
    pContenido.innerText = person.profesion;

    contenidoDiv.append(h2Contenido, pContenido);
    /* Fin Segundo bloque */

    /* Tercer bloque */
    const contenidoGridDiv = document.createElement('div');
    contenidoGridDiv.classList.add('contenidoGrid');

    //Pais
    const paisDiv = document.createElement('div');
    paisDiv.classList.add('item');
    paisDiv.innerText = person.pais;

    //mail
    const mailDiv = document.createElement('div');
    mailDiv.classList.add('item');

    const mailDivA = document.createElement('a');
    mailDivA.setAttribute('href', 'mailto:info@3ztech.com.co');
    mailDivA.innerText = 'Send Email';

    mailDiv.appendChild(mailDivA);

    //instagram
    const instagrantDiv = document.createElement('div');
    instagrantDiv.classList.add('item-2');

    const instagrantDivA = document.createElement('a');
    instagrantDivA.setAttribute('href', 'https://www.instagram.com/tresztech/');
    instagrantDivA.setAttribute('target', '_blank');

    const instagranImgA = document.createElement('img');
    instagranImgA.setAttribute('src', 'img/instagram.png');
    instagranImgA.setAttribute('alt', 'instagram');

    instagrantDivA.appendChild(instagranImgA);
    instagrantDiv.appendChild(instagrantDivA);

    //facebook
    const facebookDiv = document.createElement('div');
    facebookDiv.classList.add('item-2');

    const facebookDivA = document.createElement('a');
    facebookDivA.setAttribute('href', 'https://www.facebook.com/people/3ztech/100087458499061/');
    facebookDivA.setAttribute('target', '_blank');

    const facebookImgA = document.createElement('img');
    facebookImgA.setAttribute('src', 'img/facebook.png');
    facebookImgA.setAttribute('alt', 'facebook');

    facebookDivA.appendChild(facebookImgA);
    facebookDiv.appendChild(facebookDivA);

    contenidoGridDiv.append(paisDiv, mailDiv, instagrantDiv, facebookDiv);

    /* Fin Tercer bloque */

    /* Cuarto bloque */
    const footerDiv  = document.createElement('div');
    footerDiv.classList.add('footer');

    const footerWeb = document.createElement('a');
    footerWeb.setAttribute('href', 'https://3ztech.com.co/');
    footerWeb.setAttribute('target', '_blank');

    const pWeb = document.createElement('p');
    pWeb.innerText = '3ztech';

    footerWeb.appendChild(pWeb);

    const pAno = document.createElement('p');
    pAno.innerHTML = '&nbsp; &#169; 2023 ';

    footerDiv.append(footerWeb, pAno);

    /*Fin Cuarto bloque */

    card.append(imgPrincipalDiv, contenidoDiv, contenidoGridDiv, footerDiv);

    cardContainer.appendChild(card);

}

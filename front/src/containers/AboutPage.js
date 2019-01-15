import React, { Component } from 'react';

class AboutPage extends Component {
  render() {
    return (
      <div class="containerAbout">
         <br/>
         <h1 id="titluAbout">Manager de filme integrat cu TMDB</h1>
         <h3 id="numeEchipa">Echipa NothingButSlick ( Aron Alin-Costin, Arhip Georgiana, Andreescu Andreea-Cristina)</h3>
         <p class="pAbout">Aplicația dezvoltată este un manager de filme favorite, integrat cu TMDB. Produsul se adresează tuturor iubitorilor de filme sau seriale, indiferent de vârstă, statut social sau preferințe în materie de cinematografie, fiind ușor de utilizat și cu o interfață ”prietenoasă” chiar și pentru cei care nu posedă cunoștințe în domeniul tehnologiei.</p>
         <p class="pAbout">Utilizatorul își poate alege dacă vrea să vizioneze un film sau un serial (Movie/ TV Series) și îl poate căuta după nume, urmând a fi afișat în câmpul RESULTS.</p>
         <p class="pAbout">Accesând câmpul TRENDING, se vor afișa sugestii cu titlurile celor mai noi filme și seriale. MOVIES și TV SHOWS oferă, la fel ca în cazul precedent, liste fie de filme, fie de show-uri TV, de unde utilizatorul să aleagă cu ușurință ceea ce îl interesează. În FAVORITES, vor apărea titlurile preferate ale celui care folosește aplicația, în acest mod având posibilitatea de a revedea oricând un film mult îndrăgit, fără a mai irosi timp căutându-l.</p>
         <p class="pAbout">Prin urmare, interfața aplicației este modernă, însă, în același timp, destul de simplă și intuitivă, putând fi utilizată cu ușurință de oricine.</p>
         <br/>
      </div>
      
    );
  }
}

export default AboutPage;
# Proiect Tehnologii Web
## Manager de filme favorite integrat cu TMDB
Echipa **NothingButSlick**:boom:
(*Aron Alin-Costin*, 
*Andreescu Andreea Cristina*, 
*Arhip Georgiana*)
### Introducere
* Aplicația pe care o vom dezvolta este un manager de filme favorite, integrat cu [**TMDB**](https://www.themoviedb.org/?language=en-US). Astfel, va permite utilizatorului să vizioneze o listă vastă de filme și seriale din foarte multe categorii, să le adauge pe cele favorite într-o altă listă, astfel încât să le poată urmări oricând își dorește. De asemenea, va exista și un top în funcție de note pe [**IMDb**](https://www.imdb.com/). Filmele vor fi clasificate după mai multe criterii, precum: gen (filme de acțiune :red_car:, aventură :runner:, biografice :older_man:, comedie :joy:, dramă :broken_heart:, fantastice :alien:, de groază :smiling_imp:, musical :dancer:, thriller :ghost:, polițiste :cop:, filme pentru copii :baby:), anul apariției, actorii din rolurile principale, numărul de premii câștigate de-a lungul timpului. Utilizatorul va fi informat când vor apărea următoarele episoade din serialele sale preferate și va putea să vadă cu ușurință sezonul sau numărul episodului pe care l-a urmărit ultima oară. În funcție de genul preferat de filme, vor apărea sugestii din aceeași categorie, sau dacă un anumit serial are foarte multe review-uri, atunci  i se va indica utilizatorului să îl adauge în lista sa. User-ul va avea un cont și se va loga cu un token pentru TMDb. De asemenea, există și un al doilea tip de autentificare. Acesta îi permite user-ului acces limitat pentru a evalua un film sau serial.
* Produsul se adresează tuturor categoriilor de persoane, în special celor pasionate de magia filmului sau celor care urmăresc des seriale, deoarece această aplicație va fi de mare folos, organizând activitatea utilizatorului, acesta știind în orice moment care a fost ultimul episod sau film pe care l-a văzut și oferindu-i posibilitatea să fie la curent cu ultimele noutăți din acest domeniu.
* O aplicație deja existentă pe piață  care să permită vizionarea filmelor sau serialelor preferate este [**Netflix**](https://www.netflix.com/ro-en/). Aceasta permite doar descărcarea filmelor și serialelor originale Netflix, fiind disponibile doar câteva sute din câteva mii care se găsesc  pe platformă,  astfel încât utilizatorul să aibă posibilitatea de a urmări și offline conținutul video. Restul se pot viziona online. Un alt produs similar este [**Popcorn Time**](https://popcorn-time.to/), care conține o listă actualizată în permanență cu filme și seriale care poate fi răsfoită după diverse categorii. Filmele sunt încărcate prin intermediul protocolului BitTorrent. Imediat ce aplicația începe să descarce un film, începe să partajeze cu alți utilizatori conținutul descărcat. Un alt produs despre care vom aminti este IMDb, ce reprezintă o bază de date online, conținând informații legate de programe de televiziune, filme, etc.
### Interfețe aplicație si API REST
![First](https://github.com/alinaron/proiect-web/blob/master/docs/web1.jpg)
![Second](https://github.com/alinaron/proiect-web/blob/master/docs/web2.jpg)

### API REST
# GET /account
Returneaza detaliile contului TMDB.
Response example:
{
  "avatar": {
    "gravatar": {
      "hash": "c9e9fc152ee756a900db85757c29815d"
    }
  },
  "id": 548,
  "iso_639_1": "en",
  "iso_3166_1": "CA",
  "name": "Travis Bell",
  "include_adult": true,
  "username": "travisbell"
}
# GET /keyword/{keyword_id}
Cauta in TMDB dupa un keyword.
Response example:
{
  "id": 3417,
  "name": "wormhole"
}

# GET /movie/{movie_id}
Returneaza informatiile de baza despre un film.
Response example: 
{
  "adult": false,
  "backdrop_path": "/fCayJrkfRaCRCTh8GqN30f8oyQF.jpg",
  "belongs_to_collection": null,
  "budget": 63000000,
  "genres": [
    {
      "id": 18,
      "name": "Drama"
    }
  ],
  "homepage": "",
  "id": 550,
  "imdb_id": "tt0137523",
  "original_language": "en",
  "original_title": "Fight Club",
  "overview": "A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy. Their concept catches on, with underground \"fight clubs\" forming in every town, until an eccentric gets in the way and ignites an out-of-control spiral toward oblivion.",
  "popularity": 0.5,
  "poster_path": null,
  "production_companies": [
    {
      "id": 508,
      "logo_path": "/7PzJdsLGlR7oW4J0J5Xcd0pHGRg.png",
      "name": "Regency Enterprises",
      "origin_country": "US"
    },
    {
      "id": 711,
      "logo_path": null,
      "name": "Fox 2000 Pictures",
      "origin_country": ""
    },
    {
      "id": 20555,
      "logo_path": null,
      "name": "Taurus Film",
      "origin_country": ""
    },
    {
      "id": 54050,
      "logo_path": null,
      "name": "Linson Films",
      "origin_country": ""
    },
    {
      "id": 54051,
      "logo_path": null,
      "name": "Atman Entertainment",
      "origin_country": ""
    },
    {
      "id": 54052,
      "logo_path": null,
      "name": "Knickerbocker Films",
      "origin_country": ""
    },
    {
      "id": 25,
      "logo_path": "/qZCc1lty5FzX30aOCVRBLzaVmcp.png",
      "name": "20th Century Fox",
      "origin_country": "US"
    }
  ],
  "production_countries": [
    {
      "iso_3166_1": "US",
      "name": "United States of America"
    }
  ],
  "release_date": "1999-10-12",
  "revenue": 100853753,
  "runtime": 139,
  "spoken_languages": [
    {
      "iso_639_1": "en",
      "name": "English"
    }
  ],
  "status": "Released",
  "tagline": "How much can you know about yourself if you've never been in a fight?",
  "title": "Fight Club",
  "video": false,
  "vote_average": 7.8,
  "vote_count": 3439
}

# GET /trending/{media_type}/{time_window}
Returneaza item-urile trending din ultima zi sau saptamana.
{
  "page": 1,
  "results": [
    {
      "adult": false,
      "backdrop_path": "/bOGkgRGdhrBYJSLpXaxhXVstddV.jpg",
      "genre_ids": [
        28,
        12,
        14,
        878
      ],
      "id": 299536,
      "original_language": "en",
      "original_title": "Avengers: Infinity War",
      "overview": "As the Avengers and their allies have continued to protect the world from threats too large for any one hero to handle, a new danger has emerged from the cosmic shadows: Thanos. A despot of intergalactic infamy, his goal is to collect all six Infinity Stones, artifacts of unimaginable power, and use them to inflict his twisted will on all of reality. Everything the Avengers have fought for has led up to this moment - the fate of Earth and existence itself has never been more uncertain.",
      "poster_path": "/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",
      "release_date": "2018-04-25",
      "title": "Avengers: Infinity War",
      "video": false,
      "vote_average": 8.3,
      "vote_count": 6937,
      "popularity": 358.799
    },
    {
      "adult": false,
      "backdrop_path": "/3P52oz9HPQWxcwHOwxtyrVV1LKi.jpg",
      "genre_ids": [
        28,
        35,
        878
      ],
      "id": 383498,
      "original_language": "en",
      "original_title": "Deadpool 2",
      "overview": "Wisecracking mercenary Deadpool battles the evil and powerful Cable and other bad guys to save a boy's life.",
      "poster_path": "/to0spRl1CMDvyUbOnbb4fTk3VAd.jpg",
      "release_date": "2018-05-15",
      "title": "Deadpool 2",
      "video": false,
      "vote_average": 7.6,
      "vote_count": 3938,
      "popularity": 223.011
    },
    {
      "adult": false,
      "backdrop_path": "/22cUd4Yg5euCxIwWzXrL4m4otkU.jpg",
      "genre_ids": [
        28,
        878,
        53
      ],
      "id": 500664,
      "original_language": "en",
      "original_title": "Upgrade",
      "overview": "A brutal mugging leaves Grey Trace paralyzed in the hospital and his beloved wife dead. A billionaire inventor soon offers Trace a cure — an artificial intelligence implant called STEM that will enhance his body. Now able to walk, Grey finds that he also has superhuman strength and agility — skills he uses to seek revenge against the thugs who destroyed his life.",
      "poster_path": "/adOzdWS35KAo21r9R4BuFCkLer6.jpg",
      "release_date": "2018-06-01",
      "title": "Upgrade",
      "video": false,
      "vote_average": 7.6,
      "vote_count": 138,
      "popularity": 32.969
    },
    {
      "adult": false,
      "backdrop_path": "/uZTtVdOEIwPA6vwVRI3217DoPM.jpg",
      "genre_ids": [
        35,
        10749
      ],
      "id": 466282,
      "original_language": "en",
      "original_title": "To All the Boys I've Loved Before",
      "overview": "Lara Jean's love life goes from imaginary to out of control when her secret letters to every boy she's ever fallen for are mysteriously mailed out.",
      "poster_path": "/hKHZhUbIyUAjcSrqJThFGYIR6kI.jpg",
      "release_date": "2018-08-17",
      "title": "To All the Boys I've Loved Before",
      "video": false,
      "vote_average": 8.4,
      "vote_count": 349,
      "popularity": 31.76
    },
    {
      "adult": false,
      "backdrop_path": "/yRXzrwLfB5tDTIA3lSU9S3N9RUK.jpg",
      "genre_ids": [
        35,
        18
      ],
      "id": 455980,
      "original_language": "en",
      "original_title": "Tag",
      "overview": "For one month every year, five highly competitive friends hit the ground running in a no-holds-barred game of tag they’ve been playing since the first grade. This year, the game coincides with the wedding of their only undefeated player, which should finally make him an easy target. But he knows they’re coming...and he’s ready.",
      "poster_path": "/eXXpuW2xaq5Aen9N5prFlARVIvr.jpg",
      "release_date": "2018-06-14",
      "title": "Tag",
      "video": false,
      "vote_average": 7,
      "vote_count": 285,
      "popularity": 87.194
    },
    {
      "backdrop_path": "/hHEqDPbO6z4Xje5tOf3Wm1mdMtI.jpg",
      "first_air_date": "2018-08-17",
      "genre_ids": [
        16,
        35,
        10765
      ],
      "id": 73021,
      "name": "Disenchantment",
      "origin_country": [
        "US"
      ],
      "original_language": "en",
      "original_name": "Disenchantment",
      "overview": "Set in a ruined medieval city called Dreamland, Disenchantment follows the grubby adventures of a hard-drinking princess, her feisty elf companion and her personal demon.",
      "poster_path": "/c3cUb0b3qHlWaawbLRC9DSsJwEr.jpg",
      "vote_average": 7.8,
      "vote_count": 8,
      "popularity": 19.929
    },
    {
      "adult": false,
      "backdrop_path": "/3ccBOsbVpgwN9K5whd2UB9ACebG.jpg",
      "genre_ids": [
        80,
        18
      ],
      "id": 489931,
      "original_language": "en",
      "original_title": "American Animals",
      "overview": "Four young men mistake their lives for a movie and attempt one of the most audacious heists in U.S. history.",
      "poster_path": "/aLbdKxgxuOPvs6CTlmzoOQ4Yg3j.jpg",
      "release_date": "2018-06-01",
      "title": "American Animals",
      "video": false,
      "vote_average": 7,
      "vote_count": 38,
      "popularity": 16.876
    },
    {
      "adult": false,
      "backdrop_path": "/tmpY6f0Lf7Dnx6inByjvHby4AYf.jpg",
      "genre_ids": [
        35
      ],
      "id": 454283,
      "original_language": "en",
      "original_title": "Action Point",
      "overview": "A daredevil designs and operates his own theme park with his friends.",
      "poster_path": "/5lqJx0uNKrD1cEKgaqF1LBsLAoi.jpg",
      "release_date": "2018-06-01",
      "title": "Action Point",
      "video": false,
      "vote_average": 5.3,
      "vote_count": 31,
      "popularity": 33.909
    },
    {
      "adult": false,
      "backdrop_path": "/cS6S6OcvcAjx0aBzvHPy1Sm4Snj.jpg",
      "genre_ids": [
        18,
        14,
        27,
        53
      ],
      "id": 421792,
      "original_language": "en",
      "original_title": "Down a Dark Hall",
      "overview": "Kitt Gordy, a new student at the exclusive Blackwood Boarding School, confronts the institution's supernatural occurrences and dark powers of its headmistress.",
      "poster_path": "/wErHaJrD1QZ2FEVneH6w0GZUz2L.jpg",
      "release_date": "2018-08-01",
      "title": "Down a Dark Hall",
      "video": false,
      "vote_average": 5.5,
      "vote_count": 30,
      "popularity": 11.162
    },
    {
      "adult": false,
      "backdrop_path": "/64jAqTJvrzEwncD3ARZdqYLcqbc.jpg",
      "genre_ids": [
        12,
        53,
        10749
      ],
      "id": 429300,
      "original_language": "en",
      "original_title": "Adrift",
      "overview": "A true story of survival, as a young couple's chance encounter leads them first to love, and then on the adventure of a lifetime as they face one of the most catastrophic hurricanes in recorded history.",
      "poster_path": "/5gLDeADaETvwQlQow5szlyuhLbj.jpg",
      "release_date": "2018-05-31",
      "title": "Adrift",
      "video": false,
      "vote_average": 6.4,
      "vote_count": 170,
      "popularity": 49.661
    },
    {
      "adult": false,
      "backdrop_path": "/gRtLcCQOpYUI9ThdVzi4VUP8QO3.jpg",
      "genre_ids": [
        18,
        36,
        10752
      ],
      "id": 857,
      "original_language": "en",
      "original_title": "Saving Private Ryan",
      "overview": "As U.S. troops storm the beaches of Normandy, three brothers lie dead on the battlefield, with a fourth trapped behind enemy lines. Ranger captain John Miller and seven men are tasked with penetrating German-held territory and bringing the boy home.",
      "poster_path": "/miDoEMlYDJhOCvxlzI0wZqBs9Yt.jpg",
      "release_date": "1998-07-24",
      "title": "Saving Private Ryan",
      "video": false,
      "vote_average": 8,
      "vote_count": 6840,
      "popularity": 15.153
    },
    {
      "adult": false,
      "backdrop_path": "/aOQjLmHGuFy3hsY26QDIctxjMol.jpg",
      "genre_ids": [
        18,
        53
      ],
      "id": 470918,
      "original_language": "en",
      "original_title": "Beast",
      "overview": "A troubled woman living in an isolated community finds herself pulled between the control of her oppressive family and the allure of a secretive outsider suspected of a series of brutal murders.",
      "poster_path": "/kZdncyp1IKhEqwv5zdmUpK5Dc7S.jpg",
      "release_date": "2018-04-18",
      "title": "Beast",
      "video": false,
      "vote_average": 6.9,
      "vote_count": 19,
      "popularity": 2.492
    },
    {
      "id": 353081,
      "video": false,
      "vote_count": 952,
      "vote_average": 7.5,
      "title": "Mission: Impossible - Fallout",
      "release_date": "2018-07-25",
      "original_language": "en",
      "original_title": "Mission: Impossible - Fallout",
      "genre_ids": [
        28,
        12,
        53
      ],
      "backdrop_path": "/5qxePyMYDisLe8rJiBYX8HKEyv2.jpg",
      "adult": false,
      "overview": "When an IMF mission ends badly, the world is faced with dire consequences. As Ethan Hunt takes it upon himself to fulfil his original briefing, the CIA begin to question his loyalty and his motives. The IMF team find themselves in a race against time, hunted by assassins while trying to prevent a global catastrophe.",
      "poster_path": "/AkJQpZp9WoNdj7pLYSj1L0RcMMN.jpg",
      "popularity": 139.023
    },
    {
      "adult": false,
      "backdrop_path": "/kNAzo7icHdFkF43JQa18mPEUtvf.jpg",
      "genre_ids": [
        12,
        16,
        14
      ],
      "id": 271706,
      "original_language": "zh",
      "original_title": "大魚海棠",
      "overview": "Beyond the human realm, there is a magical race of beings who control the tides and the changing of the seasons. One of these beings, a young girl named Chun, seeks something more—she wants to experience the human world! At sixteen, she finally gets her chance and transforms into a dolphin in order to explore the world that has her fascinated. But she soon discovers that it’s a dangerous place and nearly gets killed in a vortex. Luckily, her life is spared when a young boy sacrifices himself to save her. Moved by his kindness and courage, she uses magic to bring him back to life only to learn that this power comes at a serious price. On a new adventure, she’ll have to make her own sacrifices in order to protect his soul until it is ready to return to the human world.",
      "poster_path": "/fRCdXh9MZutj1JJPZlUXMex6AuB.jpg",
      "release_date": "2016-07-08",
      "title": "Big Fish & Begonia",
      "video": false,
      "vote_average": 6.9,
      "vote_count": 30,
      "popularity": 7.424
    },
    {
      "original_name": "Game of Thrones",
      "id": 1399,
      "name": "Game of Thrones",
      "vote_count": 4772,
      "vote_average": 8.2,
      "first_air_date": "2011-04-17",
      "poster_path": "/gwPSoYUHAKmdyVywgLpKKA4BjRr.jpg",
      "genre_ids": [
        18,
        10759,
        10765
      ],
      "original_language": "en",
      "backdrop_path": "/gX8SYlnL9ZznfZwEH4KJUePBFUM.jpg",
      "overview": "Seven noble families fight for control of the mythical land of Westeros. Friction between the houses leads to full-scale war. All while a very ancient evil awakens in the farthest north. Amidst the war, a neglected military order of misfits, the Night's Watch, is all that stands between the realms of men and icy horrors beyond.",
      "origin_country": [
        "US"
      ],
      "popularity": 61.91
    },
    {
      "adult": false,
      "backdrop_path": "/5a7lMDn3nAj2ByO0X1fg6BhUphR.jpg",
      "genre_ids": [
        12,
        14,
        878
      ],
      "id": 333339,
      "original_language": "en",
      "original_title": "Ready Player One",
      "overview": "When the creator of a popular video game system dies, a virtual contest is created to compete for his fortune.",
      "poster_path": "/pU1ULUq8D3iRxl1fdX2lZIzdHuI.jpg",
      "release_date": "2018-03-28",
      "title": "Ready Player One",
      "video": false,
      "vote_average": 7.7,
      "vote_count": 3673,
      "popularity": 68.153
    },
    {
      "adult": false,
      "backdrop_path": "/wWoCid7YUxiLhq3ZZT6CtFEDPXw.jpg",
      "genre_ids": [
        28
      ],
      "id": 347375,
      "original_language": "en",
      "original_title": "Mile 22",
      "overview": "A CIA field officer and an Indonesian police officer are forced to work together in confronting political corruption. An informant must be moved twenty-two miles to safety.",
      "poster_path": "/2L8ehd95eSW9x7KINYtZmRkAlrZ.jpg",
      "release_date": "2018-08-10",
      "title": "Mile 22",
      "video": false,
      "vote_average": 6,
      "vote_count": 8,
      "popularity": 30.064
    },
    {
      "backdrop_path": "/okhLwP26UXHJ4KYGVsERQqp3129.jpg",
      "first_air_date": "2015-08-23",
      "genre_ids": [
        18,
        27
      ],
      "id": 62286,
      "name": "Fear the Walking Dead",
      "origin_country": [
        "US"
      ],
      "original_language": "en",
      "original_name": "Fear the Walking Dead",
      "overview": "What did the world look like as it was transforming into the horrifying apocalypse depicted in \"The Walking Dead\"? This spin-off set in Los Angeles, following new characters as they face the beginning of the end of the world, will answer that question.",
      "poster_path": "/gAEZitvNudXr9kphSd4XOlOkjPX.jpg",
      "vote_average": 6.4,
      "vote_count": 791,
      "popularity": 44.477
    },
    {
      "adult": false,
      "backdrop_path": "/bLJTjfbZ1c5zSNiAvGYs1Uc82ir.jpg",
      "genre_ids": [
        28,
        12,
        14
      ],
      "id": 338970,
      "original_language": "en",
      "original_title": "Tomb Raider",
      "overview": "Lara Croft, the fiercely independent daughter of a missing adventurer, must push herself beyond her limits when she finds herself on the island where her father disappeared.",
      "poster_path": "/3zrC5tUiR35rTz9stuIxnU1nUS5.jpg",
      "release_date": "2018-03-05",
      "title": "Tomb Raider",
      "video": false,
      "vote_average": 6.3,
      "vote_count": 2530,
      "popularity": 44.164
    },
    {
      "id": 345940,
      "video": false,
      "vote_count": 310,
      "vote_average": 6.3,
      "title": "The Meg",
      "release_date": "2018-08-09",
      "original_language": "en",
      "original_title": "The Meg",
      "genre_ids": [
        28,
        27,
        878,
        53
      ],
      "backdrop_path": "/ibKeXahq4JD63z6uWQphqoJLvNw.jpg",
      "adult": false,
      "overview": "A deep sea submersible pilot revisits his past fears in the Mariana Trench, and accidentally unleashes the seventy foot ancestor of the Great White Shark believed to be extinct.",
      "poster_path": "/xqECHNvzbDL5I3iiOVUkVPJMSbc.jpg",
      "popularity": 198.941
    }
  ],
  "total_pages": 792,
  "total_results": 15831
}

# GET /genre/movie/list
Returneaza din lista oficiala de genuri de filme.
Response example:
{
  "genres": [
    {
      "id": 28,
      "name": "Action"
    }
  ]
}

# GET /find/{external_id}
Metoda find face mai usoara afisarea de obiecte din baza de date dupa un id extern, spre exemplu un id folosit de IMDb.
Response example:
{
  "movie_results": [
    {
      "adult": false,
      "backdrop_path": null,
      "genre_ids": [
        35
      ],
      "id": 12,
      "original_language": "en",
      "original_title": "Finding Nemo",
      "overview": "A tale which follows the comedic and eventful journeys of two fish, the fretful Marlin and his young son Nemo, who are separated from each other in the Great Barrier Reef when Nemo is unexpectedly taken from his home and thrust into a fish tank in a dentist's office overlooking Sydney Harbor. Buoyed by the companionship of a friendly but forgetful fish named Dory, the overly cautious Marlin embarks on a dangerous trek and finds himself the unlikely hero of an epic journey to rescue his son.",
      "release_date": "2003-05-30",
      "poster_path": null,
      "popularity": 1.256412,
      "title": "Finding Nemo",
      "video": false,
      "vote_average": 7.2,
      "vote_count": 2317
    }
  ],
  "person_results": [],
  "tv_results": [],
  "tv_episode_results": [],
  "tv_season_results": []
}

# GET /search/movie
Cauta filme.
Response example:
{
  "page": 1,
  "results": [
    {
      "poster_path": "/cezWGskPY5x7GaglTTRN4Fugfb8.jpg",
      "adult": false,
      "overview": "When an unexpected enemy emerges and threatens global safety and security, Nick Fury, director of the international peacekeeping agency known as S.H.I.E.L.D., finds himself in need of a team to pull the world back from the brink of disaster. Spanning the globe, a daring recruitment effort begins!",
      "release_date": "2012-04-25",
      "genre_ids": [
        878,
        28,
        12
      ],
      "id": 24428,
      "original_title": "The Avengers",
      "original_language": "en",
      "title": "The Avengers",
      "backdrop_path": "/hbn46fQaRmlpBuUrEiFqv0GDL6Y.jpg",
      "popularity": 7.353212,
      "vote_count": 8503,
      "video": false,
      "vote_average": 7.33
    },
    {
      "poster_path": "/7cJGRajXMU2aYdTbElIl6FtzOl2.jpg",
      "adult": false,
      "overview": "British Ministry agent John Steed, under direction from \"Mother\", investigates a diabolical plot by arch-villain Sir August de Wynter to rule the world with his weather control machine. Steed investigates the beautiful Doctor Mrs. Emma Peel, the only suspect, but simultaneously falls for her and joins forces with her to combat Sir August.",
      "release_date": "1998-08-13",
      "genre_ids": [
        53
      ],
      "id": 9320,
      "original_title": "The Avengers",
      "original_language": "en",
      "title": "The Avengers",
      "backdrop_path": "/8YW4rwWQgC2JRlBcpStMNUko13k.jpg",
      "popularity": 2.270454,
      "vote_count": 111,
      "video": false,
      "vote_average": 4.7
    },
    {
      "poster_path": "/t90Y3G8UGQp0f0DrP60wRu9gfrH.jpg",
      "adult": false,
      "overview": "When Tony Stark tries to jumpstart a dormant peacekeeping program, things go awry and Earth’s Mightiest Heroes are put to the ultimate test as the fate of the planet hangs in the balance. As the villainous Ultron emerges, it is up to The Avengers to stop him from enacting his terrible plans, and soon uneasy alliances and unexpected action pave the way for an epic and unique global adventure.",
      "release_date": "2015-04-22",
      "genre_ids": [
        28,
        12,
        878
      ],
      "id": 99861,
      "original_title": "Avengers: Age of Ultron",
      "original_language": "en",
      "title": "Avengers: Age of Ultron",
      "backdrop_path": "/570qhjGZmGPrBGnfx70jcwIuBr4.jpg",
      "popularity": 7.557812,
      "vote_count": 3924,
      "video": false,
      "vote_average": 7.4
    },
    {
      "poster_path": "/imTUeuHuxVLxC7sxKqi2G0RPF7k.jpg",
      "adult": false,
      "overview": "This Australian children's film is about scientist Bill Stewart goes to Fiji with his son Tim to investigate the appearance of the Crown of Thorns starfish in the reefs off the island.",
      "release_date": "1973-10-20",
      "genre_ids": [],
      "id": 392031,
      "original_title": "Avengers of the Reef",
      "original_language": "en",
      "title": "Avengers of the Reef",
      "backdrop_path": null,
      "popularity": 1.05,
      "vote_count": 0,
      "video": false,
      "vote_average": 0
    },
    {
      "poster_path": "/u7vvexSU81Qk20yU7Vog23Ogob.jpg",
      "adult": false,
      "overview": "Mysterious Wakanda lies in the darkest heart of Africa, unknown to most of the world. An isolated land hidden behind closed borders, fiercely protected by its young king - the Black Panther. But when brutal alien invaders attack, the threat leaves the Black Panther with no option but to go against the sacred decrees of his people and ask for help from outsiders.",
      "release_date": "2006-08-08",
      "genre_ids": [
        16,
        28,
        878
      ],
      "id": 14611,
      "original_title": "Ultimate Avengers 2",
      "original_language": "en",
      "title": "Ultimate Avengers 2",
      "backdrop_path": "/85NqI4WuCim6dZexmTPUAi13Af0.jpg",
      "popularity": 1.912805,
      "vote_count": 33,
      "video": false,
      "vote_average": 6.33
    },
    {
      "poster_path": "/we6igIU5gXVwuSL6M6pJP75TwEf.jpg",
      "adult": false,
      "overview": "When a nuclear missile was fired at Washington in 1945, Captain America managed to detonate it in the upper atmosphere. But then he fell miles into the icy depths of the North Atlantic, where he remained lost for over sixty years. But now, with the world facing the very same evil, Captain America must rise again as our last hope for survival.",
      "release_date": "2006-02-21",
      "genre_ids": [
        28,
        16,
        878
      ],
      "id": 14609,
      "original_title": "Ultimate Avengers",
      "original_language": "en",
      "title": "Ultimate Avengers",
      "backdrop_path": "/mZO4V0ALx15QTgWr4SaXYGT7i60.jpg",
      "popularity": 1.691503,
      "vote_count": 44,
      "video": false,
      "vote_average": 6.44
    },
    {
      "poster_path": "/cVg2esz4zheJo6iCA3FhkQtJ3NR.jpg",
      "adult": false,
      "overview": "A brilliant continuation of the saga, now in the city. The target of young patriots is a map held in the safe locker in the headquarters of secret police!",
      "release_date": "1968-06-06",
      "genre_ids": [
        28,
        12,
        10751
      ],
      "id": 65591,
      "original_title": "Novye Priklyucheniya Neulovimykh",
      "original_language": "en",
      "title": "The New Adventures of the Elusive Avengers",
      "backdrop_path": "/6ajw8PjpnelE6l28VZRB6PX4KM.jpg",
      "popularity": 1.00372,
      "vote_count": 3,
      "video": false,
      "vote_average": 3.67
    },
    {
      "poster_path": "/42oHwWmalovP2ihGdwi2GPgOU6n.jpg",
      "adult": false,
      "overview": "The famous story of the Shaolin Temple's betrayal by the White-Browed Hermit, and the subsequent revenge by Shaolin firebrand Fang Shih-yu, is the stuff of legend. It has been filmed many times by many directors, but few are remembered as fondly as this production. The potent combination of director Chang Cheh and international idol Alexander Fu Sheng caught lightning in a lens.",
      "release_date": "1976-06-18",
      "genre_ids": [
        28,
        10769
      ],
      "id": 109088,
      "original_title": "Fang Shih Yu yu Hu Hui Chien",
      "original_language": "zh",
      "title": "The Shaolin Avengers",
      "backdrop_path": "/cx3GroQGuwJGYfhD13iLyNMV9X8.jpg",
      "popularity": 1.180417,
      "vote_count": 4,
      "video": false,
      "vote_average": 4.63
    },
    {
      "poster_path": "/hKWIeFDfaTnar4zsLwAP8AktSma.jpg",
      "adult": false,
      "overview": "Horse race tipster and journalist Metcalfe is picked for the job of foreign correspondent in Norway when Hitler invades Poland. On the way to Norway his boat is attacked by a German U-Boat, however when he tells the navy about it they disbelief him and, to make matters worse, he is removed from his job. When German forces invade Norway, Metcalfe returns determined to uncover what is going on and stop the Germans in their tracks.",
      "release_date": "1942-06-08",
      "genre_ids": [
        18,
        10752
      ],
      "id": 64128,
      "original_title": "The Day Will Dawn",
      "original_language": "en",
      "title": "The Day Will Dawn",
      "backdrop_path": "/cd3VcJBzLJs3gjX0LpE1ZL7hHqs.jpg",
      "popularity": 1.000175,
      "vote_count": 0,
      "video": false,
      "vote_average": 0
    },
    {
      "poster_path": "/nTqwcAsxZyvp0ggSTWGcI3Qezrw.jpg",
      "adult": false,
      "overview": "When two acrobats are fired for fighting with punks in the audience, they go to live with an aunt who's being pressured to sell her house for a real estate development. The developer's nasty son, Lee Fu, decides to muscle the sale, and soon he's at war with the acrobats, plus their unlikely ally, an American named John who used to be Lee Fu's friend. The acrobats open a kung fu school, the scene of several battles with Lee Fu's thugs. A fight to the death, jail time, auntie's surprise decision, a budding acting career, a possessive girlfriend, a debilitating injury, a friendship that needs recalibrating, and Lee Fu's avenger are all in the mix before the end.",
      "release_date": "1979-03-15",
      "genre_ids": [
        28,
        18
      ],
      "id": 275663,
      "original_title": "The Lama Avenger",
      "original_language": "en",
      "title": "The Lama Avenger",
      "backdrop_path": null,
      "popularity": 1.032625,
      "vote_count": 0,
      "video": false,
      "vote_average": 0
    },
    {
      "poster_path": null,
      "adult": false,
      "overview": "An insider's look at the first year of an activist group known as the Lesbian Avengers.",
      "release_date": "1993-01-01",
      "genre_ids": [
        99
      ],
      "id": 377364,
      "original_title": "Lesbian Avengers Eat Fire Too",
      "original_language": "en",
      "title": "Lesbian Avengers Eat Fire Too",
      "backdrop_path": null,
      "popularity": 1.006075,
      "vote_count": 0,
      "video": false,
      "vote_average": 0
    },
    {
      "poster_path": "/2VRvIFsc7QI5nnn5YP7b7Jgx2Xr.jpg",
      "adult": false,
      "overview": "Crippled Avengers is a 1978 Shaw Brothers kung fu film directed by Chang Cheh and starring four members of the Venom Mob. It has been released in North America as Mortal Combat and Return of the 5 Deadly Venoms. The film follows a group of martial artists seeking revenge after being crippled by Tu Tin-To (Chen Kuan Tai), a martial arts master, and his son (Lu Feng).",
      "release_date": "1978-12-20",
      "genre_ids": [
        28,
        18,
        10769
      ],
      "id": 40081,
      "original_title": "Can que",
      "original_language": "en",
      "title": "Crippled Avengers",
      "backdrop_path": "/5nwuBYksiGkrACCVgq086L9zwWm.jpg",
      "popularity": 1.154824,
      "vote_count": 10,
      "video": false,
      "vote_average": 7.5
    },
    {
      "poster_path": "/11jaY0ZOIjR1UcCmZuC56KnMyLi.jpg",
      "adult": false,
      "overview": "Hercules, having agreed to restore justice to Mycenae, confronts evil Prince Myles. The villain is invested with power over giant bronze warriors by his mother Pasiphaë, a sorceress in Hades. Myles assassinates the king and abducts his cousin, Queen Ate, through whom he plans to inherit the throne. Although Zeus temporarily removes Hercules' strength for killing Eurystheus, an innocent man framed by Myles, the god restores his powers. Hercules then saves Ate and destroys Myles, Pasiphaë, and the giant warriors.",
      "release_date": "1964-01-30",
      "genre_ids": [
        12
      ],
      "id": 187745,
      "original_title": "Il trionfo di Ercole",
      "original_language": "it",
      "title": "Hercules vs. the Giant Warriors",
      "backdrop_path": null,
      "popularity": 1.000646,
      "vote_count": 1,
      "video": false,
      "vote_average": 7
    },
    {
      "poster_path": "/pMdTc3kYCD1869UX6cdYUT8Xe49.jpg",
      "adult": false,
      "overview": "Feature-length documentary about the rise of Marvel Studios and their films leading up to, and including, The Avengers.",
      "release_date": "2012-09-25",
      "genre_ids": [
        99
      ],
      "id": 161097,
      "original_title": "Marvel Studios: Building a Cinematic Universe",
      "original_language": "en",
      "title": "Marvel Studios: Building a Cinematic Universe",
      "backdrop_path": "/yeKT2gNFxHGbTT3Htj5PE9IerGJ.jpg",
      "popularity": 1.136598,
      "vote_count": 4,
      "video": false,
      "vote_average": 3.88
    }
  ],
  "total_results": 14,
  "total_pages": 1
}

# GET /search/tv
Cauta seriale.
Response example:
{
  "page": 1,
  "results": [
    {
      "poster_path": "/jIhL6mlT7AblhbHJgEoiBIOUVl1.jpg",
      "popularity": 29.780826,
      "id": 1399,
      "backdrop_path": "/mUkuc2wyV9dHLG0D0Loaw5pO2s8.jpg",
      "vote_average": 7.91,
      "overview": "Seven noble families fight for control of the mythical land of Westeros. Friction between the houses leads to full-scale war. All while a very ancient evil awakens in the farthest north. Amidst the war, a neglected military order of misfits, the Night's Watch, is all that stands between the realms of men and icy horrors beyond.",
      "first_air_date": "2011-04-17",
      "origin_country": [
        "US"
      ],
      "genre_ids": [
        10765,
        10759,
        18
      ],
      "original_language": "en",
      "vote_count": 1172,
      "name": "Game of Thrones",
      "original_name": "Game of Thrones"
    }
  ],
  "total_results": 1,
  "total_pages": 1
}

# GET /search/multi
Cauta multiple modele intr-un singur request(TV, movies, people).
Response example:
{
  "page": 1,
  "total_results": 1,
  "total_pages": 1,
  "results": [
    {
      "original_name": "How I Met Your Mother",
      "id": 1100,
      "media_type": "tv",
      "name": "How I Met Your Mother",
      "vote_count": 931,
      "vote_average": 7.48,
      "poster_path": "/izncB6dCLV7LBQ5MsOPyMx9mUDa.jpg",
      "first_air_date": "2005-09-19",
      "popularity": 23.199,
      "genre_ids": [
        35
      ],
      "original_language": "en",
      "backdrop_path": "/wfe7Xf7tc0zmnkoNyN3xor0xR8m.jpg",
      "overview": "How I Met Your Mother is an American sitcom that originally aired on CBS from September 19, 2005, to March 31, 2014. The series follows the main character, Ted Mosby, and his group of friends in Manhattan. As a framing device, Ted, in the year 2030, recounts to his son and daughter the events that led to his meeting their mother.",
      "origin_country": [
        "US"
      ]
    }
  ]
}

# GET /tv/{tv_id}
Returneaza detaliile unui serial cautat dupa id.
Response example:
{
  "backdrop_path": "/gX8SYlnL9ZznfZwEH4KJUePBFUM.jpg",
  "created_by": [
    {
      "id": 9813,
      "credit_id": "5256c8c219c2956ff604858a",
      "name": "David Benioff",
      "gender": 2,
      "profile_path": "/8CuuNIKMzMUL1NKOPv9AqEwM7og.jpg"
    },
    {
      "id": 228068,
      "credit_id": "552e611e9251413fea000901",
      "name": "D. B. Weiss",
      "gender": 2,
      "profile_path": "/caUAtilEe06OwOjoQY3B7BgpARi.jpg"
    }
  ],
  "episode_run_time": [
    60
  ],
  "first_air_date": "2011-04-17",
  "genres": [
    {
      "id": 10765,
      "name": "Sci-Fi & Fantasy"
    },
    {
      "id": 18,
      "name": "Drama"
    },
    {
      "id": 10759,
      "name": "Action & Adventure"
    }
  ],
  "homepage": "http://www.hbo.com/game-of-thrones",
  "id": 1399,
  "in_production": true,
  "languages": [
    "es",
    "en",
    "de"
  ],
  "last_air_date": "2017-08-27",
  "last_episode_to_air": {
    "air_date": "2017-08-27",
    "episode_number": 7,
    "id": 1340528,
    "name": "The Dragon and the Wolf",
    "overview": "A meeting is held in King's Landing. Problems arise in the North.",
    "production_code": "707",
    "season_number": 7,
    "show_id": 1399,
    "still_path": "/jLe9VcbGRDUJeuM8IwB7VX4GDRg.jpg",
    "vote_average": 9.145,
    "vote_count": 31
  },
  "name": "Game of Thrones",
  "next_episode_to_air": null,
  "networks": [
    {
      "name": "HBO",
      "id": 49,
      "logo_path": "/tuomPhY2UtuPTqqFnKMVHvSb724.png",
      "origin_country": "US"
    }
  ],
  "number_of_episodes": 67,
  "number_of_seasons": 7,
  "origin_country": [
    "US"
  ],
  "original_language": "en",
  "original_name": "Game of Thrones",
  "overview": "Seven noble families fight for control of the mythical land of Westeros. Friction between the houses leads to full-scale war. All while a very ancient evil awakens in the farthest north. Amidst the war, a neglected military order of misfits, the Night's Watch, is all that stands between the realms of men and icy horrors beyond.",
  "popularity": 53.516,
  "poster_path": "/gwPSoYUHAKmdyVywgLpKKA4BjRr.jpg",
  "production_companies": [
    {
      "id": 76043,
      "logo_path": "/9RO2vbQ67otPrBLXCaC8UMp3Qat.png",
      "name": "Revolution Sun Studios",
      "origin_country": "US"
    },
    {
      "id": 3268,
      "logo_path": "/tuomPhY2UtuPTqqFnKMVHvSb724.png",
      "name": "HBO",
      "origin_country": "US"
    },
    {
      "id": 12525,
      "logo_path": null,
      "name": "Television 360",
      "origin_country": ""
    },
    {
      "id": 5820,
      "logo_path": null,
      "name": "Generator Entertainment",
      "origin_country": ""
    },
    {
      "id": 12526,
      "logo_path": null,
      "name": "Bighead Littlehead",
      "origin_country": ""
    }
  ],
  "seasons": [
    {
      "air_date": "2010-12-05",
      "episode_count": 14,
      "id": 3627,
      "name": "Specials",
      "overview": "",
      "poster_path": "/kMTcwNRfFKCZ0O2OaBZS0nZ2AIe.jpg",
      "season_number": 0
    },
    {
      "air_date": "2011-04-17",
      "episode_count": 10,
      "id": 3624,
      "name": "Season 1",
      "overview": "Trouble is brewing in the Seven Kingdoms of Westeros. For the driven inhabitants of this visionary world, control of Westeros' Iron Throne holds the lure of great power. But in a land where the seasons can last a lifetime, winter is coming...and beyond the Great Wall that protects them, an ancient evil has returned. In Season One, the story centers on three primary areas: the Stark and the Lannister families, whose designs on controlling the throne threaten a tenuous peace; the dragon princess Daenerys, heir to the former dynasty, who waits just over the Narrow Sea with her malevolent brother Viserys; and the Great Wall--a massive barrier of ice where a forgotten danger is stirring.",
      "poster_path": "/zwaj4egrhnXOBIit1tyb4Sbt3KP.jpg",
      "season_number": 1
    },
    {
      "air_date": "2012-04-01",
      "episode_count": 10,
      "id": 3625,
      "name": "Season 2",
      "overview": "The cold winds of winter are rising in Westeros...war is coming...and five kings continue their savage quest for control of the all-powerful Iron Throne. With winter fast approaching, the coveted Iron Throne is occupied by the cruel Joffrey, counseled by his conniving mother Cersei and uncle Tyrion. But the Lannister hold on the Throne is under assault on many fronts. Meanwhile, a new leader is rising among the wildings outside the Great Wall, adding new perils for Jon Snow and the order of the Night's Watch.",
      "poster_path": "/5tuhCkqPOT20XPwwi9NhFnC1g9R.jpg",
      "season_number": 2
    },
    {
      "air_date": "2013-03-31",
      "episode_count": 10,
      "id": 3626,
      "name": "Season 3",
      "overview": "Duplicity and treachery...nobility and honor...conquest and triumph...and, of course, dragons. In Season 3, family and loyalty are the overarching themes as many critical storylines from the first two seasons come to a brutal head. Meanwhile, the Lannisters maintain their hold on King's Landing, though stirrings in the North threaten to alter the balance of power; Robb Stark, King of the North, faces a major calamity as he tries to build on his victories; a massive army of wildlings led by Mance Rayder march for the Wall; and Daenerys Targaryen--reunited with her dragons--attempts to raise an army in her quest for the Iron Throne.",
      "poster_path": "/qYxRy8ZYCo2yTz7HsO6J1HWtPsY.jpg",
      "season_number": 3
    },
    {
      "air_date": "2014-04-06",
      "episode_count": 10,
      "id": 3628,
      "name": "Season 4",
      "overview": "The War of the Five Kings is drawing to a close, but new intrigues and plots are in motion, and the surviving factions must contend with enemies not only outside their ranks, but within.",
      "poster_path": "/dniQ7zw3mbLJkd1U0gdFEh4b24O.jpg",
      "season_number": 4
    },
    {
      "air_date": "2015-04-12",
      "episode_count": 10,
      "id": 62090,
      "name": "Season 5",
      "overview": "The War of the Five Kings, once thought to be drawing to a close, is instead entering a new and more chaotic phase. Westeros is on the brink of collapse, and many are seizing what they can while the realm implodes, like a corpse making a feast for crows.",
      "poster_path": "/527sR9hNDcgVDKNUE3QYra95vP5.jpg",
      "season_number": 5
    },
    {
      "air_date": "2016-04-24",
      "episode_count": 10,
      "id": 71881,
      "name": "Season 6",
      "overview": "Following the shocking developments at the conclusion of season five, survivors from all parts of Westeros and Essos regroup to press forward, inexorably, towards their uncertain individual fates. Familiar faces will forge new alliances to bolster their strategic chances at survival, while new characters will emerge to challenge the balance of power in the east, west, north and south.",
      "poster_path": "/zvYrzLMfPIenxoq2jFY4eExbRv8.jpg",
      "season_number": 6
    },
    {
      "air_date": "2017-07-16",
      "episode_count": 7,
      "id": 81266,
      "name": "Season 7",
      "overview": "The long winter is here. And with it comes a convergence of armies and attitudes that have been brewing for years.",
      "poster_path": "/3dqzU3F3dZpAripEx9kRnijXbOj.jpg",
      "season_number": 7
    }
  ],
  "status": "Returning Series",
  "type": "Scripted",
  "vote_average": 8.2,
  "vote_count": 4682
}

# GET /tv/{tv_id}/season/{season_number}
Returneaza detaliile unui sezon al unui serial cautat dupa id.
Response example:
{
  "_id": "593b214092514105b7001a3e",
  "air_date": "2006-06-12",
  "episodes": [
    {
      "air_date": "2006-06-12",
      "episode_number": 1,
      "id": 1326563,
      "name": "A Day in the Life",
      "overview": "",
      "production_code": null,
      "season_number": 1,
      "show_id": 170,
      "still_path": null,
      "vote_average": 0,
      "vote_count": 0,
      "crew": [],
      "guest_stars": []
    },
    {
      "air_date": "2006-06-19",
      "episode_number": 2,
      "id": 1326609,
      "name": "Lady & the Tiger",
      "overview": "",
      "production_code": null,
      "season_number": 1,
      "show_id": 170,
      "still_path": null,
      "vote_average": 0,
      "vote_count": 0,
      "crew": [],
      "guest_stars": []
    },
    {
      "air_date": "2006-06-26",
      "episode_number": 3,
      "id": 1326610,
      "name": "The Living Dead",
      "overview": "",
      "production_code": null,
      "season_number": 1,
      "show_id": 170,
      "still_path": null,
      "vote_average": 0,
      "vote_count": 0,
      "crew": [],
      "guest_stars": []
    },
    {
      "air_date": "2006-07-03",
      "episode_number": 4,
      "id": 1326611,
      "name": "Fog",
      "overview": "",
      "production_code": null,
      "season_number": 1,
      "show_id": 170,
      "still_path": null,
      "vote_average": 0,
      "vote_count": 0,
      "crew": [],
      "guest_stars": []
    },
    {
      "air_date": "2006-07-10",
      "episode_number": 5,
      "id": 1326612,
      "name": "Family",
      "overview": "",
      "production_code": null,
      "season_number": 1,
      "show_id": 170,
      "still_path": null,
      "vote_average": 0,
      "vote_count": 0,
      "crew": [],
      "guest_stars": []
    },
    {
      "air_date": "2006-07-17",
      "episode_number": 6,
      "id": 1326613,
      "name": "Cowboys and Independents",
      "overview": "",
      "production_code": null,
      "season_number": 1,
      "show_id": 170,
      "still_path": null,
      "vote_average": 0,
      "vote_count": 0,
      "crew": [],
      "guest_stars": []
    },
    {
      "air_date": "2006-07-24",
      "episode_number": 7,
      "id": 1326614,
      "name": "Who Do You Trust?",
      "overview": "",
      "production_code": null,
      "season_number": 1,
      "show_id": 170,
      "still_path": null,
      "vote_average": 0,
      "vote_count": 0,
      "crew": [],
      "guest_stars": []
    },
    {
      "air_date": "2006-07-31",
      "episode_number": 8,
      "id": 1326615,
      "name": "Secrets & Lies",
      "overview": "",
      "production_code": null,
      "season_number": 1,
      "show_id": 170,
      "still_path": null,
      "vote_average": 0,
      "vote_count": 0,
      "crew": [],
      "guest_stars": []
    },
    {
      "air_date": "2006-08-07",
      "episode_number": 9,
      "id": 1326616,
      "name": "Triage",
      "overview": "",
      "production_code": null,
      "season_number": 1,
      "show_id": 170,
      "still_path": null,
      "vote_average": 0,
      "vote_count": 0,
      "crew": [],
      "guest_stars": []
    },
    {
      "air_date": "2006-08-14",
      "episode_number": 10,
      "id": 1326617,
      "name": "A Shock to the System",
      "overview": "",
      "production_code": null,
      "season_number": 1,
      "show_id": 170,
      "still_path": null,
      "vote_average": 0,
      "vote_count": 0,
      "crew": [],
      "guest_stars": []
    },
    {
      "air_date": "2006-08-21",
      "episode_number": 11,
      "id": 1326618,
      "name": "Code Zero",
      "overview": "",
      "production_code": null,
      "season_number": 1,
      "show_id": 170,
      "still_path": null,
      "vote_average": 0,
      "vote_count": 0,
      "crew": [],
      "guest_stars": []
    },
    {
      "air_date": "2006-08-28",
      "episode_number": 12,
      "id": 1326619,
      "name": "Tango",
      "overview": "",
      "production_code": null,
      "season_number": 1,
      "show_id": 170,
      "still_path": null,
      "vote_average": 0,
      "vote_count": 0,
      "crew": [],
      "guest_stars": []
    },
    {
      "air_date": "2006-09-04",
      "episode_number": 13,
      "id": 1326620,
      "name": "Crossroads",
      "overview": "",
      "production_code": null,
      "season_number": 1,
      "show_id": 170,
      "still_path": null,
      "vote_average": 0,
      "vote_count": 0,
      "crew": [],
      "guest_stars": []
    }
  ],
  "name": "Season 1",
  "overview": "",
  "id": 89234,
  "poster_path": null,
  "season_number": 1
}

# GET /collection/{collection_id}
Returneaza detaliile unei colectii cautate prin id.
Response example:
{
  "id": 10,
  "name": "Star Wars Collection",
  "overview": "An epic space opera theatrical film series created by George Lucas.\r The first film in the franchise was originally released on May 25, 1977, by 20th Century Fox, and became a worldwide pop culture  phenomenon, followed by two sequels, released at three-year intervals. Sixteen years after the release of the trilogy's final film, the first in a new prequel trilogy of films was released, again released at three-year intervals, with the final film released on May 19, 2005.",
  "poster_path": null,
  "backdrop_path": "/shDFE0i7josMt9IKXdYpnMFFgNV.jpg",
  "parts": [
    {
      "adult": false,
      "backdrop_path": null,
      "genre_ids": [
        12
      ],
      "id": 11,
      "original_language": "en",
      "original_title": "Star Wars: Episode IV - A New Hope",
      "overview": "Princess Leia is captured and held hostage by the evil Imperial forces in their effort to take over the galactic Empire. Venturesome Luke Skywalker and dashing captain Han Solo team together with the loveable robot duo R2-D2 and C-3PO to rescue the beautiful princess and restore peace and justice in the Empire.",
      "release_date": "1977-05-23",
      "poster_path": "/AbJBXaVPrdXROwb8KmgWUPU2XJX.jpg",
      "popularity": 1.411624,
      "title": "Star Wars: Episode IV - A New Hope",
      "video": false,
      "vote_average": 7.7,
      "vote_count": 2472
    }
  ]
}



#### Task-uri:
- [x] Introducere
- [x] Interfețe aplicație
- [x] API REST

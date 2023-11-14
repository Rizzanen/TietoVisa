var musiikkiKysymykset = [
  {
    kysymys: "Missä pidetään seuraavat Eurovisiot?",
    a: "Englanti",
    b: "Saksa",
    c: "Italia",
    d: "Puola",
    oikein: "a",
  },
  {
    kysymys: "Kuka on maailman striimatuin artisti Spotifyssa?",
    a: "Ed Sheeran",
    b: "The Weekend",
    c: "Drake",
    d: "Taylor Swift",
    oikein: "c",
  },
  {
    kysymys: "Kenellä on maailman myydyin albumi?",
    a: "Michael Jackson",
    b: "Beatles",
    c: "tippa-T",
    d: "AC/DC",
    oikein: "a",
  },
  {
    kysymys: "Minä vuonna Suomi voitti euroviisut?",
    a: "2001",
    b: "2006",
    c: "2009",
    d: "2011",
    oikein: "b",
  },
  {
    kysymys: "Minä vuonna Eminem syntyi?",
    a: "1970",
    b: "1972",
    c: "1975",
    d: "1980",
    oikein: "b",
  },
  {
    kysymys: "Minkä maalainen Spotify on?",
    a: "USA",
    b: "Canada",
    c: "Norja",
    d: "Ruotsi",
    oikein: "d",
  },
  {
    kysymys: "Minä vuonna Daruden kappale sandstorm julkaistiin?",
    a: "1998",
    b: "1999",
    c: "2000",
    d: "2001",
    oikein: "b",
  },
  {
    kysymys: "Missä kaupungissa cheek on syntynyt?",
    a: "Vantaa",
    b: "Helsinki",
    c: "Espoo",
    d: "Lahti",
    oikein: "a",
  },
  {
    kysymys: "Kuka voitti suomen RAP SM kisat vuonna 2022?",
    a: "Jokrates",
    b: "Ahti",
    c: "Solonen",
    d: "Varomato",
    oikein: "d",
  },
  {
    kysymys: "Minä vuonna Juice Leskinen kuoli?",
    a: "1998",
    b: "2003",
    c: "2006",
    d: "2010",
    oikein: "c",
  },
];

// globalit muuttujat
var pisteet = 0;
var questionNumber = 0;
var answers = [];
var randomizedNumbers = [];

//lasketaan pisteet
function points() {
  for (i = 0; i < randomizedNumbers.length - 1; i++) {
    if (answers[i] === musiikkiKysymykset[randomizedNumbers[i]].oikein) {
      pisteet = parseInt(pisteet) + 1;
    }
  }
  return pisteet;
}

function onClick() {
  var vastaukset = document.getElementsByTagName("input");

  for (i = 0; i < vastaukset.length; i++) {
    if ((vastaukset[i].type = "radio")) {
      if (vastaukset[i].checked) {
        answers.push(vastaukset[i].id);
      }
    }
  }

  // valitaan randomilla kysymys
  var randomize = Math.floor(Math.random() * musiikkiKysymykset.length);
  //katsotaan ettei samaa kysymystä ole jo kysytty.
  while (randomizedNumbers.includes(randomize) == true) {
    randomize = Math.floor(Math.random() * musiikkiKysymykset.length);
  }

  //tyhjennetään vastauskentät
  emptyRadio();

  //otetaan randomize muuttujan arvot talteen arrayhyn
  randomizedNumbers.push(randomize);

  //valitaan kysymys
  pickQuestion(randomize);
}

function pickQuestion(perkele) {
  // tyhjennetään annettavat arvot, jotta saadaan uudet tilalle, kun siirrytään uuteen kysymykseen.
  document.getElementById("kysymys").innerHTML = "";
  document.getElementById("aText").innerHTML = "";
  document.getElementById("bText").innerHTML = "";
  document.getElementById("cText").innerHTML = "";
  document.getElementById("dText").innerHTML = "";
  document.getElementById("questionCounter").innerHTML = "";

  //valitun kysymyksen ja sen vastaus vaihtoehtojen näyttö
  document.getElementById("kysymys").innerHTML +=
    musiikkiKysymykset[perkele].kysymys;

  document.getElementById("aText").innerHTML += musiikkiKysymykset[perkele].a;

  document.getElementById("bText").innerHTML += musiikkiKysymykset[perkele].b;

  document.getElementById("cText").innerHTML += musiikkiKysymykset[perkele].c;

  document.getElementById("dText").innerHTML += musiikkiKysymykset[perkele].d;

  //kysymysnumeron kasvatus ja näyttö
  questionNumber = parseInt(questionNumber) + 1;

  document.getElementById("questionCounter").innerHTML =
    " Kysymys " + questionNumber;

  //Kerrotaan pisteet kun 5 kysymystä on käyty läpi
  if (questionNumber === 6) {
    var pojot = points();
    if (pojot <= 2) {
      document.getElementById("quiz").innerHTML =
        "Sait " +
        pojot +
        "/5 oikein. Pystyt kyllä parempaan!<br> <br><button id='button'onclick='RefreshPage()'>Tee uudelleen</button>";
    } else if (pojot <= 4) {
      document.getElementById("quiz").innerHTML =
        "Sait " +
        pojot +
        "/5 oikein. Hyvää työtä! <br> <br> <button id='button'onclick='RefreshPage()'>Tee uudelleen</button>";
    } else {
      document.getElementById("quiz").innerHTML =
        "Sait " +
        pojot +
        "/5 oikein. Täydellinen suoritus! <br><br><button id='button'onclick='RefreshPage()'>Tee uudelleen</button>";
    }
  }
}
//tyhjentää vastaus kentät
function emptyRadio() {
  document.getElementById("a").checked = false;
  document.getElementById("b").checked = false;
  document.getElementById("c").checked = false;
  document.getElementById("d").checked = false;
}

function RefreshPage() {
  location.reload();
}

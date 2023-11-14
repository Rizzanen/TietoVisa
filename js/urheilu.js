var urheiluKysymykset = [
  {
    kysymys: "Missä maassa vuoden 2022 Jalkapallon MM-kisat pidetään?",
    a: "Saksa",
    b: "Imatra",
    c: "Japani",
    d: "Qatar",
    oikein: "d",
  },
  {
    kysymys: "Kuka on maailman paras jalkapallon pelaaja?",
    a: "Litmanen",
    b: "Speed",
    c: "Yahye",
    d: "Messi",
    oikein: "d",
  },
  {
    kysymys: "Kenellä on maailman nopein 100m juoksu?",
    a: "Usain Bolt",
    b: "Lukas",
    c: "Tyson Gay",
    d: "Yohan Blake",
    oikein: "a",
  },
  {
    kysymys:
      "Kuinka monta MM-kisa mitalia Suomen jääkiekkomaajoukkueella on yhteensä?",
    a: "14",
    b: "16",
    c: "18",
    d: "13",
    oikein: "b",
  },
  {
    kysymys: "Montako mestaruutta Kobe Bryantilla on?",
    a: "2",
    b: "7",
    c: "5",
    d: "1",
    oikein: "c",
  },
  {
    kysymys: "Missä joukkueessa Lauri Markkanen pelaa tällä hetkellä?",
    a: "Golden State Warriors",
    b: "Los Angeles Lakers",
    c: "Chicago Bulls",
    d: "Utah Jazz",
    oikein: "d",
  },
  {
    kysymys: "Mikä on Jari Litmasen kasvatti seura?",
    a: "TPS",
    b: "Lahden Reipas",
    c: "Tampereen Ilves",
    d: "HJK",
    oikein: "b",
  },
];

// globalit muuttujat
var pisteet = 0;
var questionNumber = 0;
var answers = [];
var randomizedNumbers = [];

//lasketaan pisteet
function points() {
  for (var i = 0; i < randomizedNumbers.length - 1; i++) {
    if (answers[i] === urheiluKysymykset[randomizedNumbers[i]].oikein) {
      pisteet = parseInt(pisteet) + 1;
    }
  }
  return pisteet;
}

function onClick() {
  var vastaukset = document.getElementsByTagName("input");

  for (var i = 0; i < vastaukset.length; i++) {
    if (vastaukset[i].type == "radio") {
      if (vastaukset[i].checked) {
        answers.push(vastaukset[i].id);
      }
    }
  }

  // valitaan randomilla kysymys
  var randomize = Math.floor(Math.random() * urheiluKysymykset.length);
  //katsotaan ettei samaa kysymystä ole jo kysytty.
  while (randomizedNumbers.includes(randomize) == true) {
    randomize = Math.floor(Math.random() * urheiluKysymykset.length);
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
    urheiluKysymykset[perkele].kysymys;

  document.getElementById("aText").innerHTML += urheiluKysymykset[perkele].a;

  document.getElementById("bText").innerHTML += urheiluKysymykset[perkele].b;

  document.getElementById("cText").innerHTML += urheiluKysymykset[perkele].c;

  document.getElementById("dText").innerHTML += urheiluKysymykset[perkele].d;

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
        "/5 oikein. Pystyt kyllä parempaan!<br> <br> <button id='button' onclick='RefreshPage()'>Tee uudelleen</button>";
    } else if (pojot <= 4) {
      document.getElementById("quiz").innerHTML =
        "Sait " +
        pojot +
        "/5 oikein. Hyvää työtä! <br> <br> <button id='button'onclick='RefreshPage()'>Tee uudelleen</button>";
    } else {
      document.getElementById("quiz").innerHTML =
        "Sait " +
        pojot +
        "/5 oikein. Täydellinen suoritus! <br> <br><button id='button'onclick='RefreshPage()'>Tee uudelleen</button>";
    }
  }
}

function emptyRadio() {
  //tyhjentää vastaus kentät
  document.getElementById("a").checked = false;
  document.getElementById("b").checked = false;
  document.getElementById("c").checked = false;
  document.getElementById("d").checked = false;
}

function RefreshPage() {
  // päivittää sivun uudelleen
  location.reload();
}

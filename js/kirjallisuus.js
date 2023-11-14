//kirjallisuus osion kysymykset//
var kirjallisuusKysymykset = [
  {
    kysymys: "Mikä on maailman myydyin kirja?",
    a: "Harry Potter ja viisasten kivi",
    b: "Raamattu",
    c: "Taru Sormusten herrasta: sormusten ritarit",
    d: "Tubettajan käsikirja",
    oikein: "b",
  },
  {
    kysymys: "Kuka kirjoitti Harry Potter kirjat?",
    a: "J.K Rowling",
    b: "Ilkka Remes",
    c: "J.R.R Tolkien",
    d: "Mika Waltari",
    oikein: "a",
  },
  {
    kysymys: "Kuka kirjoitti Taru sormusten herrasta kirjat?",
    a: "J.K Rowling",
    b: "Ilkka Remes",
    c: "J.R.R Tolkien",
    d: "Mika Waltari",
    oikein: "c",
  },
  {
    kysymys: "Kuka kirjoitti kirjan Seitsemän veljestä?",
    a: "Aleksis Kivi",
    b: "Ilkka Remes",
    c: "Mika Waltari",
    d: "Tuomas Kyrö",
    oikein: "a",
  },
  {
    kysymys: "Kuka kirjoitti Mielensä pahoittaja kirjasarjan?",
    a: "Tuomas Kyrö",
    b: "Ilkka Remes",
    c: "Mika Waltari",
    d: "Elias Lönnrot",
    oikein: "a",
  },
  {
    kysymys: "Montako sivua on maailman paksuimmassa kirjassa?",
    a: "4032",
    b: "2085",
    c: "8012",
    d: "10000",
    oikein: "d",
  },
  {
    kysymys: "Kuka kirjoitti kalevalan?",
    a: "Elias Lönnrot",
    b: "Aleksis Kivi",
    c: "Mika Waltari",
    d: "Ilkka Remes",
    oikein: "a",
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
    if (answers[i] === kirjallisuusKysymykset[randomizedNumbers[i]].oikein) {
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
  var randomize = Math.floor(Math.random() * kirjallisuusKysymykset.length);
  //katsotaan ettei samaa kysymystä ole jo kysytty.
  while (randomizedNumbers.includes(randomize) == true) {
    randomize = Math.floor(Math.random() * kirjallisuusKysymykset.length);
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
    kirjallisuusKysymykset[perkele].kysymys;

  document.getElementById("aText").innerHTML +=
    kirjallisuusKysymykset[perkele].a;

  document.getElementById("bText").innerHTML +=
    kirjallisuusKysymykset[perkele].b;

  document.getElementById("cText").innerHTML +=
    kirjallisuusKysymykset[perkele].c;

  document.getElementById("dText").innerHTML +=
    kirjallisuusKysymykset[perkele].d;

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
        "/5 oikein. Hyvää työtä! <br> <br><button id='button'onclick='RefreshPage()'>Tee uudelleen</button>";
    } else {
      document.getElementById("quiz").innerHTML =
        "Sait " +
        pojot +
        "/5 oikein. Täydellinen suoritus! <br><br> <button id='button'onclick='RefreshPage()'>Tee uudelleen</button>";
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

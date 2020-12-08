// MILESTONE 1
// La prima cosa fondamentale è sapere quali libri abbiamo in libreria. Quindi mostriamoli sulla pagina.
// [IMPORTANTE] In questa fase, non focalizziamoci sul layout (quello possiamo farlo in un secondo momento). Limitiamoci a stamparli in una ul o in dei paragrafi con degli hr come separatori.

// Abbiamo la lista di libri, perfetto!
// Proviamo ad aggiungere manualmente un nuovo libro nella libreria.

// I libri cominciano ad essere un bel po'. Abbiamo bisogno di poter effettuare una ricerca!
// Creiamo un input in cui poter inserire il nome di un autore. Al click su un pulsante "Cerca", andiamo a filtrare i libri da visualizzare.



$(document).ready(
  function() {


    const books = [
    	{
    		title: "Il vecchio e il mare",
    		author: "Ernest Hemingway",
    		year: 1951
    	},
    	{
    		title: "La forma dell'acqua",
    		author: "Andrea Camilleri",
    		year: 1994
    	},
      {
        title: "Addio alle armi",
        author: "Ernest Hemingway",
        year: 1929
      },
    	{
    		title: "Elogio della follia",
    		author: "Henri Laborit",
    		year: 1976
    	},
    	{
    		title: "La camera azzurra",
    		author: "George Simenon",
    		year: 1964
    	}
    ]
    const library = $(".library");
    const search = $("#search");
    const input = $("input");


    const newBook = 	{
    		title: "Qualcuno con cui correre",
    		author: "David Grossman",
    		year: 2008
    	};

    pushBooks(books, newBook);
    printBook(books, library);

    search.click(
      function() {
        library.html("");
        books.forEach(
          (element) => {
            const {title, author, year} = element;
            if(input.val() == element.author){
              library.append(` <ul class="flex_list">
                <li> <input class= "checkbox" type="checkbox"  name=""
                 checked>${title}</li>
                <li>${author}</li>
                <li>${year}</li>
                </ul>
                `)

            }
        });

      }
    );

  }
);


function printBook (array, container) {

  array.forEach(
    (element) => {
      const {title, author, year} = element;
      container.append(` <ul class="flex_list">
        <li> <input class= "checkbox" type="checkbox"  name=""
         checked>${title}</li>
        <li>${author}</li>
        <li>${year}</li>
        </ul>
        `)
  });

}

function pushBooks (array, obj) {
    array.push(obj);
};

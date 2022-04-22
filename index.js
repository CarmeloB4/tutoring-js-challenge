// Prima di tutto occorre fare il fetch dei dati da questa api: "https://api.imgflip.com/get_memes"
// Stai attento ad i dati che ti arrivano, ricorda che a noi servono soltanto i meme

// Dobbiamo creare una funzione che, crei l'elemento ul e li, inoltre in ogni li devono essere presenti un tag p e un tag img
// I data della card (quindi quelli dentro il tag li), devono esseri i primi 10 oggetti dentro l'array memes (che ne contiene 100)
// Nel tag p trovermo il nome del meme, nel tag img invece l'indirizzo url

// Ricordati che tutto deve essere chiamato quando facciamo l'onload della pagina (occhio a lavorare in asincrono)

let data = null;
const ul = document.createElement("ul");

window.onload = async () => {
  data = await fetchData;
  this.createList(data);
};

const fetchData = fetch("https://api.imgflip.com/get_memes")
  .then((response) => response.json())
  .then((data) => data.data);

function createList(memeData) {
  const memes = memeData.memes.slice(0, 10);
  document.getElementById("card-list").appendChild(ul);
  memes.forEach(renderCard);
}

function renderCard(data) {
  const li = document.createElement("li");
  const p = document.createElement("p");
  const img = document.createElement("img");

  ul.appendChild(li);

  p.innerHTML = data.name;
  img.src = data.url;

  li.appendChild(p);
  li.appendChild(img);
}

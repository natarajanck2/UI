const URL = "https://api.dictionaryapi.dev/api/v2/entries/en/";

const input = document.getElementById("search");
const search = document.querySelector(".search");
const meaning = document.querySelector(".meaning");
const example = document.querySelector(".example");
const pronounce = document.querySelector(".pronounce");
const audio = document.querySelector("#prounceAudio");
const playAudio = document.getElementById("playAudio");

search.addEventListener("click", () => {
  let value = input.value;
  if (value !== "") {
    fetch(`${URL}${value}`)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        console.log(res[0]);

        pronounce.innerText = res[0].word;

        meaning.innerText = JSON.stringify(res[0].meanings[0].partOfSpeech);
        example.innerText = res[0].meanings[0].definitions[0].definition;

        audio.setAttribute("src", `${res[0].phonetics[0].audio}`);

        console.log(audio);
      });
  }
});

playAudio.addEventListener("click", () => {
  audio.play();
});

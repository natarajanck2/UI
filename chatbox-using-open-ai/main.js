const chatLi = document.querySelector(".chat");

const textInput = document.getElementById("chatInput");
const sendBtn = document.getElementById("sendBtn");

const handleChat = () => {
  const msg = textInput.value.trim();

  if (!msg) return;

  textInput.value = "";

  //   const obj = {};

  //   fetch(API_URL, obj)
  //     .then((res) => res.json())
  //     .then((res) => {
  //       console.log(res);
  //     });
};

sendBtn.addEventListener("click", () => {
  handleChat();
});

// 🌸 Відкрити сюрприз
function showSurprise() {
  document.getElementById('surprise').classList.remove('hidden');
  alert('Кохаю тебе 💘');
}

// 🐵 Масив кнопок з мемами
const funnyImages = [
  { text: "што ета за пакємон?, ета міланаааа", url: "https://i.pinimg.com/736x/25/63/ab/2563abd99a6453e85cd7ea937f4bac44.jpg" },
  { text: "женщінс шушукатса, тіпа іспанка(нє)", url: "https://i.pinimg.com/736x/40/c4/62/40c462a68e8ab6553349d0703dcbd1bd.jpg" },
  { text: "крутая така женщіна", url: "https://i.pinimg.com/736x/46/c8/3c/46c83cd81ee85051d108410049d51e29.jpg" },
  { text: "ми гатови до пабєгушек до Карєї", url: "https://i.pinimg.com/736x/71/40/58/714058f0438e7c39f34e6394fda2e069.jpg" },
  { text: "сама красіві жінка в світі", url: "https://i.pinimg.com/736x/87/0c/af/870cafe5135982d6dc364d2f2a1674b9.jpg" },
  { text: "мая сіллі вумен", url: "https://i.pinimg.com/736x/a1/af/06/a1af06287159f991f3fc6e9e0c7eb499.jpg" },
  { text: "мілана б'ється", url: "https://i.pinimg.com/1200x/fd/8f/c5/fd8fc5280437090d5df7612c4c01cb35.jpg" },
  { text: "фотка з родіни", url: "https://i.pinimg.com/736x/af/fa/21/affa21805dbc3e63b5d21c81652393c5.jpg" },
  { text: "заскамив мамонта", url: "https://i.pinimg.com/1200x/20/1a/f9/201af9d730abbb306561f5b7ff094d85.jpg" },
  { text: "майо утра начінаєтса с тібя", url: "https://i.pinimg.com/736x/41/b1/d8/41b1d8088a81750b1277c704319c1e63.jpg" },
  { text: "мая бейба кожну сікунду", url: "https://i.pinimg.com/1200x/38/a8/bc/38a8bcf736795641dc49a558ec0f00c9.jpg" },
  { text: "я і мая генгста", url: "https://i.pinimg.com/1200x/5d/c3/e8/5dc3e8cf81961596765381217ba55694.jpg" },
  { text: "мілана ким ти хотів бути в дитинстві? мілана:", url: "https://i.pinimg.com/736x/4c/54/cf/4c54cfa32dbfbedb8e6e3931e96c25eb.jpg" },
  { text: "мая на дебатах", url: "https://i.pinimg.com/736x/2a/4b/ef/2a4bef8fc4831fa7759f5506aca90f6e.jpg" },
  { text: "ми форевер!!", url: "https://i.pinimg.com/736x/90/1c/96/901c9618a20ad335ca5fb9449581d455.jpg" }
];

// 🧡 Генерація кнопок
const buttonsContainer = document.getElementById('buttons-container');
funnyImages.forEach((item) => {
  const btn = document.createElement('button');
  btn.textContent = item.text;
  btn.onclick = () => addFunnyImage(item.url);
  buttonsContainer.appendChild(btn);
});

// 🖼️ Додавання картинки на екран
function addFunnyImage(url) {
  const container = document.getElementById('funny-container');

  const img = document.createElement('img');
  img.src = url;
  img.classList.add('funny-img');

  // Рандомна позиція
  const maxX = container.clientWidth - 200;
  const maxY = container.clientHeight - 200;
  const randomX = Math.max(0, Math.floor(Math.random() * maxX));
  const randomY = Math.max(0, Math.floor(Math.random() * maxY));

  img.style.left = `${randomX}px`;
  img.style.top = `${randomY}px`;

  container.appendChild(img);
}

// 🧼 Очистити всі картинки
function clearImages() {
  const container = document.getElementById('funny-container');
  container.innerHTML = '';
}

// 🐒 Бібізякові жарти
const jokes = [
  "Бібізяка ваєвала, а ти какашка 💩",
  "Якщо хтось скаже, що ти не бібізяка — він просто ревнує 😎",
  "Кохаю свою бібізяку навіть коли вона кусається 🐒💋 (а мілана кусаааається 😤)",
  "Якщо тебе обійняти, можна отримати +100 до щастя, але ти какулька така 🫢",
  "Ти офіційно самі какашка бібізянка 🎓🐵",
];

// ✨ Показ випадкового жарту
function showRandomJoke() {
  const randomIndex = Math.floor(Math.random() * jokes.length);
  document.getElementById('jokeText').textContent = jokes[randomIndex];
}

const btn = document.querySelector(`button`);
const ul = document.querySelector(`ul`);

let counter = 1;
btn.addEventListener(`click`, () => {
  const li = document.createElement(`li`);
  if (counter % 3 == 0) {
    li.classList.add(`big`);
  }
  document.querySelector(`ul`).appendChild(li);
  li.textContent = `${counter}`;
  counter += 1;
});

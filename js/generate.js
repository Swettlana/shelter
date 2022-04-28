export const getRandomArr = (arr) => {
  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let elArr = arr[i];
    arr[i] = arr[j];
    arr[j] = elArr;
  }
  return arr;
};

export const templateCardItem = (name, pathImg) => {
  return `
  <div class="card-item">
    <div>
      <img src=${pathImg} alt=${name}>
    </div>
  <p> ${name} </p>
  <button class="button_full">Learn more</button>
</div>`;
};

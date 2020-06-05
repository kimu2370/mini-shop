const PATH = "./images/";

const createItemElement = () => {
  const liElement = document.createElement("li");
  const imgElement = document.createElement("img");
  const spanElement = document.createElement("span");
  liElement.appendChild(imgElement);
  liElement.appendChild(spanElement);
  return liElement;
};

const setItemData = (item, element) => {
  element.firstElementChild.src = `${PATH}${item.img}`;
  element.lastElementChild.innerText = `${item.gender} ,${item.size} size`;
};

const selectList = () => {
  const selectBtn = document.querySelector(".shop__btn");

  selectBtn.addEventListener("click", (e) => {
    const list = document.querySelector(".shop__list");
    const target = e.target.classList.value;
    if (target) {
      list.innerHTML = "";
      data.filter((item) => {
        (item.product === target || item.color === target) &&
          (() => {
            const element = createItemElement();
            setItemData(item, element);
            list.appendChild(element);
          })();
      });
    } else {
      return;
    }
  });
};

(() => {
  const list = document.querySelector(".shop__list");
  data.map((item) => {
    const element = createItemElement();
    setItemData(item, element);
    list.appendChild(element);
  });
  selectList();
})();

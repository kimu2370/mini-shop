const PATH = "./images/";

const createItemElement = () => {
  const liElement = document.createElement("li");
  const imgElement = document.createElement("img");
  const spanElement = document.createElement("span");
  liElement.appendChild(imgElement);
  liElement.appendChild(spanElement);
  return liElement;
};

// 해당 항목을 세팅하는 함수
const setItemData = (item, element) => {
  element.firstElementChild.src = `${PATH}${item.img}`;
  element.lastElementChild.innerText = `${item.gender} ,${item.size} size`;
};

const handleClick = (event) => {
  const list = document.querySelector(".shop__list");
  const target = event.target.classList.value;
  if(!target) {
    return;
  }

  list.innerHTML = "";
  data.forEach((item) => {
    if (item.product !== target && item.color !== target) {
      return;
    }
    const element = createItemElement();
    setItemData(item, element);
    list.appendChild(element);
  });
}

// 선택한 리스트를 보여주는 함수
const selectList = () => {
  const selectBtn = document.querySelector(".shop__btn");

  selectBtn.addEventListener("click", handleClick);
};

// init mini-shop
(() => {
  const list = document.querySelector(".shop__list");
  data.map((item) => {
    const element = createItemElement();
    setItemData(item, element);
    list.appendChild(element);
  });
  selectList();
})();

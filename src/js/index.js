const buttons = document.querySelectorAll(".routs__reserve"); // []
const modal = document.querySelector(".modal");
const close = document.querySelector(".modal__close");
const header = document.querySelector(".header");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    modal.classList.add("show");
    document.body.classList.add("no-scroll");
  });
});

close.addEventListener("click", () => {
  modal.classList.remove("show");
});

document.addEventListener("scroll", (event) => {
  if (
    event.target.scrollingElement.scrollTop &&
    !header.classList.contains("header_white")
  ) {
    header.classList.add("header_white");
  }

  if (
    !event.target.scrollingElement.scrollTop &&
    header.classList.contains("header_white")
  ) {
    header.classList.remove("header_white");
  }
});

// Object.fromEntries([[a, 1], [c, f]]) => {a: 1, b: .....}

const points = [
  1, 3, 3, 2, 1, 4, 2, 4, 1, 8, 10, 1, 2, 1, 1, 3, 8, 1, 1, 1, 1, 4, 10, 10, 10,
  10,
];
const words = ["IS", "WHO", "THE", "BEST", "OF", "WDGO", "US"];

function calculating(points, words) {
  const alphbet = "abcdefghijklmnopqrstuvwxyz".split(""); //['a', 'b', ...]
  const alphbetMap = Object.fromEntries(
    alphbet.map((item, index) => [item, points[index]])
  ); //{a: 1, b: 3, .....}
  // const alphbetMap = {};
  // alphbet.forEach((item, index) => {
  //   alphbetMap[item] = points[index];
  // })

  const cost = words.map((item, index) => {
    let count = 0;

    item
      .toLowerCase()
      .split("")
      .forEach((element) => {
        count += alphbetMap[element];
      });

    return {
      count: count,
      index: index,
      length: item.length,
    };
  });

  const dataOfCost = cost.sort((a, b) => b.count - a.count); // сортировка массива обектов

  return dataOfCost
    .filter((item) => item.count === dataOfCost[0].count)
    .sort((a, b) => a.length - b.length)[0].index;
}

console.log(calculating(points, words));

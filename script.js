fetch("http://bymabe.dk/data-wp/wp-json/wp/v2/house?_embed")
  .then((res) => res.json())
  .then(handleData);

function handleData(houses) {
  console.log(houses);
  houses.forEach(showHouses);
}

function showHouses(house) {
  const template = document.querySelector("template").content;
  const copy = template.cloneNode(true);

  //   copy.querySelector("img").src = house.featuredmedia;
  copy.querySelector("h3").textContent = house.title.rendered;
  copy.querySelector(".bednr").textContent = house.bed;
  copy.querySelector(".bathnr").textContent = house.bath;
  copy.querySelector(".sqfeetnr").textContent = house.sqfeet;

  document.querySelector("main").appendChild(copy);
}

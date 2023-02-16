const burgers = [
  { name: 'Big King XL',
    price: 5.95,
    picture: 'bigking.png'
  },
  { name: 'Bacon King XL',
    price: 6.15,
    picture: 'baconking.png'
  },
  { name: 'Crispy Chicken',
    price: 4.90,
    picture: 'crispychicken.png'
  },
  { name: 'King Pollo',
    price: 4.50,
    picture: 'kingpollo.png'
  },
  { name: 'Whopper',
    price: 3.95,
    picture: 'whopper.png'
  },
  { name: 'Angry Whopper',
    price: 5.20,
    picture: 'whopperangry.png'
  }
]
function mySorter(a,b) {
  if (a.price < b.price) return -1;
  else  if (a.price > b.price) return 1;
  else return 0;
}
function init() {
  burgers.sort(mySorter);

  const burgersContainer = document.querySelector("ul");
  burgers.forEach(burger => {

    let burgerElement = document.createElement("div");
    burgerElement.classList.add("burger");

    let burgerImage = document.createElement("img");
    burgerImage.src = burger.picture;

    let burgerName = document.createElement("h2");
    burgerName.innerText = burger.name;

    let burgerPrice = document.createElement("p");
    burgerPrice.innerText = "\u20AC"+ burger.price;

    burgerElement.appendChild(burgerImage);
    burgerElement.appendChild(burgerName);
    burgerElement.appendChild(burgerPrice);
    burgersContainer.appendChild(burgerElement);
  })
}

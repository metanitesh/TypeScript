type Cart = {
  fruits?: { name: string }[]
}

const basket: Cart = {};

basket.fruits!.push({
  name: "Tomato"
})

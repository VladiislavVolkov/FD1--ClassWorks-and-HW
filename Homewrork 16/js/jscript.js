let basket = [ ]
function addToBasket (name, price, amount, category) {
    let a = {
        id: Math.floor(Math.random()),
        name: name,
        price: price,
        amount: amount,
        sum: price*amount,
        category: category,
    }

    basket.push(a)
}

addToBasket (
    name = prompt("Введите название"), 
    price = prompt("Укажите стоимость 1 единицы"), 
    amount = prompt("Количество единиц товара"), 
    category = prompt("Категория товара")
)

console.log(basket)
import Cart from '../cart'
import Movie from '../movie'

describe('cart', () => {
    let cart: Cart
    let movie1: Movie
    let movie2: Movie

    beforeEach(() => {
        cart = new Cart
        movie1 = new Movie(
             100,
            1,
            'Мстители: Финал',
            2019,
            'США',
            'Финал будет',
            ['фантастика', 'боевик', 'драма', 'приключения'],
            181
        )
         movie2 = new Movie(
             80,
            2,
            'Халк',
            2003,
            'США',
            'Дайте волю герою внутри себя',
            ['фантастика', 'боевик'],
            138
        )
    })

    test('Добавляем фильм в корзину', () => {
        cart.add(movie1)
        expect(cart.all).toContain(movie1)
        expect(cart.all.length).toBe(1)
    })

    test('добавляем все фильмы в карзину', () => {
        cart.add(movie1)
        cart.add(movie2)

         expect(cart.all).toContain(movie1)
         expect(cart.all).toContain(movie2)
         expect(cart.all.length).toBe(2)
    })

    test('Расчитываем стоимость без скидки', () => {
        cart.add(movie1)
        cart.add(movie2)

        expect(cart.getTotalCost()).toBe(180)
    })

    test('Стоимость с учетом скидки', () => {
        cart.add(movie1)
        cart.add(movie2)

        expect(cart.getTotalDiscountCost(10)).toBe(162)
    })

    test('Удаление из корзины', () => {
        cart.add(movie1)
        cart.add(movie2)
        cart.removeById(1)

        expect(cart.all).toEqual([movie2])
        expect(cart.all.length).toBe(1)
    })

})
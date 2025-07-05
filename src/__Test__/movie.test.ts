import { Movie } from '../movie'

describe ('Movie', () => {
    test('Создает фильм с правильными свойствами', () => {
        const movie = new Movie (
            100,
            1,
            'Мстители: Финал',
            2019,
            'США',
            'Финал будет',
            ['фантастика', 'боевик', 'драма', 'приключения'],
            181
        )

        expect(movie.price).toBe(100)
        expect(movie.id).toBe(1)
        expect(movie.name).toBe('Мстители: Финал')
        expect(movie.country).toBe('США')
        expect(movie.slogan).toBe('Финал будет')
        expect(movie.genre).toEqual(['фантастика', 'боевик', 'драма', 'приключения'])
        expect(movie.duration).toBe(181)
    })

    test('фильм реализует интерфейс бабл', () => {
          const movie = new Movie (
            100,
            1,
            'Мстители: Финал',
            2019,
            'США',
            'Финал будет',
            ['фантастика', 'боевик', 'драма', 'приключения'],
            181
        )
        
        expect(typeof movie.id).toBe('number')
        expect(typeof movie.name).toBe('string')
        expect(typeof movie.price).toBe('number')

    })
})
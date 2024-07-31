function numeroAleatorio(min = 1, max = 100000) {
    return parseInt(Math.random() * (max - min)) + min
}

export default function handler(req, res) {
    res.status(200).json([
        { id: numeroAleatorio(), nome: "TV", preco: 3000 },
        { id: numeroAleatorio(), nome: "PS5", preco: 3300 },
        { id: numeroAleatorio(), nome: "Computador", preco: 5500 },
        { id: numeroAleatorio(), nome: "Mouse", preco: 250 },
    ])
}
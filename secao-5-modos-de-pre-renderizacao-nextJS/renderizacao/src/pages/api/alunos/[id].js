export default function handler(req, res) {
    const id = +req.query.id

    res.status(200).json({
        id,
        nome: `Augusto Reis - ${id}`,
        email: `meuemaillala${id}@gmail.com`
    })
}
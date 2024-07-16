// [[...array]]
// Duplo colchetes => parâmetros se tornam opcionais
// ... => pode passar múltiplos parâmetros através de "subrotas" -> /a/b/c/d

export default function params(req, res) {
    res.status(200).json({
        params: req.query
    })
}
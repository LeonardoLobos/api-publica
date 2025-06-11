const express = require('express');
const router = express.Router();

let produtos = [
    {
        "nome": "Caderno 10 Matérias",
        "preco": "R$ 18,90", 
        "imagem": "img/caderno.webp",
        "categoria": "Cadernos"
    },
    {
        "nome": "Caderno Disney 10 Matérias", 
        "preco": "R$ 31,90",
        "imagem": "img/stitch.avif",
        "categoria": "Cadernos"
    },
    {
        "nome": "Kit 10 Pacotes de Papel Sulfite 500 Folhas",
        "preco": "R$ 269,90",
        "imagem": "img/sulfite.webp",
        "categoria": "Materiais"
    },
    {
        "nome": "Kit Material de Escrever 12 Cores + 2 Lápis",
        "preco": "R$ 19,90",
        "imagem": "img/kitlapis.webp",
        "categoria": "Materiais"
    },
    {
        "nome": "Kit 48 Lápis de Cor",
        "preco": "R$ 54,90",
        "imagem": "img/lapiscor.jpg",
        "categoria": "Materiais"
    },
    {
        "nome": "Organizador Porta Treco",
        "preco": "R$ 21,90",
        "imagem": "img/portatreco.webp",
        "categoria": "Escritório"
    },
    {
        "nome": "Porta Caneta com 6 gavetas",
        "preco": "R$ 29,90",
        "imagem": "img/mesinha.webp",
        "categoria": "Escritório"
    },
    {
        "nome": "Kit 3 Canetas Esferográficas",
        "preco": "R$ 4,90",
        "imagem": "img/kitcaneta.webp",
        "categoria": "Materiais"
    },
    {
        "nome": "Kit Canetas Fine Pen",
        "preco": "R$ 66,90",
        "imagem": "img/canetafinepen.avif",
        "categoria": "Materiais"
    },
    {
        "nome": "Mochila de Viagem",
        "preco": "R$ 179,90",
        "imagem": "img/mochilaviagem.webp",
        "categoria": "Mochilas"
    },
    {
        "nome": "Mochila de Passeio",
        "preco": "R$ 79,90",
        "imagem": "img/mochilapasseio.jpg",
        "categoria": "Mochilas"
    },
    {
        "nome": "Mochila Super Herói Infantil",
        "preco": "R$ 210,90",
        "imagem": "img/mochilacrianca.png",
        "categoria": "Mochilas"
    },
    {
        "nome": "Luminária de Mesa",
        "preco": "R$ 59,90",
        "imagem": "img/luminaria.webp",
        "categoria": "Escritório"
    },
    {
        "nome": "Caderno 20 Matérias Videogame",
        "preco": "R$ 49,90",
        "imagem": "img/caderno20materias.png",
        "categoria": "Cadernos"
    }
]

router.get('/', (req, res) => res.json(produtos));
router.post('/', (req, res) => {
  produtos.push(req.body);
  res.status(201).json(req.body);
});
router.put('/:id', (req, res) => {
  const i = produtos.findIndex(p => p.id == req.params.id);
  produtos[i] = req.body;
  res.json(req.body);
});
router.delete('/:id', (req, res) => {
  produtos = produtos.filter(p => p.id != req.params.id);
  res.status(204).send();
});

module.exports = router;
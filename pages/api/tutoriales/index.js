export const tutorialesArray = [
    { id: 1, title: 'JQuery', description: 'Esto es una descripción...', url: '/jquery' },
    { id: 2, title: 'JavaScript', description: 'Esto es una descripción...', url: '/javascript' },
    { id: 3, title: 'Como programar en C#', description: 'Esto es una descripción...', url: '/csharp'  },
    { id: 4, title: 'Programación orientada a objetos con JAVA', description: 'Esto es una descripción...', url: '/java'  },
];

export default (req, res) => {
    switch (req.method) {
        case 'POST':
            tutorialesArray.push(req.body);
            res.status(200).json("El registro se ha creado con exito");
            break;
        case 'DELETE':
            res.status(200).json("El registro se elimino con exito");
            break;
        case 'PUT':
            const item = tutorialesArray.find((row, index) => row.id === req.body.id);
            item.title = req.body.title;
            item.description = req.body.description;
            item.url = req.body.url;
            res.status(200).json("El registro se actualizo con exito");
            break;
        default:
            res.status(200).json(tutorialesArray);
            break;
    }
}
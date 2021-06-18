export default (req, res) => {
    res.status(200).json({ 
        menuItems: [
            { text: 'Home', url: '/' },
            { text: 'Tutoriales', url: '/tutoriales', items: 
                [
                    { text: 'JQuery', url: '/jquery' },
                    { text: 'JavaScript', url: '/javascript' }
                ]
            },
            { text: 'Noticias', url: '/noticias' },
            { text: 'Conoceme', url: '/conoceme' }
        ]
    })
}
import bcrypt from 'bcryptjs'
const data ={
    users:[
        {
            name:'SixFox',
            email:'bastian@gmail.com',
            password: bcrypt.hashSync('1234',8),
            isAdmin: true
        }
    ],
    products:[
        {
            name:'Battlefield 2042',
            category: 'Shooter',
            image:'/images/battlefield.jpg',
            price: 190,
            countInStock:20,
            brand:'EA',
            numReviews:10,
            rating: 4.5,
            description: 'New Shooter game by EA'
        },
        {
            name:'Call Of Duyt: Cold War',
            category: 'Shooter',
            image:'/images/coldwar.jpg',
            price: 90,
            countInStock:0,
            brand:'Activision',
            numReviews:10,
            rating: 5,
            description: 'New Shooter game by Activision'
        },
        {
            name:'Fifa 22',
            category: 'Arcade',
            image:'/images/fifa22.jpg',
            price: 60,
            brand:'EA',
            countInStock:20,
            numReviews:10,
            rating: 2.5,
            description: 'New Shooter game by EA'
        }
    ]
}

export default data;
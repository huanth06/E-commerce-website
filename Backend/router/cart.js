const express = require('express');
const router = express.Router();

const carts = [
    {
        id: 1,
        user: { id: 1, username: 'user1', password: 'pass1' },
        total: 300,
        date: new Date().toISOString(),
        products: [
            { id: 1, name: 'Product 1', quantity: 2, price: 100, thumb: ['https://firebasestorage.googleapis.com/v0/b/c05casestudy.appspot.com/o/files%2FRSTest-1.jpg?alt=media&token=8036fb9e-fe65-4195-87cd-f01abfdb862a',
            'https://firebasestorage.googleapis.com/v0/b/c05casestudy.appspot.com/o/files%2FRSTest-2.jpg?alt=media&token=4e64f623-d1f9-4fe4-b651-d85218ce4c50', 
            'https://firebasestorage.googleapis.com/v0/b/c05casestudy.appspot.com/o/files%2FRSTest-3.jpg?alt=media&token=57ac8089-2161-4bc6-b354-c7d8bfd68c57'] },
            { id: 2, name: 'Product 2', quantity: 1, price: 200, thumb: ["https://firebasestorage.googleapis.com/v0/b/c05casestudy.appspot.com/o/files%2FRSTest-4.jpg?alt=media&token=9e9ecc16-73d6-45ba-9a7e-68d1468c36af",
            "https://firebasestorage.googleapis.com/v0/b/c05casestudy.appspot.com/o/files%2FRSTest-5.jpg?alt=media&token=5a9ec71b-65f9-4c17-b920-6061f9b6b703",
            "https://firebasestorage.googleapis.com/v0/b/c05casestudy.appspot.com/o/files%2FRSTest-6.jpg?alt=media&token=de6627f6-07be-42a4-88af-80b8c622c4c3"] }
        ]
    },
    {
        id: 2,
        user: { id: 2, username: 'user2', password: 'pass2' },
        total: 600,
        date: new Date().toISOString(),
        products: [
            { id: 3, name: 'Product 3', quantity: 2, price: 300, thumb:['https://firebasestorage.googleapis.com/v0/b/c05casestudy.appspot.com/o/files%2FRSTest-7.jpg?alt=media&token=5d42a5a5-b2d3-411d-9d0e-d06429eb247d', 
            'https://firebasestorage.googleapis.com/v0/b/c05casestudy.appspot.com/o/files%2FRSTest-8.jpg?alt=media&token=3ac83562-d754-417b-a068-5be4795c9187', 
            'https://firebasestorage.googleapis.com/v0/b/c05casestudy.appspot.com/o/files%2FRSTest-9.jpg?alt=media&token=2c3f9e49-1196-4202-96f1-9fb7c2037bb6']}
        ]
    }
];

router.get("/", (req, res) => {
    if(req?.query?.username){
        const newCarts = carts.filter(item => item?.user?.username?.toString() === req.query.username?.toString());
        return res.json(newCarts)
    }
    res.json(carts);
});

router.get("/:cartId", (req, res) => {
    const cartId = parseInt(req.params.cartId);
    const cart = carts.find(c => c.id === cartId);
    if (cart) {
        res.json(cart);
    } else {
        res.status(404).send({ message: 'Cart not found' });
    }
});


router.post("/", (req, res) => {
    const newCart = {
        id: Date.now(),
        user: req.body.user,
        total: req.body.total,
        date: new Date().toISOString(),
        products: req.body.products
    };
    carts.push(newCart);
    res.status(201).send(newCart);
});

router.put("/:cartId", (req, res) => {
    const cartId = parseInt(req.params.cartId);
    const index = carts.findIndex(c => c.id === cartId);
    if (index !== -1) {
        carts[index].user = req.body.user;
        carts[index].total = req.body.total;
        carts[index].date = new Date().toISOString();
        carts[index].products = req.body.products;
        res.send(carts[index]);
    } else {
        res.status(404).send({ message: 'Cart not found' });
    }
});


router.delete("/:cartId", (req, res) => {
    const cartId = parseInt(req.params.cartId);
    const index = carts.findIndex(c => c.id === cartId);
    if (index !== -1) {
        carts.splice(index, 1);
        res.send({ message: 'Cart deleted', cartId: cartId });
    } else {
        res.status(404).send({ message: 'Cart not found' });
    }
});

module.exports = router;

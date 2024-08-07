const express = require('express');
const router = express.Router();

const products = [
    {
        id: 1,
        name: 'Product 1',
        price: 100,
        quantity: 10,
        category: { id: 1, name: 'Electronics' },
        images: ['https://firebasestorage.googleapis.com/v0/b/c05casestudy.appspot.com/o/files%2FRSTest-1.jpg?alt=media&token=8036fb9e-fe65-4195-87cd-f01abfdb862a',
        'https://firebasestorage.googleapis.com/v0/b/c05casestudy.appspot.com/o/files%2FRSTest-2.jpg?alt=media&token=4e64f623-d1f9-4fe4-b651-d85218ce4c50', 
        'https://firebasestorage.googleapis.com/v0/b/c05casestudy.appspot.com/o/files%2FRSTest-3.jpg?alt=media&token=57ac8089-2161-4bc6-b354-c7d8bfd68c57']
    },
    {
        id: 2,
        name: 'Product 2',
        price: 200,
        quantity: 20,
        category: { id: 2, name: 'Books' },
        images: ["https://firebasestorage.googleapis.com/v0/b/c05casestudy.appspot.com/o/files%2FRSTest-4.jpg?alt=media&token=9e9ecc16-73d6-45ba-9a7e-68d1468c36af",
        "https://firebasestorage.googleapis.com/v0/b/c05casestudy.appspot.com/o/files%2FRSTest-5.jpg?alt=media&token=5a9ec71b-65f9-4c17-b920-6061f9b6b703",
        "https://firebasestorage.googleapis.com/v0/b/c05casestudy.appspot.com/o/files%2FRSTest-6.jpg?alt=media&token=de6627f6-07be-42a4-88af-80b8c622c4c3"]
    },
    {
        id: 3,
        name: 'Product 3',
        price: 300,
        quantity: 30,
        category: { id: 3, name: 'Clothing' },
        images: ['https://firebasestorage.googleapis.com/v0/b/c05casestudy.appspot.com/o/files%2FRSTest-7.jpg?alt=media&token=5d42a5a5-b2d3-411d-9d0e-d06429eb247d', 
        'https://firebasestorage.googleapis.com/v0/b/c05casestudy.appspot.com/o/files%2FRSTest-8.jpg?alt=media&token=3ac83562-d754-417b-a068-5be4795c9187', 
        'https://firebasestorage.googleapis.com/v0/b/c05casestudy.appspot.com/o/files%2FRSTest-9.jpg?alt=media&token=2c3f9e49-1196-4202-96f1-9fb7c2037bb6']
    }
];

router.get("/", (req, res) => {
    if(req?.query?.category_id){
        const newProduct = products.filter(item => item?.category?.id?.toString() === req.query.category_id?.toString());
        return res.json(newProduct)
    }
    res.json(products);
});

router.get("/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const product = products.find(p => p.id === id);
    if (product) {
        res.json(product);
    } else {
        res.status(404).send({ message: 'Product not found' });
    }
});

router.post("/", (req, res) => {
    const newProduct = {
        id: Date.now(), // Sử dụng timestamp để tạo id duy nhất
        name: req.body.name,
        price: req.body.price,
        quantity: req.body.quantity,
        category: req.body.category, // Nhận category là một đối tượng
        images: req.body.images
    };
    products.push(newProduct);
    res.status(201).send(newProduct);
});

router.put("/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const index = products.findIndex(p => p.id === id);
    if (index !== -1) {
        products[index].name = req.body.name;
        products[index].price = req.body.price;
        products[index].quantity = req.body.quantity;
        products[index].category = req.body.category; // Cập nhật category là một đối tượng
        products[index].images = req.body.images;
        res.send(products[index]);
    } else {
        res.status(404).send({ message: 'Product not found' });
    }
});

router.delete("/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const index = products.findIndex(p => p.id === id);
    if (index !== -1) {
        products.splice(index, 1);
        res.send({ message: 'Product deleted', id: id });
    } else {
        res.status(404).send({ message: 'Product not found' });
    }
});

module.exports = router;

app.get('/products', (req, res) => {
    res.send(
        data.products
    );
});

app.get('/products/:id', (req, res) => {

    const product = data.products.find((x) => x._id == req.params.id);
    
    if (product) {
        res.send(product);
    } else {
        res.status(404).send({ message: 'Product not found!' });
    }

});
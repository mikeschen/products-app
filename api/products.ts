import * as express from 'express';
import Database from '../db';
import * as mongodb from 'mongodb';

let router = express.Router();

//get single product
router.get('/:id', (req, res) => {
  let productId = new mongodb.ObjectID(req.params['id']);
  Database.db.collection('products').findOne(productId).then((product) => {
    res.json(product);
  });
});

//Get products
router.get('/', (req, res) => {
  Database.db.collection('products').find().toArray().then((products) => {
    res.json(products);
  })
});

//Create/Update product
router.post('/', (req, res) => {
  let product = req.body;
  product._id = new mongodb.ObjectID(product._id); //convert _id to object
  Database.db.collection('products').save(product).then((newProduct) => {
    res.json(newProduct);
  })
});

router.delete('/:id', (req, res) => {
  let productId = new mongodb.ObjectID(req.params['id']);
  Database.db.collection('products').remove({_id:productId}).then(() => {
    res.sendStatus(200);
  })
})

export default router;

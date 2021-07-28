import asyncMiddleware from '../middlewares/async.js';
import { Product, productValidation } from '../models/Product.js';

/***
 * @router  POST: api/products
 * @desc    Create new product
 * @access  Private | Admin user only
 * ***/
export const createProduct = asyncMiddleware(async (req, res) => {
  const { error } = productValidation(req.body);

  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }

  const product = new Product({ user: req.user._id, ...req.body });

  const createdProduct = await product.save();

  res.status(201).json(createdProduct);
});

/***
 * @router  GET: api/products
 * @desc    Get all products
 * @access  Public
 * ***/
export const getProducts = asyncMiddleware(async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

/***
 * @router  GET: api/products/:id
 * @desc    Get single product by Id
 * @access  Public
 * ***/
export const getProductById = asyncMiddleware(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    res.status(404);
    throw new Error('Product not found');
  }

  res.json(product);
});

/***
 * @router  PUT: api/products/:id
 * @desc    Update product
 * @access  Private | Admin user only
 * ***/
export const updateProduct = asyncMiddleware(async (req, res) => {
  const product = await Product.findById(req.params.id);

  const { error } = productValidation(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }

  if (product) {
    product.name = req.body.name;
    product.image = req.body.image;
    product.price = req.body.price;
    product.description = req.body.description;
    product.category = req.body.category;
    product.brand = req.body.brand;
    product.numberInStock = req.body.numberInStock;

    const updatedProduct = await product.save();
    res.json(updatedProduct);
  } else {
    res.status(404);
    throw new Error('Product not found');
  }
});

/***
 * @router  DELETE: api/products/:id
 * @desc    Delete product
 * @access  Private | Admin user only
 * ***/
export const deleteProductAdmin = asyncMiddleware(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    await product.remove();
    res.json({ message: 'Product removed successfully' });
  } else {
    res.status(404);
    throw new Error(`Product not found`);
  }
});

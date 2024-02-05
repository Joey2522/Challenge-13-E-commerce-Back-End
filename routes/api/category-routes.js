const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories be sure to include its associated Products
  try {
  const categories = await Category.findAll({ include: [{model: Product}] });
    res.status(200).json(categories);
  } catch (err) {
    res.status(404).json({ message: 'not found.'});
    }
  });

router.get('/:id', async (req, res) => {
  // find one category by its `id` value be sure to include its associated Products
  try {
  const category = await Category.findByPk(req.params.id, { include: [{ model: Product }] });
  res.status(200).json(category);
} catch (err) {
  res.status(404).json({ message: 'no id found.'});
  }
});


router.post('/', async (req, res) => {
  try {
    const newCategory = await Category.create(req.body);
    res.status(200).json(newCategory);
  } catch (err) {
    res.status(404).json({ message: 'category creation failed.'});
    }
  });

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try {
    const updateCategory = await Category.update(req.body, { where: { id: req.params.id } });
    !updateCategory[0] ? res.status(404).json({ message: 'id not found' }) : res.status(200).json(updateCategory);
  } catch (err) {
    res.status(500).json({ message: 'update failed' });
  }
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try {
    const deletedCategory = await Category.destroy({ where: { id: req.params.id } });
    !deletedCategory ? res.status(404).json({ message: 'id not found' }) : res.status(200).json(deletedCategory);
  } catch (err) {
    res.status(500).json({ message: 'delete category failed' });
  }
});

// export the router
module.exports = router;

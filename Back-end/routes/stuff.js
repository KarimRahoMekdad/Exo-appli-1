const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');
const stuffCtrl = require('../controllers/stuff');
const fs = require('fs');

router.get('/', auth, stuffCtrl.getAllThings);
router.post('/', auth, multer, stuffCtrl.createThing);
router.get('/:id', auth, stuffCtrl.getOneThing);
router.put('/:id', auth, multer, stuffCtrl.modifyThing);
router.delete('/:id', auth, stuffCtrl.deleteThing);

module.exports = router;

// const express = require('express');
// const router = express.Router();
// const stuffCtrl = require('../controllers/stuff');

// router.get('/', stuffCtrl.getAllStuff);
// router.post('/', stuffCtrl.createThing);
// router.get('/:id', stuffCtrl.getOneThing);
// router.put('/:id', stuffCtrl.modifyThing);
// router.delete('/:id', stuffCtrl.deleteThing);

// module.exports = router;
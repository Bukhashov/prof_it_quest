const { Router } = require('express');
const router = Router();
const { check, validationResult } = require('express-validator');
const auth = require('../controllers/auth')
const kvester = require('../controllers/kvester');
const tests = require('../controllers/test');
const thames = require('../controllers/thame');


// auth
router.post('/auth/singin', [
    check('email', "Email is required").isEmail(),
    check('password', 'Password is requried').isLength({ min: 8 })
], auth.singin);
router.post('/auth/singup', [
    check('lastname').not().isEmpty().withMessage("lastname is required"),
    check('firstname').not().isEmpty().withMessage("firstname is required"),
    check('email', "Email is required").isEmail(),
    check('password', 'Password is requried').isLength({ min: 8 })
], auth.singup);

// kvester
router.get('/kvester/get/all', kvester.getAll);
router.post('/kvester/add', kvester.add);
// kvester thame
router.post('/thame/get/all', thames.getAllByKvesterId);
router.post('/thame/get/byid', thames.getById);
router.post('/thame/add', thames.add)


// content


// test
router.get('/test/get/:byId', );
router.get('/test/control/', );


module.exports = router;


const { Router } = require('express');
const router = Router();
const { check, validationResult } = require('express-validator');

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
router.get('/kvester/get/all', );
router.get('/kvester/get/:byId', );
// kvester thame


// content


// test
router.get('/test/get/:byId', );
router.get('/test/control/', );


const { Router } = require('express');
const router = Router();
const { check, validationResult } = require('express-validator');
const auth = require('../controllers/auth')
const kvester = require('../controllers/kvester');
const chat = require('../controllers/chat');
const tests = require('../controllers/test');
const comment = require('../controllers/comment');
const thames = require('../controllers/thame');

const programmer = require('../controllers/populer/programmer');
const university = require('../controllers/populer/university');

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
router.get('/thame/:language/all', thames.getAllByLanguage)
router.post('/thame/get/byid', thames.getById);
router.post('/thame/add', thames.add)

// content
router.post('/comment/get/all', comment.get);
router.post('/comment/add', comment.add);

// popular
router.get('/popular/programmer/get/all', programmer.getAll);
router.get('/popular/programmer/get/:id', programmer.getById);
router.get('/popular/university/get/all', university.getAll);
router.get('/popular/university/get/:id', university.getById);

// chat
router.get('/chat/get/all', chat.get);
router.post('/chat/add', chat.add);


router.get('/info/:id/', thames.getAllByLanguage)

// test
router.get('/test/get/:byId', thames.getAllByLanguage);
router.get('/test/control/', thames.getAllByLanguage);

module.exports = router;


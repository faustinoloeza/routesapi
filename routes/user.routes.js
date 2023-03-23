const { Router} = require('express');
const userControllers = require('../controllers/user.controllers');
const router = Router();


router.get("/api", userControllers.getUser);
router.get("/api/:id", userControllers.getUser);
router.get("/test", userControllers.getUser);
router.get("/users", userControllers.getUsuarios);
router.get("/users/:id", userControllers.getProducts);
router.put("/api", userControllers.putUsers);
router.post("/api", userControllers.postUsers);
router.post("/savepoint", userControllers.savePoint);
router.post("/getpoints", userControllers.getPoints);

module.exports = router;
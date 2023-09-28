const { Router } = require("express");
const controllers = require("../controllers");
const middlewares = require("../middlewares");

const router = Router();

router.get("/", controllers.getFilms);
router.get("/:id", controllers.getFilm);

router.post("/", middlewares.filmValidation, controllers.createFilm);

router.patch("/:id", controllers.updateFilm);

router.delete("/:id", controllers.deleteFilm);

module.exports = router;

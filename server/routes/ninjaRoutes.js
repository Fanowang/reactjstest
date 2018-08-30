const ninjacontroller = require('./../controllers/ninjaController');


module.exports = (router) => {
    router
        .route('/ninjas')
        .get(ninjacontroller.getAll);
}
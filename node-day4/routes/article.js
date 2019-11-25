let express = require('express');
let router = express.Router();
router.get('/post', function(req, res) {
    res.send('post')
})
router.get('/delete', function(req, res) {
    res.send('delete')
});
module.exports = router;
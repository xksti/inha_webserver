var express = require('express');
var router = express.Router();

/* 게시판. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '게시판', pageName:'bbs/list.ejs' });
});

router.get('/insert', function(req, res, next) {
  res.render('index', { title: '글쓰기', pageName:'bbs/insert.ejs' });
});

router.get('/:id', function(req, res, next) {
  const id = req.params.id;
  console.log(`id....................`, id);
  res.render('index', { title: '게시글 정보', pageName:'bbs/read.ejs', id : id });
});

router.get('/update/:id', function(req, res, next) {
  const id = req.params.id;
  console.log(`id....................`, id);
  res.render('index', { title: '게시글 수정', pageName:'bbs/update.ejs', id : id });
});


module.exports = router;

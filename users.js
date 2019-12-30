var router = express.Router();

//점수 등록하기
router.post('/scoreupdate', function(req, res) {
    var score = req.score;
    var userId = req.session.user_id;

    if (score >= 10 ) {
        res.json({message:"can't save score 10 over"});
        //userId를 기반으로 9점 저장
        return;
    } else {
        //userId를 기반으로 score 저장
    }
})

router.get('/scoreload', function(req, res, next) {
    var username = req.username;
    var score = req.score;

    //스코어 불러오기

  });
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.set('view engine', 'jade');     //express가 사용할 템플릿엔진이 jade라고 알랴줌.
app.set('views', './views');        //템플릿 파일이 있는 장소 지정(default views)
app.locals.pretty = true;

app.use(express.static('public'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(3000, function(){
    console.log('Connected 3000 port!');
});

app.get('/form', function(req, res){
  res.render('form');
});

app.get('/form_receiver', function(req, res){
  res.send(req.query.title+','+req.query.description);
});

app.post('/form_receiver', function(req, res){
  //body-parser 미들웨어 로드하고 urlencoded해야 body프로퍼티를 쓸수 있다.
  res.send(req.body.title+','+req.body.description);
});

app.get('/topic', function(req, res){
  var topics = [
    'Javascript is ...',
    'Nodejs is ...',
    'Express is ...'
  ];
  var output = `
    <a href="/topic/?id=0">JavaScript</a><br>
    <a href="/topic/?id=1">Nodejs</a><br>
    <a href="/topic/?id=2">Express</a><br>
    ${topics[req.query.id]}
  `;
  res.send(output);
  //res.send(req.path);
});

/*
app.get('/semantic/:id', function(req, res){
  var topics = [
    'Javascript is ...',
    'Nodejs is ...',
    'Express is ...'
  ];
  var output = `
    <a href="/topic/?id=0">JavaScript</a><br>
    <a href="/topic/?id=1">Nodejs</a><br>
    <a href="/topic/?id=2">Express</a><br>
    ${topics[req.params.id]}
  `;
  res.send(output);
  //res.send(req.path);
});
*/

app.get('/semantic/*', function(req, res){
  var raw = req.params[0].split('/');
  var params = {
    'id': raw[0]|| undefined,
    'name': raw[1]|| undefined
  };

  var topics = [
    'Javascript is ...',
    'Nodejs is ...',
    'Express is ...'
  ];
  var output = `
    <a href="/topic/?id=0">JavaScript</a><br>
    <a href="/topic/?id=1">Nodejs</a><br>
    <a href="/topic/?id=2">Express</a><br>
    ${topics[params.id]} ${params.name}
  `;

  res.send(output);
  //res.send(req.path);
});

app.get('/', function(req, res){
    res.send('Hello home page');
});

app.get('/login', function(req, res){
    res.send('<h1>login please</h1>');
});

app.get('/route', function(req, res){
    res.send('Hello Router, <img src="/intro_2.png">');
});

//정적 처리하면 요청할때마다 읽어서 보내준다.
//동척 처리하면 안바뀐다.(일단은)
app.get('/dynamic', function(req, res){
  var lis = '';
  var time = Date();
  for(var i=1; i<6; i++){
    lis = lis+`<li>codnig${i}</li>`;
  }
  var output = `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
  </head>
  <body>
    Hello, Dynamic
    <ul>
      ${lis}
    </ul>
    ${time}
  </body>
  </html>`;
  res.send(output);
});

app.get('/template', function(req, res){
  res.render('temp', {time:Date(), _title:"SYJUNG's Homepage"});
});

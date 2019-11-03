var express = require('express');
const jsonfile = require('jsonfile');
const nanoid = require('nanoid');
var router = express.Router();

const database = 'data/alunos.json'

/* GET alunos listing. */
router.get('/', (req, res) => {
  jsonfile.readFile(database, (erro, turma) => {
    if(!erro) res.render('index', { turma: turma });
    else res.render('error', { error: erro })
  });
});

router.get('/alunos', (req, res) => {
  jsonfile.readFile(database, (erro, turma) => {
    if(!erro) res.render('index', { turma: turma });
    else res.render('error', { error: erro })
  });
});

router.get('/alunos/:idAluno', (req, res) => {
  const id = req.params.idAluno;
  jsonfile.readFile(database, (err, turma) => {
    if(!err){
      const index = turma.findIndex(al => al.id === id);
      let a;
      if (index > -1) {
        a = turma[index];
      }
      res.render('aluno', { id: a.id, nome: a.nome, curso: a.curso, notas: a.notas });
    } else {
      res.render('error', { error: err })
    }
  });
});

router.post('/alunos', (req, res) => {
  const aluno = req.body;
  aluno.id = nanoid();
  aluno.notas = [];
  jsonfile.readFile(database, (err, turma) => {
    if(!err){
      turma.push(aluno);
      jsonfile.writeFile(database, turma, err => {
        if(err) console.log(err);
        else console.log('Registo gravado com sucesso!!');
      })
      res.render('index', { turma: turma });
    } else {
      res.render('error', { error: err })
    }
  });
});

router.post('/alunos/:idAluno/notas', (req, res) => {
  const id = req.params.idAluno;
  const nota = req.body;
  jsonfile.readFile(database, (err, turma) => {
    if(!err){
      const index = turma.findIndex(a => a.id === id);
      if (index > -1) {
        turma[index].notas.push(nota);
        jsonfile.writeFile(database, turma, err => {
          if(err) console.log(err);
          else console.log('Registo gravado com sucesso!!');
        })
      }
      res.render('index', { turma: turma });
    } else {
      res.render('error', { error: err })
    }
  });
});

router.delete('/alunos/:idAluno', (req, res) => {
  const id = req.params.idAluno;
  jsonfile.readFile(database, (err, turma) => {
    if(!err){
      const index = turma.findIndex(a => a.id === id);
      if (index > -1) {
        turma.splice(index, 1);
        jsonfile.writeFile(database, turma, err => {
          if(err) console.log(err);
          else console.log(`Registo ${id} apagado com sucesso!!`);
        });
      }
      res.render('index', { turma: turma });
    } else {
      res.render('error', { error: err })
    }
  });
});

router.delete('/alunos/:idAluno/notas/:indicador', (req, res) => {
  const id = req.params.idAluno;
  const indicador = req.params.indicador;
  jsonfile.readFile(database, (err, turma) => {
    if(!err){
      const aindex = turma.findIndex(a => a.id === id);
      if (aindex > -1) {
        const index = turma[aindex].notas.findIndex(n => n.indicador === indicador);
        if(index > -1) {
          turma[aindex].notas.splice(index, 1);
          jsonfile.writeFile(database, turma, err => {
            if(err) console.log(err);
            else console.log(`Registo ${id} apagado com sucesso!!`);
          });
        }
      }
      res.render('index', { turma: turma, id: id });
    } else {
      res.render('error', { error: err })
    }
  });
});

module.exports = router;

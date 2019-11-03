function carregarAluno(idAluno){
    console.log('Pagina de ' + idAluno +' carregada.');
    axios.get('/alunos/' + idAluno)
        .then(response => window.location.assign('/alunos/' + idAluno))
        .catch(error => console.log(error));
}

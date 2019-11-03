function removerAluno(idAluno){
    console.log('Vou apagar o item: ' + idAluno);
    axios.delete('/alunos/' + idAluno)
        .then(response => window.location.assign('/alunos'))
        .catch(error => console.log(error));
}
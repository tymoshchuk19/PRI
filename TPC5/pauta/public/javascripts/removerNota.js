function removerNota(nota){
    console.log('Vou apagar o item: ' + nota);
    axios.delete('/alunos/' + nota)
        .then(response => window.location.assign('/alunos'))
        .catch(error => console.log(error));
}
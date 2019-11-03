function voltar(){
    console.log('Pagina de principal carregada.');
    axios.get('/alunos')
        .then(response => window.location.assign('/alunos'))
        .catch(error => console.log(error));
}
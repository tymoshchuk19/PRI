function removerFilme(idFilme) {
    console.log('Remover filme: ' + idFilme);
    axios.delete('/filmes/' + idFilme)
        .then(response => window.location.assign('/'))
        .catch(error => console.log(error));
}
$(() => {
    $("#newFile").click(e=>{
        e.preventDefault()
        $("#lista .w3-container:last").after(()=>$("#ficheiro").clone());
        $("#lista .w3-container:last").empty();

        var descLabel = $('<label class="w3-cell">Descrição:</label>')
        var descInput = $('<input/>', {class: 'w3-input w3-cell', type: "text", name: "desc"})
        var ficheiroLabel = $('<label class="w3-cell">Ficheiro:</label>')
        var ficheiroInput = $('<input/>', {class: 'w3-input w3-cell', type:"file", name: "ficheiro"});
        
        $("#lista .w3-container:last").append(descLabel, descInput)
        $("#lista .w3-container:last").append(ficheiroLabel, ficheiroInput);
    });
}); 
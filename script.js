const formAluno = document.getElementById('formAluno');
const mensagemAlerta = document.getElementById('mensagemAlerta');

formAluno.addEventListener('submit', function(event) {
    event.preventDefault(); 

    const ra = document.getElementById('ra').value.trim(); 

    if (ra === "") {
        mensagemAlerta.innerHTML = '<div class="alert alert-danger">Preencha o RA</div>';
    } else if (isNaN(ra) || ra.length !== 8) {
        mensagemAlerta.innerHTML = '<div class="alert alert-danger">O RA deve ter exatamente 8 números</div>';
    } else {
        mensagemAlerta.innerHTML = '<div class="alert alert-success">Formulário Enviado Com Sucesso</div>';
    }
});
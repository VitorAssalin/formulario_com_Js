const formAluno = document.getElementById('formAluno');
const mensagemAlerta = document.getElementById('mensagemAlerta');

formAluno.addEventListener('submit', function(event) {
    event.preventDefault();

    // Captura os valores de todos os campos
    const ra = document.getElementById('ra').value.trim();
    const nome = document.getElementById('nome').value.trim();

    // Regex que aceita apenas letras e espaços (incluindo acentos)
    const apenasLetras = /^[A-Za-zÀ-ÿ\s]+$/;

    // 1. Validações do RA
    if (ra === "") {
        mensagemAlerta.innerHTML = '<div class="alert alert-danger">Preencha o RA</div>';
    } else if (isNaN(ra) || ra.length !== 8) {
        mensagemAlerta.innerHTML = '<div class="alert alert-danger">O RA deve ter exatamente 8 números</div>';
    
    // 2. Validações do Nome
    } else if (nome === "") {
        mensagemAlerta.innerHTML = '<div class="alert alert-danger">Informe o nome</div>';
    } else if (!apenasLetras.test(nome)) {
        mensagemAlerta.innerHTML = '<div class="alert alert-danger">O nome deve conter apenas letras</div>';
    
    // 3. Se tudo estiver correto
    } else {
        mensagemAlerta.innerHTML = '<div class="alert alert-success">Formulário Enviado Com Sucesso</div>';
    }
});
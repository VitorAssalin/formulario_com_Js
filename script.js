const formAluno = document.getElementById('formAluno');
const mensagemAlerta = document.getElementById('mensagemAlerta');

formAluno.addEventListener('submit', function(event) {
    event.preventDefault();

    // Captura os valores de todos os campos
    const ra = document.getElementById('ra').value.trim();
    const nome = document.getElementById('nome').value.trim();
    const senha = document.getElementById('senha').value.trim();
    const email = document.getElementById('email').value.trim();
    const curso =  document.getElementById('curso').value;
    const turnoSelecionado = document.querySelector('input[name="turno"]:checked');

    // Regex que aceita apenas letras e espaços (incluindo acentos)
    const apenasLetras = /^[A-Za-zÀ-ÿ\s]+$/;

    // Regex para a senha:
    // (?=.*[A-Z]) -> exige pelo menos uma letra maiúscula
    // (?=.*\d)     -> exige pelo menos um número
    // (?=.*[@$!%*?&]) -> exige pelo menos um caractere especial
    const regexSenha = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;

    // Regex para validar o formato do email (texto@texto.texto )
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Validações do RA
    if (ra === "") {
        mensagemAlerta.innerHTML = '<div class="alert alert-danger">Preencha o RA</div>';
    } else if (isNaN(ra) || ra.length !== 8) {
        mensagemAlerta.innerHTML = '<div class="alert alert-danger">O RA deve ter exatamente 8 números</div>';
    
    // Validações do Nome
    } else if (nome === "") {
        mensagemAlerta.innerHTML = '<div class="alert alert-danger">Informe o nome</div>';
    } else if (!apenasLetras.test(nome)) {
        mensagemAlerta.innerHTML = '<div class="alert alert-danger">O nome deve conter apenas letras</div>';
        
    // Validações do Email
    } else if (email == ""){
        mensagemAlerta.innerHTML = '<div class="alert alert-danger">Informe um email</div>';
        
    } else if (!regexEmail.test(email)) {
        mensagemAlerta.innerHTML = '<div class="alert alert-danger">Email inválido</div>';

    // Validações da Senha
    } else if(senha === "") {
        mensagemAlerta.innerHTML = '<div class="alert alert-danger">Preencha a senha</div>';

    } else if (!regexSenha.test(senha)) {
        mensagemAlerta.innerHTML = '<div class="alert alert-danger">A senha deve ter entre 8 e 20 caracteres, incluindo pelo menos uma letra maiúscula, um número e um caractere especial</div>';    
    
    // Validação de escolha do curso
    } else if (curso == ""){
        mensagemAlerta.innerHTML = '<div class="alert alert-danger">Por favor, selecione um curso</div>';

    // Validação de escolha do período    
    } else if (!turnoSelecionado){
        mensagemAlerta.innerHTML = '<div class="alert alert-danger">Informe o período</div>';

    // Menssagem de confirmção de sucesso das validações    
    } else {
        mensagemAlerta.innerHTML = '<div class="alert alert-success">Formulário Enviado Com Sucesso</div>';
    }
});
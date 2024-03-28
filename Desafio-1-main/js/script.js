document.addEventListener('DOMContentLoaded', function() {
    const contact = document.getElementById('email--form');

    contact.addEventListener('submit', function(event) {
        event.preventDefault();

        const nome = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const assunto = document.getElementById('subject').value;
        const mensagem = document.getElementById('message').value;

        const FormData = {
            nome: nome,
            email: email,
            assunto: assunto,
            mensagem: mensagem
        };

        let data = { mensagens: [] };
        try {
            const storedData = localStorage.getItem('Dados');
            if (storedData) {
                const parsedData = JSON.parse(storedData);
                if (parsedData && Array.isArray(parsedData.mensagens)) {
                    data = parsedData;
                } else {
                    console.error('Os dados armazenados não estão na estrutura esperada:', parsedData);
                }
            }
        } catch (e) {
            console.error('Erro ao parsear dados do localStorage:', e);
        }

        data.mensagens.push(FormData);
        localStorage.setItem('Dados', JSON.stringify(data));

        contact.reset();
        alert('Mensagem enviada com sucesso!');
        document.getElementById('submit--button').classList.add('default-button');
        document.getElementById('submit--button').classList.remove('default-button');
    });
});

function exibirMensagens() {
    var mensagens = JSON.parse(localStorage.getItem('Dados')) || { mensagens: [] };
    var listaMensagens = document.getElementById('listaMensagens');
    listaMensagens.innerHTML = ''; 

    mensagens.mensagens.forEach(function(mensagem) {
        var elem = document.createElement('div');
        elem.innerHTML = `
            <p><strong>Nome:</strong> ${mensagem.nome}</p>
            <p><strong>Email:</strong> ${mensagem.email}</p>
            <p><strong>Assunto:</strong> ${mensagem.assunto}</p>
            <p><strong>Mensagem:</strong> ${mensagem.mensagem}</p>
            <hr>
        `;
        listaMensagens.appendChild(elem);
    });
}

window.onload = exibirMensagens;

document.addEventListener('visibilitychange', function() {
    if (!document.hidden) {
        exibirMensagens();
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const clearLocalStorageBtn = document.getElementById('remove--button');

    clearLocalStorageBtn.addEventListener('click', function() {
        localStorage.removeItem("Dados");
        alert('LocalStorage limpo com sucesso!');
        window.location.reload();
    });
});
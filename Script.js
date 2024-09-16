// Validação e submissão de formulários
document.getElementById('formCliente').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Cliente cadastrado com sucesso!');
});

document.getElementById('formPet').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Pet cadastrado com sucesso!');
});

document.getElementById('formAgendamento').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Serviço agendado com sucesso!');
});

document.addEventListener('DOMContentLoaded', function() {
    const buttonHard = document.getElementById('buttonHard');
    const buttonSoft = document.getElementById('buttonSoft');
    const hardSkills = document.getElementById('hardSkills');
    const softSkills = document.getElementById('softSkills');

    // Initially hide softSkills
    softSkills.style.display = 'none';

    function toggleVisibility(element) {
        const displayStyle = window.getComputedStyle(element).getPropertyValue('display');
        element.style.display = displayStyle === 'none' ? 'flex' : 'none';
        console.log('element.style.display:', element.style.display);
    }

    function toggleButtonSelection(button) {
        // Remove a classe 'btn-selected' de ambos os botões
        buttonHard.classList.remove('btn-selected');
        buttonSoft.classList.remove('btn-selected');
        // Adiciona a classe 'btn-selected' ao botão clicado
        button.classList.add('btn-selected');
    }

    buttonHard.addEventListener('click', function(event) {
        event.stopPropagation();
        // Verifica se o botão já está selecionado
        if (buttonHard.classList.contains('btn-selected')) {
            return; // Se estiver selecionado, não faz nada
        }
        toggleVisibility(hardSkills);
        toggleVisibility(softSkills);
        toggleButtonSelection(buttonHard);
    });

    buttonSoft.addEventListener('click', function(event) {
        event.stopPropagation();
        // Verifica se o botão já está selecionado
        if (buttonSoft.classList.contains('btn-selected')) {
            return; // Se estiver selecionado, não faz nada
        }
        toggleVisibility(softSkills);
        toggleVisibility(hardSkills);
        toggleButtonSelection(buttonSoft);
    });
});

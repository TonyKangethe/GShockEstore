const tabButtons = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');


tabButtons.forEach(button => {
    button.addEventListener('click', () => {
    const targetTab = button.getAttribute('data-tab');


    tabButtons.forEach(btn => {
        btn.classList.remove('text-gray-700', 'border-blue-500');
        btn.classList.add('text-gray-500', 'border-transparent');
    });


    tabContents.forEach(content => {
        content.classList.add('hidden');
    });


    button.classList.remove('text-gray-500', 'border-transparent');
    button.classList.add('text-gray-700', 'border-blue-500');

    document.getElementById(targetTab).classList.remove('hidden');
    });
});
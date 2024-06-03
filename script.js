$(document).ready(function() {
    // Додаємо атрибут target="_blank" до всіх посилань з href, що починається з https://
    $('a[href^="https://"]').attr('target', '_blank');
    
    // Знаходимо всі <h2> з класом head і змінюємо колір фону
    $('h2.head').css('background-color', 'green');
    
    // Серед знайдених елементів <h2> з класом head знаходимо елементи з класом inner і змінюємо розмір шрифту
    $('h2.head .inner').css('font-size', '35px');
    
    // Знаходимо <div> елементи, які стоять безпосередньо після <h3> і переміщуємо їх над <h3>
    $('h3').next('div').each(function() {
        var divElement = $(this);
        var h3Element = divElement.prev('h3');
        divElement.insertBefore(h3Element);
    });
});
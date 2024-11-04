const textInput = document.getElementById('text-input');
const counter = document.getElementById('contador');

textInput.addEventListener('input', function() {
    const count = this.value.length;
    counter.textContent = count;

    if (count > 0) {
        counter.style.animation = 'pulse 0.5s ease';
        setTimeout(() => {
            counter.style.animation = '';
        }, 500);
    }

    if (count > 100) {
        counter.style.color = '#ff6b6b';
    } else if (count > 50) {
        counter.style.color = '#feca57';
    } else {
        counter.style.color = '#ffffff';
    } 
    });

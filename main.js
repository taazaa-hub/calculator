
const display = document.getElementById('display');

function appendDisplay(value) {
    if (value === '.') {
        const currentNumber = display.value.split(/[+\-*/]/).pop();

        if (currentNumber.includes('.')) {
            return;
        }
    }

    if (display.value === '0' && value !== '.') {
        display.value = value;
    } else {
        display.value += value;
    }
}

// Дэлгэцийг цэвэрлэх
function clearAll() {
    display.value = '0';
}

// Тооцоолол хийх
function calculate() {
    try {
        const result = eval(display.value);

        if (!Number.isFinite(result)) {
            display.value = 'Error';
        } else {
            display.value = result;
        }
    } catch (error) {
        display.value = 'Error';
    }
}

// Сүүлийн тэмдэгтийг устгах
function deleteLast() {
    display.value = display.value.length > 1
        ? display.value.slice(0, -1)
        : '0';
}

// Эерэг, сөрөг тэмдэг солих
function changeSign() {
    if (display.value === 'Error') {
        display.value = '0';
        return;
    }

    display.value = String(Number(display.value) * -1);
}

// Хувь бодох
function percent() {
    if (display.value === 'Error') {
        display.value = '0';
        return;
    }

    display.value = String(Number(display.value) / 100);
}
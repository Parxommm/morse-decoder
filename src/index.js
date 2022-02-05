const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let output = expr.match(/.{1,10}/g).map(substring => substring.match(/.{1,2}/g)); //разбиваем строку на подстроки через каждые 10 символов и каждую подстроку через каждые 2 символа
    output = output.map(substring => substring.includes('**') ? ['space'] : substring.filter(pair => pair !== '00').map(pair => (pair === '10') ? '.' : '-')); //убираем элементы равные '00' из подстрок
    output = output.map(substring => substring.join('')).map(morseLetter => (morseLetter === 'space') ? ' ' : MORSE_TABLE[morseLetter]).join(''); // склеиваем символы подстроки, декодируем подстроку и преобразуем массив в строку
    return output;
}


module.exports = {
    decode
}


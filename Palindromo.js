function verificaPalindromo(string) {
    if (!string) return console.log('Favor informar uma palavra');

    return string.split("").reverse().join("") === string;
}

console.log(verificaPalindromo("amora"));
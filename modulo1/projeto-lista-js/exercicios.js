// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  const altura = prompt("Fale uma altura")
  const largura = prompt("Fale uma largura")
  const resultado = altura*largura
  console.log(resultado)
}


// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  const anoatual = prompt("Em qual ano você está lendo essa mensagem?")
  const anonasci = prompt("Qual o seu ano de nascimento?")
  const idadeatual = anoatual - anonasci
  console.log (idadeatual)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  return peso/(altura*altura)
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
    const nome = prompt("Qual o seu nome?")
    const idade = prompt("Qual a sua idade?")
    const email = prompt("Qual o seu email?")
    
    console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
  //

} 

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
    const cor1 = prompt("Fale 1 cor preferida")
    const cor2 = prompt("Fale mais 1 cor preferida")
    const cor3 = prompt("Fale mais 1 cor preferida")
    const corespreferidas = [cor1, cor2, cor3]

  console.log(corespreferidas)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
    return string.toUpperCase()
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
    
  return custo/valorIngresso
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui

      return string1 >= string2
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
    return array[0]
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
return array[array.length - 1]
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
// implemente sua lógica aqui
    let first = array.at(0)
    let second = array.at(-1)

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui

  //string1 = ("")
  //string2 = ("")

  return string1.toLowerCase() == string2.toLowerCase()


}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
  let idade = prompt ("Você tem mais de 18 anos?") == "sim"
  let escolaridade = prompt ("Você possui ensino médio completo?") == "sim"
  let disponibilidade = prompt ("você possui disponibilidade exclusiva durante os horários do curso?") == "sim"

  console.log(idade && escolaridade && disponibilidade) 
}
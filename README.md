# teste Unitários

## Sumário

## Oque são

São progamas que testam funções ou métodos de forma unitária (um de cada vez) .  Afim de evitar error posteriores quando a aplicação já estiver em produção

## Como instalar:

para realizar os testes unitários vamos ulilzar o framework  chamado J**est** escolha pessoal  

### Com o npm ou npx

observação antes de começar inicie com: npm init -y

use npm install jest 

ou : npm install —save-dev jest

ou : npx install jest 

### Com o yarn

no yarn use

yarn add jest --dev

ou  yarn —dev jest

## Para charmar o test:

use npm test

ou: npm t

ou: npm run test

 ou yan test

## Criando o arquivo de testes

basta apenas  você criar um ariquivo  (nome que você quiser).test.(a extensão que você vai utilizarO

exemplos:

 meuCodigo.test.js  

 meuCodigo.test.ts

meuCodigo.tes.py

## importando o as funções para utilizar nos testes:

já que as funções serão criadas e utilizadas no seu projeto. Para testarmos e verificarmos  é nescessário importalas

### importando

vou criar uma função comun

square significa ao quadrado 

```jsx
function square(number =0){
	return number * number
}
```

existe  várias forma de importar um arquivo, eu vou te mostrar apenas uma 

```jsx
module.exports = (square)
//square a minha função
```

### chamando a função

primeiro você cria o seu arquivo (nome que desejar).test(extesão que vai usar)

e lá dentro você importa a nossa função

```jsx
const {o nome da função} = require('a url do seu arquivo que estã a sua função')
//no meu caso vai ficar assim
const {square} = require('./meuCodigo')

```

## comandos

### it (isto)

se quiser fazer um teste basicamente você precisa conhecer este comando

vou lhe mostar 

```jsx
it('oque a você vai testar',()=>{
	 expect(sua função(os paramêtros dela)).toBe(o resultado esperado)
})
```

um exemplo mais prático um uma função chamada sumTwoNumbers( somar dois número )  pede como parámetros dois números

```jsx
function sumTwoNumbers(Number1 = 0, Number2 = 0){
		return Numbe1 + Number2 
}
```

agora vamos testar 

```jsx
it('função que  soma dois numeros',() => {
		expect(sumTwoNumbers(3,2)).toBe(5)
})
```

### expect (expectativa) an toBe(para ser)

quando chamamos uma função temo a  expectativa que ele retorne oque desejamos e para isto fazemos um teste para que está expectativa seja alcançada sempre que está função seja executada

então temos 

```jsx
expectaiva(função que executar(parâmetros)).paraSer(o resultaodo que  a função tem retornar)
```

vou usar  utilizar a mesma função que eu utilizei anteriomente

- função sumTwoNumbers

    ```jsx
    function sumTwoNumbers(Number1 = 0, Number2 = 0){
    		return Numbe1 + Number2 
    }
    ```

vamos lá

```jsx
expect(sumTwoNumbers(7,22).toBe(29)
```

### describe (descreva)

se você tiver muitas fucionalidades que executam coisas muito diferentes com calculos ou lidar com strings.  é recomendavel que você separe as 

assim

```jsx
describe('funções que lidam com calulos',() => {
		it('função que soma dois valores',() => {
			exact(SumTwoNumber(32,2).toBe(34)
	}
})
describe('funções que lidam com textos',()=>{
		it('função que mostra o sobrenome',()=>{
		exact(lastName('afonso dos santos').toBe('santos')
	}
})
```

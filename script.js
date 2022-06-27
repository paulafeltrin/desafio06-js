// Crie um objeto que receba ao menos três propriedades sobre você.
let sobreMim = {
    nome: "Paula",
    idade: 24,
    Nacionalidade: "Brasileira"
}
console.log(sobreMim);

// Adicione uma nova propriedade sem alterar seu objeto inicial.
sobreMim.telefone = 46_6987-0000;

console.log(sobreMim);

// Remova uma propriedade desse objeto.
delete sobreMim.idade;

console.log(sobreMim);

//Mostre no console todas as propriedades desse objeto.
console.log(sobreMim);

// Crie um array  chamado "cadastro" contendo ao menos 5 objetos.
//Cada objeto deve receber as seguintes propriedades: nome,  idade,  telefone, amigos. 
//Na propriedade amigos, adicione ao menos 4 itens.
let cadastro = [
    {
        nome: "Guilherme",
        idade: 32,
        telefone: 65_0000-0000,
        amigos: ["João", "Paula", "Mateus", "Luan"]
    },
    {
        nome: "Mariana",
        idade: 18,
        telefone: 11_0000-0000,
        amigos: ["Luan", "Guilherme", "Dandara", "Marcos"]
    },
    {
        nome: "Paula",
        idade: 27,
        telefone: 46_0000-0000,
        amigos: ["Luan", "Marcos", "Dandara", "Mariana"]
    },
    {
        nome: "Lucas",
        idade: 18,
        telefone: 11_0000-0000,
        amigos: ["Luan", "Guilherme", "Paula", "Mariana"]
    },
    {
        nome: "Marcos",
        idade: 20,
        telefone: 45_0000-0000,
        amigos: ["Luan", "Paula", "Dandara", "Mariana"]
    },
]

console.log(cadastro);

// Mostre no console o nome de um amigo de cada lista.
console.log(cadastro[0].amigos[3]);
console.log(cadastro[1].amigos[0]);
console.log(cadastro[2].amigos[2]);
console.log(cadastro[3].amigos[1]);
console.log(cadastro[4].amigos[3]);
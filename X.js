let alunos = [{
    nome: "Aluno1", 
    idade: 0, 
    curso:"Curso1", 
    notas: [7, 4, 8],
}]
console.log(alunos[0].nome + " tirou a nota: " + alunos[0].notas[0])
alunos[0].idade = 22
alunos[0].notas[4] = 9
let y = JSON.stringify(alunos[0])
console.log(y)
y = JSON.parse(y)
for(const x of alunos){
    console.log(x)
}
let m = 0
for (const z of alunos[0].notas){
    console.log(z)
    if (z != undefined){
        m = m + z
    }
    console.log(m)
}
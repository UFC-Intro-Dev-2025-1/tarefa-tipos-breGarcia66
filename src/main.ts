// Escreva seu código aqui!
const professora: string = 'Lana Mesquita';

const totalDeAlunos: number = 25;

let dataDeHoje;

const laboratorio: {
    nome: string;
    bloco: number;
    numero: number;
} = {
    nome: 'Laboratório de Informática',
    bloco: 3,
    numero: 3
};

const projetor: {
    ligado: boolean;
    conectado: boolean;
} = {
    ligado: true,
    conectado: true
}

const arcondicionado: {
    ligado: boolean;
    temperatura: number;
} = {
    ligado: true,
    temperatura: 23
}

console.log(`
            Professora: ${professora}\n
            Quantidade de alunos: ${totalDeAlunos}\n
            Laboratorio ocupado: ${laboratorio.nome} ${laboratorio.numero} - bloco ${laboratorio.bloco}\n
            Status do projetor: ${projetor.ligado? 'ligado' : 'desligado'} e ${projetor.conectado? 'conectado' : 'desconectado'}\n
            Status do ar-condicionado: ${arcondicionado.ligado? 'ligado' : 'desligado'}  (${arcondicionado.ligado? arcondicionado.temperatura + '°C' : 'sem temperatura'})\n
            Data de hoje: ${dataDeHoje}
            `);
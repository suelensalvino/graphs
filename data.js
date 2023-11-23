const data = [
    {
        'discipline': 'Cálculo para Computação',
        'prerequisites': []
    },
    {
        'discipline': 'Ética, Cidadania e Sustentabilidade',
        'prerequisites': []
    },
    {
        'discipline': 'Fundamentos de Computação para Internet',
        'prerequisites': []
    },
    {
        'discipline': 'Fundamentos do Design Digital',
        'prerequisites': []
    },
    {
        'discipline': 'Design de Interface',
        'prerequisites': ['Fundamentos do Design Digital']
    },
    {
        'discipline': 'Design de Interação',
        'prerequisites': ['Design de Interface']
    },
    {
        'discipline': 'IHC',
        'prerequisites': ['Design de Interação']
    },
    {
        'discipline': 'Inglês I',
        'prerequisites': []
    },
    {
        'discipline': 'Inglês II',
        'prerequisites': ['Inglês I']
    },
    {
        'discipline': 'Inglês III',
        'prerequisites': ['Inglês II']
    },
    {
        'discipline': 'Inglês IV',
        'prerequisites': ['Inglês III']
    },
    {
        'discipline': 'Introdução à Administração',
        'prerequisites': []
    },
    {
        'discipline': 'Programação Imperativa',
        'prerequisites': []
    },
    {
        'discipline': 'Redes de Computadores',
        'prerequisites': []
    },
    {
        'discipline': 'Banco de Dados',
        'prerequisites': []
    },
    {
        'discipline': 'Desenvolvimento para Web I',
        'prerequisites': ['Programação Imperativa']
    },
    {
        'discipline': 'Desenvolvimento para Web II',
        'prerequisites': ['Desenvolvimento para Web I']
    },
    {
        'discipline': 'Estatística e Probabilidade',
        'prerequisites': ['Cálculo para Computação']
    },
    {
        'discipline': 'Interconexão e Serviços de Redes',
        'prerequisites': ['Redes de Computadores']
    },
    {
        'discipline': 'Processos Psicológicos e Interação Social',
        'prerequisites': []
    },
    {
        'discipline': 'Projeto e Desenvolvimento I',
        'prerequisites': ['Programação Imperativa']
    },
    {
        'discipline': 'Projeto e Desenvolvimento II',
        'prerequisites': ['Projeto e Desenvolvimento I', 'Desenvolvimento para Web I']
    },
    {
        'discipline': 'Projeto e Desenvolvimento III',
        'prerequisites': ['Projeto e Desenvolvimento II', 'Desenvolvimento para Web II']
    },
    {
        'discipline': 'Projeto e Desenvolvimento IV',
        'prerequisites': ['Projeto e Desenvolvimento III']
    },
    {
        'discipline': 'Internet das Coisas',
        'prerequisites': []
    },
    {
        'discipline': 'Libras',
        'prerequisites': []
    },
    {
        'discipline': 'Prática Profissional',
        'prerequisites': []
    },
    {
        'discipline': 'Recuperação de Informação',
        'prerequisites': ['Algoritmos e Estruturas de Dados']
    },
    {
        'discipline': 'Tópicos Avançados em Desenvolvimento Web',
        'prerequisites': []
    },
    {
        'discipline': 'POO',
        'prerequisites': ['Programação Imperativa']
    },
    {
        'discipline': 'Desenvolvimento para Dispositivos Móveis',
        'prerequisites': ['Programação Imperativa']
    },
    {
        'discipline': 'Sistemas Distribuídos',
        'prerequisites': ['Redes de Computadores']
    },
    {
        'discipline': 'Inteligência Artificial',
        'prerequisites': ['Algoritmos e Estrutura de Dados']
    },
    {
        'discipline': 'Tópicos Avançados em Bancos de Dados',
        'prerequisites': ['Banco de Dados']
    },
    {
        'discipline': 'Trabalho de Conclusão de Curso',
        'prerequisites': []
    }
];

const edges = [];

for (const subject in data) {
    if (data[subject].prerequisites.length === 0) {
        edges.push([data[subject].discipline, ""]);
    } else {
        for (const dependency of data[subject].prerequisites) {
            edges.push([data[subject].discipline, dependency]);
        }
    }
}

const graph = new Graph(edges, directed = true);

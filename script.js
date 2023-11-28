// Obtém a referência aos elementos HTML que serão manipulados
const vertexSelect = document.getElementById('vertex-select');
const directDependents = document.getElementById('direct-dependents');
const indirectDependents = document.getElementById('indirect-dependents');
const dependenciesList = document.getElementById('dependencies');

// Função para obter a cor associada a uma disciplina
function getColorForSubject(subject) {
    const subjectData = data.find(obj => obj.discipline === subject);
    return subjectData ? subjectData.color : '#000';
}

// Preenche o menu suspenso com as disciplinas disponíveis
function populateSelect() {
    const vertices = graph.getVertices();
    const index = vertices.indexOf('');
    if (index !== -1) {
        vertices.splice(index, 1);
    }
    vertices.forEach((vertex) => {
        const option = document.createElement('option');
        option.value = vertex;
        option.textContent = vertex;
        vertexSelect.appendChild(option);
    });
}

// Alterna o tamanho do logotipo
function toggleLogoSize(logo) {
    logo.classList.toggle('logo-enlarged');
}

// Manipula o envio do formulário
function submitForm() {
    // Obtém a disciplina selecionada
    const vertex = vertexSelect.value;

    // Encontra dependências diretas e indiretas da disciplina selecionada
    const dependents = findRelatedVertices(graph, vertex);
    const directDependencies = dependents[0];
    const indirectDependencies = dependents[1];

    // Atualiza a interface com as dependências indiretas
    const indirectDependenciesContainer = document.getElementById('indirect-dependents');
    indirectDependenciesContainer.innerHTML = '';
    if (indirectDependencies.length === 0) {
        const message = document.createElement('p');
        message.textContent = 'Nenhum pré-requisito indireto encontrado.';
        indirectDependenciesContainer.appendChild(message);
    } else {
        indirectDependencies.forEach((subject) => {
            const box = document.createElement('div');
            box.className = 'box';
            box.style.backgroundColor = getColorForSubject(subject);
            const text = document.createElement('span');
            text.textContent = subject;
            box.appendChild(text);
            indirectDependenciesContainer.appendChild(box);
        });
    }

    // Atualiza a interface com as dependências diretas
    const directDependenciesContainer = document.getElementById('direct-dependents');
    directDependenciesContainer.innerHTML = '';
    if (directDependencies.length === 0) {
        const message = document.createElement('p');
        message.textContent = 'Nenhum pré-requisito direto encontrado.';
        directDependenciesContainer.appendChild(message);
    } else {
        directDependencies.forEach((subject) => {
            const box = document.createElement('div');
            box.className = 'box';
            box.style.backgroundColor = getColorForSubject(subject);
            const text = document.createElement('span');
            text.textContent = subject;
            box.appendChild(text);
            directDependenciesContainer.appendChild(box);
        });
    }

    // Atualiza a interface com as disciplinas que dependem da disciplina selecionada
    const dependenciesContainer = document.getElementById('dependencies');
    dependenciesContainer.innerHTML = '';
    const dependencies = findDependenciesInGraph(graph, vertex);
    if (dependencies.length === 0) {
        const message = document.createElement('p');
        message.textContent = 'Nenhuma disciplina dependente encontrada.';
        dependenciesContainer.appendChild(message);
    } else {
        dependencies.forEach((dependency) => {
            const box = document.createElement('div');
            box.className = 'box';
            box.style.backgroundColor = getColorForSubject(dependency);
            const text = document.createElement('span');
            text.textContent = dependency;
            box.appendChild(text);
            dependenciesContainer.appendChild(box);
        });
    }
}

// Preenche o menu suspenso ao carregar a página
populateSelect();

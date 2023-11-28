class Graph {
    // Classe para representar um grafo direcionado

    constructor(edges, directed = false) {
        this.directed = directed;
        this.neighbors = {};
        this.addEdges(edges);
    }

    addEdges(edges) {
        // Adiciona arestas ao grafo
        for (const [x, y] of edges) {
            if (!this.neighbors[x]) {
                this.neighbors[x] = [];
            }
            this.neighbors[x].push(y);
            if (!this.directed) {
                if (!this.neighbors[y]) {
                    this.neighbors[y] = [];
                }
                this.neighbors[y].push(x);
            } else {
                if (!this.neighbors[y]) {
                    this.neighbors[y] = [];
                }
            }
        }
    }

    getEdges() {
        // Obtém todas as arestas do grafo
        const edges = [];
        for (const key in this.neighbors) {
            for (const value of this.neighbors[key]) {
                edges.push([key, value]);
            }
        }
        return edges;
    }

    getVertices() {
        // Obtém todos os vértices do grafo
        return Object.keys(this.neighbors);
    }

    edgeExists(edge) {
        // Verifica se uma aresta existe no grafo
        const [x, y] = edge;
        return x in this.neighbors && this.neighbors[x].includes(y);
    }
}

function findRelatedVertices(graph, vertex) {
    // Encontra dependências diretas e indiretas de um vértice
    const visited = {};
    for (const key of graph.getVertices()) {
        visited[key] = false;
    }
    const initialVertex = vertex;
    const relations = [];
    const directDependents = [];
    const indirectDependents = [];

    function recDfs(graph, vertex) {
        visited[vertex] = true;

        for (const neighbor of graph.neighbors[vertex]) {
            if (!visited[neighbor]) {
                if (vertex === initialVertex && neighbor !== "") {
                    directDependents.push(neighbor);
                } else if (neighbor !== "") {
                    indirectDependents.push(neighbor);
                }
                relations.push([vertex, neighbor]);
                recDfs(graph, neighbor);
            }
        }
    }

    recDfs(graph, vertex);

    return [directDependents, indirectDependents, relations];
}

function findDependenciesInGraph(graph, vertex) {
    // Encontra as dependências de um vértice no grafo
    const visited = {};
    for (const key of graph.getVertices()) {
        visited[key] = false;
    }
    const targetVertex = vertex;
    const dependencies = [];
    const dependenciesPaths = [];

    function recDfs(graph, vertex) {
        visited[vertex] = true;
        dependencies.push(vertex);

        if (vertex === targetVertex) {
            dependenciesPaths.push([...dependencies]);
        } else {
            for (const neighbor of graph.neighbors[vertex]) {
                if (!visited[neighbor]) {
                    recDfs(graph, neighbor);
                }
            }
        }

        dependencies.pop();
        visited[vertex] = false;
    }

    for (const vertex of graph.getVertices()) {
        if (!visited[vertex]) {
            recDfs(graph, vertex);
        }
    }

    const result = [];
    for (const paths of dependenciesPaths) {
        const temp = new Set([...paths].filter(x => !result.includes(x)));
        result.push(...temp);
    }

    const index = result.indexOf(targetVertex);
    if (index !== -1) {
        result.splice(index, 1);
    }
    result.sort();

    return result;
}

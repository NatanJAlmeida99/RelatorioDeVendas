# Relatório de Vendas com Async/Await

Exercício de JavaScript assíncrono: consumo de uma API simulada com
`async/await`, tratamento de erros e manipulação de arrays.

## O que o projeto faz

A função `gerarRelatorioVendas(simularErro)` busca pedidos em uma API
simulada (Promise com `setTimeout`) e gera um relatório em JSON com:

- `quantidadeVendas`: total de pedidos pagos
- `faturamentoTotal`: soma dos valores dos pedidos pagos
- `clientes`: nomes dos clientes que pagaram

Se a API falhar, o erro é capturado e exibido no console.

## Conceitos praticados

- Arrow functions e `async/await`
- `try/catch` com Promises rejeitadas
- `JSON.parse()` e `JSON.stringify()`
- `filter`, `map` e `reduce`

## Como executar

Requer [Node.js](https://nodejs.org/).

```bash
node index.js
```

## Exemplo de saída

Cenário de sucesso (`gerarRelatorioVendas(false)`):

```json
{"quantidadeVendas":3,"faturamentoTotal":830,"clientes":["Ana","Beatriz","Natan"]}
```

Cenário de erro (`gerarRelatorioVendas(true)`):

```
Erro 500: Falha ao conectar com o banco de dados.
```

## Estrutura do histórico

Cada passo do exercício virou um commit, então dá para acompanhar a
evolução com `git log --oneline`.

## Autor

Natan: [GitHub](https://github.com/NatanJAlmeida99)
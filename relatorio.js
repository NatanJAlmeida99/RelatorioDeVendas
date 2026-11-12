const buscarPedidosAPI = (simularErro) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (simularErro) {
        reject("Erro 500: Falha ao conectar com o banco de dados.");
      } else {
        const respostaJSON = `[
          { "id": 101, "cliente": "Ana", "valor": 250, "pago": true },
          { "id": 102, "cliente": "Carlos", "valor": 120, "pago": false },
          { "id": 103, "cliente": "Beatriz", "valor": 400, "pago": true },
          { "id": 104, "cliente": "Natan", "valor": 180, "pago": true }
        ]`;
        resolve(respostaJSON);
      }
    }, 1000);
  });
};

const gerarRelatorioVendas = async (simularErro) => {
  try {
    const respostaJSON = await buscarPedidosAPI(simularErro);
    const pedidos = JSON.parse(respostaJSON);

    const pedidosPagos = pedidos.filter((e) => e.pago);
    const clientesPagantes = pedidosPagos.map((e) => e.cliente);
    const faturamentoTotal = pedidosPagos.reduce(
      (acc, atual) => acc + atual.valor,
      0,
    );
    console.log(faturamentoTotal);

    const relatorio = {
      quantidadeVendas: pedidosPagos.length,
      faturamentoTotal,
      clientes: clientesPagantes,
    };
    console.log(JSON.stringify(relatorio));
  } catch (error) {
    console.log(error);
  }
};

gerarRelatorioVendas(false);
gerarRelatorioVendas(true);

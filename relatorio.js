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

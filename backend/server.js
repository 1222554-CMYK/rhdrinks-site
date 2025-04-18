
const express = require('express');
const app = express();
app.use(express.json());

app.get('/api/comandas', (req, res) => {
  res.json([{ codigo: '8881', total: 18.00 }]);
});

app.listen(3000, () => console.log("Servidor rodando na porta 3000"));

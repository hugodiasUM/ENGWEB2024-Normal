const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = 16000;

// Conectar ao MongoDB
mongoose.connect('mongodb://localhost:27017/contratos', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Definir o esquema e o modelo
const contratoSchema = new mongoose.Schema({
  idcontrato: { type: Number, required: true, unique: true },
  nAnuncio: String,
  tipoprocedimento: String,
  objectoContrato: String,
  dataPublicacao: String,
  dataCelebracaoContrato: String,
  precoContratual: String,
  prazoExecucao: Number,
  NIPC_entidade_comunicante: Number,
  entidade_comunicante: String,
  fundamentacao: String,
}, { _id: false });

const Contrato = mongoose.model('Contrato', contratoSchema);

// Middleware
app.use(bodyParser.json());

// Rotas
app.get('/contratos', async (req, res) => {
  const { entidade, tipo } = req.query;

  let query = {};

  if (entidade) {
    query.entidade_comunicante = new RegExp(`^${entidade}$`, 'i');  // Case insensitive match
  }
  
  if (tipo) {
    query.tipoprocedimento = tipo;
  }

  const contratos = await Contrato.find(query);
  res.json(contratos);
});

app.get('/contratos/entidades', async (req, res) => {
    const entidades = await Contrato.distinct('entidade_comunicante');
    res.json(entidades.sort());
  });
  
  app.get('/contratos/tipos', async (req, res) => {
    const tipos = await Contrato.distinct('tipoprocedimento');
    res.json(tipos.sort());
  });

app.get('/contratos/:id', async (req, res) => {
  const contrato = await Contrato.findOne({ idcontrato: req.params.id });
  res.json(contrato);
});

app.post('/contratos', async (req, res) => {
  try {
    const novoContrato = new Contrato(req.body);
    await novoContrato.save();
    res.status(201).json(novoContrato);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.delete('/contratos/:id', async (req, res) => {
  await Contrato.deleteOne({ idcontrato: req.params.id });
  res.sendStatus(204);
});

app.put('/contratos/:id', async (req, res) => {
  const contrato = await Contrato.findOneAndUpdate({ idcontrato: req.params.id }, req.body, { new: true });
  res.json(contrato);
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`API rodando na porta ${port}`);
});

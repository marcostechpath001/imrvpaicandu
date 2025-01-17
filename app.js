const express = require('express');
const app = express();
const fs = require('fs');
const port = 3000;

// Middleware para processar JSON
app.use(express.json());

// Rota para receber dados do visitante
app.post('/proteger-site', (req, res) => {
    const visitorData = req.body;

    // Validação básica
    if (!visitorData.ip || !visitorData.timestamp) {
        return res.status(400).json({ message: 'Dados incompletos' });
    }

    // Salvar informações em um log
    const log = `IP: ${visitorData.ip}, País: ${visitorData.country}, Região: ${visitorData.region}, Cidade: ${visitorData.city}, SO: ${visitorData.operatingSystem}, Timestamp: ${visitorData.timestamp}\n`;
    fs.appendFileSync('security-logs.txt', log);

    console.log('Dados do visitante registrados:', visitorData);

    res.status(200).json({ message: 'Dados registrados com sucesso' });
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config(); // Carga las variables de entorno desde .env (si existe, útil para desarrollo local)

const app = express();
const port = process.env.PORT || 3000;

// Tu clave API de OpenAI. En Replit, la configurarás como un "Secret".
// Para desarrollo local, puedes crear un archivo .env con OPENAI_API_KEY=tu_clave
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

if (!OPENAI_API_KEY) {
    console.error("Error: La variable de entorno OPENAI_API_KEY no está configurada.");
    // Considera no iniciar el servidor si la clave no está presente, o manejarlo de otra forma.
}

app.use(cors()); // Habilita CORS para todas las rutas
app.use(express.json()); // Middleware para parsear JSON en las solicitudes

// Endpoint para crear un nuevo hilo (thread)
app.post('/v1/threads', async (req, res) => {
    if (!OPENAI_API_KEY) {
        return res.status(500).json({ error: 'Configuración del servidor incompleta: falta la clave API.' });
    }
    try {
        const response = await fetch('https://api.openai.com/v1/threads', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${OPENAI_API_KEY}`,
                'Content-Type': 'application/json',
                'OpenAI-Beta': 'assistants=v2'
            },
            body: JSON.stringify(req.body) // Reenvía el cuerpo de la solicitud original si es necesario
        });
        const data = await response.json();
        if (!response.ok) {
            console.error("Error desde OpenAI al crear thread:", data);
            return res.status(response.status).json(data);
        }
        res.json(data);
    } catch (error) {
        console.error('Error en proxy al crear thread:', error);
        res.status(500).json({ error: 'Error interno del servidor al contactar OpenAI.' });
    }
});

// Endpoint para añadir un mensaje a un hilo
app.post('/v1/threads/:threadId/messages', async (req, res) => {
    if (!OPENAI_API_KEY) {
        return res.status(500).json({ error: 'Configuración del servidor incompleta: falta la clave API.' });
    }
    const { threadId } = req.params;
    try {
        const response = await fetch(`https://api.openai.com/v1/threads/${threadId}/messages`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${OPENAI_API_KEY}`,
                'Content-Type': 'application/json',
                'OpenAI-Beta': 'assistants=v2'
            },
            body: JSON.stringify(req.body)
        });
        const data = await response.json();
        if (!response.ok) {
            console.error("Error desde OpenAI al añadir mensaje:", data);
            return res.status(response.status).json(data);
        }
        res.json(data);
    } catch (error) {
        console.error('Error en proxy al añadir mensaje:', error);
        res.status(500).json({ error: 'Error interno del servidor al contactar OpenAI.' });
    }
});

// Endpoint para crear un run
app.post('/v1/threads/:threadId/runs', async (req, res) => {
    if (!OPENAI_API_KEY) {
        return res.status(500).json({ error: 'Configuración del servidor incompleta: falta la clave API.' });
    }
    const { threadId } = req.params;
    try {
        const response = await fetch(`https://api.openai.com/v1/threads/${threadId}/runs`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${OPENAI_API_KEY}`,
                'Content-Type': 'application/json',
                'OpenAI-Beta': 'assistants=v2'
            },
            body: JSON.stringify(req.body)
        });
        const data = await response.json();
        if (!response.ok) {
            console.error("Error desde OpenAI al crear run:", data);
            return res.status(response.status).json(data);
        }
        res.json(data);
    } catch (error) {
        console.error('Error en proxy al crear run:', error);
        res.status(500).json({ error: 'Error interno del servidor al contactar OpenAI.' });
    }
});

// Endpoint para obtener el estado de un run
app.get('/v1/threads/:threadId/runs/:runId', async (req, res) => {
    if (!OPENAI_API_KEY) {
        return res.status(500).json({ error: 'Configuración del servidor incompleta: falta la clave API.' });
    }
    const { threadId, runId } = req.params;
    try {
        const response = await fetch(`https://api.openai.com/v1/threads/${threadId}/runs/${runId}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${OPENAI_API_KEY}`,
                'OpenAI-Beta': 'assistants=v2'
            }
        });
        const data = await response.json();
        if (!response.ok) {
            console.error("Error desde OpenAI al obtener estado de run:", data);
            return res.status(response.status).json(data);
        }
        res.json(data);
    } catch (error) {
        console.error('Error en proxy al obtener estado de run:', error);
        res.status(500).json({ error: 'Error interno del servidor al contactar OpenAI.' });
    }
});

// Endpoint para listar mensajes de un hilo
app.get('/v1/threads/:threadId/messages', async (req, res) => {
    if (!OPENAI_API_KEY) {
        return res.status(500).json({ error: 'Configuración del servidor incompleta: falta la clave API.' });
    }
    const { threadId } = req.params;
    const queryParams = new URLSearchParams(req.query).toString(); // Para pasar parámetros como 'order', 'limit'
    try {
        const response = await fetch(`https://api.openai.com/v1/threads/${threadId}/messages?${queryParams}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${OPENAI_API_KEY}`,
                'OpenAI-Beta': 'assistants=v2'
            }
        });
        const data = await response.json();
        if (!response.ok) {
            console.error("Error desde OpenAI al listar mensajes:", data);
            return res.status(response.status).json(data);
        }
        res.json(data);
    } catch (error) {
        console.error('Error en proxy al listar mensajes:', error);
        res.status(500).json({ error: 'Error interno del servidor al contactar OpenAI.' });
    }
});

// Ruta de prueba para verificar que el servidor funciona
app.get('/', (req, res) => {
  res.send('Servidor proxy para OpenAI está funcionando!');
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Servidor proxy escuchando en http://0.0.0.0:${port}`);
}); 
const express = require('express');
const cors = require('cors');
const routerApi = require('./routes');

const {
  logErrors,
  errorHandler,
  boomErrorHandler,
} = require('./middlewares/errorHandler');

const app = express();
const port = process.env.PORT || 3002;

app.use(express.json()); ///middleware
const whitelist = ['http://localhost:8080/', 'https://myapp.co'];
const options = {
  origin: (origin, callback) => {
    if (whitelist.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('No Permitido'));
    }
  },
};
app.use(cors(options));

app.get('/', (req, res) => {
  res.send('hola MI SERVER EN EXPRESS');
});

app.get('/nueva-ruta', (req, res) => {
  res.send('hola soy ');
});
routerApi(app);
app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log('Mi Port' + port);
});

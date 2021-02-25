import app from './app';
import env from './config/connection';

app.listen(env.connection.PORT, env.connection.HOST, () => {
  console.log("servidor rodando na porta " + env.connection.PORT);
})
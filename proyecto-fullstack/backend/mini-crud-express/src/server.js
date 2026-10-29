// encender servidor
const app = require("./app");

const puerto=3000;

app.listen(puerto, () => {
  console.log(`Api tareas escuchando en http://localhost:${puerto}/api/tareas`);
}   
)


                            
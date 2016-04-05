const app = require("koa")();
const serve = require("koa-static");
const config = require("config");

app.use(serve(config.public_path));

app.listen(3000);

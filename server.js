const app = require("koa")();
const serve = require("koa-static");
const path = require("path");

app.use(serve(path.join(__dirname, "./dist")));

app.listen(3000);

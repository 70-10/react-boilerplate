import koa from "koa";
import serve from "koa-static";
import config from "config";

const app = koa();
app.use(serve(config.public_path));

app.listen(3000);

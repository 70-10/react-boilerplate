import "babel-polyfill";
import path from "path";
import koa from "koa";
import koaRouter from "koa-router";
import serve from "koa-static";
import webpack from "webpack";
import webpackConfig from "../../webpack.config.dev";
import config from "config";

const app = koa();
const router = koaRouter();
const compiler = webpack(webpackConfig);

router.get("/", function *(next) {
  this.body = `
  <!DOCTYPE html>
  <html lang="ja">
  <head>
    <meta charset="UTF-8">
    <title>Boilerplate</title>
  </head>
  <body>
    <div id="app"></div>
    <script src="./static/vendor.bundle.js"></script>
    <script src="./static/bundle.js"></script>
  </body>
  </html>
  `;
});


app.use(require("koa-webpack-dev-middleware")(compiler, {
  noInfo: true,
  publicPath: webpackConfig.output.publicPath,
}));

app.use(require("koa-webpack-hot-middleware")(compiler));

app.use(router.routes())
   .use(router.allowedMethods());
app.listen(3001);

const { VueLoaderPlugin } = require("vue-loader");
const path = require("path");
const glob = require("glob");
const list = {};

async function makeList(dirPath, list) {
  const files = glob.sync(`${dirPath}/**/index.js`);
  for (let file of files) {
    const component = file.split(/[/.]/)[2];
    list[component] = `./${file}`; //各个组件分别打包
  }

  console.log(list);
}

makeList("components/lib", list);

module.exports = {
  mode: "development",
  entry: list,
  output: {
    filename: "[name].umd.js",
    path: path.resolve(__dirname, "dist"),
    library: "mui",
    libraryTarget: "umd",
  },
  plugins: [new VueLoaderPlugin()],
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: [
          {
            loader: "vue-loader",
          },
        ],
      },
    ],
  },
};

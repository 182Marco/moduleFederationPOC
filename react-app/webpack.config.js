const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "remoteEntry.js", // Nome del file esposto via Module Federation
    publicPath: "http://localhost:3001/", // URL dove sarà servito
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "react_app", // Nome del modulo remoto
      filename: "remoteEntry.js",
      exposes: {
        "./App": "./src/App", // Espone il componente `App`
      },
      shared: ["react", "react-dom"], // Dipendenze condivise con l'app parent
    }),
  ],
  devServer: {
    port: 3001,
    hot: true,
  },
};

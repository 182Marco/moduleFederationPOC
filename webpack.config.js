const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  mode: "development",
  devServer: {
    port: 3001, // Usa una porta diversa per la tua app
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "appReact", // Nome della tua app React
      filename: "remoteEntry.js", // Nome del file che conterrà l'entry remoto
      exposes: {
        "./App": "./src/App", // Esponi il componente principale
      },
      shared: {
        react: { singleton: true },
        "react-dom": { singleton: true },
      },
    }),
  ],
};

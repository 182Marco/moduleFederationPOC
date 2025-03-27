const path = require("path");

module.exports = {
  entry: "./react-app/src/main.tsx", // Modifica qui per indicare il tuo main.tsx
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".jsx"], // Permette di risolvere file .ts, .tsx, .js, .jsx
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/, // Gestisce file TypeScript (.ts e .tsx)
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/, // Gestisce file SASS/SCSS
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  devServer: {
    static: path.join(__dirname, "public"),
    port: 3000,
  },
};

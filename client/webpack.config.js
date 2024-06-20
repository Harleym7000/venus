const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserJsPlugin = require("terser-webpack-plugin");
const {resolve} = require("path")
const config = {
    target: "web",
    entry: {
        polyfils: ["@babel/polyfill"],
        root: "./src/index.tsx"
    },
    output: {
        path: __dirname + "dist",
        publicPath: "/",
        filename: "[name].[hash].js"
    },
    resolve: {
        alias: {
            react: resolve("node_modules/react")
        },
        extensions: [".tsx", ".ts", ".js", ".json", ".html", "jsx", "svg", "png", "jpg"],
        modules: ["node_modules", path.resolve(__dirname, "..", "src")]
    },
    plugins: [
        new webpack.NoEmitOnErrorsPlugin(),
        new HtmlWebpackPlugin({
            title: "venus",
            template: "src/index.html",
            filename: "index.html",
//            favicon: "./src/main/resources/favicon.ico"
        }),
        new webpack.DefinePlugin({
            "process.env": {
                "NODE_ENV": JSON.stringify(process.env.NODE_ENV),
                "LOGGER_ENABLED": JSON.stringify(process.env.LOGGER_ENABLED)
            },
        }),
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx|ts|tsx)$/,
                use: {
                    loader: "babel-loader",
                    options: {
                        babelrc: true
                    }
                }
            },
            {
                test: /(\.css)$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ],
            },
            {
                test: /\.(jp?g|svg|png)$/i,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            outputPath: 'images/',
                            name: "[name].[ext]",
                        }
                    }
                ]
            }
        ]
    }
};

if (process.env.NODE_ENV === "local") {
    config.devtool = "eval-source-map";
    config.plugins.push(new webpack.HotModuleReplacementPlugin());
    config.devServer = {
        contentBase: "./dist", hot: true, historyApiFallback: true
    };
} else {
    config.entry = ["@babel/polyfill", "./src/index.tsx"];
    config.devServer = {historyApiFallback: true};
    (config.optimization = {
        minimizer: [
            new TerserJsPlugin({
                cache: false,
                parallel: true,
                sourceMap: false
            })
        ]
    }),
        config.plugins.push(new webpack.optimize.AggressiveMergingPlugin());
}

module.exports = config;
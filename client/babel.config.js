module.exports = {
    env: {
        production: {
            compact: true,
            sourceType: 'unambiguous',
            presets: [
                "@babel/preset-env",
                "@babel/preset-react"
            ], plugins: [
                "@emotion",
                "@babel/plugin-proposal-class-properties",
                "@babel/plugin-transform-runtime",
                "@babel/plugin-transform-react-jsx",
                "@babel/plugin-proposal-optional-chaining"
            ]
        }, test: {
            compact: false,
            presets: [["@babel/preset-env"], "@babel/preset-react"],
            plugins: [
                "@babel/plugin-proposal-class-properties",
                "@babel/plugin-transform-runtime",
                "@babel/plugin-transform-react-jsx",
                "@babel/plugin-proposal-optional-chaining",
                "@emotion/babel-plugin"
            ]
        }
    }
};
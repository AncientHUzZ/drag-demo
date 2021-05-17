const ENV = process.env.NODE_ENV;
module.exports = {
    devServer: {
        port: 9091,
        open: true
    },
    publicPath: ENV === "development" ? "" : "/drag-demo/"
}
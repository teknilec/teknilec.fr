const path = require('path')
const yaml = require('yamljs');

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    sassOptions: {
        includePaths: [path.join(__dirname, 'assets/styles')],
    },
    images: {
        loader: "custom",
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        nextImageExportOptimizer: {
            imageFolderPath: "public/images",
            exportFolderPath: "out",
            quality: 75,
        },
    },
    env: {
        storePicturesInWEBP: true,
    },
    eslint: {
        dirs: ['pages', 'components']
    },
    trailingSlash: true,
    webpack: (config) => {
        // adding a yaml loader
        config.module.rules.push({
            test: /\.(ya|y)ml$/i,
            type: 'json',
            parser: {
                parse: yaml.parse,
            },
        })

        return config
    }
}

module.exports = nextConfig

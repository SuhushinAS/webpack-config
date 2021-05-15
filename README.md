#WebpackConfig
Настройки конфигурации для сборки webpack

### Установка
```
npm i -D @suhushinas/webpack-config
```

## Использование
`webpack.config.js`
```js
const path = require('path');
const {configs, merge} = require('@suhushinas/webpack-config');

const {asset, base, html, optimization, script, style, svg} = configs;

/**
 * Получить конфигурацию webpack.
 * @param env Окружение.
 * @param argv Аргументы
 * @returns {*} Конфигурация webpack.
 */
function webpackConfig(env, argv) {
    const {mode} = argv;
    const root = __dirname;
    const options = {
        dist: path.join(root, 'www'),
        mode,
        pages: ['index'],
        public: path.join(root, 'public'),
        root,
        src: 'src',
    };

    const customConfig = {
        ...
    };

    return merge(
        asset(options),
        base(options),
        html(options),
        optimization(options),
        script(options),
        style(options),
        svg(options),
        customConfig);
}

module.exports = webpackConfig;
```

## Конфигурация

|Опция|Тип|Описание|
|-----|---|--------|
|dist|_string_|Путь сборки проекта|
|mode|`'development'`/`'production'`|Режим сборки|
|pages|_string[]_|Список точек входа для сборки HTML|
|public|_string_|Путь публичной папки проекта|
|root|_string_|Путь корня проекта|
|src|_string_|Путь папки исходных кодов проекта|

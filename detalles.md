Detalles a tener en cuenta:
* `ReferenceError __dirname is undefined`, al importar electron,
se solucionó con el `vue.config.js`.

* la versión de `@types/node` v13 cambió EventEmitter a interface y en la 12 no funciona,
se solucionó agregando al `package.json` la versión 12.12.21 de `@types/node`.
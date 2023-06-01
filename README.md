1. ¿Qué sucedió al usar async y await?

Al usar `async` y `await`, el programa puede esperar a que una función asíncrona se complete antes de continuar con la siguiente línea de código. Esto permite que el programa se ejecute de forma secuencial y más fácil de leer, ya que no es necesario encadenar múltiples llamadas al método `then()`.

2. ¿Qué sucedió al usar el método then()?

Al utilizar el método `then()`, podemos encadenar las promesas y definir las acciones a realizar cuando una promesa se resuelve o se rechaza. Esto nos permite controlar el flujo de ejecución y manejar los resultados de las promesas de manera más flexible.

3. ¿Qué diferencias encontraste entre async, await y el método then()?

- `async` y `await` permiten escribir código asíncrono de manera síncrona, lo que facilita la legibilidad y el manejo de errores. Al utilizar `await`, el programa espera a que una función asíncrona se complete antes de continuar.
- El método `then()` se utiliza para encadenar promesas y definir las acciones a realizar cuando una promesa se resuelve o se rechaza. Proporciona una forma más explícita de manejar las promesas y el flujo de ejecución, pero puede resultar en un código más anidado y menos legible en comparación con `async/await`.
- `async/await` es más fácil de leer y escribir en comparación con el método `then()`, especialmente cuando hay múltiples promesas que deben manejarse en secuencia. Permite un estilo de programación más similar a la programación síncrona, lo que facilita el entendimiento del código.
- El uso de `async/await` también simplifica el manejo de errores, ya que podemos envolver las llamadas a funciones asíncronas con un bloque `try/catch` para capturar y manejar los errores de manera más eficiente.

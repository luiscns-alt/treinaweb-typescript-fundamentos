```ts
let nome: string;
let idade: number;

nome = 'Luis';
idade = 21;

alert(`nome: ${nome} , idade${idade}`);
console.log(`nome: ${nome} , idade: ${idade}`);
```

<details><summary><b>Output</b></summary>

```ts
'use strict';
let nome;
let idade;
nome = 'Luis';
idade = 21;
alert(`nome: ${nome} , idade${idade}`);
console.log(`nome: ${nome} , idade: ${idade}`);
```

</details>

<details><summary><b>Compiler Options</b></summary>

```json
{
    "compilerOptions": {
        "strict": true,
        "noImplicitAny": true,
        "strictNullChecks": true,
        "strictFunctionTypes": true,
        "strictPropertyInitialization": true,
        "strictBindCallApply": true,
        "noImplicitThis": true,
        "noImplicitReturns": true,
        "alwaysStrict": true,
        "esModuleInterop": true,
        "declaration": true,
        "experimentalDecorators": true,
        "emitDecoratorMetadata": true,
        "target": "ES2017",
        "jsx": "react",
        "module": "ESNext",
        "moduleResolution": "node"
    }
}
```

</details>

**Playground Link:** [Provided](https://www.typescriptlang.org/play?#code/DYUwLgBAdg9gtiAXBAzmATgSygcwNwBQokmAJgIalLQCucARiOoQQbAhALwQDkAMjUwoehMpRBcIAJgCMLcqHRgAFAAN21ACQBvDQF8IAGghiqO0yD2qAlIQDGMKChigAdMBg41G5Dv1GTCipfbQsrWyA)

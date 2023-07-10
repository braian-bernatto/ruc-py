# Sobre este proyecto

Web app para consultar datos sobre `contribuyentes` registrados en la `SET`[^1] del Paraguay.

[^1]: [Subsecretaría de Estado de Tributación](https://www.set.gov.py/web/portal-institucional/)

## Link 🚀

Puedes ver el proyecto en este link [www.ruc.bernatto.com](https://ruc.bernatto.com)

## Herramientas

Este proyecto está hecho con [Next.js](https://nextjs.org/) + [TypeScript](https://www.typescriptlang.org) + [TailwindCSS](https://tailwindcss.com) + [DaisyUI](https://daisyui.com)

## Manual

> 1. Ingresar en el cuadro de texto

- RUC sin `DV`[^2] → ❌`12345-6` → ✅`12345`
  [^2]: Dígito Verificador
- Múltiples RUC separados por comas `,` → `12345, 54321, 678910`
- Nombre o Apellido del contribuyente → `primerApellido segundoApellido` o `primerNombre segundoNombre`
- Múltiples Nombres o Apellidos separados por comas `,` → `apellidoContribuyente1, apellidoContribuyente2, nombreContribuyente3`

> 2. Dar Click al botón **Buscar 🔍**

> 3. [Opcional] Click en el botón **Copiar al Portapeles📋**

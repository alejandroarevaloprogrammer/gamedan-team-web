# Web GDT

Primera versión de la web de Game Dan Team creada con Next.js, React y TypeScript.

## Requisitos

- Node.js 20.9 o superior
- Visual Studio Code

## Cómo abrirlo en Visual Studio Code

1. Descomprime `web-gdt.zip`.
2. Abre Visual Studio Code.
3. Ve a `File > Open Folder...` y selecciona la carpeta `web-gdt`.
4. Abre una terminal en VS Code: `Terminal > New Terminal`.
5. Instala dependencias:

```bash
npm install
```

6. Arranca la web:

```bash
npm run dev
```

7. Abre en el navegador:

```txt
http://localhost:3000
```

## Estructura

- `src/app/page.tsx`: Home
- `src/app/games/page.tsx`: Games
- `src/app/about/page.tsx`: About
- `src/app/contact/page.tsx`: Contact
- `src/app/globals.css`: estilos y paleta retrowave
- `src/components/GameCard.tsx`: tarjeta reutilizable para juegos
- `src/components/games.ts`: datos temporales de juegos

## Colores principales

```css
--cream-neon: #FBF5A7;
--pink-soft: #FF97D0;
--pink-hot: #FF62BB;
--purple-electric: #B331F1;
--cyan-neon: #31F1B3;
--night-void: #10051F;
```

## Próximos pasos recomendados

- Sustituir los placeholders por screenshots reales.
- Añadir trailers embebidos de YouTube/Vimeo o vídeos locales.
- Crear una página individual por cada juego.
- Añadir enlaces a Steam, itch.io, press kit y redes sociales.

// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://sculpt.metodsk.ru',
  vite: {
    plugins: [tailwindcss()],
    build: {
      // РЎРєСЂРёРїС‚С‹ РІСЃРµРіРґР° РІРЅРµС€РЅРёРјРё С„Р°Р№Р»Р°РјРё вЂ” РїРѕР·РІРѕР»СЏРµС‚ СЃС‚СЂРѕРіРёР№ CSP Р±РµР· unsafe-inline.
      assetsInlineLimit: 0,
    },
  },
});

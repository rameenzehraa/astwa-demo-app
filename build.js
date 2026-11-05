const fs = require('fs');
fs.mkdirSync('dist/assets', { recursive: true });
fs.writeFileSync('dist/index.html', '<!doctype html><html><head><meta charset="utf-8"><title>Profiles</title><script type="module" src="/assets/app.js"></script></head><body><div id="root"></div></body></html>\n');
fs.writeFileSync('dist/assets/app.js', 'export const supabaseUrl = ' + JSON.stringify(process.env.VITE_SUPABASE_URL || '') + ';\n');

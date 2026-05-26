import fs from 'node:fs';

const inputPath = 'content/knowledge-base/Base_Conhecimento_BC_final_completo.md';
const outputPath = 'src/data/articles.ts';

const text = fs.readFileSync(inputPath, 'utf8');
const pattern = /^##\s+([A-Z0-9-]+)\s+[—-]\s+(.+?)\s*$/gm;
const matches = [...text.matchAll(pattern)];

const labels = [
  'Categoria:',
  'Disponível para Utilizador:',
  'Disponível para Agente:',
  'Problema',
  'Diagnóstico',
  'Causa provável',
  'Solução',
  'Como proceder',
  'Validação final',
  'Notas'
];

function clean(value) {
  return value.trim().replace(/\n{3,}/g, '\n\n');
}

function extract(block, label) {
  const other = labels.filter((item) => item !== label).map((item) => item.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|');
  const rx = new RegExp(`\\*\\*${label.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\*\\*\\s*\\n?([\\s\\S]*?)(?=\\n\\*\\*(?:${other})\\*\\*|$)`);
  const found = block.match(rx);
  return found ? clean(found[1]) : '';
}

function parseBool(value) {
  return value.trim().toLowerCase().includes('sim');
}

function parseSteps(value) {
  const steps = [];
  for (const line of value.split('\n')) {
    const s = line.trim();
    const numbered = s.match(/^\d+\.\s+(.*)$/);
    if (numbered) steps.push(numbered[1].trim());
    else if (s.startsWith('- ')) steps.push(s.slice(2).trim());
    else if (s && steps.length && !s.startsWith('###')) steps[steps.length - 1] = `${steps[steps.length - 1]} ${s}`.trim();
  }
  return steps;
}

const articles = matches.map((match, index) => {
  const start = match.index + match[0].length;
  const end = index + 1 < matches.length ? matches[index + 1].index : text.length;
  const block = text.slice(start, end).trim();
  const code = match[1].trim();
  const title = match[2].trim();
  const category = extract(block, 'Categoria:').replace(/\n/g, ' ').trim() || 'Sem categoria';
  const notesRaw = extract(block, 'Notas');

  return {
    id: code.toLowerCase(),
    code,
    title,
    category,
    availableForUser: parseBool(extract(block, 'Disponível para Utilizador:')),
    availableForAgent: parseBool(extract(block, 'Disponível para Agente:')),
    tags: [...category.split(/[/,]/).map((x) => x.trim()).filter(Boolean), code.split('-')[0]],
    updatedAt: new Date().toISOString().slice(0, 10),
    readTime: '3-6 min',
    problem: extract(block, 'Problema'),
    diagnosis: extract(block, 'Diagnóstico'),
    cause: extract(block, 'Causa provável'),
    solution: extract(block, 'Solução'),
    procedure: extract(block, 'Como proceder'),
    steps: parseSteps(extract(block, 'Como proceder')),
    validation: extract(block, 'Validação final'),
    notes: notesRaw.split('\n').map((x) => x.replace(/^- /, '').trim()).filter(Boolean),
    rawMarkdown: `## ${code} — ${title}\n\n${block}`
  };
});

fs.writeFileSync(
  outputPath,
  `import type { Article } from '../types';\n\nexport const articles: Article[] = ${JSON.stringify(articles, null, 2)};\n`,
  'utf8'
);

console.log(`Importados ${articles.length} artigos para ${outputPath}`);

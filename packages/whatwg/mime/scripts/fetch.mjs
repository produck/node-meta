import fs from 'node:fs';
import path from 'node:path';
import { createHash } from 'node:crypto';
import { fileURLToPath } from 'node:url';

const REPOSITORY = 'whatwg/mimesniff';
const COMMIT_API = `https://api.github.com/repos/${REPOSITORY}/commits?per_page=1`;
const SNAPSHOT_BASE = 'https://mimesniff.spec.whatwg.org/commit-snapshots';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const PACKAGE_ROOT = path.resolve(HERE, '..');
const REFERENCE = path.join(PACKAGE_ROOT, 'docs', 'reference.html');
const COMMIT_FILE = path.join(PACKAGE_ROOT, 'docs', 'commit.txt');

async function fetchText(url) {
  const response = await fetch(url, {
    headers: { 'user-agent': 'produck-meta-whatwg-mime' },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch ${url}: ${response.status}`);
  }

  return response.text();
}

async function readCommit() {
  if (fs.existsSync(COMMIT_FILE)) {
    return fs.readFileSync(COMMIT_FILE, 'utf8').trim();
  }

  const body = await fetchText(COMMIT_API);
  const [latest] = JSON.parse(body);

  if (latest === undefined || typeof latest.sha !== 'string') {
    throw new Error('Unable to read the latest commit.');
  }

  fs.mkdirSync(path.dirname(COMMIT_FILE), { recursive: true });
  fs.writeFileSync(COMMIT_FILE, `${latest.sha}\n`);

  return latest.sha;
}

const commit = await readCommit();
const snapshotUrl = `${SNAPSHOT_BASE}/${commit}/`;
const html = fs.existsSync(REFERENCE)
  ? fs.readFileSync(REFERENCE, 'utf8')
  : await fetchText(snapshotUrl);

if (!fs.existsSync(REFERENCE)) {
  fs.mkdirSync(path.dirname(REFERENCE), { recursive: true });
  fs.writeFileSync(REFERENCE, html);
}

const updated = html.match(/datetime="(\d{4}-\d{2}-\d{2})"/)?.[1] ?? null;

console.log({
  commit,
  snapshot: snapshotUrl,
  updated,
  bytes: html.length,
  digest: createHash('sha256').update(html).digest('hex'),
});

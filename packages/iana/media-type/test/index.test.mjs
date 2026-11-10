import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { describe, it } from 'node:test';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const PACKAGE_ROOT = path.resolve(HERE, '..');
const MANIFEST = path.join(PACKAGE_ROOT, 'package.json');
const REFERENCE = path.join(PACKAGE_ROOT, 'docs', 'reference.xml');

describe('package', () => {
  it('should be an ESM package without side effects', () => {
    const manifest = JSON.parse(fs.readFileSync(MANIFEST, 'utf8'));

    assert.equal(manifest.type, 'module');
    assert.equal(manifest.sideEffects, false);
  });
});

describe('reference', () => {
  it('should keep the IANA registry snapshot', () => {
    assert.ok(fs.existsSync(REFERENCE));
  });
});

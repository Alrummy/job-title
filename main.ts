import fs from 'node:fs';
import path from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
// The joke: a corp-exec whose entire job is apologizing for what the database did.
const text = 'Senior Vice President of Apologizing to the Database';

fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, 'entry.txt'), text + '\n');

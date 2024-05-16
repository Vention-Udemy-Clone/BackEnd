export function colorLog(message, color) {
  const codes = {
    red: '\x1b[31m',
    green: '\x1b[32m',
    yellow: '\x1b[33m',
    blue: '\x1b[34m',
  };
  console.log(`${codes[color]}%s\x1b[0m`, message);
}

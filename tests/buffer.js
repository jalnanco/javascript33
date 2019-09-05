// buffer.js 바이너리 값 사용
const buf = Buffer.allocUnsafe(10);
R.forEach(n => buf.writeUInt8(0x1, n), R.range(0, total));

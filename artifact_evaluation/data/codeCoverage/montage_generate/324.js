function f0() {
    var v0 = new ArrayBuffer(64);
    var v1 = new Int16Array(v0);
    v1[0] = 32768;
    return v1[0] === -32768;
}
if (!f0())
    throw new Error('Wasm validation failure expected');

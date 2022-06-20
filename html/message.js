import { data_view, UTF8_DECODER } from './intrinsics.js';
export class Message {
  addToImports(imports) {
  }

  async instantiate(module, imports) {
    imports = imports || {};
    this.addToImports(imports);

    if (module instanceof WebAssembly.Instance) {
      this.instance = module;
    } else if (module instanceof WebAssembly.Module) {
      this.instance = await WebAssembly.instantiate(module, imports);
    } else if (module instanceof ArrayBuffer || module instanceof Uint8Array) {
      const { instance } = await WebAssembly.instantiate(module, imports);
      this.instance = instance;
    } else {
      const { instance } = await WebAssembly.instantiateStreaming(module, imports);
      this.instance = instance;
    }
    this._exports = this.instance.exports;
  }
  sayHello() {
    const memory = this._exports.memory;
    const free = this._exports["canonical_abi_free"];
    const ret = this._exports['say-hello']();
    const ptr0 = data_view(memory).getInt32(ret + 0, true);
    const len0 = data_view(memory).getInt32(ret + 4, true);
    const list0 = UTF8_DECODER.decode(new Uint8Array(memory.buffer, ptr0, len0));
    free(ptr0, len0, 1);
    return list0;
  }
  returnObj() {
    const memory = this._exports.memory;
    const free = this._exports["canonical_abi_free"];
    const ret = this._exports['return-obj']();
    const ptr0 = data_view(memory).getInt32(ret + 0, true);
    const len0 = data_view(memory).getInt32(ret + 4, true);
    const list0 = UTF8_DECODER.decode(new Uint8Array(memory.buffer, ptr0, len0));
    free(ptr0, len0, 1);
    const ptr1 = data_view(memory).getInt32(ret + 8, true);
    const len1 = data_view(memory).getInt32(ret + 12, true);
    const list1 = UTF8_DECODER.decode(new Uint8Array(memory.buffer, ptr1, len1));
    free(ptr1, len1, 1);
    return {
      message: list0,
      data: list1,
    };
  }
}

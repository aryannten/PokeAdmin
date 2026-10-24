// Pure scratch-built Little-Endian Binary Buffer Wrapper

export class ByteBuffer {
  public readonly data: Uint8Array;
  public readonly view: DataView;

  constructor(bufferOrLength: Uint8Array | ArrayBuffer | number) {
    if (typeof bufferOrLength === 'number') {
      this.data = new Uint8Array(bufferOrLength);
      this.view = new DataView(this.data.buffer, this.data.byteOffset, this.data.byteLength);
    } else if (bufferOrLength instanceof Uint8Array) {
      this.data = bufferOrLength;
      this.view = new DataView(bufferOrLength.buffer, bufferOrLength.byteOffset, bufferOrLength.byteLength);
    } else {
      this.data = new Uint8Array(bufferOrLength);
      this.view = new DataView(bufferOrLength);
    }
  }

  get length(): number {
    return this.data.byteLength;
  }

  readU8(offset: number): number {
    return this.view.getUint8(offset);
  }

  readU16(offset: number): number {
    return this.view.getUint16(offset, true); // Little-endian
  }

  readU32(offset: number): number {
    return this.view.getUint32(offset, true); // Little-endian
  }

  writeU8(offset: number, value: number): void {
    this.view.setUint8(offset, value);
  }

  writeU16(offset: number, value: number): void {
    this.view.setUint16(offset, value, true); // Little-endian
  }

  writeU32(offset: number, value: number): void {
    this.view.setUint32(offset, value, true); // Little-endian
  }

  getBytes(offset: number, length: number): Uint8Array {
    return this.data.slice(offset, offset + length);
  }

  setBytes(offset: number, source: Uint8Array | number[]): void {
    if (source instanceof Uint8Array) {
      this.data.set(source, offset);
    } else {
      this.data.set(new Uint8Array(source), offset);
    }
  }

  clone(): ByteBuffer {
    const copy = new Uint8Array(this.data.length);
    copy.set(this.data);
    return new ByteBuffer(copy);
  }
}

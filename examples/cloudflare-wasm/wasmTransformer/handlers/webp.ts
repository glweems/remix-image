import decode, { init as initDecode } from "@jsquash/webp/decode";
import encode, { init as initEncode } from "@jsquash/webp/encode";
import { ImageHandler } from "../types";

export const WebpHandler: ImageHandler = {
  async decode(buffer) {
    await initDecode(WEBP_DEC_WASM);

    return decode(buffer);
  },
  async encode(image, options) {
    await initEncode(WEBP_ENC_WASM_SIMD);

    return encode(image, options);
  },
};

import snippet from "./snippet";
import api from "./api";

declare global {
  interface Window {
    __ls: any;
  }
}

const sdkOptionsDefaults = {
  devMode: false,
};
let opts = {
  ...sdkOptionsDefaults,
};

const isLoaded = () => window.__ls;

const safeCall = (name: string) => {
  return (...args: object[]) => {
    if (!isLoaded()) {
      throw new Error("LiveSession is not loaded. Call init() before calling other API functions");
    }
    if (!api[name]) {
      throw new Error(`method "${name}" doesn't exist`);
    }
    if (opts.devMode) {
      const msg = `Skipping method: ${name}, devMode enabled`;
      console.warn(msg);
      return msg;
    }

    return api[name](...args);
  };
};

const _init = (trackID: string, options?: object | null, sdkOptions = sdkOptionsDefaults) => {
  opts = {
    ...sdkOptionsDefaults,
    ...sdkOptions,
  };
  if (isLoaded()) {
    console.warn("LiveSession already inited (skipping init() call)");
    return;
  }
  if (!trackID) {
    throw new Error(`trackID is required`);
  }
  snippet();
  return api.init(trackID, options);
};

interface apiFunctions {
  [k: string]: any;
}

const functions: apiFunctions = {
  init: _init,
  getSessionURL: safeCall("getSessionURL"),
  identify: safeCall("identify"),
  invalidateSession: safeCall("invalidateSession"),
  newPageView: safeCall("newPageView"),
  setOptions: safeCall("setOptions"),
  setCustomParams: safeCall("setCustomParams"),
  off: safeCall("off"),
  optOut: safeCall("optOut"),
  debug: safeCall("debug"),
};

export default functions;

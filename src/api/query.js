import { getOptions } from "../install";
import isEnabled from "./is-enabled";

export default function (...args) {
  const { globalObjectName } = getOptions();

  if (typeof window === "undefined") {
    return;
  }

  if (isEnabled()) window[globalObjectName](...args);
}

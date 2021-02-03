import { getOptions } from "../install";

export default () => {
  const { config } = getOptions();

  if (typeof window === "undefined") {
    return false;
  }

  return !window[`ga-disable-${config.id}`];
};

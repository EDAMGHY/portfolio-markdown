export const getFromLocalStorage = (key: string) => {
  let mode: string | null = "light";

  if (!key) {
    return mode;
  }

  mode = typeof window !== "undefined" ? localStorage.getItem(key) : "light";

  return mode;
};

export const setToLocalStorage = (key: string, value: string) => {
  let mode = "light";

  if (!key) {
    return mode;
  }

  localStorage.setItem(key, value);
};

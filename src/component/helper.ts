type ObjAny = { [k: string]: any };

/**
 * Uses deep merge way to merge objects.
 *
 * @param {object} obj1 - The first object to be merged.
 * @param {object} obj2 - The second object to be merged.
 * @returns {object} - The merged object containing the combined properties of obj1 and obj2.
 */
export function mergeObjects(obj1: ObjAny, obj2: ObjAny) {
  const o1 = { ...obj1 },
    o2 = { ...obj2 };

  for (const key in o1) {
    if (o1.hasOwnProperty(key)) {
      if (Array.isArray(o2[key]) && Array.isArray(o1[key])) {
        o2[key] = [...o1[key], ...o2[key]];
        continue;
      }
      if (typeof o2[key] === "object" && typeof o1[key] === "object") {
        o2[key] = mergeObjects(o1[key], o2[key]);
        continue;
      }
      o2[key] = o1[key];
    }
  }
  return o2;
}

export function isFn(fn: any) {
  return fn && typeof fn === "function";
}

export const PATTERNS = Object.freeze({
  EMAIL: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
  PASSWORD: "",
});

/** StorybookTableRow type */
type STR = {
  /** Label name */
  lab: string;

  /** Description */
  desc: any;
};

export function storybookTable(data: STR[], desc = "", sort = true) {
  const getTR = (d: STR) => {
    return `<tr><td style="padding: 0px;fontWeight:700; border-spacing: 0;">${d.lab}</td><td style="padding: 0px;">${d.desc}</td></tr>`;
  };

  if (sort)
    data = data?.sort((a, b) => (a.lab > b.lab ? 1 : b.lab > a.lab ? -1 : 0));

  const tr = data?.reduce((prev: string, d: STR) => `${prev}${getTR(d)}`, "");
  return `<p>${desc}</p><table>${tr}</table>`;
}

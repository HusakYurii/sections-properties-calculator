import Vue from "vue";

export const getUniqueId = (): string => {
  return Math.random()
    .toString(16)
    .slice(2);
};

// I did not know that Vue.js + TS will give me hard times ((
// I wrote this wrapper util to cast $ref objects
export const wrapRefsWith = <T>(
  component: Vue,
  refName: string
): (Vue & T) | null => {
  if (component.$refs[refName] === undefined) {
    console.error(
      `wrapRefsWith: component's ${refName} reference does not exists!`
    );
    return null;
  }
  return component.$refs[refName] as Vue & T;
};

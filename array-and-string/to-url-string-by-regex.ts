export const toUrlStringByRegex = (input: string): string => {
  return input.replace(/\s/g, "%20");
};

const result = toUrlStringByRegex("Mr John  Smith");

console.log(result);

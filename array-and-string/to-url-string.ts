export const toUrlString = (input: string): string => {
  const array = input.split("");

  for (let i = 0; i < array.length; i++) {
    const char = array[i];

    if (char === " ") {
      array[i] = "%20";
    }
  }

  return array.join("");
};

const result = toUrlString("Mr John  Smith");

console.log(result);

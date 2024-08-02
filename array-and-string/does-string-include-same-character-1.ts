export const doesStringIncludeSameCharacter1 = (s: string) => {
  const sortedString = s.split("").sort();

  for (let i = 0; i < sortedString.length - 1; i++) {
    const formerChar = sortedString[i];
    const latterChar = sortedString[i + 1];

    if (formerChar === latterChar) return true;
  }

  return false;
};

export const doesStringIncludeSameCharacter = (s: string) => {
  const hashTable: Record<string, boolean> = {};

  for (const char of s) {
    if (hashTable[char]) {
      return true;
    }
  }

  return false;
};

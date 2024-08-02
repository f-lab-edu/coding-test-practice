export const arePermutations = (str1: string, str2: string) => {
  const hashTable: Record<string, number> = {};

  for (const char of str1) {
    if (hashTable[char]) {
      hashTable[char]++;
    } else {
      hashTable[char] = 1;
    }
  }

  for (const char of str2) {
    if (hashTable[char]) {
      hashTable[char]--;
    } else {
      return false;
    }
  }

  for (const key in hashTable) {
    if (hashTable[key] !== 0) return false;
  }

  return true;
};

function numInStr(tableauDeChaines) {
  return tableauDeChaines.filter((chaine) => /\d/.test(chaine));
}

console.log(numInStr(["1a", "a", "2b", "b"]));
console.log(numInStr(["abc", "abc10"]));
console.log(numInStr(["abc", "ab10c", "a10c", "bcd"]));
console.log(numInStr(["this is a test", "test1"]));

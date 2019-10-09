function firstNonRepeated(s) {
  let obj = {};
  for (let i = 0; i < s.length; i++) {
    if (!obj[s[i]]) {
      obj[s[i]] = 1;
    } else obj[s[i]] += 1;
  }
  for (let k in obj) {
    if (obj[k] == 1) return k;
  }
  return null;
}

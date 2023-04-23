/*
Take 2 strings s1 and s2 including only letters from a to z. 
Return a new sorted string, the longest possible, containing distinct letters 
- each taken only once - coming from s1 or s2.
*/


// Solution

function longest(s1, s2) {
  let output = [];
  let combi = s1.concat(s2);
  let array = combi.split('').sort();

  for (let i = 0; i <= array.length; i++) {
    if (!output.includes(array[i])) {
      output.push(array[i]);
    }
  }
  return output.join('');
}

// or

const longest = (s1, s2) => [...new Set(s1+s2)].sort().join('')
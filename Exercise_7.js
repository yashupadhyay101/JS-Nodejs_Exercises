// Write a program to find the most frequent item of an array.
// mostFrequent([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]) => a (5
// times)

const arr = [3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3];

function mostFrequentValue(arr){
  const dataFrequency = arr.reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
  },
  {});

  return Object.keys(dataFrequency).reduce((a,b) => dataFrequency[a] > dataFrequency[b] ? a:b) + " (" + Object.values(dataFrequency).reduce((a,b) => a > b ? a:b) + " times)";
}

console.log(mostFrequentValue(arr));


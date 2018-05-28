vvar tel = 0;
function sum(begin2,eind2) {
  for (let i = begin2; i <= eind2; i++) {
    tel = i + tel;
  }
  return tel;
}
console.log(sum(1, 10));             // --> 55

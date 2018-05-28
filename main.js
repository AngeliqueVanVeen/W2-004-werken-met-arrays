var arreetje = '';
function range(begin,eind) {
  for (let i = begin; i <= eind; i++) {
    arreetje = arreetje + i;
    if (i < eind) {
      arreetje = arreetje + ', ';
    }    
  }
  return arreetje;
}
console.log(range(1, 10));          // --> 1, 2, 3, 4, 5, 6, 7, 8, 9, 10

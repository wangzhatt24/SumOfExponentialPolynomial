/**
 * Tính tổng của 1 mũ k đến n mũ k
 */
function tong1MuKDenNMuK(n, k) {
  let index = 1;
  let tong = 0;

  for(; index <= n; index++) {
    tong+= (index) ** k;
  }

  console.log(`tong: ${tong}`)
  return tong;
}

function soep(n, k) {
  return tong1MuKDenNMuK(n, k) % (10**9 + 7);
}


const n = 10**8;
const k = 4;

console.time('Time of sum')
console.log(soep(n, k));
console.timeEnd('Time of sum')

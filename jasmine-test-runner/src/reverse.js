function reverse(val) {
  console.log(typeof val);
  if (typeof val === 'string') {
    return val.split('').reverse().join('')
  }
  return val;
}
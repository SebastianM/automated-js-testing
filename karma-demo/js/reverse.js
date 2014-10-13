function reverse(val) {
  if (typeof val === 'string') {
    return val.split('').reverse().join('');
  }
  return val;
}
describe('reverse', function() {
  it('should reverse strings', function() {
    expect(reverse('hallo')).toEqual('ollah');
    expect(reverse('bye')).toEqual('eyb');
  });

  it('should ignore value types other than strings', function() {
    expect(reverse(true)).toBe(true); // reverse(true) === true
    expect(reverse(undefined)).toBe(undefined);
  });
})
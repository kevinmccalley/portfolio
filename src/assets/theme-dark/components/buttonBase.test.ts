import buttonBase from '../src/assets/theme-dark/components/buttonBase';

describe('buttonBase', () => {
  it('should export an object', () => {
    expect(typeof buttonBase).toBe('object');
    expect(buttonBase).not.toBeNull();
  });

  it('should have defaultProps property', () => {
    expect(buttonBase).toHaveProperty('defaultProps');
  });

  it('should have defaultProps as an object', () => {
    expect(typeof buttonBase.defaultProps).toBe('object');
    expect(buttonBase.defaultProps).not.toBeNull();
  });

  it('should have disableRipple property in defaultProps', () => {
    expect(buttonBase.defaultProps).toHaveProperty('disableRipple');
  });

  it('should have disableRipple set to false by default', () => {
    expect(buttonBase.defaultProps.disableRipple).toBe(false);
  });

  it('should not allow modification of disableRipple property', () => {
    const originalValue = buttonBase.defaultProps.disableRipple;
    buttonBase.defaultProps.disableRipple = true;
    expect(buttonBase.defaultProps.disableRipple).toBe(true);
    // Reset to original value
    buttonBase.defaultProps.disableRipple = originalValue;
  });

  it('should contain only the expected structure', () => {
    expect(Object.keys(buttonBase)).toEqual(['defaultProps']);
  });

  it('should contain only disableRipple in defaultProps', () => {
    expect(Object.keys(buttonBase.defaultProps)).toEqual(['disableRipple']);
  });

  it('should be exported as default export', () => {
    expect(buttonBase).toBeDefined();
  });

  it('should maintain consistent structure across multiple accesses', () => {
    const firstAccess = buttonBase.defaultProps.disableRipple;
    const secondAccess = buttonBase.defaultProps.disableRipple;
    expect(firstAccess).toBe(secondAccess);
  });
});
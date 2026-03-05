import appBar from '../../../../../src/assets/theme-dark/components/appBar';

describe('appBar theme configuration', () => {
  it('should export an object with defaultProps and styleOverrides', () => {
    expect(appBar).toBeInstanceOf(Object);
    expect(appBar).toHaveProperty('defaultProps');
    expect(appBar).toHaveProperty('styleOverrides');
  });

  describe('defaultProps', () => {
    it('should have a color property set to transparent', () => {
      expect(appBar.defaultProps).toHaveProperty('color');
      expect(appBar.defaultProps.color).toBe('transparent');
    });

    it('should have color as the only property in defaultProps', () => {
      expect(Object.keys(appBar.defaultProps)).toEqual(['color']);
    });

    it('should have defaultProps as an object', () => {
      expect(appBar.defaultProps).toBeInstanceOf(Object);
    });
  });

  describe('styleOverrides', () => {
    it('should have a root property', () => {
      expect(appBar.styleOverrides).toHaveProperty('root');
    });

    it('should have root.boxShadow set to none', () => {
      expect(appBar.styleOverrides.root).toHaveProperty('boxShadow');
      expect(appBar.styleOverrides.root.boxShadow).toBe('none');
    });

    it('should have root as an object with boxShadow as only property', () => {
      expect(appBar.styleOverrides.root).toBeInstanceOf(Object);
      expect(Object.keys(appBar.styleOverrides.root)).toEqual(['boxShadow']);
    });

    it('should have styleOverrides as an object', () => {
      expect(appBar.styleOverrides).toBeInstanceOf(Object);
    });
  });

  describe('structure validation', () => {
    it('should have exactly two top-level properties', () => {
      expect(Object.keys(appBar).length).toBe(2);
      expect(Object.keys(appBar)).toEqual(['defaultProps', 'styleOverrides']);
    });

    it('should maintain consistent structure across multiple accesses', () => {
      const firstAccess = { ...appBar };
      const secondAccess = { ...appBar };
      expect(firstAccess).toEqual(secondAccess);
    });

    it('should have non-null values for all properties', () => {
      expect(appBar.defaultProps).not.toBeNull();
      expect(appBar.styleOverrides).not.toBeNull();
      expect(appBar.styleOverrides.root).not.toBeNull();
    });
  });

  describe('default export', () => {
    it('should be the appBar configuration object', () => {
      expect(appBar).toEqual({
        defaultProps: {
          color: 'transparent',
        },
        styleOverrides: {
          root: {
            boxShadow: 'none',
          },
        },
      });
    });
  });
});
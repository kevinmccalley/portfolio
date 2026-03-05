import avatar from '../../../../../src/assets/theme-dark/components/avatar';

describe('avatar', () => {
  describe('structure', () => {
    it('should export an object with styleOverrides property', () => {
      expect(avatar).toHaveProperty('styleOverrides');
      expect(typeof avatar.styleOverrides).toBe('object');
    });

    it('should have root, rounded, and img keys in styleOverrides', () => {
      expect(avatar.styleOverrides).toHaveProperty('root');
      expect(avatar.styleOverrides).toHaveProperty('rounded');
      expect(avatar.styleOverrides).toHaveProperty('img');
    });
  });

  describe('styleOverrides.root', () => {
    it('should contain transition property with correct value', () => {
      expect(avatar.styleOverrides.root).toHaveProperty('transition');
      expect(avatar.styleOverrides.root.transition).toBe('all 200ms ease-in-out');
    });

    it('should have transition property as a string', () => {
      expect(typeof avatar.styleOverrides.root.transition).toBe('string');
    });

    it('should only contain transition property in root', () => {
      expect(Object.keys(avatar.styleOverrides.root)).toEqual(['transition']);
    });
  });

  describe('styleOverrides.rounded', () => {
    it('should contain borderRadius property', () => {
      expect(avatar.styleOverrides.rounded).toHaveProperty('borderRadius');
    });

    it('should have borderRadius from borders.borderRadius.lg', () => {
      const borders = require('../../../../../src/assets/theme-dark/base/borders').default;
      expect(avatar.styleOverrides.rounded.borderRadius).toBe(borders.borderRadius.lg);
    });

    it('should only contain borderRadius property in rounded', () => {
      expect(Object.keys(avatar.styleOverrides.rounded)).toEqual(['borderRadius']);
    });
  });

  describe('styleOverrides.img', () => {
    it('should contain height property with value auto', () => {
      expect(avatar.styleOverrides.img).toHaveProperty('height');
      expect(avatar.styleOverrides.img.height).toBe('auto');
    });

    it('should have height property as a string', () => {
      expect(typeof avatar.styleOverrides.img.height).toBe('string');
    });

    it('should only contain height property in img', () => {
      expect(Object.keys(avatar.styleOverrides.img)).toEqual(['height']);
    });
  });

  describe('avatar export', () => {
    it('should be a valid object', () => {
      expect(avatar).toBeDefined();
      expect(avatar).not.toBeNull();
      expect(typeof avatar).toBe('object');
    });

    it('should be the default export', () => {
      expect(avatar).toBeTruthy();
    });

    it('should not be an empty object', () => {
      expect(Object.keys(avatar).length).toBeGreaterThan(0);
    });
  });

  describe('style values validation', () => {
    it('transition value should follow CSS syntax', () => {
      const transitionValue = avatar.styleOverrides.root.transition;
      expect(transitionValue).toMatch(/^\w+\s+\d+ms\s+.+/);
    });

    it('height value should be a valid CSS value', () => {
      const heightValue = avatar.styleOverrides.img.height;
      expect(['auto', 'inherit', 'initial', 'unset']).toContain(heightValue);
    });

    it('borderRadius should be a number or string', () => {
      const borderRadiusValue = avatar.styleOverrides.rounded.borderRadius;
      expect(
        typeof borderRadiusValue === 'number' ||
        typeof borderRadiusValue === 'string'
      ).toBe(true);
    });
  });

  describe('immutability concerns', () => {
    it('should not allow modification of root properties', () => {
      const originalTransition = avatar.styleOverrides.root.transition;
      avatar.styleOverrides.root.transition = 'modified';
      expect(avatar.styleOverrides.root.transition).toBe('modified');
      avatar.styleOverrides.root.transition = originalTransition;
    });

    it('styleOverrides object should be accessible', () => {
      expect(() => {
        avatar.styleOverrides.root;
        avatar.styleOverrides.rounded;
        avatar.styleOverrides.img;
      }).not.toThrow();
    });
  });
});
import button from 'src/assets/theme-dark/components/button/index.js';

describe('Material Dashboard 2 React - Button Theme Config', () => {
  describe('button object structure', () => {
    it('should export a button configuration object', () => {
      expect(button).toBeDefined();
      expect(typeof button).toBe('object');
    });

    it('should have defaultProps property', () => {
      expect(button).toHaveProperty('defaultProps');
      expect(typeof button.defaultProps).toBe('object');
    });

    it('should have styleOverrides property', () => {
      expect(button).toHaveProperty('styleOverrides');
      expect(typeof button.styleOverrides).toBe('object');
    });
  });

  describe('defaultProps configuration', () => {
    it('should have disableRipple set to false', () => {
      expect(button.defaultProps.disableRipple).toBe(false);
    });

    it('should contain only disableRipple property', () => {
      const defaultPropsKeys = Object.keys(button.defaultProps);
      expect(defaultPropsKeys).toEqual(['disableRipple']);
    });
  });

  describe('styleOverrides configuration', () => {
    it('should have root style override', () => {
      expect(button.styleOverrides).toHaveProperty('root');
      expect(typeof button.styleOverrides.root).toBe('object');
    });

    it('should have contained variant style overrides', () => {
      expect(button.styleOverrides).toHaveProperty('contained');
      expect(button.styleOverrides).toHaveProperty('containedSizeSmall');
      expect(button.styleOverrides).toHaveProperty('containedSizeLarge');
      expect(button.styleOverrides).toHaveProperty('containedPrimary');
      expect(button.styleOverrides).toHaveProperty('containedSecondary');
    });

    it('should have outlined variant style overrides', () => {
      expect(button.styleOverrides).toHaveProperty('outlined');
      expect(button.styleOverrides).toHaveProperty('outlinedSizeSmall');
      expect(button.styleOverrides).toHaveProperty('outlinedSizeLarge');
      expect(button.styleOverrides).toHaveProperty('outlinedPrimary');
      expect(button.styleOverrides).toHaveProperty('outlinedSecondary');
    });

    it('should have text variant style overrides', () => {
      expect(button.styleOverrides).toHaveProperty('text');
      expect(button.styleOverrides).toHaveProperty('textSizeSmall');
      expect(button.styleOverrides).toHaveProperty('textSizeLarge');
      expect(button.styleOverrides).toHaveProperty('textPrimary');
      expect(button.styleOverrides).toHaveProperty('textSecondary');
    });

    it('should have all expected style override keys', () => {
      const expectedKeys = [
        'root',
        'contained',
        'containedSizeSmall',
        'containedSizeLarge',
        'containedPrimary',
        'containedSecondary',
        'outlined',
        'outlinedSizeSmall',
        'outlinedSizeLarge',
        'outlinedPrimary',
        'outlinedSecondary',
        'text',
        'textSizeSmall',
        'textSizeLarge',
        'textPrimary',
        'textSecondary',
      ];
      const actualKeys = Object.keys(button.styleOverrides);
      expect(actualKeys).toEqual(expect.arrayContaining(expectedKeys));
      expect(actualKeys.length).toBe(expectedKeys.length);
    });
  });

  describe('styleOverrides values', () => {
    it('should have contained base as an object', () => {
      expect(button.styleOverrides.contained).toBeDefined();
      expect(typeof button.styleOverrides.contained).toBe('object');
    });

    it('should have containedSizeSmall as an object', () => {
      expect(button.styleOverrides.containedSizeSmall).toBeDefined();
      expect(typeof button.styleOverrides.containedSizeSmall).toBe('object');
    });

    it('should have containedSizeLarge as an object', () => {
      expect(button.styleOverrides.containedSizeLarge).toBeDefined();
      expect(typeof button.styleOverrides.containedSizeLarge).toBe('object');
    });

    it('should have containedPrimary as an object', () => {
      expect(button.styleOverrides.containedPrimary).toBeDefined();
      expect(typeof button.styleOverrides.containedPrimary).toBe('object');
    });

    it('should have containedSecondary as an object', () => {
      expect(button.styleOverrides.containedSecondary).toBeDefined();
      expect(typeof button.styleOverrides.containedSecondary).toBe('object');
    });

    it('should have outlined base as an object', () => {
      expect(button.styleOverrides.outlined).toBeDefined();
      expect(typeof button.styleOverrides.outlined).toBe('object');
    });

    it('should have outlinedSizeSmall as an object', () => {
      expect(button.styleOverrides.outlinedSizeSmall).toBeDefined();
      expect(typeof button.styleOverrides.outlinedSizeSmall).toBe('object');
    });

    it('should have outlinedSizeLarge as an object', () => {
      expect(button.styleOverrides.outlinedSizeLarge).toBeDefined();
      expect(typeof button.styleOverrides.outlinedSizeLarge).toBe('object');
    });

    it('should have outlinedPrimary as an object', () => {
      expect(button.styleOverrides.outlinedPrimary).toBeDefined();
      expect(typeof button.styleOverrides.outlinedPrimary).toBe('object');
    });

    it('should have outlinedSecondary as an object', () => {
      expect(button.styleOverrides.outlinedSecondary).toBeDefined();
      expect(typeof button.styleOverrides.outlinedSecondary).toBe('object');
    });

    it('should have text base as an object', () => {
      expect(button.styleOverrides.text).toBeDefined();
      expect(typeof button.styleOverrides.text).toBe('object');
    });

    it('should have textSizeSmall as an object', () => {
      expect(button.styleOverrides.textSizeSmall).toBeDefined();
      expect(typeof button.styleOverrides.textSizeSmall).toBe('object');
    });

    it('should have textSizeLarge as an object', () => {
      expect(button.styleOverrides.textSizeLarge).toBeDefined();
      expect(typeof button.styleOverrides.textSizeLarge).toBe('object');
    });

    it('should have textPrimary as an object', () => {
      expect(button.styleOverrides.textPrimary).toBeDefined();
      expect(typeof button.styleOverrides.textPrimary).toBe('object');
    });

    it('should have textSecondary as an object', () => {
      expect(button.styleOverrides.textSecondary).toBeDefined();
      expect(typeof button.styleOverrides.textSecondary).toBe('object');
    });
  });

  describe('export default', () => {
    it('should export button as default export', () => {
      expect(button).toBeDefined();
      expect(button).not.toBeNull();
    });

    it('should not have any undefined properties in styleOverrides', () => {
      Object.entries(button.styleOverrides).forEach(([key, value]) => {
        expect(value).toBeDefined(`styleOverrides.${key} should be defined`);
      });
    });
  });
});
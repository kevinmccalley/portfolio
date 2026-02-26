import breakpoints from 'src/assets/theme-dark/base/breakpoints';

describe('breakpoints', () => {
  it('should export a default object', () => {
    expect(breakpoints).toBeDefined();
  });

  it('should have a values property', () => {
    expect(breakpoints).toHaveProperty('values');
  });

  it('should have values as an object', () => {
    expect(typeof breakpoints.values).toBe('object');
    expect(breakpoints.values).not.toBeNull();
  });

  describe('breakpoint values', () => {
    it('should have xs breakpoint equal to 0', () => {
      expect(breakpoints.values.xs).toBe(0);
    });

    it('should have sm breakpoint equal to 576', () => {
      expect(breakpoints.values.sm).toBe(576);
    });

    it('should have md breakpoint equal to 768', () => {
      expect(breakpoints.values.md).toBe(768);
    });

    it('should have lg breakpoint equal to 992', () => {
      expect(breakpoints.values.lg).toBe(992);
    });

    it('should have xl breakpoint equal to 1200', () => {
      expect(breakpoints.values.xl).toBe(1200);
    });

    it('should have xxl breakpoint equal to 1400', () => {
      expect(breakpoints.values.xxl).toBe(1400);
    });
  });

  it('should have exactly 6 breakpoint values', () => {
    expect(Object.keys(breakpoints.values)).toHaveLength(6);
  });

  it('should contain all expected breakpoint keys', () => {
    expect(Object.keys(breakpoints.values)).toEqual(['xs', 'sm', 'md', 'lg', 'xl', 'xxl']);
  });

  it('should have breakpoints in ascending order', () => {
    const values = Object.values(breakpoints.values);
    for (let i = 1; i < values.length; i++) {
      expect(values[i]).toBeGreaterThan(values[i - 1]);
    }
  });

  it('should have all numeric breakpoint values', () => {
    Object.values(breakpoints.values).forEach((value) => {
      expect(typeof value).toBe('number');
    });
  });

  it('should have all non-negative breakpoint values', () => {
    Object.values(breakpoints.values).forEach((value) => {
      expect(value).toBeGreaterThanOrEqual(0);
    });
  });

  it('should match the full breakpoints object structure', () => {
    expect(breakpoints).toEqual({
      values: {
        xs: 0,
        sm: 576,
        md: 768,
        lg: 992,
        xl: 1200,
        xxl: 1400,
      },
    });
  });

  it('should not have any extra top-level properties beyond values', () => {
    expect(Object.keys(breakpoints)).toEqual(['values']);
  });

  it('xs should be the smallest breakpoint', () => {
    const values = Object.values(breakpoints.values);
    expect(breakpoints.values.xs).toBe(Math.min(...values));
  });

  it('xxl should be the largest breakpoint', () => {
    const values = Object.values(breakpoints.values);
    expect(breakpoints.values.xxl).toBe(Math.max(...values));
  });

  it('sm should be greater than xs', () => {
    expect(breakpoints.values.sm).toBeGreaterThan(breakpoints.values.xs);
  });

  it('md should be greater than sm', () => {
    expect(breakpoints.values.md).toBeGreaterThan(breakpoints.values.sm);
  });

  it('lg should be greater than md', () => {
    expect(breakpoints.values.lg).toBeGreaterThan(breakpoints.values.md);
  });

  it('xl should be greater than lg', () => {
    expect(breakpoints.values.xl).toBeGreaterThan(breakpoints.values.lg);
  });

  it('xxl should be greater than xl', () => {
    expect(breakpoints.values.xxl).toBeGreaterThan(breakpoints.values.xl);
  });
});
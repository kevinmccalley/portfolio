```typescript
import borders from "src/assets/theme-dark/base/borders";

jest.mock("assets/theme-dark/base/colors", () => ({
  white: {
    main: "#ffffff",
  },
}));

jest.mock("assets/theme-dark/functions/pxToRem", () =>
  jest.fn((value: number) => `${value / 16}rem`)
);

jest.mock("assets/theme-dark/functions/rgba", () =>
  jest.fn((color: string, opacity: number) => `rgba(${color}, ${opacity})`)
);

import colors from "assets/theme-dark/base/colors";
import pxToRem from "assets/theme-dark/functions/pxToRem";
import rgba from "assets/theme-dark/functions/rgba";

describe("borders (dark theme)", () => {
  describe("module structure", () => {
    it("should export a default object", () => {
      expect(borders).toBeDefined();
      expect(typeof borders).toBe("object");
      expect(borders).not.toBeNull();
    });

    it("should have a borderColor property", () => {
      expect(borders).toHaveProperty("borderColor");
    });

    it("should have a borderWidth property", () => {
      expect(borders).toHaveProperty("borderWidth");
    });

    it("should have a borderRadius property", () => {
      expect(borders).toHaveProperty("borderRadius");
    });
  });

  describe("borderColor", () => {
    it("should call rgba with white.main and opacity 0.4", () => {
      expect(rgba).toHaveBeenCalledWith(colors.white.main, 0.4);
    });

    it("should be the result of rgba(white.main, 0.4)", () => {
      expect(borders.borderColor).toBe(`rgba(${colors.white.main}, 0.4)`);
    });

    it("should not be undefined or null", () => {
      expect(borders.borderColor).toBeDefined();
      expect(borders.borderColor).not.toBeNull();
    });
  });

  describe("borderWidth", () => {
    it("should have a key of 0 equal to 0", () => {
      expect(borders.borderWidth[0]).toBe(0);
    });

    it("should have a key of 1 equal to pxToRem(1)", () => {
      expect(borders.borderWidth[1]).toBe(pxToRem(1));
    });

    it("should have a key of 2 equal to pxToRem(2)", () => {
      expect(borders.borderWidth[2]).toBe(pxToRem(2));
    });

    it("should have a key of 3 equal to pxToRem(3)", () => {
      expect(borders.borderWidth[3]).toBe(pxToRem(3));
    });

    it("should have a key of 4 equal to pxToRem(4)", () => {
      expect(borders.borderWidth[4]).toBe(pxToRem(4));
    });

    it("should have a key of 5 equal to pxToRem(5)", () => {
      expect(borders.borderWidth[5]).toBe(pxToRem(5));
    });

    it("should have exactly 6 keys (0 through 5)", () => {
      const keys = Object.keys(borders.borderWidth);
      expect(keys).toHaveLength(6);
    });

    it("should contain all keys from 0 to 5", () => {
      expect(borders.borderWidth).toHaveProperty("0");
      expect(borders.borderWidth).toHaveProperty("1");
      expect(borders.borderWidth).toHaveProperty("2");
      expect(borders.borderWidth).toHaveProperty("3");
      expect(borders.borderWidth).toHaveProperty("4");
      expect(borders.borderWidth).toHaveProperty("5");
    });

    it("should call pxToRem with values 1 through 5", () => {
      expect(pxToRem).toHaveBeenCalledWith(1);
      expect(pxToRem).toHaveBeenCalledWith(2);
      expect(pxToRem).toHaveBeenCalledWith(3);
      expect(pxToRem).toHaveBeenCalledWith(4);
      expect(pxToRem).toHaveBeenCalledWith(5);
    });

    it("borderWidth[0] should be a number", () => {
      expect(typeof borders.borderWidth[0]).toBe("number");
    });

    it("borderWidth values 1-5 should be strings (rem values)", () => {
      expect(typeof borders.borderWidth[1]).toBe("string");
      expect(typeof borders.borderWidth[2]).toBe("string");
      expect(typeof borders.borderWidth[3]).toBe("string");
      expect(typeof borders.borderWidth[4]).toBe("string");
      expect(typeof borders.borderWidth[5]).toBe("string");
    });
  });

  describe("borderRadius", () => {
    it("should have an xs property equal to pxToRem(1.6)", () => {
      expect(borders.borderRadius.xs).toBe(pxToRem(1.6));
    });

    it("should have a sm property equal to pxToRem(2)", () => {
      expect(borders.borderRadius.sm).toBe(pxToRem(2));
    });

    it("should have a md property equal to pxToRem(6)", () => {
      expect(borders.borderRadius.md).toBe(pxToRem(6));
    });

    it("should have a lg property equal to pxToRem(8)", () => {
      expect(borders.borderRadius.lg).toBe(pxToRem(8));
    });

    it("should have an xl property equal to pxToRem(12)", () => {
      expect(borders.borderRadius.xl).toBe(pxToRem(12));
    });

    it("should have an xxl property equal to pxToRem(16)", () => {
      expect(borders.borderRadius.xxl).toBe(pxToRem(16));
    });

    it("should have a section property equal to pxToRem(160)", () => {
      expect(borders.borderRadius.section).toBe(pxToRem(160));
    });

    it("should have exactly 7 border radius keys", () => {
      const keys = Object.keys(borders.borderRadius);
      expect(keys).toHaveLength(7);
    });

    it("should contain all expected border radius keys", () => {
      expect(borders.borderRadius).toHaveProperty("xs");
      expect(borders.borderRadius).toHaveProperty("sm");
      expect(borders.borderRadius).toHaveProperty("md");
      expect(borders.borderRadius).toHaveProperty("lg");
      expect(borders.borderRadius).toHaveProperty("xl");
      expect(borders.borderRadius).toHaveProperty("xxl");
      expect(borders.borderRadius).toHaveProperty("section");
    });

    it("should call pxToRem with value 1.6 for xs", () => {
      expect(pxToRem).toHaveBeenCalledWith(1.6);
    });

    it("should call pxToRem with value 6 for md", () => {
      expect(pxToRem).toHaveBeenCalledWith(6);
    });

    it("should call pxToRem with value 8 for lg", () => {
      expect(pxToRem).toHaveBeenCalledWith(8);
    });

    it("should call pxToRem with value 12 for xl", () => {
      expect(pxToRem).toHaveBeenCalledWith(12);
    });

    it("should call pxToRem with value 16 for xxl", () => {
      expect(pxToRem).toHaveBeenCalledWith(16);
    });

    it("should call pxToRem with value 160 for section", () => {
      expect(pxToRem).toHaveBeenCalledWith(160);
    });

    it("all borderRadius values should be strings (rem values)", () => {
      expect(typeof borders.borderRadius.xs).toBe("string");
      expect(typeof borders.borderRadius.sm).toBe("string");
      expect(typeof borders.borderRadius.md).toBe("string");
      expect(typeof borders.borderRadius.lg).toBe("string");
      expect(typeof borders.borderRadius.xl).toBe("string");
      expect(typeof borders.borderRadius.xxl).toBe("string");
      expect(typeof borders.borderRadius.section).toBe("string");
    });
  });

  describe("integration with mock functions", () => {
    it("rgba should be called at least once", () => {
      expect(rgba).toHaveBeenCalled();
    });

    it("pxToRem should be called multiple times for borderWidth and borderRadius", () => {
      expect(pxToRem).toHaveBeenCalledTimes(
        expect.any(Number)
      );
      const callCount = (pxToRem as jest.Mock).mock.calls.length;
      // 5 borderWidth calls (1-5) + 7 borderRadius calls = 12 total minimum
      expect(callCount).toBeGreaterThanOrEqual(12);
    });

    it("borderWidth and borderRadius values should use the pxToRem helper", () => {
      const pxToRemMock = pxToRem as jest.Mock;
      const calledArgs = pxToRemMock.mock.calls.map((call) => call[0]);
      expect(calledArgs).toContain(1);
      expect(calledArgs).toContain(2);
      expect(calledArgs).toContain(3);
      expect(calledArgs).toContain(4);
      expect(calledArgs).toContain(5);
      expect(calledArgs).toContain(1.6);
      expect(calledArgs).toContain(6);
      expect(calledArgs).toContain(8);
      expect(calledArgs).toContain(12);
      expect(calledArgs).toContain(16);
      expect(calledArgs).toContain(160);
    });
  });
});
```
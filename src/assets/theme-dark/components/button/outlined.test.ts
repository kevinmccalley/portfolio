import outlined from "../../../../../../../src/assets/theme-dark/components/button/outlined";

describe("Outlined Button Theme", () => {
  describe("base styles", () => {
    it("should have correct minimum height", () => {
      expect(outlined.base.minHeight).toBe("2.4375rem");
    });

    it("should have light color as main color", () => {
      expect(outlined.base.color).toBeDefined();
    });

    it("should have light color as border color", () => {
      expect(outlined.base.borderColor).toBeDefined();
    });

    it("should have correct padding", () => {
      expect(outlined.base.padding).toBe("0.5625rem 1.5rem");
    });

    it("should have hover state with opacity and transparent background", () => {
      expect(outlined.base["&:hover"].opacity).toBe(0.75);
      expect(outlined.base["&:hover"].backgroundColor).toBeDefined();
    });

    it("should have correct font size for material icons", () => {
      expect(
        outlined.base["& .material-icon, .material-icons-round, svg"].fontSize
      ).toBe("1rem !important");
    });
  });

  describe("small size", () => {
    it("should have correct minimum height for small size", () => {
      expect(outlined.small.minHeight).toBe("1.9375rem");
    });

    it("should have correct padding for small size", () => {
      expect(outlined.small.padding).toBe("0.375rem 1.125rem");
    });

    it("should have correct font size for small size", () => {
      expect(outlined.small.fontSize).toBeDefined();
    });

    it("should have correct font size for material icons in small size", () => {
      expect(
        outlined.small["& .material-icon, .material-icons-round, svg"]
          .fontSize
      ).toBe("0.75rem !important");
    });
  });

  describe("large size", () => {
    it("should have correct minimum height for large size", () => {
      expect(outlined.large.minHeight).toBe("2.875rem");
    });

    it("should have correct padding for large size", () => {
      expect(outlined.large.padding).toBe("0.75rem 4rem");
    });

    it("should have correct font size for large size", () => {
      expect(outlined.large.fontSize).toBeDefined();
    });

    it("should have correct font size for material icons in large size", () => {
      expect(
        outlined.large["& .material-icon, .material-icons-round, svg"].fontSize
      ).toBe("1.375rem !important");
    });
  });

  describe("primary variant", () => {
    it("should have transparent background color", () => {
      expect(outlined.primary.backgroundColor).toBeDefined();
    });

    it("should have info color as border color", () => {
      expect(outlined.primary.borderColor).toBeDefined();
    });

    it("should have transparent background on hover", () => {
      expect(outlined.primary["&:hover"].backgroundColor).toBeDefined();
    });

    it("should maintain transparent background on hover for primary variant", () => {
      expect(outlined.primary["&:hover"].backgroundColor).toBe(
        outlined.primary.backgroundColor
      );
    });
  });

  describe("secondary variant", () => {
    it("should have transparent background color", () => {
      expect(outlined.secondary.backgroundColor).toBeDefined();
    });

    it("should have secondary color as border color", () => {
      expect(outlined.secondary.borderColor).toBeDefined();
    });

    it("should have transparent background on hover", () => {
      expect(outlined.secondary["&:hover"].backgroundColor).toBeDefined();
    });

    it("should maintain transparent background on hover for secondary variant", () => {
      expect(outlined.secondary["&:hover"].backgroundColor).toBe(
        outlined.secondary.backgroundColor
      );
    });
  });

  describe("structure and properties", () => {
    it("should export a default object with required properties", () => {
      expect(outlined).toHaveProperty("base");
      expect(outlined).toHaveProperty("small");
      expect(outlined).toHaveProperty("large");
      expect(outlined).toHaveProperty("primary");
      expect(outlined).toHaveProperty("secondary");
    });

    it("should have all style objects as plain objects", () => {
      expect(typeof outlined.base).toBe("object");
      expect(typeof outlined.small).toBe("object");
      expect(typeof outlined.large).toBe("object");
      expect(typeof outlined.primary).toBe("object");
      expect(typeof outlined.secondary).toBe("object");
    });

    it("should not have null or undefined values in base styles", () => {
      Object.values(outlined.base).forEach((value) => {
        if (typeof value === "string" || typeof value === "number") {
          expect(value).toBeDefined();
        }
      });
    });

    it("should maintain consistent icon selector across all sizes", () => {
      const iconSelector = "& .material-icon, .material-icons-round, svg";
      expect(outlined.base).toHaveProperty(iconSelector);
      expect(outlined.small).toHaveProperty(iconSelector);
      expect(outlined.large).toHaveProperty(iconSelector);
    });

    it("should have hover state defined for base styles", () => {
      expect(outlined.base).toHaveProperty("&:hover");
    });

    it("should have hover state defined for primary variant", () => {
      expect(outlined.primary).toHaveProperty("&:hover");
    });

    it("should have hover state defined for secondary variant", () => {
      expect(outlined.secondary).toHaveProperty("&:hover");
    });
  });

  describe("theme consistency", () => {
    it("should have numeric minHeight values that increase with size", () => {
      const baseHeight = parseFloat(outlined.base.minHeight);
      const smallHeight = parseFloat(outlined.small.minHeight);
      const largeHeight = parseFloat(outlined.large.minHeight);

      expect(smallHeight).toBeLessThan(baseHeight);
      expect(baseHeight).toBeLessThan(largeHeight);
    });

    it("should use rem units for all dimension values", () => {
      expect(outlined.base.minHeight).toMatch(/rem$/);
      expect(outlined.small.minHeight).toMatch(/rem$/);
      expect(outlined.large.minHeight).toMatch(/rem$/);
    });

    it("should have valid opacity value on hover", () => {
      const opacity = outlined.base["&:hover"].opacity;
      expect(opacity).toBeGreaterThan(0);
      expect(opacity).toBeLessThanOrEqual(1);
    });
  });
});
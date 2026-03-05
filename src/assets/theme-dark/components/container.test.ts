import container from "src/assets/theme-dark/components/container";

// Mock the dependencies
jest.mock("assets/theme-dark/base/breakpoints", () => ({
  values: {
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
    xxl: 1400,
  },
}));

jest.mock("assets/theme-dark/functions/pxToRem", () => {
  return jest.fn((px: number) => `${px / 16}rem`);
});

describe("container", () => {
  describe("structure and exports", () => {
    it("should export a container object", () => {
      expect(container).toBeDefined();
      expect(typeof container).toBe("object");
    });

    it("should have media query breakpoint keys", () => {
      const keys = Object.keys(container);
      expect(keys).toContain("@media (min-width: 576px)");
      expect(keys).toContain("@media (min-width: 768px)");
      expect(keys).toContain("@media (min-width: 992px)");
      expect(keys).toContain("@media (min-width: 1200px)");
      expect(keys).toContain("@media (min-width: 1400px)");
    });

    it("should have exactly 5 media query breakpoints", () => {
      const keys = Object.keys(container);
      expect(keys).toHaveLength(5);
    });
  });

  describe("SM breakpoint (576px)", () => {
    it("should define SM breakpoint with MuiContainer-root selector", () => {
      const sm = container["@media (min-width: 576px)"];
      expect(sm).toBeDefined();
      expect(sm[".MuiContainer-root"]).toBeDefined();
    });

    it("should have maxWidth of 540px for SM breakpoint", () => {
      const sm = container["@media (min-width: 576px)"];
      expect(sm[".MuiContainer-root"].maxWidth).toBe("540px !important");
    });

    it("should include shared classes for SM breakpoint", () => {
      const sm = container["@media (min-width: 576px)"];
      const styles = sm[".MuiContainer-root"];
      expect(styles.paddingRight).toBe("1.5rem");
      expect(styles.paddingLeft).toBe("1.5rem");
      expect(styles.marginRight).toBe("auto !important");
      expect(styles.marginLeft).toBe("auto !important");
      expect(styles.width).toBe("100% !important");
      expect(styles.position).toBe("relative");
    });
  });

  describe("MD breakpoint (768px)", () => {
    it("should define MD breakpoint with MuiContainer-root selector", () => {
      const md = container["@media (min-width: 768px)"];
      expect(md).toBeDefined();
      expect(md[".MuiContainer-root"]).toBeDefined();
    });

    it("should have maxWidth of 720px for MD breakpoint", () => {
      const md = container["@media (min-width: 768px)"];
      expect(md[".MuiContainer-root"].maxWidth).toBe("720px !important");
    });

    it("should include shared classes for MD breakpoint", () => {
      const md = container["@media (min-width: 768px)"];
      const styles = md[".MuiContainer-root"];
      expect(styles.paddingRight).toBe("1.5rem");
      expect(styles.paddingLeft).toBe("1.5rem");
      expect(styles.marginRight).toBe("auto !important");
      expect(styles.marginLeft).toBe("auto !important");
      expect(styles.width).toBe("100% !important");
      expect(styles.position).toBe("relative");
    });
  });

  describe("LG breakpoint (992px)", () => {
    it("should define LG breakpoint with MuiContainer-root selector", () => {
      const lg = container["@media (min-width: 992px)"];
      expect(lg).toBeDefined();
      expect(lg[".MuiContainer-root"]).toBeDefined();
    });

    it("should have maxWidth of 960px for LG breakpoint", () => {
      const lg = container["@media (min-width: 992px)"];
      expect(lg[".MuiContainer-root"].maxWidth).toBe("960px !important");
    });

    it("should include shared classes for LG breakpoint", () => {
      const lg = container["@media (min-width: 992px)"];
      const styles = lg[".MuiContainer-root"];
      expect(styles.paddingRight).toBe("1.5rem");
      expect(styles.paddingLeft).toBe("1.5rem");
      expect(styles.marginRight).toBe("auto !important");
      expect(styles.marginLeft).toBe("auto !important");
      expect(styles.width).toBe("100% !important");
      expect(styles.position).toBe("relative");
    });
  });

  describe("XL breakpoint (1200px)", () => {
    it("should define XL breakpoint with MuiContainer-root selector", () => {
      const xl = container["@media (min-width: 1200px)"];
      expect(xl).toBeDefined();
      expect(xl[".MuiContainer-root"]).toBeDefined();
    });

    it("should have maxWidth of 1140px for XL breakpoint", () => {
      const xl = container["@media (min-width: 1200px)"];
      expect(xl[".MuiContainer-root"].maxWidth).toBe("1140px !important");
    });

    it("should include shared classes for XL breakpoint", () => {
      const xl = container["@media (min-width: 1200px)"];
      const styles = xl[".MuiContainer-root"];
      expect(styles.paddingRight).toBe("1.5rem");
      expect(styles.paddingLeft).toBe("1.5rem");
      expect(styles.marginRight).toBe("auto !important");
      expect(styles.marginLeft).toBe("auto !important");
      expect(styles.width).toBe("100% !important");
      expect(styles.position).toBe("relative");
    });
  });

  describe("XXL breakpoint (1400px)", () => {
    it("should define XXL breakpoint with MuiContainer-root selector", () => {
      const xxl = container["@media (min-width: 1400px)"];
      expect(xxl).toBeDefined();
      expect(xxl[".MuiContainer-root"]).toBeDefined();
    });

    it("should have maxWidth of 1320px for XXL breakpoint", () => {
      const xxl = container["@media (min-width: 1400px)"];
      expect(xxl[".MuiContainer-root"].maxWidth).toBe("1320px !important");
    });

    it("should include shared classes for XXL breakpoint", () => {
      const xxl = container["@media (min-width: 1400px)"];
      const styles = xxl[".MuiContainer-root"];
      expect(styles.paddingRight).toBe("1.5rem");
      expect(styles.paddingLeft).toBe("1.5rem");
      expect(styles.marginRight).toBe("auto !important");
      expect(styles.marginLeft).toBe("auto !important");
      expect(styles.width).toBe("100% !important");
      expect(styles.position).toBe("relative");
    });
  });

  describe("shared classes consistency", () => {
    it("should have consistent padding across all breakpoints", () => {
      const breakpoints = Object.values(container);
      breakpoints.forEach((breakpoint) => {
        const styles = breakpoint[".MuiContainer-root"];
        expect(styles.paddingRight).toBe("1.5rem");
        expect(styles.paddingLeft).toBe("1.5rem");
      });
    });

    it("should have consistent margins across all breakpoints", () => {
      const breakpoints = Object.values(container);
      breakpoints.forEach((breakpoint) => {
        const styles = breakpoint[".MuiContainer-root"];
        expect(styles.marginRight).toBe("auto !important");
        expect(styles.marginLeft).toBe("auto !important");
      });
    });

    it("should have consistent width across all breakpoints", () => {
      const breakpoints = Object.values(container);
      breakpoints.forEach((breakpoint) => {
        const styles = breakpoint[".MuiContainer-root"];
        expect(styles.width).toBe("100% !important");
      });
    });

    it("should have consistent position across all breakpoints", () => {
      const breakpoints = Object.values(container);
      breakpoints.forEach((breakpoint) => {
        const styles = breakpoint[".MuiContainer-root"];
        expect(styles.position).toBe("relative");
      });
    });

    it("should have all !important flags in margin and padding values", () => {
      const breakpoints = Object.values(container);
      breakpoints.forEach((breakpoint) => {
        const styles = breakpoint[".MuiContainer-root"];
        expect(styles.paddingRight).toContain("!important");
        expect(styles.paddingLeft).toContain("!important");
        expect(styles.marginRight).toContain("!important");
        expect(styles.marginLeft).toContain("!important");
      });
    });
  });

  describe("maxWidth progression", () => {
    it("should have increasing maxWidth values as breakpoints increase", () => {
      const smMaxWidth = parseInt(
        container["@media (min-width: 576px)"][".MuiContainer-root"].maxWidth
      );
      const mdMaxWidth = parseInt(
        container["@media (min-width: 768px)"][".MuiContainer-root"].maxWidth
      );
      const lgMaxWidth = parseInt(
        container["@media (min-width: 992px)"][".MuiContainer-root"].maxWidth
      );
      const xlMaxWidth = parseInt(
        container["@media (min-width: 1200px)"][".MuiContainer-root"].maxWidth
      );
      const xxlMaxWidth = parseInt(
        container["@media (min-width: 1400px)"][".MuiContainer-root"].maxWidth
      );

      expect(smMaxWidth).toBeLessThan(mdMaxWidth);
      expect(mdMaxWidth).toBeLessThan(lgMaxWidth);
      expect(lgMaxWidth).toBeLessThan(xlMaxWidth);
      expect(xlMaxWidth).toBeLessThan(xxlMaxWidth);
    });
  });

  describe("specific maxWidth values", () => {
    it("should have correct maxWidth for SM: 540px", () => {
      expect(
        container["@media (min-width: 576px)"][".MuiContainer-root"].maxWidth
      ).toBe("540px !important");
    });

    it("should have correct maxWidth for MD: 720px", () => {
      expect(
        container["@media (min-width: 768px)"][".MuiContainer-root"].maxWidth
      ).toBe("720px !important");
    });

    it("should have correct maxWidth for LG: 960px", () => {
      expect(
        container["@media (min-width: 992px)"][".MuiContainer-root"].maxWidth
      ).toBe("960px !important");
    });

    it("should have correct maxWidth for XL: 1140px", () => {
      expect(
        container["@media (min-width: 1200px)"][".MuiContainer-root"].maxWidth
      ).toBe("1140px !important");
    });

    it("should have correct maxWidth for XXL: 1320px", () => {
      expect(
        container["@media (min-width: 1400px)"][".MuiContainer-root"].maxWidth
      ).toBe("1320px !important");
    });
  });

  describe("edge cases and validation", () => {
    it("should not have undefined values in any breakpoint", () => {
      Object.values(container).forEach((breakpoint) => {
        const styles = breakpoint[".MuiContainer-root"];
        Object.values(styles).forEach((value) => {
          expect(value).not.toBeUndefined();
        });
      });
    });

    it("should not have null values in any breakpoint", () => {
      Object.values(container).forEach((breakpoint) => {
        const styles = breakpoint[".MuiContainer-root"];
        Object.values(styles).forEach((value) => {
          expect(value).not.toBeNull();
        });
      });
    });

    it("should have exactly 6 style properties per breakpoint", () => {
      Object.values(container).forEach((breakpoint) => {
        const styles = breakpoint[".MuiContainer-root"];
        const propertyCount = Object.keys(styles).length;
        expect(propertyCount).toBe(6);
      });
    });
  });
});
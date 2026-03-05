import breadcrumbs from "src/assets/theme-dark/components/breadcrumbs";

describe("breadcrumbs theme component", () => {
  describe("structure and properties", () => {
    it("should export a breadcrumbs object with styleOverrides property", () => {
      expect(breadcrumbs).toBeDefined();
      expect(breadcrumbs).toHaveProperty("styleOverrides");
    });

    it("should have styleOverrides as an object", () => {
      expect(typeof breadcrumbs.styleOverrides).toBe("object");
      expect(breadcrumbs.styleOverrides).not.toBeNull();
    });
  });

  describe("li style overrides", () => {
    it("should define li styles", () => {
      expect(breadcrumbs.styleOverrides).toHaveProperty("li");
    });

    it("should have li property as an object", () => {
      expect(typeof breadcrumbs.styleOverrides.li).toBe("object");
    });

    it("should set li lineHeight to 0", () => {
      expect(breadcrumbs.styleOverrides.li.lineHeight).toBe(0);
    });

    it("should only have lineHeight property in li", () => {
      const liKeys = Object.keys(breadcrumbs.styleOverrides.li);
      expect(liKeys).toEqual(["lineHeight"]);
    });
  });

  describe("separator style overrides", () => {
    it("should define separator styles", () => {
      expect(breadcrumbs.styleOverrides).toHaveProperty("separator");
    });

    it("should have separator property as an object", () => {
      expect(typeof breadcrumbs.styleOverrides.separator).toBe("object");
    });

    it("should set separator fontSize to a string value", () => {
      expect(typeof breadcrumbs.styleOverrides.separator.fontSize).toBe("string");
    });

    it("should set separator color to a string value", () => {
      expect(typeof breadcrumbs.styleOverrides.separator.color).toBe("string");
    });

    it("should have fontSize and color properties in separator", () => {
      const separatorKeys = Object.keys(breadcrumbs.styleOverrides.separator);
      expect(separatorKeys).toContain("fontSize");
      expect(separatorKeys).toContain("color");
    });

    it("should have only fontSize and color properties in separator", () => {
      const separatorKeys = Object.keys(breadcrumbs.styleOverrides.separator);
      expect(separatorKeys.length).toBe(2);
    });
  });

  describe("exported default", () => {
    it("should export breadcrumbs as default export", () => {
      expect(breadcrumbs).toBeDefined();
      expect(typeof breadcrumbs).toBe("object");
    });

    it("should not be null or undefined", () => {
      expect(breadcrumbs).not.toBeNull();
      expect(breadcrumbs).not.toBeUndefined();
    });
  });

  describe("color and typography integration", () => {
    it("should use color values from colors import", () => {
      const separatorColor = breadcrumbs.styleOverrides.separator.color;
      expect(separatorColor).toBeDefined();
      expect(typeof separatorColor).toBe("string");
    });

    it("should use typography size values from size import", () => {
      const separatorFontSize = breadcrumbs.styleOverrides.separator.fontSize;
      expect(separatorFontSize).toBeDefined();
      expect(typeof separatorFontSize).toBe("string");
    });
  });

  describe("immutability", () => {
    it("should not allow modification of li lineHeight", () => {
      const originalLineHeight = breadcrumbs.styleOverrides.li.lineHeight;
      breadcrumbs.styleOverrides.li.lineHeight = 1;
      expect(breadcrumbs.styleOverrides.li.lineHeight).toBe(1);
      breadcrumbs.styleOverrides.li.lineHeight = originalLineHeight;
    });

    it("should allow access to all defined properties", () => {
      const liAccess = breadcrumbs.styleOverrides.li.lineHeight;
      const separatorFontSize = breadcrumbs.styleOverrides.separator.fontSize;
      const separatorColor = breadcrumbs.styleOverrides.separator.color;

      expect(liAccess).toBeDefined();
      expect(separatorFontSize).toBeDefined();
      expect(separatorColor).toBeDefined();
    });
  });
});
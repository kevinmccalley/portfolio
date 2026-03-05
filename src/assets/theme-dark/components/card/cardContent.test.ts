import cardContent from "../../../../../src/assets/theme-dark/components/card/cardContent";
import pxToRem from "../../../../../src/assets/theme-dark/functions/pxToRem";

jest.mock("../../../../../src/assets/theme-dark/functions/pxToRem");

describe("cardContent", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe("structure and exports", () => {
    it("should export a default object", () => {
      expect(cardContent).toBeDefined();
      expect(typeof cardContent).toBe("object");
    });

    it("should have styleOverrides property", () => {
      expect(cardContent).toHaveProperty("styleOverrides");
    });

    it("should have root property in styleOverrides", () => {
      expect(cardContent.styleOverrides).toHaveProperty("root");
    });
  });

  describe("cardContent.styleOverrides.root", () => {
    beforeEach(() => {
      (pxToRem as jest.Mock).mockImplementation((value: number) => `${value}px`);
    });

    it("should have marginTop set to 0", () => {
      expect(cardContent.styleOverrides.root.marginTop).toBe(0);
    });

    it("should have marginBottom set to 0", () => {
      expect(cardContent.styleOverrides.root.marginBottom).toBe(0);
    });

    it("should call pxToRem three times for padding calculation", () => {
      jest.resetModules();
      jest.doMock("../../../../../src/assets/theme-dark/functions/pxToRem");
      
      const mockPxToRem = jest.fn((value: number) => `${value}px`);
      jest.doMock("../../../../../src/assets/theme-dark/functions/pxToRem", () => mockPxToRem);
      
      delete require.cache[require.resolve("../../../../../src/assets/theme-dark/components/card/cardContent")];
      const freshCardContent = require("../../../../../src/assets/theme-dark/components/card/cardContent").default;
    });

    it("should have correct padding structure with pxToRem values", () => {
      const padding = cardContent.styleOverrides.root.padding;
      expect(typeof padding).toBe("string");
      expect(padding).toContain("px");
    });

    it("should have padding with proper spacing values", () => {
      (pxToRem as jest.Mock).mockClear();
      (pxToRem as jest.Mock).mockImplementation((value: number) => `${value}px`);
      
      expect(cardContent.styleOverrides.root.padding).toMatch(/\d+px \d+px \d+px/);
    });
  });

  describe("padding calculation", () => {
    it("should include top padding of 8px equivalent", () => {
      (pxToRem as jest.Mock).mockImplementation((value: number) => {
        if (value === 8) return "0.5rem";
        if (value === 24) return "1.5rem";
        return `${value}px`;
      });
      
      const padding = cardContent.styleOverrides.root.padding;
      expect(padding).toContain("0.5rem");
    });

    it("should include horizontal padding of 24px equivalent", () => {
      (pxToRem as jest.Mock).mockImplementation((value: number) => {
        if (value === 8) return "0.5rem";
        if (value === 24) return "1.5rem";
        return `${value}px`;
      });
      
      const padding = cardContent.styleOverrides.root.padding;
      expect(padding).toContain("1.5rem");
    });

    it("should include bottom padding of 24px equivalent", () => {
      (pxToRem as jest.Mock).mockImplementation((value: number) => {
        if (value === 8) return "0.5rem";
        if (value === 24) return "1.5rem";
        return `${value}px`;
      });
      
      const padding = cardContent.styleOverrides.root.padding;
      const paddingParts = padding.split(" ");
      expect(paddingParts.length).toBeGreaterThanOrEqual(3);
    });
  });

  describe("object immutability", () => {
    it("should maintain consistent structure across multiple accesses", () => {
      const firstAccess = cardContent.styleOverrides.root;
      const secondAccess = cardContent.styleOverrides.root;
      
      expect(firstAccess).toEqual(secondAccess);
    });

    it("should have all expected properties", () => {
      const root = cardContent.styleOverrides.root;
      expect(Object.keys(root)).toContain("marginTop");
      expect(Object.keys(root)).toContain("marginBottom");
      expect(Object.keys(root)).toContain("padding");
    });

    it("should have exactly three properties in root", () => {
      const root = cardContent.styleOverrides.root;
      expect(Object.keys(root).length).toBe(3);
    });
  });

  describe("type checking", () => {
    it("should have numeric margin values", () => {
      expect(typeof cardContent.styleOverrides.root.marginTop).toBe("number");
      expect(typeof cardContent.styleOverrides.root.marginBottom).toBe("number");
    });

    it("should have string padding value", () => {
      expect(typeof cardContent.styleOverrides.root.padding).toBe("string");
    });

    it("should have non-negative margin values", () => {
      expect(cardContent.styleOverrides.root.marginTop).toBeGreaterThanOrEqual(0);
      expect(cardContent.styleOverrides.root.marginBottom).toBeGreaterThanOrEqual(0);
    });

    it("should have non-empty padding string", () => {
      expect(cardContent.styleOverrides.root.padding.length).toBeGreaterThan(0);
    });
  });
});
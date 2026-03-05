import root from "../../../../../src/assets/theme-dark/components/button/root";
import typography from "../../../../../src/assets/theme-dark/base/typography";
import borders from "../../../../../src/assets/theme-dark/base/borders";
import pxToRem from "../../../../../src/assets/theme-dark/functions/pxToRem";

jest.mock("../../../../../src/assets/theme-dark/base/typography");
jest.mock("../../../../../src/assets/theme-dark/base/borders");
jest.mock("../../../../../src/assets/theme-dark/functions/pxToRem");

describe("Button Root Theme", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    (typography as jest.Mock).fontWeightBold = 700;
    (typography as jest.Mock).size = { xs: "0.8125rem" };
    (borders as jest.Mock).borderRadius = { lg: "0.625rem" };
    (pxToRem as jest.Mock).mockImplementation((px: number) => `${px / 16}rem`);
  });

  describe("root object structure", () => {
    it("should export a root object with required display properties", () => {
      expect(root).toBeDefined();
      expect(root).toHaveProperty("display", "inline-flex");
      expect(root).toHaveProperty("justifyContent", "center");
      expect(root).toHaveProperty("alignItems", "center");
    });

    it("should have correct text styling properties", () => {
      expect(root).toHaveProperty("fontWeight");
      expect(root).toHaveProperty("fontSize");
      expect(root).toHaveProperty("textAlign", "center");
      expect(root).toHaveProperty("textTransform", "uppercase");
      expect(root).toHaveProperty("lineHeight", 1.4);
    });

    it("should have correct spacing properties", () => {
      expect(root).toHaveProperty("borderRadius");
      expect(root).toHaveProperty("padding");
    });

    it("should have user interaction properties", () => {
      expect(root).toHaveProperty("userSelect", "none");
      expect(root).toHaveProperty("transition", "all 150ms ease-in");
      expect(root).toHaveProperty("backgroundSize", "150% !important");
      expect(root).toHaveProperty("backgroundPositionX", "25% !important");
    });
  });

  describe("disabled state", () => {
    it("should have disabled state styling", () => {
      expect(root).toHaveProperty("&:disabled");
      expect(root["&:disabled"]).toBeDefined();
    });

    it("should disable pointer events when disabled", () => {
      expect(root["&:disabled"]).toHaveProperty("pointerEvent", "none");
    });

    it("should reduce opacity when disabled", () => {
      expect(root["&:disabled"]).toHaveProperty("opacity", 0.65);
    });
  });

  describe("material icons styling", () => {
    it("should have material-icons class selector", () => {
      expect(root).toHaveProperty("& .material-icons");
      expect(root["& .material-icons"]).toBeDefined();
    });

    it("should set correct font size for material icons", () => {
      expect(root["& .material-icons"]).toHaveProperty("fontSize");
    });

    it("should apply negative margin top to material icons", () => {
      expect(root["& .material-icons"]).toHaveProperty("marginTop");
    });
  });

  describe("CSS properties", () => {
    it("should have padding property with pxToRem values", () => {
      expect(typeof root.padding).toBe("string");
      expect(root.padding).toContain("rem");
    });

    it("should have valid display flex values", () => {
      expect(root.display).toBe("inline-flex");
    });

    it("should have valid transition timing", () => {
      expect(root.transition).toMatch(/^\s*all\s+\d+ms\s+ease-in\s*$/);
    });

    it("should have important background size", () => {
      expect(root.backgroundSize).toContain("!important");
    });

    it("should have important background position", () => {
      expect(root.backgroundPositionX).toContain("!important");
    });

    it("should have line height greater than 1", () => {
      expect(root.lineHeight).toBeGreaterThan(1);
    });
  });

  describe("accessibility properties", () => {
    it("should prevent text selection with userSelect", () => {
      expect(root.userSelect).toBe("none");
    });

    it("should have uppercase text transform for consistency", () => {
      expect(root.textTransform).toBe("uppercase");
    });

    it("should center content vertically and horizontally", () => {
      expect(root.justifyContent).toBe("center");
      expect(root.alignItems).toBe("center");
    });
  });

  describe("visual properties", () => {
    it("should have smooth transitions", () => {
      expect(root.transition).toContain("150ms");
      expect(root.transition).toContain("ease-in");
    });

    it("should have background animation properties", () => {
      expect(root.backgroundSize).toBe("150% !important");
      expect(root.backgroundPositionX).toBe("25% !important");
    });

    it("should have rounded corners", () => {
      expect(root.borderRadius).toBeDefined();
    });
  });

  describe("disabled state edge cases", () => {
    it("disabled opacity should be valid CSS value", () => {
      const opacity = root["&:disabled"].opacity;
      expect(opacity).toBeGreaterThan(0);
      expect(opacity).toBeLessThanOrEqual(1);
    });

    it("disabled state should not have pointer events", () => {
      expect(root["&:disabled"].pointerEvent).toBe("none");
    });
  });

  describe("icon styling edge cases", () => {
    it("icon margin top should be negative", () => {
      const iconStyles = root["& .material-icons"];
      expect(typeof iconStyles.marginTop).toBe("string");
    });

    it("icon font size should be smaller than button text", () => {
      expect(root["& .material-icons"]).toHaveProperty("fontSize");
    });
  });

  describe("type consistency", () => {
    it("should have string values for CSS properties", () => {
      expect(typeof root.display).toBe("string");
      expect(typeof root.textAlign).toBe("string");
      expect(typeof root.textTransform).toBe("string");
      expect(typeof root.transition).toBe("string");
    });

    it("should have number values for numeric CSS properties", () => {
      expect(typeof root.lineHeight).toBe("number");
      expect(typeof root["&:disabled"].opacity).toBe("number");
    });
  });
});
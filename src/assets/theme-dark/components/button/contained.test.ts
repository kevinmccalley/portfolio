import contained from "src/assets/theme-dark/components/button/contained.js";
import colors from "assets/theme-dark/base/colors";
import typography from "assets/theme-dark/base/typography";
import pxToRem from "assets/theme-dark/functions/pxToRem";

jest.mock("assets/theme-dark/base/colors");
jest.mock("assets/theme-dark/base/typography");
jest.mock("assets/theme-dark/functions/pxToRem");

describe("contained button theme", () => {
  beforeEach(() => {
    jest.clearAllMocks();

    (colors as any).white = { main: "#ffffff" };
    (colors as any).text = { main: "#333333" };
    (colors as any).info = { main: "#0066ff", focus: "#0052cc" };
    (colors as any).secondary = { main: "#6c757d", focus: "#5a6268" };

    (typography as any).size = {
      xs: "0.75rem",
      sm: "0.875rem",
    };

    (pxToRem as jest.Mock).mockImplementation((px: number) => `${px / 16}rem`);
  });

  describe("base styles", () => {
    it("should have white background color", () => {
      expect(contained.base.backgroundColor).toBe("#ffffff");
    });

    it("should have correct minimum height", () => {
      expect(contained.base.minHeight).toBe("37px" || "2.3125rem");
    });

    it("should have text color set to main text color", () => {
      expect(contained.base.color).toBe("#333333");
    });

    it("should have correct padding", () => {
      expect(contained.base.padding).toMatch(/rem/);
    });

    it("should have hover state with white background", () => {
      expect(contained.base["&:hover"].backgroundColor).toBe("#ffffff");
    });

    it("should have active state with 0.85 opacity", () => {
      expect(contained.base["&:active, &:active:focus, &:active:hover"].opacity).toBe(
        0.85
      );
    });

    it("should have material icon styles with 16px font size", () => {
      const iconStyles = contained.base["& .material-icon, .material-icons-round, svg"];
      expect(iconStyles.fontSize).toContain("!important");
      expect(iconStyles.fontSize).toMatch(/16/);
    });
  });

  describe("small size styles", () => {
    it("should have correct minimum height for small", () => {
      expect(contained.small.minHeight).toBe("29px" || "1.8125rem");
    });

    it("should have correct padding for small", () => {
      expect(contained.small.padding).toMatch(/rem/);
    });

    it("should have extra small font size", () => {
      expect(contained.small.fontSize).toBe("0.75rem");
    });

    it("should have material icon styles with 12px font size for small", () => {
      const iconStyles = contained.small["& .material-icon, .material-icons-round, svg"];
      expect(iconStyles.fontSize).toContain("!important");
      expect(iconStyles.fontSize).toMatch(/12/);
    });
  });

  describe("large size styles", () => {
    it("should have correct minimum height for large", () => {
      expect(contained.large.minHeight).toBe("44px" || "2.75rem");
    });

    it("should have correct padding for large", () => {
      expect(contained.large.padding).toMatch(/rem/);
    });

    it("should have small font size", () => {
      expect(contained.large.fontSize).toBe("0.875rem");
    });

    it("should have material icon styles with 22px font size for large", () => {
      const iconStyles = contained.large["& .material-icon, .material-icons-round, svg"];
      expect(iconStyles.fontSize).toContain("!important");
      expect(iconStyles.fontSize).toMatch(/22/);
    });
  });

  describe("primary variant styles", () => {
    it("should have info color as background", () => {
      expect(contained.primary.backgroundColor).toBe("#0066ff");
    });

    it("should maintain info color on hover", () => {
      expect(contained.primary["&:hover"].backgroundColor).toBe("#0066ff");
    });

    it("should have focus color on focus without hover", () => {
      expect(contained.primary["&:focus:not(:hover)"].backgroundColor).toBe("#0052cc");
    });
  });

  describe("secondary variant styles", () => {
    it("should have secondary color as background", () => {
      expect(contained.secondary.backgroundColor).toBe("#6c757d");
    });

    it("should maintain secondary color on hover", () => {
      expect(contained.secondary["&:hover"].backgroundColor).toBe("#6c757d");
    });

    it("should have secondary focus color on focus without hover", () => {
      expect(contained.secondary["&:focus:not(:hover)"].backgroundColor).toBe("#5a6268");
    });
  });

  describe("export", () => {
    it("should export contained as default", () => {
      expect(contained).toBeDefined();
      expect(typeof contained).toBe("object");
    });

    it("should have all required style variants", () => {
      expect(contained).toHaveProperty("base");
      expect(contained).toHaveProperty("small");
      expect(contained).toHaveProperty("large");
      expect(contained).toHaveProperty("primary");
      expect(contained).toHaveProperty("secondary");
    });

    it("should have correct structure for base variant", () => {
      expect(contained.base).toHaveProperty("backgroundColor");
      expect(contained.base).toHaveProperty("minHeight");
      expect(contained.base).toHaveProperty("color");
      expect(contained.base).toHaveProperty("padding");
      expect(contained.base).toHaveProperty("&:hover");
      expect(contained.base).toHaveProperty("&:active, &:active:focus, &:active:hover");
      expect(contained.base).toHaveProperty("& .material-icon, .material-icons-round, svg");
    });

    it("should have correct structure for size variants", () => {
      expect(contained.small).toHaveProperty("minHeight");
      expect(contained.small).toHaveProperty("padding");
      expect(contained.small).toHaveProperty("fontSize");
      expect(contained.large).toHaveProperty("minHeight");
      expect(contained.large).toHaveProperty("padding");
      expect(contained.large).toHaveProperty("fontSize");
    });

    it("should have correct structure for color variants", () => {
      expect(contained.primary).toHaveProperty("backgroundColor");
      expect(contained.primary).toHaveProperty("&:hover");
      expect(contained.primary).toHaveProperty("&:focus:not(:hover)");
      expect(contained.secondary).toHaveProperty("backgroundColor");
      expect(contained.secondary).toHaveProperty("&:hover");
      expect(contained.secondary).toHaveProperty("&:focus:not(:hover)");
    });
  });

  describe("consistency checks", () => {
    it("all size variants should have material icon styles", () => {
      expect(contained.base).toHaveProperty(
        "& .material-icon, .material-icons-round, svg"
      );
      expect(contained.small).toHaveProperty(
        "& .material-icon, .material-icons-round, svg"
      );
      expect(contained.large).toHaveProperty(
        "& .material-icon, .material-icons-round, svg"
      );
    });

    it("all color variants should have hover and focus states", () => {
      expect(contained.primary).toHaveProperty("&:hover");
      expect(contained.primary).toHaveProperty("&:focus:not(:hover)");
      expect(contained.secondary).toHaveProperty("&:hover");
      expect(contained.secondary).toHaveProperty("&:focus:not(:hover)");
    });

    it("padding should be a string with rem units or pixel values", () => {
      expect(typeof contained.base.padding).toBe("string");
      expect(typeof contained.small.padding).toBe("string");
      expect(typeof contained.large.padding).toBe("string");
    });

    it("minHeight should be defined for all size variants", () => {
      expect(contained.base.minHeight).toBeDefined();
      expect(contained.small.minHeight).toBeDefined();
      expect(contained.large.minHeight).toBeDefined();
    });
  });
});
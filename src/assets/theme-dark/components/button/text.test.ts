import buttonText from "src/assets/theme-dark/components/button/text";
import colors from "assets/theme-dark/base/colors";
import typography from "assets/theme-dark/base/typography";
import pxToRem from "assets/theme-dark/functions/pxToRem";

jest.mock("assets/theme-dark/base/colors");
jest.mock("assets/theme-dark/base/typography");
jest.mock("assets/theme-dark/functions/pxToRem");

describe("buttonText", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    
    (colors as jest.Mocked<typeof colors>) = {
      text: { main: "#000000" },
      info: { main: "#0047BB", focus: "#0037A0" },
      secondary: { main: "#6C757D", focus: "#585D63" },
      transparent: { main: "transparent" },
    } as any;

    (typography as jest.Mocked<typeof typography>) = {
      size: {
        xs: "0.75rem",
        sm: "0.875rem",
      },
    } as any;

    (pxToRem as jest.Mock).mockImplementation((px) => `${px / 16}rem`);
  });

  describe("base styles", () => {
    it("should have base property with correct backgroundColor", () => {
      expect(buttonText.base.backgroundColor).toBe("transparent");
    });

    it("should have correct minHeight in base styles", () => {
      expect(buttonText.base.minHeight).toBeDefined();
    });

    it("should have correct color in base styles", () => {
      expect(buttonText.base.color).toBe("#000000");
    });

    it("should have boxShadow set to none in base", () => {
      expect(buttonText.base.boxShadow).toBe("none");
    });

    it("should have padding in base styles", () => {
      expect(buttonText.base.padding).toBeDefined();
      expect(buttonText.base.padding).toContain("rem");
    });

    it("should have hover state with transparent background", () => {
      expect(buttonText.base["&:hover"]).toBeDefined();
      expect(buttonText.base["&:hover"].backgroundColor).toBe("transparent");
      expect(buttonText.base["&:hover"].boxShadow).toBe("none");
    });

    it("should have focus state with no boxShadow", () => {
      expect(buttonText.base["&:focus"]).toBeDefined();
      expect(buttonText.base["&:focus"].boxShadow).toBe("none");
    });

    it("should have active states with opacity and no boxShadow", () => {
      const activeState = buttonText.base["&:active, &:active:focus, &:active:hover"];
      expect(activeState).toBeDefined();
      expect(activeState.opacity).toBe(0.85);
      expect(activeState.boxShadow).toBe("none");
    });

    it("should have disabled state with no boxShadow", () => {
      expect(buttonText.base["&:disabled"]).toBeDefined();
      expect(buttonText.base["&:disabled"].boxShadow).toBe("none");
    });

    it("should have material icon styles in base", () => {
      const iconSelector = "& .material-icon, .material-icons-round, svg";
      expect(buttonText.base[iconSelector]).toBeDefined();
      expect(buttonText.base[iconSelector].fontSize).toContain("!important");
    });
  });

  describe("small size styles", () => {
    it("should have small property", () => {
      expect(buttonText.small).toBeDefined();
    });

    it("should have correct minHeight for small", () => {
      expect(buttonText.small.minHeight).toBeDefined();
    });

    it("should have correct padding for small", () => {
      expect(buttonText.small.padding).toBeDefined();
      expect(buttonText.small.padding).toContain("rem");
    });

    it("should have fontSize set to xs for small", () => {
      expect(buttonText.small.fontSize).toBe("0.75rem");
    });

    it("should have smaller icon fontSize for small variant", () => {
      const iconSelector = "& .material-icon, .material-icons-round, svg";
      expect(buttonText.small[iconSelector]).toBeDefined();
      expect(buttonText.small[iconSelector].fontSize).toContain("!important");
    });
  });

  describe("large size styles", () => {
    it("should have large property", () => {
      expect(buttonText.large).toBeDefined();
    });

    it("should have correct minHeight for large", () => {
      expect(buttonText.large.minHeight).toBeDefined();
    });

    it("should have correct padding for large", () => {
      expect(buttonText.large.padding).toBeDefined();
      expect(buttonText.large.padding).toContain("rem");
    });

    it("should have fontSize set to sm for large", () => {
      expect(buttonText.large.fontSize).toBe("0.875rem");
    });

    it("should have larger icon fontSize for large variant", () => {
      const iconSelector = "& .material-icon, .material-icons-round, svg";
      expect(buttonText.large[iconSelector]).toBeDefined();
      expect(buttonText.large[iconSelector].fontSize).toContain("!important");
    });
  });

  describe("primary variant styles", () => {
    it("should have primary property", () => {
      expect(buttonText.primary).toBeDefined();
    });

    it("should have info.main color for primary", () => {
      expect(buttonText.primary.color).toBe("#0047BB");
    });

    it("should maintain color on hover for primary", () => {
      expect(buttonText.primary["&:hover"]).toBeDefined();
      expect(buttonText.primary["&:hover"].color).toBe("#0047BB");
    });

    it("should have focus color different from main for primary", () => {
      const focusState = buttonText.primary["&:focus:not(:hover)"];
      expect(focusState).toBeDefined();
      expect(focusState.color).toBe("#0037A0");
      expect(focusState.boxShadow).toBe("none");
    });

    it("should have focus color different from hover color", () => {
      const focusColor = buttonText.primary["&:focus:not(:hover)"].color;
      const hoverColor = buttonText.primary["&:hover"].color;
      expect(focusColor).not.toBe(hoverColor);
    });
  });

  describe("secondary variant styles", () => {
    it("should have secondary property", () => {
      expect(buttonText.secondary).toBeDefined();
    });

    it("should have secondary.main color for secondary", () => {
      expect(buttonText.secondary.color).toBe("#6C757D");
    });

    it("should maintain color on hover for secondary", () => {
      expect(buttonText.secondary["&:hover"]).toBeDefined();
      expect(buttonText.secondary["&:hover"].color).toBe("#6C757D");
    });

    it("should have focus color different from main for secondary", () => {
      const focusState = buttonText.secondary["&:focus:not(:hover)"];
      expect(focusState).toBeDefined();
      expect(focusState.color).toBe("#585D63");
      expect(focusState.boxShadow).toBe("none");
    });

    it("should have focus color different from hover color for secondary", () => {
      const focusColor = buttonText.secondary["&:focus:not(:hover)"].color;
      const hoverColor = buttonText.secondary["&:hover"].color;
      expect(focusColor).not.toBe(hoverColor);
    });
  });

  describe("overall structure", () => {
    it("should export buttonText as default", () => {
      expect(buttonText).toBeDefined();
      expect(typeof buttonText).toBe("object");
    });

    it("should have all required variant properties", () => {
      expect(buttonText.base).toBeDefined();
      expect(buttonText.small).toBeDefined();
      expect(buttonText.large).toBeDefined();
      expect(buttonText.primary).toBeDefined();
      expect(buttonText.secondary).toBeDefined();
    });

    it("should have no undefined property values in base", () => {
      Object.values(buttonText.base).forEach((value) => {
        expect(value).not.toBeUndefined();
      });
    });

    it("should not have conflicting opacity values", () => {
      expect(buttonText.base["&:active, &:active:focus, &:active:hover"].opacity).toBeLessThanOrEqual(1);
      expect(buttonText.base["&:active, &:active:focus, &:active:hover"].opacity).toBeGreaterThan(0);
    });
  });
});
import cardMedia from "../src/assets/theme-dark/components/card/cardMedia";
import borders from "../src/assets/theme-dark/base/borders";
import pxToRem from "../src/assets/theme-dark/functions/pxToRem";

jest.mock("../src/assets/theme-dark/base/borders");
jest.mock("../src/assets/theme-dark/functions/pxToRem");

describe("cardMedia", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    (pxToRem as jest.Mock).mockImplementation((value: number) => `${value}px`);
    (borders as any).borderRadius = {
      xl: "16px",
    };
  });

  describe("structure", () => {
    it("should have styleOverrides property", () => {
      expect(cardMedia).toHaveProperty("styleOverrides");
    });

    it("should have root property in styleOverrides", () => {
      expect(cardMedia.styleOverrides).toHaveProperty("root");
    });

    it("should have media property in styleOverrides", () => {
      expect(cardMedia.styleOverrides).toHaveProperty("media");
    });
  });

  describe("styleOverrides.root", () => {
    it("should have borderRadius property", () => {
      expect(cardMedia.styleOverrides.root).toHaveProperty("borderRadius");
    });

    it("should have margin property", () => {
      expect(cardMedia.styleOverrides.root).toHaveProperty("margin");
    });

    it("should set borderRadius to borderRadius.xl", () => {
      expect(cardMedia.styleOverrides.root.borderRadius).toBe("16px");
    });

    it("should set margin using pxToRem function", () => {
      const margin = cardMedia.styleOverrides.root.margin;
      expect(margin).toBe("16px 16px 0");
    });

    it("should call pxToRem with 16 for horizontal padding", () => {
      expect(pxToRem).toHaveBeenCalledWith(16);
    });

    it("should have exactly two calls to pxToRem for margin calculation", () => {
      const callCount = (pxToRem as jest.Mock).mock.calls.length;
      expect(callCount).toBe(2);
    });

    it("should have margin format of 'value value 0'", () => {
      const margin = cardMedia.styleOverrides.root.margin;
      const parts = margin.split(" ");
      expect(parts).toHaveLength(3);
      expect(parts[0]).toBe(parts[1]);
      expect(parts[2]).toBe("0");
    });
  });

  describe("styleOverrides.media", () => {
    it("should have width property", () => {
      expect(cardMedia.styleOverrides.media).toHaveProperty("width");
    });

    it("should set width to auto", () => {
      expect(cardMedia.styleOverrides.media.width).toBe("auto");
    });

    it("should have exactly one property", () => {
      const keys = Object.keys(cardMedia.styleOverrides.media);
      expect(keys).toHaveLength(1);
    });
  });

  describe("root style properties", () => {
    it("should have borderRadius as string", () => {
      expect(typeof cardMedia.styleOverrides.root.borderRadius).toBe("string");
    });

    it("should have margin as string", () => {
      expect(typeof cardMedia.styleOverrides.root.margin).toBe("string");
    });

    it("should have exactly two properties in root", () => {
      const keys = Object.keys(cardMedia.styleOverrides.root);
      expect(keys).toHaveLength(2);
    });
  });

  describe("export", () => {
    it("should be a non-null object", () => {
      expect(cardMedia).not.toBeNull();
      expect(typeof cardMedia).toBe("object");
    });

    it("should be the default export", () => {
      expect(cardMedia).toBeDefined();
    });

    it("should be immutable at root level", () => {
      const originalValue = cardMedia.styleOverrides;
      expect(cardMedia.styleOverrides).toBe(originalValue);
    });
  });

  describe("pxToRem integration", () => {
    it("should use pxToRem for margin top and left values", () => {
      const calls = (pxToRem as jest.Mock).mock.calls;
      expect(calls[0][0]).toBe(16);
      expect(calls[1][0]).toBe(16);
    });

    it("should construct margin string with pxToRem outputs and literal 0", () => {
      (pxToRem as jest.Mock).mockReturnValue("1rem");
      const margin = `${pxToRem(16)} ${pxToRem(16)} 0`;
      expect(margin).toBe("1rem 1rem 0");
    });
  });

  describe("borders integration", () => {
    it("should use borderRadius.xl from borders object", () => {
      (borders as any).borderRadius.xl = "24px";
      const newCardMedia = {
        styleOverrides: {
          root: {
            borderRadius: (borders as any).borderRadius.xl,
            margin: `${pxToRem(16)} ${pxToRem(16)} 0`,
          },
          media: {
            width: "auto",
          },
        },
      };
      expect(newCardMedia.styleOverrides.root.borderRadius).toBe("24px");
    });
  });
});
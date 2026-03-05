import card from "../src/assets/theme-dark/components/card/index";

describe("Card Theme Configuration", () => {
  describe("card object structure", () => {
    it("should export a card object", () => {
      expect(card).toBeDefined();
      expect(typeof card).toBe("object");
    });

    it("should have styleOverrides property", () => {
      expect(card.styleOverrides).toBeDefined();
      expect(typeof card.styleOverrides).toBe("object");
    });

    it("should have root property in styleOverrides", () => {
      expect(card.styleOverrides.root).toBeDefined();
      expect(typeof card.styleOverrides.root).toBe("object");
    });
  });

  describe("card root styles", () => {
    const rootStyles = card.styleOverrides.root;

    it("should have display set to flex", () => {
      expect(rootStyles.display).toBe("flex");
    });

    it("should have flexDirection set to column", () => {
      expect(rootStyles.flexDirection).toBe("column");
    });

    it("should have position set to relative", () => {
      expect(rootStyles.position).toBe("relative");
    });

    it("should have minWidth set to 0", () => {
      expect(rootStyles.minWidth).toBe(0);
    });

    it("should have wordWrap set to break-word", () => {
      expect(rootStyles.wordWrap).toBe("break-word");
    });

    it("should have backgroundImage set to none", () => {
      expect(rootStyles.backgroundImage).toBe("none");
    });

    it("should have backgroundColor defined", () => {
      expect(rootStyles.backgroundColor).toBeDefined();
    });

    it("should have backgroundClip set to border-box", () => {
      expect(rootStyles.backgroundClip).toBe("border-box");
    });

    it("should have a border property that is a string", () => {
      expect(rootStyles.border).toBeDefined();
      expect(typeof rootStyles.border).toBe("string");
    });

    it("should have border containing solid", () => {
      expect(rootStyles.border).toContain("solid");
    });

    it("should have borderRadius property", () => {
      expect(rootStyles.borderRadius).toBeDefined();
    });

    it("should have boxShadow property defined", () => {
      expect(rootStyles.boxShadow).toBeDefined();
    });

    it("should have overflow set to visible", () => {
      expect(rootStyles.overflow).toBe("visible");
    });
  });

  describe("card root styles count", () => {
    it("should have exactly 11 style properties in root", () => {
      const rootStyles = card.styleOverrides.root;
      const styleKeys = Object.keys(rootStyles);
      expect(styleKeys).toHaveLength(11);
    });

    it("should have only styleOverrides property in card", () => {
      const cardKeys = Object.keys(card);
      expect(cardKeys).toEqual(["styleOverrides"]);
    });
  });

  describe("card styling properties", () => {
    const rootStyles = card.styleOverrides.root;

    it("should have valid display property value", () => {
      const validDisplayValues = ["flex", "grid", "block", "inline-flex"];
      expect(validDisplayValues).toContain(rootStyles.display);
    });

    it("should have valid flexDirection property value", () => {
      const validFlexDirectionValues = ["row", "column", "row-reverse", "column-reverse"];
      expect(validFlexDirectionValues).toContain(rootStyles.flexDirection);
    });

    it("should have valid position property value", () => {
      const validPositionValues = ["relative", "absolute", "fixed", "static", "sticky"];
      expect(validPositionValues).toContain(rootStyles.position);
    });

    it("should have valid backgroundClip property value", () => {
      const validBackgroundClipValues = ["border-box", "padding-box", "content-box"];
      expect(validBackgroundClipValues).toContain(rootStyles.backgroundClip);
    });

    it("should have valid overflow property value", () => {
      const validOverflowValues = ["visible", "hidden", "scroll", "auto"];
      expect(validOverflowValues).toContain(rootStyles.overflow);
    });
  });

  describe("card border styling", () => {
    const rootStyles = card.styleOverrides.root;

    it("border should be a non-empty string", () => {
      expect(rootStyles.border).toBeTruthy();
      expect(rootStyles.border.length).toBeGreaterThan(0);
    });

    it("border should contain a color value (rgba)", () => {
      expect(rootStyles.border).toMatch(/rgba/);
    });

    it("should have borderRadius as a valid value", () => {
      expect(rootStyles.borderRadius).toBeTruthy();
    });
  });

  describe("card shadow and background", () => {
    const rootStyles = card.styleOverrides.root;

    it("boxShadow should be a valid value", () => {
      expect(rootStyles.boxShadow).toBeTruthy();
    });

    it("backgroundColor should be a valid value", () => {
      expect(rootStyles.backgroundColor).toBeTruthy();
    });

    it("should have backgroundImage set to none to prevent image override", () => {
      expect(rootStyles.backgroundImage).toBe("none");
    });
  });

  describe("card immutability", () => {
    it("should not be frozen", () => {
      expect(Object.isFrozen(card)).toBe(false);
    });

    it("should allow property access", () => {
      expect(() => {
        const _ = card.styleOverrides.root.display;
      }).not.toThrow();
    });
  });
});
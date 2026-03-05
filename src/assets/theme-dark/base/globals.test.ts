import globals from "src/assets/theme-dark/base/globals";
import colors from "assets/theme-dark/base/colors";

jest.mock("assets/theme-dark/base/colors");

describe("globals", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    (colors as jest.Mocked<typeof colors>).info = { main: "#00BCD4" };
    (colors as jest.Mocked<typeof colors>).dark = { main: "#212121" };
  });

  describe("structure", () => {
    it("should export globals as an object", () => {
      expect(globals).toBeDefined();
      expect(typeof globals).toBe("object");
    });

    it("should contain html selector styles", () => {
      expect(globals.html).toBeDefined();
      expect(typeof globals.html).toBe("object");
    });

    it("should contain universal selector styles", () => {
      expect(globals["*, *::before, *::after"]).toBeDefined();
      expect(typeof globals["*, *::before, *::after"]).toBe("object");
    });

    it("should contain anchor tag styles", () => {
      expect(globals["a, a:link, a:visited"]).toBeDefined();
      expect(typeof globals["a, a:link, a:visited"]).toBe("object");
    });

    it("should contain link class styles", () => {
      expect(
        globals["a.link, .link, a.link:link, .link:link, a.link:visited, .link:visited"]
      ).toBeDefined();
      expect(
        typeof globals["a.link, .link, a.link:link, .link:link, a.link:visited, .link:visited"]
      ).toBe("object");
    });

    it("should contain link hover and focus styles", () => {
      expect(
        globals["a.link:hover, .link:hover, a.link:focus, .link:focus"]
      ).toBeDefined();
      expect(
        typeof globals["a.link:hover, .link:hover, a.link:focus, .link:focus"]
      ).toBe("object");
    });
  });

  describe("html styles", () => {
    it("should have scrollBehavior set to smooth", () => {
      expect(globals.html.scrollBehavior).toBe("smooth");
    });

    it("should only contain scrollBehavior property", () => {
      expect(Object.keys(globals.html)).toEqual(["scrollBehavior"]);
    });
  });

  describe("universal selector styles", () => {
    it("should reset margin to 0", () => {
      expect(globals["*, *::before, *::after"].margin).toBe(0);
    });

    it("should reset padding to 0", () => {
      expect(globals["*, *::before, *::after"].padding).toBe(0);
    });

    it("should only contain margin and padding properties", () => {
      expect(
        Object.keys(globals["*, *::before, *::after"]).sort()
      ).toEqual(["margin", "padding"]);
    });
  });

  describe("anchor tag styles", () => {
    it("should remove text decoration from anchor tags", () => {
      expect(globals["a, a:link, a:visited"].textDecoration).toBe(
        "none !important"
      );
    });

    it("should only contain textDecoration property", () => {
      expect(Object.keys(globals["a, a:link, a:visited"])).toEqual([
        "textDecoration",
      ]);
    });
  });

  describe("link class styles", () => {
    it("should set link color to dark main color", () => {
      const linkStyles =
        globals["a.link, .link, a.link:link, .link:link, a.link:visited, .link:visited"];
      expect(linkStyles.color).toBe("#212121 !important");
    });

    it("should set transition for color property", () => {
      const linkStyles =
        globals["a.link, .link, a.link:link, .link:link, a.link:visited, .link:visited"];
      expect(linkStyles.transition).toBe("color 150ms ease-in !important");
    });

    it("should contain color and transition properties", () => {
      const linkStyles =
        globals["a.link, .link, a.link:link, .link:link, a.link:visited, .link:visited"];
      expect(Object.keys(linkStyles).sort()).toEqual([
        "color",
        "transition",
      ]);
    });
  });

  describe("link hover and focus styles", () => {
    it("should set hover and focus color to info main color", () => {
      const hoverFocusStyles =
        globals["a.link:hover, .link:hover, a.link:focus, .link:focus"];
      expect(hoverFocusStyles.color).toBe("#00BCD4 !important");
    });

    it("should only contain color property", () => {
      const hoverFocusStyles =
        globals["a.link:hover, .link:hover, a.link:focus, .link:focus"];
      expect(Object.keys(hoverFocusStyles)).toEqual(["color"]);
    });
  });

  describe("color imports", () => {
    it("should use dark color from imported colors object", () => {
      const linkStyles =
        globals["a.link, .link, a.link:link, .link:link, a.link:visited, .link:visited"];
      expect(linkStyles.color).toContain("#212121");
    });

    it("should use info color from imported colors object", () => {
      const hoverFocusStyles =
        globals["a.link:hover, .link:hover, a.link:focus, .link:focus"];
      expect(hoverFocusStyles.color).toContain("#00BCD4");
    });
  });

  describe("important flags", () => {
    it("should have !important flag on text decoration", () => {
      expect(globals["a, a:link, a:visited"].textDecoration).toContain(
        "!important"
      );
    });

    it("should have !important flag on link color", () => {
      const linkStyles =
        globals["a.link, .link, a.link:link, .link:link, a.link:visited, .link:visited"];
      expect(linkStyles.color).toContain("!important");
    });

    it("should have !important flag on transition", () => {
      const linkStyles =
        globals["a.link, .link, a.link:link, .link:link, a.link:visited, .link:visited"];
      expect(linkStyles.transition).toContain("!important");
    });

    it("should have !important flag on hover focus color", () => {
      const hoverFocusStyles =
        globals["a.link:hover, .link:hover, a.link:focus, .link:focus"];
      expect(hoverFocusStyles.color).toContain("!important");
    });
  });
});
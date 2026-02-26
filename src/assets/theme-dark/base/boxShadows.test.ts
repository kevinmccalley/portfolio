```typescript
import boxShadows from "src/assets/theme-dark/base/boxShadows";

jest.mock("assets/theme-dark/base/colors", () => ({
  black: { main: "#000000" },
  dark: { main: "#344767" },
  tabs: {
    indicator: {
      boxShadow: "#1A73E8",
    },
  },
  coloredShadows: {
    primary: "#e91e62",
    secondary: "#110d31",
    info: "#00bcd4",
    success: "#4caf4f",
    warning: "#ff9900",
    error: "#f44336",
    light: "#adb5bd",
    dark: "#404040",
  },
}));

jest.mock("assets/theme-dark/functions/boxShadow", () =>
  jest.fn(
    (offset, radius, color, opacity, inset = "") =>
      `${inset ? inset + " " : ""}${offset[0]}px ${offset[1]}px ${radius[0]}px ${radius[1]}px ${color} ${opacity}`
  )
);

import boxShadow from "assets/theme-dark/functions/boxShadow";
import colors from "assets/theme-dark/base/colors";

describe("boxShadows (dark theme)", () => {
  describe("module structure", () => {
    it("should export a default object", () => {
      expect(boxShadows).toBeDefined();
      expect(typeof boxShadows).toBe("object");
    });

    it("should have all top-level shadow keys", () => {
      expect(boxShadows).toHaveProperty("xs");
      expect(boxShadows).toHaveProperty("sm");
      expect(boxShadows).toHaveProperty("md");
      expect(boxShadows).toHaveProperty("lg");
      expect(boxShadows).toHaveProperty("xl");
      expect(boxShadows).toHaveProperty("xxl");
      expect(boxShadows).toHaveProperty("inset");
      expect(boxShadows).toHaveProperty("colored");
      expect(boxShadows).toHaveProperty("navbarBoxShadow");
      expect(boxShadows).toHaveProperty("sliderBoxShadow");
      expect(boxShadows).toHaveProperty("tabsBoxShadow");
    });
  });

  describe("basic shadow values", () => {
    it("should have xs as a string", () => {
      expect(typeof boxShadows.xs).toBe("string");
    });

    it("should have sm as a string", () => {
      expect(typeof boxShadows.sm).toBe("string");
    });

    it("should have md as a string", () => {
      expect(typeof boxShadows.md).toBe("string");
    });

    it("should have lg as a string", () => {
      expect(typeof boxShadows.lg).toBe("string");
    });

    it("should have xl as a string", () => {
      expect(typeof boxShadows.xl).toBe("string");
    });

    it("should have xxl as a string", () => {
      expect(typeof boxShadows.xxl).toBe("string");
    });

    it("should have inset as a string", () => {
      expect(typeof boxShadows.inset).toBe("string");
    });

    it("should have navbarBoxShadow as a string", () => {
      expect(typeof boxShadows.navbarBoxShadow).toBe("string");
    });
  });

  describe("md shadow", () => {
    it("should be a composite of multiple box shadows separated by commas", () => {
      const parts = boxShadows.md.split(", ");
      expect(parts.length).toBeGreaterThanOrEqual(3);
    });
  });

  describe("lg shadow", () => {
    it("should be a composite of multiple box shadows separated by commas", () => {
      const parts = boxShadows.lg.split(", ");
      expect(parts.length).toBeGreaterThanOrEqual(2);
    });
  });

  describe("xl shadow", () => {
    it("should be a composite of multiple box shadows separated by commas", () => {
      const parts = boxShadows.xl.split(", ");
      expect(parts.length).toBeGreaterThanOrEqual(2);
    });
  });

  describe("navbarBoxShadow", () => {
    it("should be a composite of multiple box shadows", () => {
      const parts = boxShadows.navbarBoxShadow.split(", ");
      expect(parts.length).toBeGreaterThanOrEqual(2);
    });

    it("should include an inset shadow", () => {
      expect(boxShadows.navbarBoxShadow).toContain("inset");
    });
  });

  describe("inset shadow", () => {
    it("should contain inset keyword", () => {
      expect(boxShadows.inset).toContain("inset");
    });
  });

  describe("colored shadows", () => {
    it("should be an object", () => {
      expect(typeof boxShadows.colored).toBe("object");
      expect(boxShadows.colored).not.toBeNull();
    });

    it("should have a primary shadow", () => {
      expect(boxShadows.colored).toHaveProperty("primary");
      expect(typeof boxShadows.colored.primary).toBe("string");
    });

    it("should have a secondary shadow", () => {
      expect(boxShadows.colored).toHaveProperty("secondary");
      expect(typeof boxShadows.colored.secondary).toBe("string");
    });

    it("should have an info shadow", () => {
      expect(boxShadows.colored).toHaveProperty("info");
      expect(typeof boxShadows.colored.info).toBe("string");
    });

    it("should have a success shadow", () => {
      expect(boxShadows.colored).toHaveProperty("success");
      expect(typeof boxShadows.colored.success).toBe("string");
    });

    it("should have a warning shadow", () => {
      expect(boxShadows.colored).toHaveProperty("warning");
      expect(typeof boxShadows.colored.warning).toBe("string");
    });

    it("should have an error shadow", () => {
      expect(boxShadows.colored).toHaveProperty("error");
      expect(typeof boxShadows.colored.error).toBe("string");
    });

    it("should have a light shadow", () => {
      expect(boxShadows.colored).toHaveProperty("light");
      expect(typeof boxShadows.colored.light).toBe("string");
    });

    it("should have a dark shadow", () => {
      expect(boxShadows.colored).toHaveProperty("dark");
      expect(typeof boxShadows.colored.dark).toBe("string");
    });

    it("should have exactly 8 colored shadow variants", () => {
      const coloredKeys = Object.keys(boxShadows.colored);
      expect(coloredKeys).toHaveLength(8);
    });

    it("each colored shadow should be a composite of two box shadows", () => {
      Object.values(boxShadows.colored).forEach((shadow) => {
        const parts = (shadow as string).split(", ");
        expect(parts.length).toBeGreaterThanOrEqual(2);
      });
    });

    it("primary colored shadow should include coloredShadows.primary color", () => {
      expect(boxShadows.colored.primary).toContain(colors.coloredShadows.primary);
    });

    it("secondary colored shadow should include coloredShadows.secondary color", () => {
      expect(boxShadows.colored.secondary).toContain(colors.coloredShadows.secondary);
    });

    it("info colored shadow should include coloredShadows.info color", () => {
      expect(boxShadows.colored.info).toContain(colors.coloredShadows.info);
    });

    it("success colored shadow should include coloredShadows.success color", () => {
      expect(boxShadows.colored.success).toContain(colors.coloredShadows.success);
    });

    it("warning colored shadow should include coloredShadows.warning color", () => {
      expect(boxShadows.colored.warning).toContain(colors.coloredShadows.warning);
    });

    it("error colored shadow should include coloredShadows.error color", () => {
      expect(boxShadows.colored.error).toContain(colors.coloredShadows.error);
    });

    it("light colored shadow should include coloredShadows.light color", () => {
      expect(boxShadows.colored.light).toContain(colors.coloredShadows.light);
    });

    it("dark colored shadow should include coloredShadows.dark color", () => {
      expect(boxShadows.colored.dark).toContain(colors.coloredShadows.dark);
    });
  });

  describe("sliderBoxShadow", () => {
    it("should be an object", () => {
      expect(typeof boxShadows.sliderBoxShadow).toBe("object");
      expect(boxShadows.sliderBoxShadow).not.toBeNull();
    });

    it("should have a thumb property", () => {
      expect(boxShadows.sliderBoxShadow).toHaveProperty("thumb");
    });

    it("thumb should be a string", () => {
      expect(typeof boxShadows.sliderBoxShadow.thumb).toBe("string");
    });
  });

  describe("tabsBoxShadow", () => {
    it("should be an object", () => {
      expect(typeof boxShadows.tabsBoxShadow).toBe("object");
      expect(boxShadows.tabsBoxShadow).not.toBeNull();
    });

    it("should have an indicator property", () => {
      expect(boxShadows.tabsBoxShadow).toHaveProperty("indicator");
    });

    it("indicator should be a string", () => {
      expect(typeof boxShadows.tabsBoxShadow.indicator).toBe("string");
    });

    it("indicator should include tabs indicator boxShadow color", () => {
      expect(boxShadows.tabsBoxShadow.indicator).toContain(
        colors.tabs.indicator.boxShadow
      );
    });
  });

  describe("boxShadow function calls", () => {
    it("should call the boxShadow function", () => {
      expect(boxShadow).toHaveBeenCalled();
    });

    it("should call boxShadow with xs parameters", () => {
      expect(boxShadow).toHaveBeenCalledWith(
        [0, 2],
        [9, -5],
        colors.black.main,
        0.15
      );
    });

    it("should call boxShadow with sm parameters", () => {
      expect(boxShadow).toHaveBeenCalledWith(
        [0, 5],
        [10, 0],
        colors.black.main,
        0.12
      );
    });

    it("should call boxShadow with xxl parameters", () => {
      expect(boxShadow).toHaveBeenCalledWith(
        [0, 20],
        [27, 0],
        colors.black.main,
        0.05
      );
    });

    it("should call boxShadow with inset parameters", () => {
      expect(boxShadow).toHaveBeenCalledWith(
        [0, 1],
        [2, 0],
        colors.black.main,
        0.075,
        "inset"
      );
    });

    it("should call boxShadow with slider thumb parameters", () => {
      expect(boxShadow).toHaveBeenCalledWith(
        [0, 1],
        [13, 0],
        colors.black.main,
        0.2
      );
    });

    it("should call boxShadow with tabs indicator parameters", () => {
      expect(boxShadow).toHaveBeenCalledWith(
        [0, 1],
        [5, 1],
        colors.tabs.indicator.boxShadow,
        1
      );
    });

    it("should call boxShadow with navbar inset parameters", () => {
      expect(boxShadow).toHaveBeenCalledWith(
        [0, 0],
        [1, 1],
        colors.dark.main,
        0.9,
        "inset"
      );
    });

    it("should call boxShadow with colored shadow primary parameters", () => {
      expect(boxShadow).toHaveBeenCalledWith(
        [0, 7],
        [10, -5],
        colors.coloredShadows.primary,
        0.4
      );
    });

    it("should call boxShadow with colored shadow secondary parameters", () => {
      expect(boxShadow).toHaveBeenCalledWith(
        [0, 7],
        [10, -5],
        colors.coloredShadows.secondary,
        0.4
      );
    });

    it("should call boxShadow with colored shadow info parameters", () => {
      expect(boxShadow).toHaveBeenCalledWith(
        [0, 7],
        [10, -5],
        colors.coloredShadows.info,
        0.4
      );
    });

    it("should call boxShadow with colored shadow success parameters", () => {
      expect(boxShadow).toHaveBeenCalledWith(
        [0, 7],
        [10, -5],
        colors.coloredShadows.success,
        0.4
      );
    });

    it("should call boxShadow with colored shadow warning parameters", () => {
      expect(boxShadow).toHaveBeenCalledWith(
        [0, 7],
        [10, -5],
        colors.coloredShadows.warning,
        0.4
      );
    });

    it("should call boxShadow with colored shadow error parameters", () => {
      expect(boxShadow).toHaveBeenCalledWith(
        [0, 7],
        [10, -5],
        colors.coloredShadows.error,
        0.4
      );
    });

    it("should call boxShadow with colored shadow light parameters", () => {
      expect(boxShadow).toHaveBeenCalledWith(
        [0, 7],
        [10, -5],
        colors.coloredShadows.light,
        0.4
      );
    });

    it("should call boxShadow with colored shadow dark parameters", () => {
      expect(boxShadow).toHaveBeenCalledWith(
        [0, 7],
        [10, -5],
        colors.coloredShadows.dark,
        0.4
      );
    });
  });

  describe("black.main color usage", () => {
    it("xs shadow should include black.main color", () => {
      expect(boxShadows.xs).toContain(colors.black.main);
    });

    it("sm shadow should include black.main color", () => {
      expect(boxShadows.sm).toContain(colors.black.main);
    });

    it("md shadow should include black.main color", () => {
      expect(boxShadows.md).toContain(colors.black.main);
    });

    it("lg shadow should include black.main color", () => {
      expect(boxShadows.lg).toContain(colors.black.main);
    });

    it("xl shadow should include black.main color", () => {
      expect(boxShadows.xl).toContain(colors.black.main);
    });

    it("xxl shadow should include black.main color", () => {
      expect(boxShadows.xxl).toContain(colors.black.main);
    });

    it("inset shadow should include black.main color", () => {
      expect(boxShadows.inset).toContain(colors.black.main);
    });
  });

  describe("dark.main color usage", () => {
    it("navbarBoxShadow should include dark.main color", () => {
      expect(boxShadows.navbarBoxShadow).toContain(colors.dark.main);
    });
  });
});
```
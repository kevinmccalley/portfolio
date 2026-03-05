import typography from "src/assets/theme-dark/base/typography";

// Mock the dependencies
jest.mock("src/assets/theme-dark/base/colors", () => ({
  white: {
    main: "#ffffff",
  },
}));

jest.mock("src/assets/theme-dark/functions/pxToRem", () => {
  return (px: number) => `${px / 16}rem`;
});

describe("typography", () => {
  describe("base font properties", () => {
    it("should have fontFamily defined", () => {
      expect(typography.fontFamily).toBe('"Roboto", "Helvetica", "Arial", sans-serif');
    });

    it("should have all font weight properties", () => {
      expect(typography.fontWeightLighter).toBe(100);
      expect(typography.fontWeightLight).toBe(300);
      expect(typography.fontWeightRegular).toBe(400);
      expect(typography.fontWeightMedium).toBe(600);
      expect(typography.fontWeightBold).toBe(700);
    });
  });

  describe("heading styles (h1-h6)", () => {
    it("should have h1 with correct properties", () => {
      expect(typography.h1).toEqual(
        expect.objectContaining({
          fontSize: "3rem",
          lineHeight: 1.25,
          fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
          color: "#ffffff",
          fontWeight: 700,
        })
      );
    });

    it("should have h2 with correct properties", () => {
      expect(typography.h2).toEqual(
        expect.objectContaining({
          fontSize: "2.25rem",
          lineHeight: 1.3,
          fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
          color: "#ffffff",
          fontWeight: 700,
        })
      );
    });

    it("should have h3 with correct properties", () => {
      expect(typography.h3).toEqual(
        expect.objectContaining({
          fontSize: "1.875rem",
          lineHeight: 1.375,
          fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
          color: "#ffffff",
          fontWeight: 700,
        })
      );
    });

    it("should have h4 with correct properties", () => {
      expect(typography.h4).toEqual(
        expect.objectContaining({
          fontSize: "1.5rem",
          lineHeight: 1.375,
          fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
          color: "#ffffff",
          fontWeight: 700,
        })
      );
    });

    it("should have h5 with correct properties", () => {
      expect(typography.h5).toEqual(
        expect.objectContaining({
          fontSize: "1.25rem",
          lineHeight: 1.375,
          fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
          color: "#ffffff",
          fontWeight: 700,
        })
      );
    });

    it("should have h6 with correct properties", () => {
      expect(typography.h6).toEqual(
        expect.objectContaining({
          fontSize: "1rem",
          lineHeight: 1.625,
          fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
          color: "#ffffff",
          fontWeight: 700,
        })
      );
    });

    it("all headings should have bold font weight", () => {
      [typography.h1, typography.h2, typography.h3, typography.h4, typography.h5, typography.h6].forEach((heading) => {
        expect(heading.fontWeight).toBe(700);
      });
    });

    it("all headings should have white color", () => {
      [typography.h1, typography.h2, typography.h3, typography.h4, typography.h5, typography.h6].forEach((heading) => {
        expect(heading.color).toBe("#ffffff");
      });
    });

    it("all headings should have same fontFamily", () => {
      [typography.h1, typography.h2, typography.h3, typography.h4, typography.h5, typography.h6].forEach((heading) => {
        expect(heading.fontFamily).toBe('"Roboto", "Helvetica", "Arial", sans-serif');
      });
    });
  });

  describe("subtitle styles", () => {
    it("should have subtitle1 with correct properties", () => {
      expect(typography.subtitle1).toEqual(
        expect.objectContaining({
          fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
          fontSize: "1.25rem",
          fontWeight: 300,
          lineHeight: 1.625,
        })
      );
    });

    it("should have subtitle2 with correct properties", () => {
      expect(typography.subtitle2).toEqual(
        expect.objectContaining({
          fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
          fontSize: "1rem",
          fontWeight: 300,
          lineHeight: 1.6,
        })
      );
    });
  });

  describe("body styles", () => {
    it("should have body1 with correct properties", () => {
      expect(typography.body1).toEqual(
        expect.objectContaining({
          fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
          fontSize: "1.25rem",
          fontWeight: 400,
          lineHeight: 1.625,
        })
      );
    });

    it("should have body2 with correct properties", () => {
      expect(typography.body2).toEqual(
        expect.objectContaining({
          fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
          fontSize: "1rem",
          fontWeight: 300,
          lineHeight: 1.6,
        })
      );
    });
  });

  describe("button style", () => {
    it("should have button with correct properties", () => {
      expect(typography.button).toEqual(
        expect.objectContaining({
          fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
          fontSize: "0.875rem",
          fontWeight: 300,
          lineHeight: 1.5,
          textTransform: "uppercase",
        })
      );
    });
  });

  describe("caption style", () => {
    it("should have caption with correct properties", () => {
      expect(typography.caption).toEqual(
        expect.objectContaining({
          fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
          fontSize: "0.75rem",
          fontWeight: 300,
          lineHeight: 1.25,
        })
      );
    });
  });

  describe("overline style", () => {
    it("should have overline with fontFamily", () => {
      expect(typography.overline).toEqual(
        expect.objectContaining({
          fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        })
      );
    });
  });

  describe("display styles (d1-d6)", () => {
    it("should have d1 with correct properties", () => {
      expect(typography.d1).toEqual(
        expect.objectContaining({
          fontSize: "5rem",
          fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
          color: "#ffffff",
          fontWeight: 300,
          lineHeight: 1.2,
        })
      );
    });

    it("should have d2 with correct properties", () => {
      expect(typography.d2).toEqual(
        expect.objectContaining({
          fontSize: "4.5rem",
          fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
          color: "#ffffff",
          fontWeight: 300,
          lineHeight: 1.2,
        })
      );
    });

    it("should have d3 with correct properties", () => {
      expect(typography.d3).toEqual(
        expect.objectContaining({
          fontSize: "4rem",
          fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
          color: "#ffffff",
          fontWeight: 300,
          lineHeight: 1.2,
        })
      );
    });

    it("should have d4 with correct properties", () => {
      expect(typography.d4).toEqual(
        expect.objectContaining({
          fontSize: "3.5rem",
          fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
          color: "#ffffff",
          fontWeight: 300,
          lineHeight: 1.2,
        })
      );
    });

    it("should have d5 with correct properties", () => {
      expect(typography.d5).toEqual(
        expect.objectContaining({
          fontSize: "3rem",
          fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
          color: "#ffffff",
          fontWeight: 300,
          lineHeight: 1.2,
        })
      );
    });

    it("should have d6 with correct properties", () => {
      expect(typography.d6).toEqual(
        expect.objectContaining({
          fontSize: "2.5rem",
          fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
          color: "#ffffff",
          fontWeight: 300,
          lineHeight: 1.2,
        })
      );
    });

    it("all display styles should have light font weight", () => {
      [typography.d1, typography.d2, typography.d3, typography.d4, typography.d5, typography.d6].forEach((display) => {
        expect(display.fontWeight).toBe(300);
      });
    });

    it("all display styles should have white color", () => {
      [typography.d1, typography.d2, typography.d3, typography.d4, typography.d5, typography.d6].forEach((display) => {
        expect(display.color).toBe("#ffffff");
      });
    });

    it("all display styles should have lineHeight of 1.2", () => {
      [typography.d1, typography.d2, typography.d3, typography.d4, typography.d5, typography.d6].forEach((display) => {
        expect(display.lineHeight).toBe(1.2);
      });
    });
  });

  describe("size object", () => {
    it("should have all size properties", () => {
      expect(typography.size).toHaveProperty("xxs");
      expect(typography.size).toHaveProperty("xs");
      expect(typography.size).toHaveProperty("sm");
      expect(typography.size).toHaveProperty("md");
      expect(typography.size).toHaveProperty("lg");
      expect(typography.size).toHaveProperty("xl");
      expect(typography.size).toHaveProperty("2xl");
      expect(typography.size).toHaveProperty("3xl");
    });

    it("should have xxs size", () => {
      expect(typography.size.xxs).toBe("0.65rem");
    });

    it("should have xs size", () => {
      expect(typography.size.xs).toBe("0.75rem");
    });

    it("should have sm size", () => {
      expect(typography.size.sm).toBe("0.875rem");
    });

    it("should have md size", () => {
      expect(typography.size.md).toBe("1rem");
    });

    it("should have lg size", () => {
      expect(typography.size.lg).toBe("1.125rem");
    });

    it("should have xl size", () => {
      expect(typography.size.xl).toBe("1.25rem");
    });

    it("should have 2xl size", () => {
      expect(typography.size["2xl"]).toBe("1.5rem");
    });

    it("should have 3xl size", () => {
      expect(typography.size["3xl"]).toBe("1.875rem");
    });
  });

  describe("lineHeight object", () => {
    it("should have all lineHeight properties", () => {
      expect(typography.lineHeight).toHaveProperty("sm");
      expect(typography.lineHeight).toHaveProperty("md");
      expect(typography.lineHeight).toHaveProperty("lg");
    });

    it("should have sm lineHeight", () => {
      expect(typography.lineHeight.sm).toBe(1.25);
    });

    it("should have md lineHeight", () => {
      expect(typography.lineHeight.md).toBe(1.5);
    });

    it("should have lg lineHeight", () => {
      expect(typography.lineHeight.lg).toBe(2);
    });
  });

  describe("export", () => {
    it("should export typography as default export", () => {
      expect(typography).toBeDefined();
      expect(typeof typography).toBe("object");
    });

    it("should have all expected typography categories", () => {
      expect(typography).toHaveProperty("fontFamily");
      expect(typography).toHaveProperty("fontWeightLighter");
      expect(typography).toHaveProperty("fontWeightLight");
      expect(typography).toHaveProperty("fontWeightRegular");
      expect(typography).toHaveProperty("fontWeightMedium");
      expect(typography).toHaveProperty("fontWeightBold");
      expect(typography).toHaveProperty("h1");
      expect(typography).toHaveProperty("h2");
      expect(typography).toHaveProperty("h3");
      expect(typography).toHaveProperty("h4");
      expect(typography).toHaveProperty("h5");
      expect(typography).toHaveProperty("h6");
      expect(typography).toHaveProperty("subtitle1");
      expect(typography).toHaveProperty("subtitle2");
      expect(typography).toHaveProperty("body1");
      expect(typography).toHaveProperty("body2");
      expect(typography).toHaveProperty("button");
      expect(typography).toHaveProperty("caption");
      expect(typography).toHaveProperty("overline");
      expect(typography).toHaveProperty("d1");
      expect(typography).toHaveProperty("d2");
      expect(typography).toHaveProperty("d3");
      expect(typography).toHaveProperty("d4");
      expect(typography).toHaveProperty("d5");
      expect(typography).toHaveProperty("d6");
      expect(typography).toHaveProperty("size");
      expect(typography).toHaveProperty("lineHeight");
    });
  });
});
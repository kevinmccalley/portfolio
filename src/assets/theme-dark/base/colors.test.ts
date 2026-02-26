import colors from "src/assets/theme-dark/base/colors";

describe("Dark Theme Colors", () => {
  describe("Module export", () => {
    it("should export a default object", () => {
      expect(colors).toBeDefined();
      expect(typeof colors).toBe("object");
      expect(colors).not.toBeNull();
    });
  });

  describe("background colors", () => {
    it("should have background property", () => {
      expect(colors.background).toBeDefined();
    });

    it("should have correct background default color", () => {
      expect(colors.background.default).toBe("#1a2035");
    });

    it("should have correct background sidenav color", () => {
      expect(colors.background.sidenav).toBe("#1f283e");
    });

    it("should have correct background card color", () => {
      expect(colors.background.card).toBe("#202940");
    });

    it("should have exactly 3 background properties", () => {
      expect(Object.keys(colors.background)).toHaveLength(3);
    });
  });

  describe("text colors", () => {
    it("should have text property", () => {
      expect(colors.text).toBeDefined();
    });

    it("should have correct text main color", () => {
      expect(colors.text.main).toBe("#ffffffcc");
    });

    it("should have correct text focus color", () => {
      expect(colors.text.focus).toBe("#ffffffcc");
    });

    it("should have exactly 2 text properties", () => {
      expect(Object.keys(colors.text)).toHaveLength(2);
    });
  });

  describe("transparent colors", () => {
    it("should have transparent property", () => {
      expect(colors.transparent).toBeDefined();
    });

    it("should have correct transparent main value", () => {
      expect(colors.transparent.main).toBe("transparent");
    });
  });

  describe("white colors", () => {
    it("should have white property", () => {
      expect(colors.white).toBeDefined();
    });

    it("should have correct white main color", () => {
      expect(colors.white.main).toBe("#ffffff");
    });

    it("should have correct white focus color", () => {
      expect(colors.white.focus).toBe("#ffffff");
    });

    it("should have exactly 2 white properties", () => {
      expect(Object.keys(colors.white)).toHaveLength(2);
    });
  });

  describe("black colors", () => {
    it("should have black property", () => {
      expect(colors.black).toBeDefined();
    });

    it("should have correct black light color", () => {
      expect(colors.black.light).toBe("#000000");
    });

    it("should have correct black main color", () => {
      expect(colors.black.main).toBe("#000000");
    });

    it("should have correct black focus color", () => {
      expect(colors.black.focus).toBe("#000000");
    });

    it("should have exactly 3 black properties", () => {
      expect(Object.keys(colors.black)).toHaveLength(3);
    });
  });

  describe("primary colors", () => {
    it("should have primary property", () => {
      expect(colors.primary).toBeDefined();
    });

    it("should have correct primary main color", () => {
      expect(colors.primary.main).toBe("#e91e63");
    });

    it("should have correct primary focus color", () => {
      expect(colors.primary.focus).toBe("#e91e63");
    });

    it("should have exactly 2 primary properties", () => {
      expect(Object.keys(colors.primary)).toHaveLength(2);
    });
  });

  describe("secondary colors", () => {
    it("should have secondary property", () => {
      expect(colors.secondary).toBeDefined();
    });

    it("should have correct secondary main color", () => {
      expect(colors.secondary.main).toBe("#7b809a");
    });

    it("should have correct secondary focus color", () => {
      expect(colors.secondary.focus).toBe("#8f93a9");
    });

    it("should have exactly 2 secondary properties", () => {
      expect(Object.keys(colors.secondary)).toHaveLength(2);
    });
  });

  describe("info colors", () => {
    it("should have info property", () => {
      expect(colors.info).toBeDefined();
    });

    it("should have correct info main color", () => {
      expect(colors.info.main).toBe("#1A73E8");
    });

    it("should have correct info focus color", () => {
      expect(colors.info.focus).toBe("#1662C4");
    });

    it("should have exactly 2 info properties", () => {
      expect(Object.keys(colors.info)).toHaveLength(2);
    });
  });

  describe("success colors", () => {
    it("should have success property", () => {
      expect(colors.success).toBeDefined();
    });

    it("should have correct success main color", () => {
      expect(colors.success.main).toBe("#4CAF50");
    });

    it("should have correct success focus color", () => {
      expect(colors.success.focus).toBe("#67bb6a");
    });

    it("should have exactly 2 success properties", () => {
      expect(Object.keys(colors.success)).toHaveLength(2);
    });
  });

  describe("warning colors", () => {
    it("should have warning property", () => {
      expect(colors.warning).toBeDefined();
    });

    it("should have correct warning main color", () => {
      expect(colors.warning.main).toBe("#fb8c00");
    });

    it("should have correct warning focus color", () => {
      expect(colors.warning.focus).toBe("#fc9d26");
    });

    it("should have exactly 2 warning properties", () => {
      expect(Object.keys(colors.warning)).toHaveLength(2);
    });
  });

  describe("error colors", () => {
    it("should have error property", () => {
      expect(colors.error).toBeDefined();
    });

    it("should have correct error main color", () => {
      expect(colors.error.main).toBe("#F44335");
    });

    it("should have correct error focus color", () => {
      expect(colors.error.focus).toBe("#f65f53");
    });

    it("should have exactly 2 error properties", () => {
      expect(Object.keys(colors.error)).toHaveLength(2);
    });
  });

  describe("light colors", () => {
    it("should have light property", () => {
      expect(colors.light).toBeDefined();
    });

    it("should have correct light main color", () => {
      expect(colors.light.main).toBe("#f0f2f566");
    });

    it("should have correct light focus color", () => {
      expect(colors.light.focus).toBe("#f0f2f566");
    });

    it("should have exactly 2 light properties", () => {
      expect(Object.keys(colors.light)).toHaveLength(2);
    });
  });

  describe("dark colors", () => {
    it("should have dark property", () => {
      expect(colors.dark).toBeDefined();
    });

    it("should have correct dark main color", () => {
      expect(colors.dark.main).toBe("#344767");
    });

    it("should have correct dark focus color", () => {
      expect(colors.dark.focus).toBe("#2c3c58");
    });

    it("should have exactly 2 dark properties", () => {
      expect(Object.keys(colors.dark)).toHaveLength(2);
    });
  });

  describe("grey colors", () => {
    it("should have grey property", () => {
      expect(colors.grey).toBeDefined();
    });

    it("should have correct grey 100 color", () => {
      expect(colors.grey[100]).toBe("#f8f9fa");
    });

    it("should have correct grey 200 color", () => {
      expect(colors.grey[200]).toBe("#f0f2f5");
    });

    it("should have correct grey 300 color", () => {
      expect(colors.grey[300]).toBe("#dee2e6");
    });

    it("should have correct grey 400 color", () => {
      expect(colors.grey[400]).toBe("#ced4da");
    });

    it("should have correct grey 500 color", () => {
      expect(colors.grey[500]).toBe("#adb5bd");
    });

    it("should have correct grey 600 color", () => {
      expect(colors.grey[600]).toBe("#6c757d");
    });

    it("should have correct grey 700 color", () => {
      expect(colors.grey[700]).toBe("#495057");
    });

    it("should have correct grey 800 color", () => {
      expect(colors.grey[800]).toBe("#343a40");
    });

    it("should have correct grey 900 color", () => {
      expect(colors.grey[900]).toBe("#212529");
    });

    it("should have exactly 9 grey shades", () => {
      expect(Object.keys(colors.grey)).toHaveLength(9);
    });
  });

  describe("gradients", () => {
    it("should have gradients property", () => {
      expect(colors.gradients).toBeDefined();
    });

    it("should have primary gradient with correct main color", () => {
      expect(colors.gradients.primary.main).toBe("#EC407A");
    });

    it("should have primary gradient with correct state color", () => {
      expect(colors.gradients.primary.state).toBe("#D81B60");
    });

    it("should have secondary gradient with correct main color", () => {
      expect(colors.gradients.secondary.main).toBe("#747b8a");
    });

    it("should have secondary gradient with correct state color", () => {
      expect(colors.gradients.secondary.state).toBe("#495361");
    });

    it("should have info gradient with correct main color", () => {
      expect(colors.gradients.info.main).toBe("#49a3f1");
    });

    it("should have info gradient with correct state color", () => {
      expect(colors.gradients.info.state).toBe("#1A73E8");
    });

    it("should have success gradient with correct main color", () => {
      expect(colors.gradients.success.main).toBe("#66BB6A");
    });

    it("should have success gradient with correct state color", () => {
      expect(colors.gradients.success.state).toBe("#43A047");
    });

    it("should have warning gradient with correct main color", () => {
      expect(colors.gradients.warning.main).toBe("#FFA726");
    });

    it("should have warning gradient with correct state color", () => {
      expect(colors.gradients.warning.state).toBe("#FB8C00");
    });

    it("should have error gradient with correct main color", () => {
      expect(colors.gradients.error.main).toBe("#EF5350");
    });

    it("should have error gradient with correct state color", () => {
      expect(colors.gradients.error.state).toBe("#E53935");
    });

    it("should have light gradient with correct main color", () => {
      expect(colors.gradients.light.main).toBe("#EBEFF4");
    });

    it("should have light gradient with correct state color", () => {
      expect(colors.gradients.light.state).toBe("#CED4DA");
    });

    it("should have dark gradient with correct main color", () => {
      expect(colors.gradients.dark.main).toBe("#323a54");
    });

    it("should have dark gradient with correct state color", () => {
      expect(colors.gradients.dark.state).toBe("#1a2035");
    });

    it("should have exactly 8 gradient types", () => {
      expect(Object.keys(colors.gradients)).toHaveLength(8);
    });

    it("each gradient should have main and state properties", () => {
      Object.values(colors.gradients).forEach((gradient) => {
        expect(gradient).toHaveProperty("main");
        expect(gradient).toHaveProperty("state");
      });
    });
  });

  describe("socialMediaColors", () => {
    it("should have socialMediaColors property", () => {
      expect(colors.socialMediaColors).toBeDefined();
    });

    it("should have correct facebook colors", () => {
      expect(colors.socialMediaColors.facebook.main).toBe("#3b5998");
      expect(colors.socialMediaColors.facebook.dark).toBe("#344e86");
    });

    it("should have correct twitter colors", () => {
      expect(colors.socialMediaColors.twitter.main).toBe("#55acee");
      expect(colors.socialMediaColors.twitter.dark).toBe("#3ea1ec");
    });

    it("should have correct instagram colors", () => {
      expect(colors.socialMediaColors.instagram.main).toBe("#125688");
      expect(colors.socialMediaColors.instagram.dark).toBe("#0e456d");
    });

    it("should have correct linkedin colors", () => {
      expect(colors.socialMediaColors.linkedin.main).toBe("#0077b5");
      expect(colors.socialMediaColors.linkedin.dark).toBe("#00669c");
    });

    it("should have correct pinterest colors", () => {
      expect(colors.socialMediaColors.pinterest.main).toBe("#cc2127");
      expect(colors.socialMediaColors.pinterest.dark).toBe("#b21d22");
    });

    it("should have correct youtube colors", () => {
      expect(colors.socialMediaColors.youtube.main).toBe("#e52d27");
      expect(colors.socialMediaColors.youtube.dark).toBe("#d41f1a");
    });

    it("should have correct vimeo colors", () => {
      expect(colors.socialMediaColors.vimeo.main).toBe("#1ab7ea");
      expect(colors.socialMediaColors.vimeo.dark).toBe("#13a3d2");
    });

    it("should have correct slack colors", () => {
      expect(colors.socialMediaColors.slack.main).toBe("#3aaf85");
      expect(colors.socialMediaColors.slack.dark).toBe("#329874");
    });

    it("should have correct dribbble colors", () => {
      expect(colors.socialMediaColors.dribbble.main).toBe("#ea4c89");
      expect(colors.socialMediaColors.dribbble.dark).toBe("#e73177");
    });

    it("should have correct github colors", () => {
      expect(colors.socialMediaColors.github.main).toBe("#24292e");
      expect(colors.socialMediaColors.github.dark).toBe("#171a1d");
    });

    it("should have correct reddit colors", () => {
      expect(colors.socialMediaColors.reddit.main).toBe("#ff4500");
      expect(colors.socialMediaColors.reddit.dark).toBe("#e03d00");
    });

    it("should have correct tumblr colors", () => {
      expect(colors.socialMediaColors.tumblr.main).toBe("#35465c");
      expect(colors.socialMediaColors.tumblr.dark).toBe("#2a3749");
    });

    it("should have exactly 12 social media platforms", () => {
      expect(Object.keys(colors.socialMediaColors)).toHaveLength(12);
    });

    it("each social media color should have main and dark properties", () => {
      Object.values(colors.socialMediaColors).forEach((platform) => {
        expect(platform).toHaveProperty("main");
        expect(platform).toHaveProperty("dark");
      });
    });
  });

  describe("badgeColors", () => {
    it("should have badgeColors property", () => {
      expect(colors.badgeColors).toBeDefined();
    });

    it("should have correct primary badge colors", () => {
      expect(colors.badgeColors.primary.background).toBe("#f8b3ca");
      expect(colors.badgeColors.primary.text).toBe("#cc084b");
    });

    it("should have correct secondary badge colors", () => {
      expect(colors.badgeColors.secondary.background).toBe("#d7d9e1");
      expect(colors.badgeColors.secondary.text).toBe("#6c757d");
    });

    it("should have correct info badge colors", () => {
      expect(colors.badgeColors.info.background).toBe("#aecef7");
      expect(colors.badgeColors.info.text).toBe("#095bc6");
    });

    it("should have correct success badge colors", () => {
      expect(colors.badgeColors.success.background).toBe("#bce2be");
      expect(colors.badgeColors.success.text).toBe("#339537");
    });

    it("should have correct warning badge colors", () => {
      expect(colors.badgeColors.warning.background).toBe("#ffd59f");
      expect(colors.badgeColors.warning.text).toBe("#c87000");
    });

    it("should have correct error badge colors", () => {
      expect(colors.badgeColors.error.background).toBe("#fcd3d0");
      expect(colors.badgeColors.error.text).toBe("#f61200");
    });

    it("should have correct light badge colors", () => {
      expect(colors.badgeColors.light.background).toBe("#ffffff");
      expect(colors.badgeColors.light.text).toBe("#c7d3de");
    });

    it("should have correct dark badge colors", () => {
      expect(colors.badgeColors.dark.background).toBe("#8097bf");
      expect(colors.badgeColors.dark.text).toBe("#1e2e4a");
    });

    it("should have exactly 8 badge color types", () => {
      expect(Object.keys(colors.badgeColors)).toHaveLength(8);
    });

    it("each badge color should have background and text properties", () => {
      Object.values(colors.badgeColors).forEach((badge) => {
        expect(badge).toHaveProperty("background");
        expect(badge).toHaveProperty("text");
      });
    });
  });

  describe("coloredShadows", () => {
    it("should have coloredShadows property", () => {
      expect(colors.coloredShadows).toBeDefined();
    });

    it("should have correct primary colored shadow", () => {
      expect(colors.coloredShadows.primary).toBe("#e91e62");
    });

    it("should have correct secondary colored shadow", () => {
      expect(colors.coloredShadows.secondary).toBe("#110e0e");
    });

    it("should have correct info colored shadow", () => {
      expect(colors.coloredShadows.info).toBe("#00bbd4");
    });

    it("should have correct success colored shadow", () => {
      expect(colors.coloredShadows.success).toBe("#4caf4f");
    });

    it("should have correct warning colored shadow", () => {
      expect(colors.coloredShadows.warning).toBe("#ff9900");
    });

    it("should have correct error colored shadow", () => {
      expect(colors.coloredShadows.error).toBe("#f44336");
    });

    it("should have correct light colored shadow", () => {
      expect(colors.coloredShadows.light).toBe("#adb5bd");
    });

    it("should have correct dark colored shadow", () => {
      expect(colors.coloredShadows.dark).toBe("#404040");
    });

    it("should have exactly 8 colored shadow types", () => {
      expect(Object.keys(colors.coloredShadows)).toHaveLength(8);
    });
  });

  describe("inputBorderColor", () => {
    it("should have inputBorderColor property", () => {
      expect(colors.inputBorderColor).toBeDefined();
    });

    it("should have correct inputBorderColor value", () => {
      expect(colors.inputBorderColor).toBe("#d2d6da");
    });
  });

  describe("tabs", () => {
    it("should have tabs property", () => {
      expect(colors.tabs).toBeDefined();
    });

    it("should have tabs indicator property", () => {
      expect(colors.tabs.indicator).toBeDefined();
    });

    it("should have correct tabs indicator boxShadow color", () => {
      expect(colors.tabs.indicator.boxShadow).toBe("#ddd");
    });
  });

  describe("overall structure", () => {
    it("should have all required top-level color categories", () => {
      expect(colors).toHaveProperty("background");
      expect(colors).toHaveProperty("text");
      expect(colors).toHaveProperty("transparent");
      expect(colors).toHaveProperty("white");
      expect(colors).toHaveProperty("black");
      expect(colors).toHaveProperty("primary");
      expect(colors).toHaveProperty("secondary");
      expect(colors).toHaveProperty("info");
      expect(colors).toHaveProperty("success");
      expect(colors).toHaveProperty("warning");
      expect(colors).toHaveProperty("error");
      expect(colors).toHaveProperty("light");
      expect(colors).toHaveProperty("dark");
      expect(colors).toHaveProperty("grey");
      expect(colors).toHaveProperty("gradients");
      expect(colors).toHaveProperty("socialMediaColors");
      expect(colors).toHaveProperty("badgeColors");
      expect(colors).toHaveProperty("coloredShadows");
      expect(colors).toHaveProperty("inputBorderColor");
      expect(colors).toHaveProperty("tabs");
    });

    it("should match the complete colors object structure", () => {
      expect(colors).toEqual({
        background: {
          default: "#1a2035",
          sidenav: "#1f283e",
          card: "#202940",
        },
        text: {
          main: "#ffffffcc",
          focus: "#ffffffcc",
        },
        transparent: {
          main: "transparent",
        },
        white: {
          main: "#ffffff",
          focus: "#ffffff",
        },
        black: {
          light: "#000000",
          main: "#000000",
          focus: "#000000",
        },
        primary: {
          main: "#e91e63",
          focus: "#e91e63",
        },
        secondary: {
          main: "#7b809a",
          focus: "#8f93a9",
        },
        info: {
          main: "#1A73E8",
          focus: "#1662C4",
        },
        success: {
          main: "#4CAF50",
          focus: "#67bb6a",
        },
        warning: {
          main: "#fb8c00",
          focus: "#fc9d26",
        },
        error: {
          main: "#F44335",
          focus: "#f65f53",
        },
        light: {
          main: "#f0f2f566",
          focus: "#f0f2f566",
        },
        dark: {
          main: "#344767",
          focus: "#2c3c58",
        },
        grey: {
          100: "#f8f9fa",
          200: "#f0f2f5",
          300: "#dee2e6",
          400: "#ced4da",
          500: "#adb5bd",
          600: "#6c757d",
          700: "#495057",
          800: "#343a40",
          900: "#212529",
        },
        gradients: {
          primary: { main: "#EC407A", state: "#D81B60" },
          secondary: { main: "#747b8a", state: "#495361" },
          info: { main: "#49a3f1", state: "#1A73E8" },
          success: { main: "#66BB6A", state: "#43A047" },
          warning: { main: "#FFA726", state: "#FB8C00" },
          error: { main: "#EF5350", state: "#E53935" },
          light: { main: "#EBEFF4", state: "#CED4DA" },
          dark: { main: "#323a54", state: "#1a2035" },
        },
        socialMediaColors: {
          facebook: { main: "#3b5998", dark: "#344e86" },
          twitter: { main: "#55acee", dark: "#3ea1ec" },
          instagram: { main: "#125688", dark: "#0e456d" },
          linkedin: { main: "#0077b5", dark: "#00669c" },
          pinterest: { main: "#cc2127", dark: "#b21d22" },
          youtube: { main: "#e52d27", dark: "#d41f1a" },
          vimeo: { main: "#1ab7ea", dark: "#13a3d2" },
          slack: { main: "#3aaf85", dark: "#329874" },
          dribbble: { main: "#ea4c89", dark: "#e73177" },
          github: { main: "#24292e", dark: "#171a1d" },
          reddit: { main: "#ff4500", dark: "#e03d00" },
          tumblr: { main: "#35465c", dark: "#2a3749" },
        },
        badgeColors: {
          primary: { background: "#f8b3ca", text: "#cc084b" },
          secondary: { background: "#d7d9e1", text: "#6c757d" },
          info: { background: "#aecef7", text: "#095bc6" },
          success: { background: "#bce2be", text: "#339537" },
          warning: { background: "#ffd59f", text: "#c87000" },
          error: { background: "#fcd3d0", text: "#f61200" },
          light: { background: "#ffffff", text: "#c7d3de" },
          dark: { background: "#8097bf", text: "#1e2e4a" },
        },
        coloredShadows: {
          primary: "#e91e62",
          secondary: "#110e0e",
          info: "#00bbd4",
          success: "#4caf4f",
          warning: "#ff9900",
          error: "#f44336",
          light: "#adb5bd",
          dark: "#404040",
        },
        inputBorderColor: "#d2d6da",
        tabs: {
          indicator: { boxShadow: "#ddd" },
        },
      });
    });
  });
});
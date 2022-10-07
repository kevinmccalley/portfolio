export default function data() {
  return {
    columns: [
      { Header: "Discipline", accessor: "tooltype", align: "left" },
      { Header: "Tools", accessor: "toolslist", align: "left" },
    ],
    rows: [
      {
        tooltype: "Graphic Design and Prototyping",
        toolslist: "Adobe Creative Suite (XD, Photoshop, Illustrator), Figma, Lunacy",
      },
      {
        tooltype: "Programming",
        toolslist:
          "TypeScript, ES6 Javascript, php, asp, aspx, and html scripting; JSON and xml data-structuring; and css/scss style sheets",
      },
      {
        tooltype: "Scripting Libraries",
        toolslist: "Angular, React, jQuery",
      },
      {
        tooltype: "Development",
        toolslist: "Visual Studio, Visual Studio Code, Node Package Manager",
      },
      {
        tooltype: "Platforms",
        toolslist: "Windows, Linux",
      },
      {
        tooltype: "Documentation",
        toolslist: "Confluence, Postman, draw.io",
      },
      {
        tooltype: "System Management",
        toolslist: "Terminal (CLI), Windows PowerShell, RDC virtual machines, remote management",
      },
      {
        tooltype: "Agile",
        toolslist: "Jira",
      },
    ],
  };
}

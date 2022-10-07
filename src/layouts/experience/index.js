/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import DataTable from "examples/Tables/DataTable";

// Data
import gaineSolutionsData from "layouts/experience/data/gaineSolutionsData";
import consultantData from "layouts/experience/data/consultantData";
import firstAmericanData from "layouts/experience/data/firstAmericanData";
import encoreCreditData from "layouts/experience/data/encoreCreditData";

import { useMaterialUIController } from "context";

function Experience() {
  const [controller] = useMaterialUIController();
  const { darkMode, sidenavColor } = controller;
  const { columns, rows } = gaineSolutionsData();
  const { columns: pColumns, rows: pRows } = consultantData();
  const { columns: fColumns, rows: fRows } = firstAmericanData();
  const { columns: eColumns, rows: eRows } = encoreCreditData();
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={6} pb={3}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Card>
              <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor={sidenavColor}
                borderRadius="lg"
                coloredShadow={sidenavColor}
              >
                <MDTypography variant="h6" color="white">
                  Gaine Solutions
                </MDTypography>
              </MDBox>
              <MDBox pt={3}>
                <DataTable
                  table={{ columns, rows }}
                  isSorted={false}
                  entriesPerPage={false}
                  showTotalEntries={false}
                  noEndBorder
                />
                <MDBox pb={5} pl={7} color={darkMode ? "white" : "secondary"}>
                  <ul>
                    <li>Developed web applications using Angular/typescript.</li>
                    <li>
                      Created XD prototypes for new additions to the web product as primary graphic
                      designer for the user interface layout of the Coperor Console.
                    </li>
                    <li>
                      Developed various applications including the Coperor Console, Gaine
                      Centralized IFA Issue Tracking Application, Metadata Repository, and the
                      Symphony Provider Registry.
                    </li>
                    <li>Composed and created application-specific technical documents.</li>
                    <li>Researched, evaluated and implemented web accessibility best practices.</li>
                    <li>
                      Worked closely with the Product Manager to conceive and develop prototypes for
                      user interface designs to extend the product suite.
                    </li>
                    <li>Applied Agile Scrum methodology for team and project planning.</li>
                    <li>Gaine employee of the month for October 2021.</li>
                  </ul>
                </MDBox>
              </MDBox>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card>
              <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor={sidenavColor}
                borderRadius="lg"
                coloredShadow={sidenavColor}
              >
                <MDTypography variant="h6" color="white">
                  Independent Consultant
                </MDTypography>
              </MDBox>
              <MDBox pt={3}>
                <DataTable
                  table={{ columns: pColumns, rows: pRows }}
                  isSorted={false}
                  entriesPerPage={false}
                  showTotalEntries={false}
                  noEndBorder
                />
                <MDBox pb={5} pl={7} color={darkMode ? "white" : "secondary"}>
                  <ul>
                    <li>
                      Developed and maintained websites for a range of clients including, but not
                      limited to, PSSC Labs, Artizen HPC, Brandon Mulloy, Ribbon, Innovative
                      Learning, Project Optimal, Penn Air Group, and eatalbacore.com.
                    </li>
                  </ul>
                </MDBox>
              </MDBox>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card>
              <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor={sidenavColor}
                borderRadius="lg"
                coloredShadow={sidenavColor}
              >
                <MDTypography variant="h6" color="white">
                  First American Title
                </MDTypography>
              </MDBox>
              <MDBox pt={3}>
                <DataTable
                  table={{ columns: fColumns, rows: fRows }}
                  isSorted={false}
                  entriesPerPage={false}
                  showTotalEntries={false}
                  noEndBorder
                />
                <MDBox pb={5} pl={7} color={darkMode ? "white" : "secondary"}>
                  <ul>
                    <li>
                      Collaborated with the First American Document Solutions team to develop and
                      test the “eTree” website.
                    </li>
                    <li>Wrote and published the website html, css, javascript, and asp.</li>
                  </ul>
                </MDBox>
              </MDBox>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card>
              <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor={sidenavColor}
                borderRadius="lg"
                coloredShadow={sidenavColor}
              >
                <MDTypography variant="h6" color="white">
                  Bear Stearns / Encore Credit
                </MDTypography>
              </MDBox>
              <MDBox pt={3}>
                <DataTable
                  table={{ columns: eColumns, rows: eRows }}
                  isSorted={false}
                  entriesPerPage={false}
                  showTotalEntries={false}
                  noEndBorder
                />
                <MDBox pb={5} pl={7} color={darkMode ? "white" : "secondary"}>
                  <ul>
                    <li>Developed and managed the company website and corporate intranet.</li>
                    <li>
                      Performed technical writing and editing as well as marketing copywriting.
                    </li>
                  </ul>
                </MDBox>
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
    </DashboardLayout>
  );
}

export default Experience;

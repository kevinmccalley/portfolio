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
// import Grid from "@mui/material/Grid";
// import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

function Accessibility() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={3} pb={3}>
        <MDTypography pl={2} pr={2}>
          I am committed to building applications that meet{" "}
          <a href="https://www.w3.org/WAI/standards-guidelines/wcag/">WAI WCAG</a> guidelines,{" "}
          <a href="https://www.section508.gov/">Section 508</a>
          standards for accessibility on government and/or federally-funded applications, and in
          compliance with the Americans with Disabilities Act (ADA). This simple resume template is
          WCAG compliant as both a mobile and web application. It is built using Angular, leverages
          the Angular Material design library to achieve a simple yet accessible responsive layout.
          The site utilizes Material Icons from the Google fonts library to render the visual design
          elements contained on the page.
        </MDTypography>
      </MDBox>
    </DashboardLayout>
  );
}

export default Accessibility;

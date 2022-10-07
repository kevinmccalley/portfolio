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

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

import MDTypography from "components/MDTypography";

// Billing page components
// import PaymentMethod from "layouts/billing/components/PaymentMethod";
// import Invoices from "layouts/billing/components/Invoices";
// import BillingInformation from "layouts/billing/components/BillingInformation";
// import Transactions from "layouts/billing/components/Transactions";

function Strengths() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={3} pb={3}>
        <MDTypography pl={2}>
          <h3>Key Strengths</h3>
          <MDTypography pl={3}>
            <ul>
              <li>Website Design</li>
              <li>Website Development</li>
              <li>User Interface Design</li>
              <li>Graphic Design</li>
              <li>Web Programming</li>
              <li>Application Development</li>
              <li>Content Management</li>
              <li>Single-Page Web Applications</li>
              <li>Prototyping</li>
              <li>UI/UX Design</li>
              <li>Web Accessibility</li>
              <li>Debugging</li>
              <li>Technical Writing</li>
              <li>Marketing Strategy</li>
              <li>Agile Scrum Team Planning</li>
            </ul>
          </MDTypography>
        </MDTypography>
      </MDBox>
    </DashboardLayout>
  );
}

export default Strengths;

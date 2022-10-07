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

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import DataTable from "examples/Tables/DataTable";
import "./qualifications.css";
// import Footer from "examples/Footer";
// import ReportsBarChart from "examples/Charts/BarCharts/ReportsBarChart";
// import ReportsLineChart from "examples/Charts/LineCharts/ReportsLineChart";
// import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";

// Data
// import reportsBarChartData from "layouts/dashboard/data/reportsBarChartData";
// import reportsLineChartData from "layouts/dashboard/data/reportsLineChartData";
import technologyToolsData from "layouts/qualifications/data/technologyToolsData";

// Dashboard components
// import Projects from "layouts/dashboard/components/Projects";
// import OrdersOverview from "layouts/dashboard/components/OrdersOverview";

function Qualifications() {
  // const { sales, tasks } = reportsLineChartData;
  const { columns, rows } = technologyToolsData();
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={3} pb={3}>
        <MDTypography pl={2} pr={2}>
          <h3>Technical Writing</h3>
          <p>
            Over six years of experience with technical writing and editing for various projects
            such as instructions, manuals, website content, API Endpoint documentation and
            multimedia presentations.
          </p>
          <h3>Communication</h3>
          <p>
            Articulate communicator adept at developing and delivering training and technical
            demonstrations. Consistent success contributing to cross-functional teams and exhibiting
            efficiency, quality, and flexibility managing and prioritizing project components.
          </p>
          <DataTable
            table={{ columns, rows }}
            isSorted={false}
            entriesPerPage={false}
            showTotalEntries={false}
            noEndBorder
          />
        </MDTypography>
      </MDBox>
    </DashboardLayout>
  );
}

export default Qualifications;

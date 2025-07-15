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

import Grid from "@mui/material/Grid";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";
import MDBox from "components/MDBox";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import { Link } from "@mui/material";
import XDLogo from "../../assets/images/small-logos/xd-logo-inv.png";
import FigmaLogo from "../../assets/images/small-logos/Figma-logo.svg";
import ReactLogo from "../../assets/images/small-logos/react.png";
import EnhancedSearchImage from "../../assets/images/portfolio/enhancedSearch.png";
import CentralizedIFAImage from "../../assets/images/portfolio/CentralizedIFA.png";
import CreateJiraIssueImage from "../../assets/images/portfolio/CreateJiraIssue.png";
import SkeletonLoaderImage from "../../assets/images/portfolio/StewardingQueueSkeleton.png";
import SalesforceImage from "../../assets/images/portfolio/Salesforce.png";
import SpheresImage from "../../assets/images/portfolio/4spheres.png";
import TranslatorImage from "../../assets/images/portfolio/translator.png";

const EnhancedSearchLink = "https://xd.adobe.com/view/afb9a196-0f8f-4fc7-8091-e7390a6582d2-faea/";
const CentralizedIFALink = "https://xd.adobe.com/view/ad579ed9-bf28-4d6e-a8ac-06c268f1b1ba-f804/";
const CreateJiraIssueLink = "https://xd.adobe.com/view/1b64d2fe-2e87-4b01-9737-7d559559d5bf-4e37/";
const SkeletonLoaderLink = "https://xd.adobe.com/view/84f50ce3-f1f5-464a-b52a-31165d37f377-d1a6/";
const SalesforceLink = "https://xd.adobe.com/view/a17f0a80-3516-46de-95a8-558002c7753a-f42c/";
const SpheresLink = "https://xd.adobe.com/view/8319b7e6-69b2-4c9f-908e-6d5d81bef4ff-d64a/";
const FigmaSpheresLink = "https://www.figma.com/file/M6wK582bEJt8AKhf1qCzr5/4Spheres?node-id=3%3A2";
const SpheresReactPage = "https://kevinmccalley.github.io/4spheres/";
const TranslatorLink = "https://translate-app-bice-three.vercel.app/";

function Portfolio() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={3} pb={3}>
        <MDBox py={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={3}>
              <MDBox mb={1.5}>
                <Link href={TranslatorLink} target="_new">
                  <ComplexStatisticsCard
                    color="info"
                    icon={<MDBox component="img" src={ReactLogo} alt="React" width="100%" />}
                    image={TranslatorImage}
                    title="A Translation Application"
                    count="Translation"
                    percentage={{
                      color: "primary",
                      amount: "React",
                      label: " - View Application",
                    }}
                  />
                </Link>
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <MDBox mb={1.5}>
                <Link href={EnhancedSearchLink} target="_new">
                  <ComplexStatisticsCard
                    color="primary"
                    icon={<MDBox component="img" src={XDLogo} alt="Adobe XD" width="100%" />}
                    image={EnhancedSearchImage}
                    title="Coperor Console"
                    count="Enhanced Search"
                    percentage={{
                      color: "primary",
                      amount: "Adobe XD",
                      label: " - View Prototype",
                    }}
                  />
                </Link>
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <MDBox mb={1.5}>
                <Link href={CentralizedIFALink} target="_new">
                  <ComplexStatisticsCard
                    color="primary"
                    icon={<MDBox component="img" src={XDLogo} alt="Adobe XD" width="100%" />}
                    image={CentralizedIFAImage}
                    title="Coperor Console"
                    count="Centralized IFA"
                    percentage={{
                      color: "primary",
                      amount: "Adobe XD",
                      label: " - View Prototype",
                    }}
                  />
                </Link>
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <MDBox mb={1.5}>
                <Link href={CreateJiraIssueLink} target="_new">
                  <ComplexStatisticsCard
                    color="primary"
                    icon={<MDBox component="img" src={XDLogo} alt="Adobe XD" width="100%" />}
                    image={CreateJiraIssueImage}
                    title="Coperor Console"
                    count="Create Jira Issue"
                    percentage={{
                      color: "primary",
                      amount: "Adobe XD",
                      label: " - View Prototype",
                    }}
                  />
                </Link>
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <MDBox mb={1.5}>
                <Link href={SkeletonLoaderLink} target="_new">
                  <ComplexStatisticsCard
                    color="primary"
                    icon={<MDBox component="img" src={XDLogo} alt="Adobe XD" width="100%" />}
                    image={SkeletonLoaderImage}
                    title="Coperor Console"
                    count="Skeleton Loader"
                    percentage={{
                      color: "primary",
                      amount: "Adobe XD",
                      label: " - View Prototype",
                    }}
                  />
                </Link>
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <MDBox mb={1.5}>
                <Link href={SalesforceLink} target="_new">
                  <ComplexStatisticsCard
                    color="primary"
                    icon={<MDBox component="img" src={XDLogo} alt="Adobe XD" width="100%" />}
                    image={SalesforceImage}
                    title="Coperor / Salesforce"
                    count="Match Decision Adjudication"
                    percentage={{
                      color: "primary",
                      amount: "Adobe XD",
                      label: " - View Design Concepts",
                    }}
                  />
                </Link>
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <MDBox mb={1.5}>
                <Link href={SpheresLink} target="_new">
                  <ComplexStatisticsCard
                    color="primary"
                    icon={<MDBox component="img" src={XDLogo} alt="Adobe XD" width="100%" />}
                    image={SpheresImage}
                    title="4SPheres Design Process"
                    count="XD Prototype"
                    percentage={{
                      color: "primary",
                      amount: "Adobe XD",
                      label: " - View Prototype",
                    }}
                  />
                </Link>
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <MDBox mb={1.5}>
                <Link href={FigmaSpheresLink} target="_new">
                  <ComplexStatisticsCard
                    color="dark"
                    icon={<MDBox component="img" src={FigmaLogo} alt="Figma" width="100%" />}
                    image={SpheresImage}
                    title="4SPheres Design Process"
                    count="Figma Prototype"
                    percentage={{
                      color: "dark",
                      amount: "Figma",
                      label: " - View Prototype",
                    }}
                  />
                </Link>
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <MDBox mb={1.5}>
                <Link href={SpheresReactPage} target="_new">
                  <ComplexStatisticsCard
                    color="info"
                    icon={<MDBox component="img" src={ReactLogo} alt="Adobe XD" width="100%" />}
                    image={SpheresImage}
                    title="4SPheres Design Process"
                    count="Single Page Application"
                    percentage={{
                      color: "info",
                      amount: "React",
                      label: " - View Application",
                    }}
                  />
                </Link>
              </MDBox>
            </Grid>
          </Grid>
        </MDBox>
      </MDBox>
    </DashboardLayout>
  );
}

export default Portfolio;

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

/** 
  All of the routes for the Material Dashboard 2 React are added here,
  You can add a new route, customize the routes and delete the routes here.

  Once you add a new route on this file it will be visible automatically on
  the Sidenav.

  For adding a new route you can follow the existing routes in the routes array.
  1. The `type` key with the `collapse` value is used for a route.
  2. The `type` key with the `title` value is used for a title inside the Sidenav. 
  3. The `type` key with the `divider` value is used for a divider between Sidenav items.
  4. The `name` key is used for the name of the route on the Sidenav.
  5. The `key` key is used for the key of the route (It will help you with the key prop inside a loop).
  6. The `icon` key is used for the icon of the route on the Sidenav, you have to add a node.
  7. The `collapse` key is used for making a collapsible item on the Sidenav that has other routes
  inside (nested routes), you need to pass the nested routes inside an array as a value for the `collapse` key.
  8. The `route` key is used to store the route location which is used for the react router.
  9. The `href` key is used to store the external links location.
  10. The `title` key is only for the item with the type of `title` and its used for the title text on the Sidenav.
  10. The `component` key is used to store the component of its route.
*/

// Material Dashboard 2 React layouts
import Overview from "layouts/overview";
import Qualifications from "layouts/qualifications";
import Experience from "layouts/experience";
import Portfolio from "layouts/portfolio";
import Education from "layouts/education";
import Strengths from "layouts/strengths";
import Accessibility from "layouts/accessibility";
import Contact from "layouts/contact";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import GppGoodIcon from "@mui/icons-material/GppGood";
// import Notifications from "layouts/notifications";
// import Profile from "layouts/profile";
// import SignIn from "layouts/authentication/sign-in";
// import SignUp from "layouts/authentication/sign-up";

// @mui icons
import Icon from "@mui/material/Icon";

const routes = [
  {
    type: "collapse",
    name: "Kevin McCalley",
    key: "overview",
    icon: <Icon fontSize="small">sentiment_satisfied</Icon>,
    route: "/overview",
    component: <Overview />,
  },
  {
    type: "collapse",
    name: "Qualification Highlights",
    key: "qualifications",
    icon: <Icon fontSize="small">filter_vintage</Icon>,
    route: "/qualifications",
    component: <Qualifications />,
  },
  {
    type: "collapse",
    name: "Professional Experience",
    key: "experience",
    icon: (
      <Icon fontSize="small">
        <GppGoodIcon />
      </Icon>
    ),
    route: "/experience",
    component: <Experience />,
  },
  {
    type: "collapse",
    name: "Portfolio",
    key: "portfolio",
    icon: (
      <Icon fontSize="small">
        <AutoStoriesIcon />
      </Icon>
    ),
    route: "/portfolio",
    component: <Portfolio />,
  },
  {
    type: "collapse",
    name: "Education",
    key: "education",
    icon: <Icon fontSize="small">school</Icon>,
    route: "/education",
    component: <Education />,
  },
  {
    type: "collapse",
    name: "Key Strengths",
    key: "strengths",
    icon: <Icon fontSize="small">engineering</Icon>,
    route: "/strengths",
    component: <Strengths />,
  },
  {
    type: "collapse",
    name: "Accessibility",
    key: "accessibility",
    icon: <Icon fontSize="small">accessibility</Icon>,
    route: "/accessibility",
    component: <Accessibility />,
  },
  {
    type: "collapse",
    name: "Contact",
    key: "contact",
    icon: <Icon fontSize="small">format_textdirection_r_to_l</Icon>,
    route: "/contact",
    component: <Contact />,
  },
];

export default routes;

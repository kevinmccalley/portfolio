/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
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

// Material Dashboard 2 React components

// Images

export default function data() {
  return {
    columns: [
      { Header: "title", accessor: "title", align: "left", width: "50%" },
      { Header: "date", accessor: "date", align: "left", width: "25%" },
      { Header: "location", accessor: "location", align: "left", width: "25%" },
    ],
    rows: [
      {
        title: "Website Developer",
        date: "2008",
        location: "Santa Ana, CA",
      },
    ],
  };
}

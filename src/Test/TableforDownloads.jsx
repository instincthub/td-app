import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { HOST_URL } from "../components/static/assets/js/help_func";
// import { HOST_URL } from "../../assets/js/help_func";
// import { CopyLink } from "../../components/CopyLink";
// import EditEachDownload from "../../components/EditEachDownload";
// import DeleteConfirmationModal from "../../components/message/DeleteModal";

function timeAgo(timestamp) {
  // Calculate the difference between the current time and the given timestamp
  const diffInMilliseconds = Date.now() - new Date(timestamp).getTime();

  // Convert the difference to seconds
  const diffInSeconds = diffInMilliseconds / 1000;

  // Calculate the number of minutes, hours, and days
  const minutes = Math.floor(diffInSeconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  // Return the time ago in a human-readable format
  if (days > 0) {
    return `${days} days ago`;
  } else if (hours > 0) {
    return `${hours} hrs ago`;
  } else if (minutes > 0) {
    return `${minutes} minutes ago`;
  } else {
    return `${Math.floor(diffInSeconds)} seconds ago`;
  }
}

const TableforDownloads = (props) => {
  return (
    <tbody>
      <tr>
        <td className="actual_content">Maryanne Onwuemene</td>
        <td>TDN 3.1</td>
        <td>University of Benin</td>
        <td>User Interface and Experience Design (UI/UX) - Beginner</td>
        <td>Monday 1st March 2023</td>
        <td>1 month</td>
      </tr>
    </tbody>
  );
};

export default TableforDownloads;

let HighValueBody = styled.div`
  position: relative;
  transition: all 0.5s;
  td {
    cursor: pointer;
    transition: all 0.5s;
    &:hover {
      .performAction {
        display: block;
      }
    }
  }
  .del {
    color: red;
    font-weight: 400;
    &:hover {
      color: white;
      background: red !important;
    }
  }
  .performAction {
    padding: 5px 0;
    z-index: 10;
    position: absolute;
    top: 40px;
    right: 20px;
    display: none;
    background: #ffffff;
    border: 1px solid rgba(44, 51, 58, 0.2);
    border-radius: 5px;
    width: 120px;
    transition: all 0.5s;
    &:hover {
      display: block;
    }
    li {
      padding: 5px 10px;
      transition: all 0.3s;
      &:hover {
        background: #f2f2f2;
      }
    }
  }
`;

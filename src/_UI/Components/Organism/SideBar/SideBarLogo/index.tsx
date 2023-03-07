import React from "react";
import { LogoWrapper } from "./styles";

export default function Logo({ toggle = false }) {
  return (
    <LogoWrapper>
      {!toggle ? (
        <svg
          width="30"
          height="40"
          viewBox="0 0 30 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M29.5498 0V11.738L18.2397 15.5472V0H29.5498Z"
            fill="#36E0A1"
          />
          <path
            d="M0.450187 40V21.5383L18.2399 15.5472V40H0.450187Z"
            fill="black"
          />
        </svg>
      ) : (
        <svg
          width="163"
          height="41"
          viewBox="0 0 163 41"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.984863 12.3164L7.32115 10.2614V39.2028H0.984863V12.3164Z"
            fill="black"
          />
          <path
            d="M7.49243 0.5V10.2613L14.3425 7.52129V0.5H7.49243Z"
            fill="#36E0A1"
          />
          <path
            d="M93.4604 12.3164L99.7967 10.2614V39.2028H93.4604V12.3164Z"
            fill="black"
          />
          <path
            d="M115.038 39.5452L103.735 10.0901H111.27L118.805 32.8665L125.998 10.0901H133.019L122.059 39.5452H115.038Z"
            fill="black"
          />
          <path
            d="M14.8564 39.7165H21.364V22.2489C21.364 20.7076 21.501 16.7689 26.844 16.7689C31.4678 16.7689 32.8949 20.1939 32.8378 21.9064V39.7165H39.1741V21.3927C39.1741 17.9676 35.9203 10.0901 26.844 10.0901C19.583 10.0901 14.8564 17.1114 14.8564 21.3927V39.7165Z"
            fill="black"
          />
          <path
            d="M63.663 11.4601L61.9505 16.7689C54.2442 13.5151 52.1892 16.7689 52.1892 17.9676C52.1892 19.1664 53.3823 20.9728 59.0392 23.4477C64.5192 25.8452 65.5467 28.9277 65.5467 32.6952C65.5467 35.949 62.293 39.2818 57.6692 40.2302C52.3261 41.3262 46.652 38.8032 45.1679 37.6615L46.7091 32.6952C47.5654 33.209 49.8112 34.3148 52.1892 34.579C55.2717 34.9215 59.0392 34.9214 59.0392 32.0102C59.0392 28.9229 54.9292 27.5577 52.1892 26.1877C49.7146 24.9504 45.8529 23.2764 45.8529 17.9676C45.8529 12.6589 52.0179 10.0901 54.4154 10.0901C58.1829 10.0901 61.3796 11.0034 63.663 11.4601Z"
            fill="black"
          />
          <path
            d="M88.8369 38.689L87.4668 34.2365C86.2681 34.5219 83.4863 35.4874 81.6443 35.0927C79.2468 34.579 78.8472 31.896 78.733 30.1264C78.7901 20.5364 78.87 1.25352 78.733 0.84252C78.596 0.431518 74.3376 2.04128 72.2255 2.89753V10.6038L67.4305 12.3163V15.9126H72.2255V32.0102C72.2255 32.3527 72.294 33.2432 73.253 35.4352C74.4518 38.1752 77.8403 40.2302 81.4731 40.2302C84.3843 40.2302 87.581 39.374 88.8369 38.689Z"
            fill="black"
          />
          <path
            d="M84.0418 15.9126L79.7606 10.9463H87.4668V15.9126H84.0418Z"
            fill="black"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M148.09 40.059C156.129 40.059 162.646 33.3886 162.646 25.1602C162.646 16.9318 156.129 10.2614 148.09 10.2614C140.05 10.2614 133.533 16.9318 133.533 25.1602C133.533 33.3886 140.05 40.059 148.09 40.059ZM148.089 35.264C151.967 35.264 155.111 30.7403 155.111 25.1602C155.111 19.58 151.967 15.0564 148.089 15.0564C144.212 15.0564 141.068 19.58 141.068 25.1602C141.068 30.7403 144.212 35.264 148.089 35.264Z"
            fill="black"
          />
        </svg>
      )}
    </LogoWrapper>
  );
}

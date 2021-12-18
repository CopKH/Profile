import Image from "next/image";
import React from "react";
import img2 from "../../public/LINE_P25641217_201318545.jpg";
import { Fade } from "react-reveal";
const About = () => {
  return (
    <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
      <div className="flex lg:flex-row flex-col lg:gap-8 sm:gap-10 gap-12">
        <div className="w-full lg:w-6/12">
          <h2 className="w-full font-bold lg:text-4xl text-3xl lg:leading-10 leading-9">
            About
          </h2>
          <p className="font-normal text-base leading-6 text-gray-600 mt-6">
            Hello everyone, My name's Paramet Khampoo-ngern. you can call me
            "Copter". I'm graduated in Mechanical Engineering from Khon Kaen
            University. But I felt technology so fast-growing. I learn about
            machine learning by python. It is my first programing language to
            me. I learn about Machine learning for 3 months. I think I can't
            create a project about Machine learning because It needs big data
            which I'm didn't have big data. I decide to learn about web
            development.
          </p>
          <p className="font-normal text-xl leading-6 text-gray-900 mt-6">
            My Tech Stack
          </p>
          <p className="font-normal text-base leading-6 text-gray-600 mt-6 grid grid-cols-5">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-white-500 h-18 w-18"
                x="0px"
                y="0px"
                width="48"
                height="48"
                viewBox="0 0 48 48"
                // style=" fill:#000000;"
              >
                <path
                  fill="#0277BD"
                  d="M24.047,5c-1.555,0.005-2.633,0.142-3.936,0.367c-3.848,0.67-4.549,2.077-4.549,4.67V14h9v2H15.22h-4.35c-2.636,0-4.943,1.242-5.674,4.219c-0.826,3.417-0.863,5.557,0,9.125C5.851,32.005,7.294,34,9.931,34h3.632v-5.104c0-2.966,2.686-5.896,5.764-5.896h7.236c2.523,0,5-1.862,5-4.377v-8.586c0-2.439-1.759-4.263-4.218-4.672C27.406,5.359,25.589,4.994,24.047,5z M19.063,9c0.821,0,1.5,0.677,1.5,1.502c0,0.833-0.679,1.498-1.5,1.498c-0.837,0-1.5-0.664-1.5-1.498C17.563,9.68,18.226,9,19.063,9z"
                ></path>
                <path
                  fill="#FFC107"
                  d="M23.078,43c1.555-0.005,2.633-0.142,3.936-0.367c3.848-0.67,4.549-2.077,4.549-4.67V34h-9v-2h9.343h4.35c2.636,0,4.943-1.242,5.674-4.219c0.826-3.417,0.863-5.557,0-9.125C41.274,15.995,39.831,14,37.194,14h-3.632v5.104c0,2.966-2.686,5.896-5.764,5.896h-7.236c-2.523,0-5,1.862-5,4.377v8.586c0,2.439,1.759,4.263,4.218,4.672C19.719,42.641,21.536,43.006,23.078,43z M28.063,39c-0.821,0-1.5-0.677-1.5-1.502c0-0.833,0.679-1.498,1.5-1.498c0.837,0,1.5,0.664,1.5,1.498C29.563,38.32,28.899,39,28.063,39z"
                ></path>
              </svg>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-white-500 h-18 w-18"
                x="0px"
                y="0px"
                width="48"
                height="48"
                viewBox="0 0 48 48"
                // style=" fill:#000000;"
              >
                <path
                  fill="#004d40"
                  fill-rule="evenodd"
                  d="M8,16v12.646C6.655,28.9,5.949,29,4.878,29 C1.67,28.997,0,27.565,0,24.816c0-2.649,1.771-4.368,4.516-4.368c0.426,0,0.75,0.033,1.143,0.134V16H8z M5.659,22.672 c-0.308-0.1-0.561-0.134-0.886-0.134c-1.328,0-2.096,0.809-2.096,2.228c0,1.381,0.734,2.143,2.079,2.143 c0.291,0,0.527-0.016,0.903-0.067V22.672L5.659,22.672z"
                  clip-rule="evenodd"
                ></path>
                <path
                  fill="#004d40"
                  fill-rule="evenodd"
                  d="M12,20.046v6.618c0,2.076-0.155,3.224-0.612,4.084 c-0.426,0.827-0.987,1.349-2.146,1.925l-2.437-1.149c1.159-0.539,1.721-1.015,2.079-1.742c0.375-0.743,0.494-1.754,0.494-4.017 v-5.721H12z"
                  clip-rule="evenodd"
                ></path>
                <rect
                  width="2.623"
                  height="2.713"
                  x="9.377"
                  y="16"
                  fill="#004d40"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                ></rect>
                <path
                  fill="#004d40"
                  fill-rule="evenodd"
                  d="M13.734,20.876c1.136-0.552,2.223-0.795,3.408-0.795 c1.321,0,2.189,0.363,2.573,1.073C19.93,21.551,20,22.068,20,23.175v5.407c-1.152,0.171-2.606,0.294-3.673,0.294 c-2.156,0-3.123-0.778-3.123-2.505c0-1.868,1.285-2.731,4.441-3.006V22.78c0-0.483-0.235-0.658-0.884-0.658 c-0.95,0-2.02,0.278-3.024,0.812L13.734,20.876z M17.761,25.107c-1.702,0.171-2.255,0.449-2.255,1.141 c0,0.518,0.318,0.761,1.02,0.761c0.384,0,0.735-0.034,1.235-0.12L17.761,25.107L17.761,25.107z"
                  clip-rule="evenodd"
                ></path>
                <path
                  fill="#004d40"
                  fill-rule="evenodd"
                  d="M21.418,20.693c1.52-0.421,2.772-0.613,4.041-0.613 c1.318,0,2.273,0.317,2.839,0.93C28.83,21.588,29,22.222,29,23.573v5.303h-2.574v-5.195c0-1.038-0.335-1.424-1.252-1.424 c-0.351,0-0.669,0.035-1.186,0.195v6.425h-2.57V20.693z"
                  clip-rule="evenodd"
                ></path>
                <path
                  fill="#004d40"
                  fill-rule="evenodd"
                  d="M30.177,30.006c0.919,0.486,1.839,0.71,2.812,0.71 c1.721,0,2.454-0.473,2.454-2.176v-0.052c-0.51,0.258-1.025,0.366-1.704,0.366c-2.302,0-3.739-1.547-3.739-3.997 c0-3.043,2.141-4.762,5.974-4.762c1.126,0,2.167,0.121,3.427,0.383l-0.899,1.93c-0.699-0.138-0.057-0.021-0.584-0.072v0.279 l0.034,1.13l0.017,1.461c0.017,0.366,0.017,0.73,0.034,1.096v0.73c0,2.295-0.19,3.131-0.751,4.02 c-0.818,1.302-2.234,1.947-4.246,1.947c-1.024,0-1.91-0.155-2.829-0.521V30.006L30.177,30.006z M35.392,22.251h-0.085h-0.19 c-0.51-0.017-1.108,0.121-1.518,0.383c-0.628,0.365-0.953,1.027-0.953,1.964c0,1.337,0.649,2.102,1.808,2.102 c0.358,0,0.649-0.069,0.987-0.172v-0.193v-0.73c0-0.314-0.017-0.662-0.017-1.027l-0.017-1.234l-0.017-0.886V22.251z"
                  clip-rule="evenodd"
                ></path>
                <path
                  fill="#004d40"
                  fill-rule="evenodd"
                  d="M43.566,20.046c2.753,0,4.434,1.66,4.434,4.348 c0,2.756-1.752,4.483-4.544,4.483c-2.756,0-4.456-1.659-4.456-4.33C39.005,21.774,40.757,20.046,43.566,20.046z M43.509,26.752 c1.057,0,1.681-0.838,1.681-2.294c0-1.439-0.607-2.294-1.663-2.294c-1.093,0-1.718,0.838-1.718,2.294 C41.81,25.914,42.438,26.752,43.509,26.752L43.509,26.752z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-white-500 h-12 w-12"
                x="0px"
                y="0px"
                viewBox="0 0 48 35"
                // style=" fill:#000000;"
              >
                <path
                  fill="#4e7ab5"
                  d="M20,28.9C8.598,28.9,0,25.17,0,20s8.598-9,20-9s20,3.83,20,9S31.402,28.9,20,28.9z M20,13.932 c-9.729,0-17.125,3.266-17.125,6.131S10.271,26.068,20,26.068s17.125-3.266,17.125-6.131S29.729,13.932,20,13.932z"
                ></path>
                <path
                  fill="#4e7ab5"
                  d="M12.402,38C12.401,38,12.402,38,12.402,38c-0.931,0-1.781-0.216-2.528-0.642 c-1.22-0.697-2.095-1.928-2.532-3.562c-1.146-4.282,0.703-11.482,4.713-18.344C16.76,7.407,23.007,2.003,27.599,2.003 c0.93,0,1.78,0.216,2.527,0.642c1.218,0.695,2.094,1.925,2.531,3.558c1.147,4.282-0.703,11.483-4.715,18.345 C23.241,32.594,16.995,38,12.402,38z M27.599,5.003c-2.888,0-8.409,4.193-12.954,11.963c-4.123,7.056-5.332,12.909-4.404,16.054 c0.251,0.849,0.605,1.438,1.121,1.732c2.361,1.348,8.809-2.85,13.991-11.717c4.125-7.057,5.46-12.785,4.406-16.055 c-0.271-0.841-0.604-1.435-1.119-1.728C28.347,5.084,28.006,5.003,27.599,5.003z"
                ></path>
                <path
                  fill="#4e7ab5"
                  d="M27.599,37.997C27.599,37.997,27.599,37.997,27.599,37.997c-4.597-0.001-10.843-5.405-15.544-13.449 c-4.01-6.862-5.859-14.063-4.713-18.344C7.779,4.57,8.654,3.339,9.873,2.643C10.621,2.216,11.471,2,12.4,2 c4.595,0,10.84,5.406,15.542,13.452c4.011,6.861,5.86,14.062,4.714,18.345c-0.438,1.633-1.313,2.863-2.53,3.558 C29.379,37.781,28.528,37.997,27.599,37.997z M12.4,5c-0.407,0-0.747,0.082-1.04,0.248c-0.515,0.294-0.874,0.881-1.12,1.732 c-0.928,3.208,0.281,8.999,4.404,16.055c4.541,7.769,10.063,11.962,12.954,11.962l0,0c0.408,0,0.748-0.082,1.041-0.249 c0.514-0.292,0.883-0.876,1.118-1.728c0.867-3.146-0.281-9-4.405-16.055C20.811,9.194,15.29,5,12.4,5z"
                ></path>
                <path
                  fill="#8bb7f0"
                  d="M23.5,20c0,1.935-1.565,3.5-3.5,3.5s-3.5-1.565-3.5-3.5s1.565-3.5,3.5-3.5S23.5,18.065,23.5,20z"
                ></path>
                <path
                  fill="#4e7ab5"
                  d="M20,24c-2.206,0-4-1.794-4-4s1.794-4,4-4s4,1.794,4,4S22.206,24,20,24z M20,17c-1.654,0-3,1.346-3,3 s1.346,3,3,3s3-1.346,3-3S21.654,17,20,17z"
                ></path>
                <path
                  fill="#8bb7f0"
                  d="M20,28.068C9.346,28.068,1,24.524,1,20s8.346-8.068,19-8.068S39,15.476,39,20 S30.654,28.068,20,28.068z M20,12.932c-9.757,0-18,3.237-18,7.068s8.243,7.068,18,7.068S38,23.832,38,20S29.757,12.932,20,12.932z"
                ></path>
                <path
                  fill="#8bb7f0"
                  d="M12.402,37C12.401,37,12.402,37,12.402,37c-0.755,0-1.438-0.172-2.033-0.511 c-0.996-0.569-1.689-1.562-2.062-2.952c-1.081-4.037,0.729-10.938,4.61-17.581C17.379,8.33,23.416,3.003,27.599,3.003 c0.754,0,1.438,0.172,2.032,0.511c0.995,0.568,1.688,1.56,2.061,2.948c1.081,4.037-0.729,10.938-4.612,17.582 C22.621,31.672,16.586,37,12.402,37z M27.599,4.003c-3.784,0-9.595,5.239-13.817,12.458c-3.695,6.325-5.507,13.083-4.508,16.818 c0.301,1.123,0.836,1.91,1.592,2.342C11.307,35.872,11.823,36,12.401,36c3.785,0,9.595-5.24,13.814-12.461 c3.697-6.326,5.51-13.085,4.509-16.818c-0.3-1.121-0.835-1.908-1.59-2.338C28.693,4.131,28.177,4.003,27.599,4.003z"
                ></path>
                <g>
                  <path
                    fill="#8bb7f0"
                    d="M27.599,36.997C27.599,36.997,27.599,36.997,27.599,36.997c-4.187-0.001-10.224-5.327-14.681-12.953 C9.036,17.401,7.227,10.5,8.308,6.463c0.372-1.39,1.065-2.383,2.062-2.952C10.964,3.172,11.647,3,12.4,3 c4.185,0,10.221,5.328,14.679,12.956c3.883,6.642,5.692,13.543,4.61,17.582c-0.371,1.389-1.064,2.381-2.059,2.948 C29.036,36.825,28.353,36.997,27.599,36.997z M12.4,4c-0.577,0-1.094,0.128-1.535,0.379c-0.756,0.432-1.291,1.219-1.592,2.342 c-0.999,3.734,0.813,10.493,4.508,16.818C18,30.757,23.812,35.996,27.599,35.997l0,0c0.578,0,1.095-0.128,1.536-0.38 c0.754-0.43,1.289-1.217,1.589-2.338c1-3.735-0.812-10.494-4.508-16.818C21.996,9.241,16.187,4,12.4,4z"
                  ></path>
                </g>
              </svg>
            </div>
            <div>
              <svg
                className="stroke-white-500 h-12 w-12"
                viewBox=".5 -.2 1023 1024.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m478.5.6c-2.2.2-9.2.9-15.5 1.4-145.3 13.1-281.4 91.5-367.6 212-48 67-78.7 143-90.3 223.5-4.1 28.1-4.6 36.4-4.6 74.5s.5 46.4 4.6 74.5c27.8 192.1 164.5 353.5 349.9 413.3 33.2 10.7 68.2 18 108 22.4 15.5 1.7 82.5 1.7 98 0 68.7-7.6 126.9-24.6 184.3-53.9 8.8-4.5 10.5-5.7 9.3-6.7-.8-.6-38.3-50.9-83.3-111.7l-81.8-110.5-102.5-151.7c-56.4-83.4-102.8-151.6-103.2-151.6-.4-.1-.8 67.3-1 149.6-.3 144.1-.4 149.9-2.2 153.3-2.6 4.9-4.6 6.9-8.8 9.1-3.2 1.6-6 1.9-21.1 1.9h-17.3l-4.6-2.9c-3-1.9-5.2-4.4-6.7-7.3l-2.1-4.5.2-200.5.3-200.6 3.1-3.9c1.6-2.1 5-4.8 7.4-6.1 4.1-2 5.7-2.2 23-2.2 20.4 0 23.8.8 29.1 6.6 1.5 1.6 57 85.2 123.4 185.9s157.2 238.2 201.8 305.7l81 122.7 4.1-2.7c36.3-23.6 74.7-57.2 105.1-92.2 64.7-74.3 106.4-164.9 120.4-261.5 4.1-28.1 4.6-36.4 4.6-74.5s-.5-46.4-4.6-74.5c-27.8-192.1-164.5-353.5-349.9-413.3-32.7-10.6-67.5-17.9-106.5-22.3-9.6-1-75.7-2.1-84-1.3zm209.4 309.4c4.8 2.4 8.7 7 10.1 11.8.8 2.6 1 58.2.8 183.5l-.3 179.8-31.7-48.6-31.8-48.6v-130.7c0-84.5.4-132 1-134.3 1.6-5.6 5.1-10 9.9-12.6 4.1-2.1 5.6-2.3 21.3-2.3 14.8 0 17.4.2 20.7 2z" />
                <path d="m784.3 945.1c-3.5 2.2-4.6 3.7-1.5 2 2.2-1.3 5.8-4 5.2-4.1-.3 0-2 1-3.7 2.1zm-6.9 4.5c-1.8 1.4-1.8 1.5.4.4 1.2-.6 2.2-1.3 2.2-1.5 0-.8-.5-.6-2.6 1.1zm-5 3c-1.8 1.4-1.8 1.5.4.4 1.2-.6 2.2-1.3 2.2-1.5 0-.8-.5-.6-2.6 1.1zm-5 3c-1.8 1.4-1.8 1.5.4.4 1.2-.6 2.2-1.3 2.2-1.5 0-.8-.5-.6-2.6 1.1zm-7.6 4c-3.8 2-3.6 2.8.2.9 1.7-.9 3-1.8 3-2 0-.7-.1-.6-3.2 1.1z" />
              </svg>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="48"
                height="48"
                viewBox="0 0 48 48"
                // style=" fill:#000000;"
              >
                <path
                  fill="#2395ec"
                  d="M47.527,19.847c-0.13-0.102-1.345-1.007-3.908-1.007c-0.677,0.003-1.352,0.06-2.019,0.171 c-0.496-3.354-3.219-4.93-3.345-5.003l-0.688-0.392l-0.453,0.644c-0.567,0.866-1.068,1.76-1.311,2.763 c-0.459,1.915-0.18,3.713,0.806,5.25C35.417,22.928,33.386,22.986,33,23H1.582c-0.826,0.001-1.496,0.66-1.501,1.474 c-0.037,2.733,0.353,5.553,1.306,8.119c1.089,2.818,2.71,4.894,4.818,6.164C8.567,40.184,12.405,41,16.756,41 c1.965,0.006,3.927-0.169,5.859-0.524c2.686-0.487,5.271-1.413,7.647-2.74c1.958-1.119,3.72-2.542,5.219-4.215 c2.505-2.798,3.997-5.913,5.107-8.682c0.149,0,0.298,0,0.442,0c2.743,0,4.429-1.083,5.359-1.99 c0.618-0.579,1.101-1.284,1.414-2.065L48,20.216L47.527,19.847z"
                ></path>
                <path
                  fill="#2395ec"
                  d="M8,22H5c-0.552,0-1-0.448-1-1v-3c0-0.552,0.448-1,1-1h3c0.552,0,1,0.448,1,1v3 C9,21.552,8.552,22,8,22z"
                ></path>
                <path
                  fill="#2395ec"
                  d="M14,22h-3c-0.552,0-1-0.448-1-1v-3c0-0.552,0.448-1,1-1h3c0.552,0,1,0.448,1,1v3 C15,21.552,14.552,22,14,22z"
                ></path>
                <path
                  fill="#2395ec"
                  d="M20,22h-3c-0.552,0-1-0.448-1-1v-3c0-0.552,0.448-1,1-1h3c0.552,0,1,0.448,1,1v3 C21,21.552,20.552,22,20,22z"
                ></path>
                <path
                  fill="#2395ec"
                  d="M26,22h-3c-0.552,0-1-0.448-1-1v-3c0-0.552,0.448-1,1-1h3c0.552,0,1,0.448,1,1v3 C27,21.552,26.552,22,26,22z"
                ></path>
                <path
                  fill="#2395ec"
                  d="M14,16h-3c-0.552,0-1-0.448-1-1v-3c0-0.552,0.448-1,1-1h3c0.552,0,1,0.448,1,1v3 C15,15.552,14.552,16,14,16z"
                ></path>
                <path
                  fill="#2395ec"
                  d="M20,16h-3c-0.552,0-1-0.448-1-1v-3c0-0.552,0.448-1,1-1h3c0.552,0,1,0.448,1,1v3 C21,15.552,20.552,16,20,16z"
                ></path>
                <path
                  fill="#2395ec"
                  d="M26,16h-3c-0.552,0-1-0.448-1-1v-3c0-0.552,0.448-1,1-1h3c0.552,0,1,0.448,1,1v3 C27,15.552,26.552,16,26,16z"
                ></path>
                <path
                  fill="#2395ec"
                  d="M26,10h-3c-0.552,0-1-0.448-1-1V6c0-0.552,0.448-1,1-1h3c0.552,0,1,0.448,1,1v3 C27,9.552,26.552,10,26,10z"
                ></path>
                <path
                  fill="#2395ec"
                  d="M32,22h-3c-0.552,0-1-0.448-1-1v-3c0-0.552,0.448-1,1-1h3c0.552,0,1,0.448,1,1v3 C33,21.552,32.552,22,32,22z"
                ></path>
              </svg>
            </div>
          </p>
          <p className="font-normal text-base leading-6 text-gray-600 mt-6 grid grid-cols-5">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-white-500 h-18 w-18"
                x="0px"
                y="0px"
                width="48"
                height="48"
                viewBox="0 0 48 48"
                // style=" fill:#000000;"
              >
                <path
                  fill="#388e3c"
                  d="M17.204 19.122l-4.907 2.715C12.113 21.938 12 22.126 12 22.329v5.433c0 .203.113.39.297.492l4.908 2.717c.183.101.41.101.593 0l4.907-2.717C22.887 28.152 23 27.965 23 27.762v-5.433c0-.203-.113-.39-.297-.492l-4.906-2.715c-.092-.051-.195-.076-.297-.076-.103 0-.205.025-.297.076M42.451 24.013l-.818.452c-.031.017-.049.048-.049.082v.906c0 .034.019.065.049.082l.818.453c.031.017.068.017.099 0l.818-.453c.03-.017.049-.048.049-.082v-.906c0-.034-.019-.065-.05-.082l-.818-.452C42.534 24.004 42.517 24 42.5 24S42.466 24.004 42.451 24.013"
                ></path>
                <path
                  fill="#37474f"
                  d="M35.751,13.364l-2.389-1.333c-0.075-0.042-0.167-0.041-0.241,0.003 c-0.074,0.044-0.12,0.123-0.12,0.209L33,20.295l-2.203-1.219C30.705,19.025,30.602,19,30.5,19c-0.102,0-0.205,0.025-0.297,0.076 h0.001l-4.907,2.715C25.113,21.892,25,22.08,25,22.282v5.433c0,0.203,0.113,0.39,0.297,0.492l4.908,2.717 c0.183,0.101,0.41,0.101,0.593,0l4.907-2.717C35.887,28.106,36,27.918,36,27.715V13.788C36,13.612,35.904,13.45,35.751,13.364z M32.866,26.458l-2.23,1.235c-0.083,0.046-0.186,0.046-0.269,0l-2.231-1.235C28.051,26.412,28,26.326,28,26.234v-2.47 c0-0.092,0.051-0.177,0.135-0.224l2.231-1.234h-0.001c0.042-0.023,0.088-0.034,0.135-0.034c0.047,0,0.093,0.012,0.135,0.034 l2.23,1.234C32.949,23.587,33,23.673,33,23.765v2.47C33,26.326,32.949,26.412,32.866,26.458z"
                ></path>
                <path
                  fill="#2e7d32"
                  d="M17.204,19.122L12,27.762c0,0.203,0.113,0.39,0.297,0.492l4.908,2.717 c0.183,0.101,0.41,0.101,0.593,0L23,22.329c0-0.203-0.113-0.39-0.297-0.492l-4.906-2.715c-0.092-0.051-0.195-0.076-0.297-0.076 c-0.103,0-0.205,0.025-0.297,0.076"
                ></path>
                <path
                  fill="#4caf50"
                  d="M17.204,19.122l-4.907,2.715C12.113,21.938,12,22.126,12,22.329l5.204,8.642 c0.183,0.101,0.41,0.101,0.593,0l4.907-2.717C22.887,28.152,23,27.965,23,27.762l-5.203-8.64c-0.092-0.051-0.195-0.076-0.297-0.076 c-0.103,0-0.205,0.025-0.297,0.076"
                ></path>
                <path
                  fill="#37474f"
                  d="M47.703 21.791l-4.906-2.715C42.705 19.025 42.602 19 42.5 19c-.102 0-.205.025-.297.076h.001l-4.907 2.715C37.114 21.892 37 22.084 37 22.294v5.411c0 .209.114.402.297.503l4.908 2.717c.184.102.409.102.593 0l2.263-1.253c.207-.115.206-.412-.002-.526l-4.924-2.687C40.052 26.412 40 26.325 40 26.231v-2.466c0-.092.05-.177.13-.221l2.235-1.236h-.001c.042-.023.088-.034.135-.034.047 0 .093.012.135.034l2.235 1.237c.08.044.13.129.13.221v2.012c0 .086.046.166.121.209.075.042.167.042.242-.001l2.398-1.393c.148-.086.24-.245.24-.417v-1.88C48 22.085 47.886 21.892 47.703 21.791zM10.703 21.791l-4.906-2.715C5.705 19.025 5.602 19 5.5 19c-.102 0-.205.025-.297.076h.001l-4.907 2.715C.114 21.892 0 22.084 0 22.294v7.465c0 .086.046.166.121.209.075.042.167.042.242-.001l2.398-1.393C2.909 28.488 3 28.329 3 28.157v-4.393c0-.092.05-.177.13-.221l2.235-1.236H5.365c.042-.023.088-.034.135-.034.047 0 .093.012.135.034l2.235 1.237C7.95 23.588 8 23.673 8 23.765v4.393c0 .172.091.331.24.417l2.398 1.393c.075.043.167.043.242.001C10.954 29.925 11 29.845 11 29.759v-7.464C11 22.085 10.886 21.892 10.703 21.791z"
                ></path>
              </svg>
            </div>
            <div className="border-inherit">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-white-500 h-16 w-16"
                viewBox="0 0 55 60"
                // style=" fill:#000000;"
              >
                <path
                  fill="#00796b"
                  d="M0.002,35.041h1.92v-7.085l2.667,6.057c0.329,0.755,0.779,1.022,1.662,1.022 s1.315-0.267,1.644-1.022l2.667-5.902v6.93h1.92v-7.258c0-0.697-0.277-1.035-0.849-1.209c-1.367-0.43-2.285-0.059-2.7,0.872 l-2.735,6.16l-2.649-6.16c-0.398-0.93-1.332-1.302-2.7-0.872C0.277,26.748,0,27.085,0,27.782v7.258H0.002z"
                ></path>
                <path
                  fill="#00796b"
                  d="M13.441,29.281h1.92v4.055c-0.015,0.2,0.064,0.731,0.99,0.745c0.472,0.008,2.821,0,2.85,0v-4.8h1.92 c0.008,0,0,5.968,0,5.993c0.01,1.472-1.828,1.662-2.673,1.687h-5.006v-0.96c0.01,0,4.787,0.001,4.801,0 c1.088-0.115,0.959-0.714,0.959-0.896v-0.064H16.19c-1.67-0.015-2.735-0.751-2.747-1.59C13.441,33.373,13.479,29.317,13.441,29.281 z"
                ></path>
                <path
                  fill="#f57f17"
                  d="M22.081,35.041h4.807c0.63,0,1.242-0.132,1.728-0.36c0.81-0.372,1.144-0.875,1.144-1.536v-1.368 c0-1.476-1.83-1.536-2.88-1.536h-1.92c-0.755,0-0.87-0.456-0.96-0.96v-0.96c0.09-0.384,0.258-0.9,0.923-0.96 c0.773,0,4.836,0,4.836,0v-0.96h-4.566c-0.755,0-3.114,0.09-3.114,1.92v1.187c0,0.84,0.738,1.524,2.34,1.692 c0.18,0.012,0.36,0.024,0.539,0.024c0,0,1.866-0.036,1.92-0.024c1.08,0,0.96,0.84,0.96,0.96v0.96c0,0.132-0.03,0.96-0.971,0.96 c-0.072,0-4.789,0-4.789,0V35.041z"
                ></path>
                <path
                  fill="#f57f17"
                  d="M40.32,33.08c0,1.159,0.655,1.809,2.392,1.939c0.162,0.011,0.325,0.021,0.488,0.021H48v-0.96h-4.435 c-0.991,0-1.325-0.416-1.325-1.011v-6.669h-1.92V33.08z"
                ></path>
                <path
                  fill="#f57f17"
                  d="M30.704,33.121v-4.8c0-1.02,0.5-1.724,1.916-1.92h0.672h3.447h0.525 c1.416,0.196,2.08,0.899,2.08,1.92v4.782c0,0.827-0.215,1.271-0.916,1.559L39.916,36h-2.16l-1.07-0.96h-1.257l-2.136,0.012 c-0.309,0-0.635-0.043-0.993-0.141C31.226,34.618,30.704,34.054,30.704,33.121z M32.624,33.121c0.098,0.467,0.473,0.96,1.14,0.96 h1.864l-1.068-0.96h2.175l0.519,0.482c0,0,0.186-0.152,0.186-0.482c0-0.33-0.016-4.8-0.016-4.8c-0.098-0.434-0.538-0.96-1.188-0.96 h-2.471c-0.749,0-1.14,0.548-1.14,1.058L32.624,33.121L32.624,33.121z"
                ></path>
                <path
                  fill="#00796b"
                  d="M46.199,25.389c-1.031-0.028-1.818,0.068-2.491,0.351c-0.191,0.081-0.496,0.083-0.528,0.323 c0.105,0.11,0.121,0.275,0.205,0.41c0.16,0.26,0.432,0.609,0.674,0.791c0.265,0.2,0.538,0.414,0.821,0.587 c0.504,0.307,1.067,0.483,1.553,0.791c0.286,0.181,0.57,0.411,0.85,0.615c0.138,0.102,0.23,0.259,0.41,0.323 c0-0.01,0-0.019,0-0.029c-0.094-0.12-0.119-0.285-0.205-0.411c-0.127-0.127-0.254-0.254-0.381-0.381 c-0.372-0.494-0.846-0.929-1.348-1.289c-0.401-0.288-1.298-0.677-1.466-1.143c-0.01-0.01-0.019-0.019-0.03-0.03 c0.284-0.032,0.617-0.135,0.879-0.205c0.441-0.118,0.834-0.087,1.289-0.205c0.205-0.059,0.41-0.117,0.615-0.176 c0-0.039,0-0.078,0-0.117c-0.23-0.236-0.395-0.548-0.645-0.762c-0.657-0.559-1.373-1.117-2.11-1.583 c-0.409-0.258-0.915-0.426-1.348-0.645c-0.146-0.074-0.402-0.112-0.498-0.234c-0.228-0.29-0.351-0.659-0.527-0.996 c-0.368-0.708-0.73-1.482-1.055-2.227c-0.223-0.508-0.368-1.01-0.645-1.466c-1.331-2.188-2.764-3.509-4.982-4.807 c-0.472-0.276-1.041-0.385-1.642-0.528c-0.323-0.019-0.645-0.039-0.968-0.059c-0.197-0.083-0.401-0.323-0.587-0.44 c-0.735-0.465-2.621-1.475-3.165-0.147c-0.344,0.838,0.514,1.656,0.821,2.081c0.215,0.298,0.491,0.632,0.645,0.968 c0.101,0.22,0.119,0.441,0.205,0.674c0.213,0.574,0.55,1.228,0.826,1.759c0.139,0.269,0.293,0.551,0.469,0.791 c0.108,0.147,0.293,0.212,0.323,0.44c-0.181,0.253-0.191,0.646-0.293,0.968c-0.458,1.445-0.285,3.24,0.381,4.308 c0.204,0.328,0.686,1.032,1.348,0.762c0.579-0.236,0.45-0.967,0.615-1.612c0.037-0.146,0.014-0.253,0.088-0.351 c0,0.01,0,0.019,0,0.03c0.176,0.351,0.351,0.704,0.528,1.055c0.391,0.629,1.084,1.286,1.67,1.73 c0.304,0.23,0.544,0.628,0.938,0.762c0-0.01,0-0.019,0-0.03c-0.01,0-0.019,0-0.03,0c-0.076-0.119-0.196-0.168-0.293-0.264 c-0.229-0.225-0.485-0.504-0.674-0.762c-0.534-0.725-1.006-1.519-1.436-2.345c-0.205-0.395-0.384-0.829-0.557-1.231 c-0.067-0.155-0.066-0.389-0.205-0.469c-0.19,0.294-0.468,0.532-0.615,0.879c-0.234,0.555-0.265,1.233-0.351,1.934 c-0.052,0.018-0.029,0.006-0.059,0.029c-0.408-0.099-0.552-0.518-0.704-0.879c-0.384-0.912-0.455-2.38-0.117-3.429 c0.087-0.272,0.482-1.127,0.323-1.378c-0.076-0.251-0.328-0.396-0.468-0.587c-0.175-0.236-0.348-0.548-0.469-0.821 c-0.314-0.711-0.612-1.538-0.943-2.257c-0.158-0.344-0.425-0.691-0.645-0.996c-0.243-0.338-0.516-0.587-0.704-0.996 c-0.067-0.145-0.158-0.378-0.059-0.528c0.032-0.101,0.076-0.143,0.176-0.176c0.17-0.132,0.643,0.043,0.821,0.117 c0.47,0.195,0.862,0.381,1.26,0.645c0.191,0.127,0.384,0.372,0.615,0.44c0.088,0,0.176,0,0.264,0 c0.413,0.095,0.875,0.03,1.26,0.147c0.682,0.207,1.292,0.529,1.846,0.879c1.69,1.067,3.071,2.585,4.016,4.397 c0.152,0.292,0.218,0.57,0.351,0.879c0.27,0.624,0.611,1.266,0.879,1.876c0.268,0.609,0.53,1.223,0.909,1.73 c0.2,0.266,0.97,0.409,1.319,0.557c0.245,0.104,0.647,0.211,0.879,0.351c0.444,0.268,0.874,0.587,1.289,0.879 C45.528,24.803,46.167,25.124,46.199,25.389z"
                ></path>
                <path
                  fill="#00796b"
                  d="M33.098,14.223c-0.215-0.004-0.367,0.023-0.528,0.059c0,0.01,0,0.019,0,0.03c0.01,0,0.019,0,0.03,0 c0.103,0.21,0.283,0.347,0.41,0.528c0.098,0.205,0.195,0.41,0.293,0.615c0.01-0.01,0.019-0.019,0.029-0.029 c0.181-0.128,0.265-0.332,0.264-0.645c-0.073-0.077-0.084-0.173-0.147-0.264C33.365,14.394,33.203,14.325,33.098,14.223z"
                ></path>
              </svg>
            </div>
          </p>
        </div>
        <div
          className="w-full lg:w-6/12 shadow-5xl"
          style={{ borderRadius: "5px", overflow: "hidden" }}
        >
          <Image
            className="lg:block hidden rounded-md shadow-lg shadow-cyan-500/50 "
            src={img2}
            alt="people discussing on board"
          />
        </div>
      </div>
      <div className="relative mt-24">
        <div className="grid md:grid-cols-4 grid-cols-2 sm:gap-8 gap-4">
          <Fade bottom delay={500}>
            <div>
              {" "}
              <div className="z-20 w-12 h-12 bg-gray-400 rounded-full flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="stroke-white-500 h-8 w-8"
                  viewBox="0 0 48 48"
                >
                  <path d="M 24 3 C 20.271429 3 18.240267 3.9470561 16.792969 4.5742188 L 16.791016 4.5742188 C 15.488673 5.1421213 14.704771 6.3187748 14.365234 7.4296875 C 14.025697 8.5406002 14 9.6506515 14 10.640625 L 14 14 L 10.640625 14 C 9.6506515 14 8.5406002 14.0257 7.4296875 14.365234 C 6.3187748 14.704771 5.1421212 15.488626 4.5742188 16.791016 L 4.5742188 16.792969 C 3.947056 18.24022 3 20.271429 3 24 C 3 27.728571 3.9470561 29.759733 4.5742188 31.207031 L 4.5742188 31.208984 C 5.1421212 32.511374 6.3187748 33.295229 7.4296875 33.634766 C 8.5406002 33.974256 9.6506515 34 10.640625 34 L 14 34 L 14 37.359375 C 14 38.349349 14.0257 39.459401 14.365234 40.570312 C 14.704771 41.681225 15.488626 42.857879 16.791016 43.425781 L 16.792969 43.425781 C 18.24022 44.052944 20.271429 45 24 45 C 27.728571 45 29.759733 44.052944 31.207031 43.425781 L 31.208984 43.425781 C 32.511374 42.857879 33.295229 41.681225 33.634766 40.570312 C 33.974256 39.459401 34 38.349349 34 37.359375 L 34 34 L 37.359375 34 C 38.349349 34 39.459401 33.9743 40.570312 33.634766 C 41.681225 33.295229 42.857879 32.511374 43.425781 31.208984 L 43.425781 31.207031 C 44.052944 29.75978 45 27.728571 45 24 C 45 20.271429 44.052944 18.240267 43.425781 16.792969 L 43.425781 16.791016 C 42.857879 15.488673 41.681225 14.704771 40.570312 14.365234 C 39.459401 14.025697 38.349349 14 37.359375 14 L 34 14 L 34 10.640625 C 34 9.6506515 33.974303 8.5406002 33.634766 7.4296875 C 33.295229 6.3187748 32.511374 5.1421213 31.208984 4.5742188 L 31.207031 4.5742188 C 29.75978 3.9470561 27.728571 3 24 3 z M 24 6 C 27.268623 6 28.459017 6.6519922 30.009766 7.3242188 C 30.427376 7.5063161 30.590162 7.7325533 30.765625 8.3066406 C 30.941088 8.8807279 31 9.7405985 31 10.640625 L 31 15.253906 A 1.50015 1.50015 0 0 0 31 15.740234 L 31 19 C 31 20.950062 29.450062 22.5 27.5 22.5 L 20.5 22.5 C 16.928062 22.5 14 25.428062 14 29 L 14 31 L 10.640625 31 C 9.7405985 31 8.8807279 30.941088 8.3066406 30.765625 C 7.7325533 30.590162 7.5063162 30.427376 7.3242188 30.009766 C 6.6519921 28.459017 6 27.268623 6 24 C 6 20.731377 6.6519921 19.540983 7.3242188 17.990234 C 7.5063161 17.572624 7.7325533 17.409838 8.3066406 17.234375 C 8.8807279 17.058912 9.7405985 17 10.640625 17 L 23.5 17 A 1.50015 1.50015 0 1 0 23.5 14 L 17 14 L 17 10.640625 C 17 9.7405985 17.058912 8.8807279 17.234375 8.3066406 C 17.409838 7.7325533 17.572624 7.5063162 17.990234 7.3242188 C 19.540983 6.6519921 20.731377 6 24 6 z M 20.5 9 A 1.5 1.5 0 0 0 20.5 12 A 1.5 1.5 0 0 0 20.5 9 z M 34 17 L 37.359375 17 C 38.259401 17 39.119272 17.05891 39.693359 17.234375 C 40.267447 17.409838 40.493684 17.572624 40.675781 17.990234 C 41.348008 19.540983 42 20.731377 42 24 C 42 27.268623 41.348008 28.459017 40.675781 30.009766 C 40.493684 30.427376 40.267447 30.590162 39.693359 30.765625 C 39.119272 30.941088 38.259401 31 37.359375 31 L 24.5 31 A 1.50015 1.50015 0 1 0 24.5 34 L 31 34 L 31 37.359375 C 31 38.259401 30.94109 39.119272 30.765625 39.693359 C 30.590162 40.267447 30.427376 40.493684 30.009766 40.675781 C 28.459017 41.348008 27.268623 42 24 42 C 20.731377 42 19.540983 41.348008 17.990234 40.675781 C 17.572624 40.493684 17.409838 40.267447 17.234375 39.693359 C 17.058912 39.119272 17 38.259401 17 37.359375 L 17 29 C 17 27.049938 18.549938 25.5 20.5 25.5 L 27.5 25.5 C 31.071938 25.5 34 22.571938 34 19 L 34 17 z M 27.5 36 A 1.5 1.5 0 0 0 27.5 39 A 1.5 1.5 0 0 0 27.5 36 z"></path>
                </svg>
              </div>
              <div>
                <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800  pt-10">
                  Machine learning
                </p>
                <p className="font-normal text-base leading-6 text-gray-600 mt-6">
                  August 2020 - November 2020
                </p>
              </div>
            </div>
          </Fade>
          <Fade bottom delay={1000}>
            <div>
              {" "}
              <div className="z-20 w-12 h-12 bg-gray-400 rounded-full flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="stroke-white-500 h-8 w-8"
                  x="0px"
                  y="0px"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  //   style=" fill:#000000;"
                >
                  <path d="M 11 3 L 11 8.1582031 C 10.653 8.0172031 9.9041562 8 9.5351562 8 C 6.7591563 8 4.1894531 9.306 4.1894531 13 C 4.1894531 17.42 7.67 18 10 18 C 10.92 18 13 17.909141 14 17.619141 L 14 3 L 11 3 z M 16 3 L 16 6 L 19 6 L 19 3 L 16 3 z M 16 8 L 16 16.701172 C 16 18.217172 15.078 19.795172 13 20.701172 L 15.859375 21.996094 C 18.765375 20.996094 19 17.701172 19 16.701172 L 19 8 L 16 8 z M 9.9707031 10.550781 C 10.290703 10.550781 10.65 10.609453 11 10.689453 L 11 15.392578 C 10.65 15.472578 10.290703 15.533203 9.9707031 15.533203 C 8.6607031 15.533203 7.390625 15.12 7.390625 13 C 7.390625 10.88 8.6607031 10.550781 9.9707031 10.550781 z"></path>
                </svg>
              </div>
              <div>
                <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800 pt-10">
                  Django
                </p>
                <p className="font-normal text-base leading-6 text-gray-600 mt-6">
                  November 2020 - Present
                </p>
              </div>
            </div>
          </Fade>
          <Fade bottom delay={1500}>
            <div>
              {" "}
              <div className="z-20 w-12 h-12 bg-gray-400 rounded-full flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="stroke-white-500 h-7 w-7"
                  x="0px"
                  y="0px"
                  width="50"
                  height="50"
                  viewBox="0 0 50 50"
                >
                  {" "}
                  <path d="M45.274,2.325C45.084,2.118,44.817,2,44.536,2H5.464C5.183,2,4.916,2.118,4.726,2.325S4.443,2.81,4.468,3.089l3.52,39.427 c0.037,0.412,0.324,0.759,0.722,0.873l16.01,4.573C24.809,47.987,24.902,48,24.994,48s0.185-0.013,0.274-0.038l16.024-4.573 c0.398-0.114,0.685-0.461,0.722-0.873l3.518-39.427C45.557,2.81,45.463,2.532,45.274,2.325z M12,29.004l7,1.942V11h4v26l-11-3.051 V29.004z M38.054,22L37,34.25L27,37v-4.601l6.75-1.855l0.25-3.75L27,28V11h12l-0.345,4H31v8L38.054,22z"></path>
                </svg>
              </div>
              <div className="">
                <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800 pt-10">
                  JavaScript
                </p>
                <p className="font-normal text-base leading-6 text-gray-600 mt-6">
                  January 2021 - Present
                </p>
              </div>
            </div>
          </Fade>
          <Fade bottom delay={2000}>
            <div>
              {" "}
              <div className="z-20 w-12 h-12 bg-gray-400 rounded-full flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="stroke-white-500 h-8 w-8"
                  x="0px"
                  y="0px"
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                >
                  {" "}
                  <path d="M 10.679688 4.1816406 C 10.068687 4.1816406 9.502 4.3184219 9 4.6074219 C 7.4311297 5.5132122 6.8339651 7.7205462 7.1503906 10.46875 C 4.6127006 11.568833 3 13.188667 3 15 C 3 16.811333 4.6127006 18.431167 7.1503906 19.53125 C 6.8341285 22.279346 7.4311297 24.486788 9 25.392578 C 9.501 25.681578 10.067687 25.818359 10.679688 25.818359 C 11.982314 25.818359 13.48785 25.164589 15 24.042969 C 16.512282 25.164589 18.01964 25.818359 19.322266 25.818359 C 19.933266 25.818359 20.499953 25.681578 21.001953 25.392578 C 22.570814 24.486793 23.167976 22.279432 22.851562 19.53125 C 25.388297 18.431178 27 16.81094 27 15 C 27 13.188667 25.387299 11.568833 22.849609 10.46875 C 23.165872 7.7206538 22.56887 5.5132122 21 4.6074219 C 20.499 4.3174219 19.932312 4.1816406 19.320312 4.1816406 C 18.017686 4.1816406 16.51215 4.8354109 15 5.9570312 C 13.487763 4.8354109 11.981863 4.1816406 10.679688 4.1816406 z M 10.679688 5.9316406 C 11.461321 5.9316406 12.49496 6.3472486 13.617188 7.1171875 C 12.95737 7.7398717 12.311153 8.4479321 11.689453 9.2363281 C 10.681079 9.3809166 9.7303472 9.5916908 8.8496094 9.8554688 C 8.8448793 9.7943902 8.8336776 9.7303008 8.8300781 9.6699219 C 8.7230781 7.8899219 9.114 6.5630469 9.875 6.1230469 C 10.1 5.9930469 10.362688 5.9316406 10.679688 5.9316406 z M 19.320312 5.9316406 C 19.636312 5.9316406 19.9 5.9930469 20.125 6.1230469 C 20.886 6.5620469 21.276922 7.8899219 21.169922 9.6699219 C 21.166295 9.7303008 21.155145 9.7943902 21.150391 9.8554688 C 20.2691 9.5915252 19.317669 9.3809265 18.308594 9.2363281 C 17.686902 8.4480417 17.042616 7.7397993 16.382812 7.1171875 C 17.504962 6.3473772 18.539083 5.9316406 19.320312 5.9316406 z M 15 8.2285156 C 15.27108 8.4752506 15.540266 8.7360345 15.8125 9.0214844 C 15.542718 9.012422 15.274373 9 15 9 C 14.726286 9 14.458598 9.0124652 14.189453 9.0214844 C 14.461446 8.7363308 14.729174 8.4750167 15 8.2285156 z M 15 10.75 C 15.828688 10.75 16.614128 10.796321 17.359375 10.876953 C 17.813861 11.494697 18.261774 12.147811 18.681641 12.875 C 19.084074 13.572033 19.439938 14.285488 19.753906 15 C 19.439896 15.714942 19.084316 16.429502 18.681641 17.126953 C 18.263078 17.852044 17.816279 18.500949 17.363281 19.117188 C 16.591711 19.201607 15.800219 19.25 15 19.25 C 14.171312 19.25 13.385872 19.203679 12.640625 19.123047 C 12.186139 18.505303 11.738226 17.854142 11.318359 17.126953 C 10.915684 16.429502 10.560194 15.714942 10.246094 15 C 10.559972 14.285488 10.915926 13.572033 11.318359 12.875 C 11.737083 12.149909 12.183612 11.499051 12.636719 10.882812 C 13.408289 10.798393 14.199781 10.75 15 10.75 z M 19.746094 11.291016 C 20.142841 11.386804 20.524253 11.490209 20.882812 11.605469 C 20.801579 11.97252 20.702235 12.346608 20.589844 12.724609 C 20.461164 12.483141 20.336375 12.240903 20.197266 12 C 20.054139 11.752196 19.895244 11.529558 19.746094 11.291016 z M 10.251953 11.292969 C 10.103305 11.530776 9.9454023 11.752991 9.8027344 12 C 9.6636666 12.240944 9.5387971 12.483106 9.4101562 12.724609 C 9.29751 12.345829 9.1965499 11.971295 9.1152344 11.603516 C 9.4803698 11.48815 9.86083 11.385986 10.251953 11.292969 z M 7.46875 12.246094 C 7.6794464 13.135714 7.9717297 14.057918 8.3476562 14.998047 C 7.9725263 15.935943 7.6814729 16.856453 7.4707031 17.744141 C 5.7292327 16.903203 4.75 15.856373 4.75 15 C 4.75 14.121 5.701875 13.119266 7.296875 12.322266 C 7.3513169 12.295031 7.4131225 12.272692 7.46875 12.246094 z M 22.529297 12.255859 C 24.270767 13.096797 25.25 14.143627 25.25 15 C 25.25 15.879 24.298125 16.880734 22.703125 17.677734 C 22.648683 17.704969 22.586877 17.727308 22.53125 17.753906 C 22.32043 16.863764 22.030541 15.940699 21.654297 15 C 22.028977 14.062913 22.318703 13.142804 22.529297 12.255859 z M 15 13 C 13.895 13 13 13.895 13 15 C 13 16.105 13.895 17 15 17 C 16.105 17 17 16.105 17 15 C 17 13.895 16.105 13 15 13 z M 9.4101562 17.275391 C 9.5388794 17.516948 9.6655262 17.759008 9.8046875 18 C 9.9476585 18.247625 10.104915 18.470608 10.253906 18.708984 C 9.857159 18.613196 9.4757466 18.509791 9.1171875 18.394531 C 9.1984813 18.02725 9.2976676 17.653633 9.4101562 17.275391 z M 20.589844 17.277344 C 20.702364 17.655759 20.803517 18.02905 20.884766 18.396484 C 20.51963 18.51185 20.13917 18.614014 19.748047 18.707031 C 19.896695 18.469224 20.054598 18.247009 20.197266 18 C 20.336044 17.759557 20.461449 17.518344 20.589844 17.277344 z M 8.8496094 20.144531 C 9.7309004 20.408475 10.682331 20.619073 11.691406 20.763672 C 12.313288 21.552345 12.957085 22.261935 13.617188 22.884766 C 12.495042 23.654481 11.461272 24.070312 10.679688 24.070312 C 10.363687 24.070312 10.1 24.006953 9.875 23.876953 C 9.114 23.437953 8.7230781 22.112031 8.8300781 20.332031 C 8.8337424 20.271023 8.8447938 20.206253 8.8496094 20.144531 z M 21.150391 20.144531 C 21.155182 20.206253 21.166285 20.271023 21.169922 20.332031 C 21.276922 22.112031 20.886 23.436953 20.125 23.876953 C 19.9 24.006953 19.637312 24.070313 19.320312 24.070312 C 18.538728 24.070312 17.504958 23.654609 16.382812 22.884766 C 17.042964 22.261863 17.688542 21.552454 18.310547 20.763672 C 19.318921 20.619083 20.269653 20.408309 21.150391 20.144531 z M 14.1875 20.978516 C 14.457282 20.987578 14.725627 21 15 21 C 15.274373 21 15.542718 20.987578 15.8125 20.978516 C 15.540266 21.263964 15.27108 21.524765 15 21.771484 C 14.72892 21.524749 14.459734 21.263966 14.1875 20.978516 z"></path>
                </svg>
              </div>
              <div className="">
                <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800 pt-10">
                  React
                </p>
                <p className="font-normal text-base leading-6 text-gray-600 mt-6">
                  October 2021 - Present
                </p>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default About;

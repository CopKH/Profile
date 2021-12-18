import React from "react";
import mypic from "../../public/mypic-removebg-preview.png";
import Image from "next/image";
import { Fade } from "react-reveal";
function One() {
  return (
    <div className="grid md:grid-cols-2 gap-4 bg-gray-900 bg-cover">
      <Fade duration={2000}>
        <div>
          <Fade right cascade duration={2000} delay={500}>
            {" "}
            <div className="md:text-xl  text-white content-center md:pl-32 md:pt-40 pl-10 pt-10 ">
              <p className="md:text-xs">Hello My name is</p>
              <p className="md:text-8xl text-4xl">Paramet KH</p>
              <p className="md:text-xl text-xl">I am full stack developer</p>
              <div className="md:hidden visible md:invisible">
                <Image src={mypic}  className=""/>
              </div>
              <div className="grid md:grid-cols-6 grid-cols-4 pt-5 ">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-10 h-10 text-white-500 fill-current"
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    // style=" fill:#000000;"
                  >
                    {" "}
                    <path d="M15,3C8.373,3,3,8.373,3,15c0,6.016,4.432,10.984,10.206,11.852V18.18h-2.969v-3.154h2.969v-2.099c0-3.475,1.693-5,4.581-5 c1.383,0,2.115,0.103,2.461,0.149v2.753h-1.97c-1.226,0-1.654,1.163-1.654,2.473v1.724h3.593L19.73,18.18h-3.106v8.697 C22.481,26.083,27,21.075,27,15C27,8.373,21.627,3,15,3z"></path>
                  </svg>
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-10 h-10 text-white-500 fill-current"
                    x="0px"
                    y="0px"
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    // style=" fill:#000000;"
                  >
                    <path d="M27,15c0,6.627-5.373,12-12,12S3,21.627,3,15S8.373,3,15,3S27,8.373,27,15z M10.403,11.021 c0.935,0,1.496-0.561,1.496-1.309c0-0.748-0.561-1.309-1.403-1.309C9.561,8.403,9,8.964,9,9.712 C9,10.46,9.561,11.022,10.403,11.021z M9,20h3v-8H9V20z M19.459,12c-1.412,0-2.165,0.465-2.541,1.116V12H14v8h2.917 c0,0,0-4.186,0-4.372c0-1.302,0.942-1.488,1.224-1.488s1.035,0.279,1.035,1.488V20H22v-4.372C22,13.116,20.871,12,19.459,12z"></path>
                  </svg>
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-10 h-10 text-white-500 fill-current"
                    x="0px"
                    y="0px"
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    // style=" fill:#000000;"
                  >
                    {" "}
                    <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
                  </svg>
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-10 h-10 text-white-500 fill-current"
                    x="0px"
                    y="0px"
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    // style=" fill:#000000;"
                  >
                    {" "}
                    <path d="M 9.9980469 3 C 6.1390469 3 3 6.1419531 3 10.001953 L 3 20.001953 C 3 23.860953 6.1419531 27 10.001953 27 L 20.001953 27 C 23.860953 27 27 23.858047 27 19.998047 L 27 9.9980469 C 27 6.1390469 23.858047 3 19.998047 3 L 9.9980469 3 z M 22 7 C 22.552 7 23 7.448 23 8 C 23 8.552 22.552 9 22 9 C 21.448 9 21 8.552 21 8 C 21 7.448 21.448 7 22 7 z M 15 9 C 18.309 9 21 11.691 21 15 C 21 18.309 18.309 21 15 21 C 11.691 21 9 18.309 9 15 C 9 11.691 11.691 9 15 9 z M 15 11 A 4 4 0 0 0 11 15 A 4 4 0 0 0 15 19 A 4 4 0 0 0 19 15 A 4 4 0 0 0 15 11 z"></path>
                  </svg>
                </div>
              </div>
            </div>
          </Fade>
        </div>
        <div className="hidden md:block md:visible invisible">
          <Image src={mypic} className="object-fill h-96 w-96" />
        </div>
      </Fade>
    </div>
  );
}

export default One;

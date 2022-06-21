import React from "react";
import { colors } from "../commons/colors/colors";

export default function FooterComponent() {

  return (
    <div class="mt-5 laptop:grid-cols-3">
      <section class="body-font font-maven text-sm laptop:text-md desktop:text-lg">
        <div class="bg-white px-2 tablet:px-4 py-2.5 text-white " style={styles}>
          <footer class="container mx-auto">
            <div class="grid gap-8 py-8 laptop:grid-cols-3 grid-cols-1 mr-3 ml-3">
              <div>
                <h2 class="text-lg font-semibold uppercase mb-3">
                  contact us:
                </h2>
                <div>
                  <ul class="rounded-lg w-90 text-white">
                    <li class="border-b border-gray-200 w-full text-white py-2 inline-flex">
                      <span class="pr-3">
                        <svg
                          class="h-auto w-5 text-white"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="1"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          {" "}
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                        </svg>
                      </span>
                      012 998 919
                    </li>
                    <li class="border-b border-gray-200 w-full text-white py-2 inline-flex">
                      <span class="pr-3">
                        <svg
                          class="h-auto w-5 text-white "
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="1"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          {" "}
                          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />{" "}
                          <polyline points="22,6 12,13 2,6" />
                        </svg>
                      </span>
                      info.kshrd@gmail.com
                    </li>
                    <li class="border-b border-gray-200 w-full text-white py-2 inline-flex">
                      <span class="pr-3">
                        <svg
                          class="h-auto w-5 text-white border rounded"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="1"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          {" "}
                          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                        </svg>
                      </span>
                      @ksignhrd
                    </li>
                    <li class="border-b border-gray-200 w-full text-white py-2 inline-flex">
                      <span class="pr-3">
                        <svg
                          class="h-auto w-5 text-white"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="1"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          {" "}
                          <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />{" "}
                          <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
                        </svg>
                      </span>
                      Korea Software HRD Center
                    </li>
                    <li class="border-b border-gray-200 w-full text-white py-2 inline-flex">
                      <span class="pr-3">
                        <svg
                          class="h-auto w-5 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="1"
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      </span>
                      #12, St 323, Sangkat Boeung Kak II, Khan Toul Kork, Phnom
                      Penh
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <div class="hidden laptop:block ">
                  <iframe
                    class="laptop:w-full laptop:h-96"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d977.1677865254815!2d104.88866774015999!3d11.575416007195466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109519cfe734349%3A0x5174d2178ff95112!2sKorean%20HRD%20Center!5e0!3m2!1sen!2skh!4v1654863405682!5m2!1sen!2skh"
                    style={{borderRadius: "5px"}}
                  ></iframe>
                </div>
              </div>
              <div class="divide-x">
                <h2 class="text-lg font-semibold uppercase mb-4">
                  what our training includes
                </h2>
                <ul class="text-white pl-3">
                  <li class="mb-4">
                    <p>
                      <span class="inline-flex">
                        <svg
                          class="h-auto w-4 text-white"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          stroke-width="2"
                          stroke="currentColor"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          {" "}
                          <path stroke="none" d="M0 0h24v24H0z" />{" "}
                          <polyline points="9 6 15 12 9 18" />
                        </svg>
                      </span>
                      <span class="pl-2">Blockchain</span>
                    </p>
                  </li>
                  <li class="mb-4">
                    <p>
                      <span class="inline-flex">
                        <svg
                          class="h-auto w-4 text-white"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          stroke-width="2"
                          stroke="currentColor"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          {" "}
                          <path stroke="none" d="M0 0h24v24H0z" />{" "}
                          <polyline points="9 6 15 12 9 18" />
                        </svg>
                      </span>
                      <span class="pl-2">DevOps</span>
                    </p>
                  </li>
                  <li class="mb-4">
                    <p>
                      <span class="inline-flex">
                        <svg
                          class="h-auto w-4 text-white"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          stroke-width="2"
                          stroke="currentColor"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          {" "}
                          <path stroke="none" d="M0 0h24v24H0z" />{" "}
                          <polyline points="9 6 15 12 9 18" />
                        </svg>
                      </span>
                      <span class="pl-2">Angular + Spring Framework</span>
                    </p>
                  </li>
                  <li class="mb-4">
                    <p>
                      <span class="inline-flex">
                        <svg
                          class="h-auto w-4 text-white"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          stroke-width="2"
                          stroke="currentColor"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          {" "}
                          <path stroke="none" d="M0 0h24v24H0z" />{" "}
                          <polyline points="9 6 15 12 9 18" />
                        </svg>
                      </span>
                      <span class="pl-2">React Native</span>
                    </p>
                  </li>

                  <li class="mb-4">
                    <p>
                      <span class="inline-flex">
                        <svg
                          class="h-auto w-4 text-white"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          stroke-width="2"
                          stroke="currentColor"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          {" "}
                          <path stroke="none" d="M0 0h24v24H0z" />{" "}
                          <polyline points="9 6 15 12 9 18" />
                        </svg>
                      </span>
                      <span class="pl-2">iOS Mobile Development</span>
                    </p>
                  </li>

                  <li class="mb-4">
                    <p>
                      <span class="inline-flex">
                        <svg
                          class="h-auto w-4 text-white"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          stroke-width="2"
                          stroke="currentColor"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          {" "}
                          <path stroke="none" d="M0 0h24v24H0z" />{" "}
                          <polyline points="9 6 15 12 9 18" />
                        </svg>
                      </span>
                      <span class="pl-2">Spring Framework</span>
                    </p>
                  </li>

                  <li class="mb-4">
                    <p>
                      <span class="inline-flex">
                        <svg
                          class="h-auto w-4 text-white"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          stroke-width="2"
                          stroke="currentColor"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          {" "}
                          <path stroke="none" d="M0 0h24v24H0z" />{" "}
                          <polyline points="9 6 15 12 9 18" />
                        </svg>
                      </span>
                      <span class="pl-2">Database Technology</span>
                    </p>
                  </li>

                  <li class="mb-4">
                    <p>
                      <span class="inline-flex">
                        <svg
                          class="h-auto w-4 text-white"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          stroke-width="2"
                          stroke="currentColor"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          {" "}
                          <path stroke="none" d="M0 0h24v24H0z" />{" "}
                          <polyline points="9 6 15 12 9 18" />
                        </svg>
                      </span>
                      <span class="pl-2">Web Technology</span>
                    </p>
                  </li>

                  <li class="mb-4">
                    <p>
                      <span class="inline-flex">
                        <svg
                          class="h-auto w-4 text-white"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          stroke-width="2"
                          stroke="currentColor"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          {" "}
                          <path stroke="none" d="M0 0h24v24H0z" />{" "}
                          <polyline points="9 6 15 12 9 18" />
                        </svg>
                      </span>
                      <span class="pl-2">Java Basic</span>
                    </p>
                  </li>

                  <li class="mb-4">
                    <p>
                      <span class="inline-flex">
                        <svg
                          class="h-auto w-4 text-white"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          stroke-width="2"
                          stroke="currentColor"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          {" "}
                          <path stroke="none" d="M0 0h24v24H0z" />{" "}
                          <polyline points="9 6 15 12 9 18" />
                        </svg>
                      </span>
                      <span class="pl-2">
                        Android Mobile Application Development
                      </span>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </footer>
        </div>
        <div style={logoBackground}>
          <span class="block text-md text-white text-center p-3">
            2022 © Korean Software HRD Center. All right reserved.
          </span>
        </div>
      </section>
    </div>
  );
}

const styles = {
  backgroundColor: colors.content,
};

const logoBackground = {
  backgroundColor: colors.footer,
};

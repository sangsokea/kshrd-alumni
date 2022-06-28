import React from "react";

export default function ReNavbarComponent({ showSidebar, setShowSidebar }) {
  return (
    <div>
      <div className="tablet:hidden">
        <button
          color="transparent"
          buttonType="link"
          size="lg"
          iconOnly
          rounded
          ripple="light"
          onClick={() => setShowSidebar("left-0")}
        >
          <svg
            class="h-7 w-7 text-white absolute top-[75px] ml-3"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            {" "}
            <line x1="3" y1="12" x2="21" y2="12" />{" "}
            <line x1="3" y1="6" x2="21" y2="6" />{" "}
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
        <div
          className={`absolute top-2 tablet:hidden ${
            showSidebar === "left-0" ? "left-64" : "-left-64"
          }  transition-all duration-300`}
        >
          <button
            color="transparent"
            buttonType="link"
            size="lg"
            iconOnly
            rounded
            ripple="light"
            onClick={() => setShowSidebar("-left-64")}
          >
            <svg
              class="h-10 w-10 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

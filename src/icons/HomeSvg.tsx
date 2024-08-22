interface Props {
  activePage?: string;
  width?: boolean;
}

export default function HomeSvg({ activePage, width }: Props) {
  return (
    <svg
      width={`${width ? "16px" : "32px"}`}
      height={`${width ? "16px" : "32px"}`}
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      color={`${activePage === "" ? "#aa0000" : "#ffffff"}`}
    >
      <path
        d="M2 8L11.7317 3.13416C11.9006 3.04971 12.0994 3.0497 12.2683 3.13416L22 8"
        stroke={`${activePage === "" ? "#aa0000" : "#ffffff"}`}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M20 11V19C20 20.1046 19.1046 21 18 21H6C4.89543 21 4 20.1046 4 19V11"
        stroke={`${activePage === "" ? "#aa0000" : "#ffffff"}`}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
}

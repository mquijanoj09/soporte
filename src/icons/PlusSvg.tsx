interface Props {
  color: string;
}

export default function PlusSvg({ color }: Props) {
  return (
    <svg
      width="20px"
      height="20px"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      color={color}
    >
      <path
        d="M6 12H12M18 12H12M12 12V6M12 12V18"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
}

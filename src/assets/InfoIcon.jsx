export default function InfoIcon({ className, onClick }) {
  return (
    <svg
      viewBox="0 0 330 330"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      onClick={onClick}
      style={{ cursor: "pointer" }}
    >
      <g>
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="
            M165,0
            A165,165 0 1,0 165.001,0
            Z
            M165,30
            A135,135 0 1,1 165,300
            A135,135 0 1,1 165,30
            Z
          "
        />
        <circle cx="165" cy="90" r="16" fill="currentColor" />
        <rect x="147.5" y="135" width="35" height="120" fill="currentColor" />
      </g>
    </svg>
  );
}

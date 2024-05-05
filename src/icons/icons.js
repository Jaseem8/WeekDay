const CancelSVGIcon1 = ({ onMouseDown, className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="24"
    viewBox="0 0 24 24"
    fill="#003366"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    onMouseDown={onMouseDown}
    className={className} // Add className prop
  >
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const CancelSVGIcon2 = ({ onMouseDown, className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="24"
    viewBox="0 0 24 24"
    fill="#003366"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    onMouseDown={onMouseDown}
    className={className} // Add className prop
  >
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

export { CancelSVGIcon1, CancelSVGIcon2 };

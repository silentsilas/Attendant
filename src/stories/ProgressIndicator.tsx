import React from "react";

interface ProgressIndicatorProps {
  current: 1 | 2 | 3;
  size?: string;
}

const ProgressIndicator = ({
  current,
  size = "148",
}: ProgressIndicatorProps) => {
  const color = "#6B6B6B";

  const cx1 = 12;
  const cx2 = 72;
  const cx3 = 132;

  const currentCircleCX = current === 1 ? cx1 : current === 2 ? cx2 : cx3;

  return (
    <div>
      <svg width={size} viewBox="0 0 144 24">
        <line x1="6" y1="12" x2="144" y2="12" stroke={color} strokeWidth="2" />
        <circle r="12" cx={cx1} cy="12" fill={color} />
        <circle r="12" cx={cx2} cy="12" fill={color} />
        <circle r="12" cx={cx3} cy="12" fill={color} />
        <circle r="7" cx={currentCircleCX} cy="12" fill="white" />
      </svg>
    </div>
  );
};

export default ProgressIndicator;

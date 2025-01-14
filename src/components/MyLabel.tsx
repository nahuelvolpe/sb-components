import "./MyLabel.css";
import { AllCaps } from "../stories/MyLabel.stories";

interface IMyLabelProps {
  /**
   * Text to display
   */
  label: string;

  /**
   * Label size
   */
  size?: "normal" | "h1" | "h2" | "h3";

  /**
   * Capitalize all letters
   */
  allCaps?: boolean;

  /**
   * Label color
   */
  color?: "text-primary" | "text-secondary" | "text-tertiary";

  /**
   * Font color
   */
  fontColor?: string;
}

/**
 * !Todas son opcionales
 *
 * allCaps: boolean
 * color: text-primary | text-secondary | text-tertiary
 * fontColor: string, texto del span
 *
 */

export const MyLabel = ({
  label,
  size = "normal",
  allCaps = false,
  color,
  fontColor,
}: IMyLabelProps) => {
  return (
    <span className={`${size} ${color} label`} style={{ color: fontColor }}>
      {allCaps ? label.toUpperCase() : label}
    </span>
  );
};

import IconSVGMenu from './IconSVGMenu';
import IconSVGCross from './IconSVGCross';
import IconSVGOption from './IconSVGOption';
import IconSVGStep from './IconSVGStep';

export interface IconProps {
  width?: number;
  height?: number;
  color?: string;
  bgColor?: string;
}

const IconSVG = (): null => null;

IconSVG.Menu = IconSVGMenu;
IconSVG.Cross = IconSVGCross;
IconSVG.Option = IconSVGOption;
IconSVG.Step = IconSVGStep;

export default IconSVG;

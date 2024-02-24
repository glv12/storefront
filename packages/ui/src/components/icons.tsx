import {
  ArrowRight,
  ArrowRightCircle,
  ArrowLeft,
  ArrowLeftCircle,
  AlertTriangle,
  AlertCircle,
  type LucideIcon,
} from "lucide-react"
import { IconType } from "react-icons";

import {BiLogoShopify, BiSolidDashboard} from 'react-icons/bi'
import {AiOutlineSearch, AiOutlinePlus} from 'react-icons/ai'
import {FiSettings, FiBox, FiClock, FiChevronDown} from 'react-icons/fi'


export type Icon = LucideIcon | IconType

export const Icons = {
  arrowRight: ArrowRight,
  arrowLeft: ArrowLeft,
  arrowRightCircle: ArrowRightCircle,
  arrowLeftCircle: ArrowLeftCircle,
  shop: BiLogoShopify,
  search: AiOutlineSearch,
  settings: FiSettings,
  dashboard: BiSolidDashboard,
  clock: FiClock,
  box: FiBox,
  chrevronDown: FiChevronDown,
  warning: AlertTriangle,
  alertCircle: AlertCircle,
  plus: AiOutlinePlus

}
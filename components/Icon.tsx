import {
  LineChart,
  Globe2,
  Briefcase,
  GraduationCap,
  ShieldCheck,
  Wallet,
  Coins,
  Flame,
  Wheat,
  CandlestickChart,
  Zap,
  Eye,
  Users,
  BarChart3,
  Lock,
  type LucideProps,
} from "lucide-react";

const map = {
  LineChart,
  Globe2,
  Briefcase,
  GraduationCap,
  ShieldCheck,
  Wallet,
  Coins,
  Flame,
  Wheat,
  CandlestickChart,
  Zap,
  Eye,
  Users,
  BarChart3,
  Lock,
};

export type IconName = keyof typeof map;

export default function Icon({
  name,
  ...props
}: { name: string } & LucideProps) {
  const Cmp = map[name as IconName] ?? LineChart;
  return <Cmp {...props} />;
}

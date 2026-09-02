import { NoShowCalculator } from "@/components/calculator/NoShowCalculator";

export const metadata = {
  title: "No-Show Recovery Calculator · Credify",
  description:
    "Model the revenue your practice can recover by reducing no-shows. Simple pricing: we charge 20% of the revenue we help you recover — you keep the other 80%.",
  robots: { index: false, follow: false },
};

export default function NoShowCalculatorPage() {
  return <NoShowCalculator />;
}

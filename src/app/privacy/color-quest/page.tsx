import type { Metadata } from "next";
import ColorQuestPrivacyPolicy, {
  metadata as policyMetadata,
} from "@/components/privacyPolicy/ColorQuestPrivacyPolicy";

// The policy's title/description live next to its content; this route applies them
// and gives the page its own canonical URL and link preview.
export const metadata: Metadata = {
  ...policyMetadata,
  alternates: { canonical: "/privacy/color-quest" },
  openGraph: {
    title: policyMetadata.title,
    description: policyMetadata.description,
    url: "/privacy/color-quest",
  },
};

export default function ColorQuestPrivacyPolicyPage() {
  return <ColorQuestPrivacyPolicy />;
}

import { HomePageBannerSection } from "@/components/features/home/homepage-banner-section";
import { CardDataSection } from "@/components/features/home/card-data-section";
import { ProfileSection } from "@/components/features/home/profile-section";

export default function HomePage() {
  return (
    <>
      <HomePageBannerSection />
      <CardDataSection />
      <ProfileSection />
    </>
  )
}
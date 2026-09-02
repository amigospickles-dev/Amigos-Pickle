import * as React from "react";

const FARM_BANNER_IMAGE =
  "https://foodonfarmpickles.com/cdn/shop/files/farm_desktop.png?v=1774526337&width=1400";

export interface FarmPickleBannerProps {
  className?: string;
}

export const FarmPickleBanner = ({ className = "" }: FarmPickleBannerProps) => {
  return (
    <img
      src={FARM_BANNER_IMAGE}
      alt="Food on Farm Pickles"
      width={3044}
      height={443}
      loading="eager"
      fetchPriority="high"
      decoding="async"
      className={`farm-pickle-banner ${className}`.trim()}
    />
  );
};

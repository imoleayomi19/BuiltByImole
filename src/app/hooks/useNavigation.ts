"use client";

import { useCallback } from "react";

export function useNavigation() {
  const navigateToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, []);

  const handleHomeClick = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const handleAboutClick = useCallback(() => {
    navigateToSection("content-block-1");
  }, [navigateToSection]);

  const handleSkillsClick = useCallback(() => {
    navigateToSection("content-block-2");
  }, [navigateToSection]);

  const handlePortfolioClick = useCallback(() => {
    navigateToSection("content-block-3");
  }, [navigateToSection]);

  return {
    navigateToSection,
    handleHomeClick,
    handleAboutClick,
    handleSkillsClick,
    handlePortfolioClick,
  };
}
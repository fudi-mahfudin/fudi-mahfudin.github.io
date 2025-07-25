"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { MoonStar, Sun, SunMoon } from "lucide-react";
import IconButton from "./icon-button";

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  // until the UI is mounted, display a dummy icon
  if (!mounted) {
    return (
      <IconButton>
        <SunMoon />
      </IconButton>
    );
  }

  return (
    <IconButton onClick={toggleTheme}>
      {theme === "dark" ? <Sun /> : <MoonStar />}
    </IconButton>
  );
};

export default ThemeSwitcher;

// Ref :: https://www.npmjs.com/package/next-themes#avoid-hydration-mismatch

import React, { useEffect, useState } from "react";
import { Button } from "antd";

function getStoredLanguage() {
  if (typeof window === "undefined") return "en";
  return window.localStorage.getItem("language") || "en";
}

const text = {
  en: {
    more: "Show more",
    less: "Show less",
  },
  zh: {
    more: "查看更多",
    less: "收起",
  },
};

export default function ShowMoreButton() {
  const [expanded, setExpanded] = useState(false);
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    const syncLanguage = (event) => setLanguage(event.detail?.lang || getStoredLanguage());
    const timelineList = document.querySelector("[data-timeline-list]");

    setLanguage(getStoredLanguage());
    document.addEventListener("site-language-change", syncLanguage);

    return () => {
      document.removeEventListener("site-language-change", syncLanguage);
      timelineList?.classList.remove("expanded");
    };
  }, []);

  const toggle = () => {
    const nextExpanded = !expanded;
    document.querySelector("[data-timeline-list]")?.classList.toggle("expanded", nextExpanded);
    setExpanded(nextExpanded);
  };

  return (
    <Button className="show-more" type="primary" size="large" onClick={toggle} data-show-more>
      {text[language]?.[expanded ? "less" : "more"] || text.en[expanded ? "less" : "more"]}
    </Button>
  );
}

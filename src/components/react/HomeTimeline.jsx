import React, { useEffect, useState } from "react";
import { Timeline } from "antd";

function getStoredLanguage() {
  if (typeof window === "undefined") return "en";
  return window.localStorage.getItem("language") || "en";
}

function formatDate(date, language) {
  const [year, month, day] = date.split("-").map(Number);
  return new Intl.DateTimeFormat(language === "zh" ? "zh-CN" : "en", {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(new Date(year, month - 1, day));
}

export default function HomeTimeline({ items = [] }) {
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    const syncLanguage = (event) => setLanguage(event.detail?.lang || getStoredLanguage());

    setLanguage(getStoredLanguage());
    document.addEventListener("site-language-change", syncLanguage);
    document.dispatchEvent(new CustomEvent("site-set-language", { detail: { lang: getStoredLanguage() } }));

    return () => document.removeEventListener("site-language-change", syncLanguage);
  }, []);

  const timelineItems = items.map((item) => ({
    className: `timeline-item${item.visible ? "" : " is-hidden"}`,
    label: <time dateTime={item.date}>{formatDate(item.date, language)}</time>,
    children: (
      <article data-search-text={`${item.title} ${item.description} ${item.meta} ${item.date}`}>
        <p className="timeline-meta">
          <time dateTime={item.date}>{formatDate(item.date, language)}</time>
          <span aria-hidden="true"> / </span>
          <span>{item.category}</span>
        </p>
        <a className="post-title" href={item.href} data-i18n={item.titleKey}>{item.title}</a>
        <p data-i18n={item.descriptionKey}>{item.description}</p>
      </article>
    ),
  }));

  return <Timeline className="timeline-list antd-home-timeline" mode="left" data-timeline-list items={timelineItems} />;
}

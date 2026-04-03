import React from "react";
import Giscus from "@giscus/react";

// Setup (one-time):
// 1. Enable Discussions on your repo: GitHub → Settings → Features → Discussions ✓
// 2. Install Giscus app: https://github.com/apps/giscus
// 3. Visit https://giscus.app → enter "giriraj1310/buildwithgiri" → copy the categoryId
// 4. Replace PASTE_CATEGORY_ID_HERE below with the value from giscus.app

const CATEGORY_ID = "PASTE_CATEGORY_ID_HERE";

export default function GiscusComments() {
  if (CATEGORY_ID === "PASTE_CATEGORY_ID_HERE") {
    return (
      <div className="mt-12 pt-8 border-t border-gray-200">
        <p className="text-sm text-gray-400 text-center">
          Comments coming soon — powered by{" "}
          <a
            href="https://giscus.app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Giscus
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <div className="mt-12 pt-8 border-t border-gray-200">
      <h3 className="text-lg font-semibold text-gray-800 mb-6">Comments</h3>
      <Giscus
        repo="giriraj1310/buildwithgiri"
        repoId="R_kgDOOcrIIg"
        category="General"
        categoryId={CATEGORY_ID}
        mapping="pathname"
        strict="0"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="top"
        theme="light"
        lang="en"
        loading="lazy"
      />
    </div>
  );
}

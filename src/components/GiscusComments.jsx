import React from "react";
import Giscus from "@giscus/react";

const CATEGORY_ID = "DIC_kwDOOcrIIs4C57Lg";

export default function GiscusComments() {
  return (
    <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
      <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-6">Comments</h3>
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
        theme="dark"
        lang="en"
        loading="lazy"
      />
    </div>
  );
}

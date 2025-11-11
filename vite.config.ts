/** WARNING: DON'T EDIT THIS FILE */
/** WARNING: DON'T EDIT THIS FILE */
/** WARNING: DON'T EDIT THIS FILE */

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

function getPlugins() {
  const plugins = [react(), tsconfigPaths()];
  return plugins;
}

export default defineConfig({
  // Set base to the repo name so built assets will be served from
  // /HarrisonPage/ (e.g. /HarrisonPage/assets/index-xxxxx.js)
  base: "/HarrisonPage/",
  plugins: getPlugins(),
});

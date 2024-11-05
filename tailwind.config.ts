import { type Config } from "tailwindcss";
import typography from "https://esm.sh/@tailwindcss/typography";
import forms from "https://esm.sh/@tailwindcss/forms";

export default {
  content: [
    "{routes,islands,components,stories}/**/*.{ts,tsx,js,jsx}",
    "components/{atoms,molecules,organisms,layouts,pages}/**/*.{ts,tsx}",
    "stories/{atoms,molecules,organisms,layouts,pages}/**/*.{ts,tsx}",
  ],
  plugins: [typography, forms],
} satisfies Config;

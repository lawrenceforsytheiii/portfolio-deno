import { type Config } from "tailwindcss";
import typography from "https://esm.sh/@tailwindcss/typography";
import forms from "https://esm.sh/@tailwindcss/forms";

export default {
  content: [
    "{routes,islands,components}/**/*.{ts,tsx,js,jsx}",
    "stories/{atoms,molecules,organisms,layouts,pages}/**/*.{ts,tsx}",
  ],
  plugins: [typography, forms],
} satisfies Config;
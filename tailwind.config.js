module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"], // الأماكن التي يتم تحليل الكود فيها
  theme: {
    extend: {},
  },
  safelist: [
    {
      pattern: /bg-(white|black|red|blue|green|yellow|gray)/, // جميع ألوان الخلفيات المحتملة
    },
    {
      pattern: /text-(white|black|red|blue|green|yellow|gray)/, // جميع ألوان النصوص المحتملة
    },
    {
      pattern: /flex-(row|col|row-reverse|col-reverse)/, // أنماط الفلكس
    },
  ],
};

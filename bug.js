```javascript
// ... your Tailwind CSS configuration ...

module.exports = {
  // ... other config ...
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'], // <-- Missing paths
  theme: {
    extend: {},
  },
  plugins: [],
};
```
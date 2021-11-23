module.exports = {
  reactStrictMode: true,
  webpack: function (config) {
    const originalEntry = config.entry;

    config.entry = async () => {
      const entries = await originalEntry();

      if (
        entries["main.js"] &&
        !entries["main.js"].includes("./polyfills.js")
      ) {
        entries["main.js"].unshift("./polyfills.js");
      }
      return entries;
    };
    return config;
  },
}

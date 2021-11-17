export function getIcons() {
  const icons = [];
  const importAll = (r) => {
    r.keys().forEach((key) => {
      return icons.push(`${key.slice(2)}`);
    });
  };

  importAll(require.context("../assets/images", false, /\.webp$/));
  return icons;
}

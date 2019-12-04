export default function sortByHealth(options) {
  const result = options.sort((a, b) => {
    if (a.health > b.health) {
      return 1;
    }

    return -1;
  });

  return result.reverse();
}

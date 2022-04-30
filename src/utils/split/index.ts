export const split =
  (chunks: number) =>
  <T>(collection: T[]): T[][] => {
    if (chunks < 0) throw new Error("Chunks should be positive number.");
    if (chunks === 0) return [];

    const elementsCount = Math.ceil(collection.length / chunks);

    const head = collection.slice(0, elementsCount);
    const tail = collection.slice(elementsCount);

    return [head, ...split(chunks - 1)(tail)];
  };

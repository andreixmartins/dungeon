
import { calculateMinimumHP } from "../src/calculateMinimumHP";

describe("dungeon game", () => {
  it("invalid test", () => {
    expect(() => calculateMinimumHP([])).toThrow();
  });
  it("handling zeros", () => {
    const dungeon = Array(10)
      .fill(0)
      .map(() => Array(10).fill(0));
    expect(calculateMinimumHP(dungeon)).toBe(1);
  });
  it("should return 7", () => {
    const dungeon = [
      [-2, -3, 3],
      [-5, -10, 1],
      [10, 30, -5]
    ];
    expect(calculateMinimumHP(dungeon)).toBe(7);
  });

  it("should return 1", () => {
    const dungeon = [
      [5, 10],
      [2, 1]
    ];
    expect(calculateMinimumHP(dungeon)).toBe(1);
  });

  it("should handle negatives", () => {
    const dungeon = [[-5]];
    expect(calculateMinimumHP(dungeon)).toBe(6);
  });

  it("should return 1", () => {
    const dungeon = [[10]];
    expect(calculateMinimumHP(dungeon)).toBe(1);
  });

  it("mix values test", () => {
    const dungeon = [
      [1, -2, 3],
      [2, -2, -2]
    ];
    expect(calculateMinimumHP(dungeon)).toBe(2);
  });
  it("returns correct HP for negatives", () => {
    const dungeon = [
      [0, -3],
      [-10, 0]
    ];
    expect(calculateMinimumHP(dungeon)).toBe(4);
  });
  it("handling same path", () => {
    const dungeon = [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0]
    ];
    expect(calculateMinimumHP(dungeon)).toBe(1);
  });
});



// Calculate the minimum health needed to reach the princess
export function calculateMinimumHP(dungeon: number[][]): number {

  const number_rows = dungeon.length; // Number of rows
  const number_columns = dungeon[0].length; // Number of columns

  // Minimum health for each spot
  const dp: number[][] = Array.from({ length: number_rows }, () => Array(number_columns).fill(0));

  // Initialize the bottom-right cell
  dp[number_rows - 1][number_columns - 1] = Math.max(1, 1 - dungeon[number_rows - 1][number_columns - 1]);

  // Fill the last row
  for (let j = number_columns - 2; j >= 0; j--) {
    dp[number_rows - 1][j] = Math.max(1, dp[number_rows - 1][j + 1] - dungeon[number_rows - 1][j]);
  }

  // Fill the last column
  for (let i = number_rows - 2; i >= 0; i--) {
    dp[i][number_columns - 1] = Math.max(1, dp[i + 1][number_columns - 1] - dungeon[i][number_columns - 1]);
  }

  // To survive, we need enough health at each cell to handle its value and still move forward
  for (let i = number_rows - 2; i >= 0; i--) {
    for (let j = number_columns - 2; j >= 0; j--) {
      // picks the less costly path right or down
      // ensures health never drops below 1
      const minHealthNeeded = Math.min(dp[i + 1][j], dp[i][j + 1]);
      dp[i][j] = Math.max(1, minHealthNeeded - dungeon[i][j]);
    }
  }

  // Return the minimum health
  return dp[0][0];
}

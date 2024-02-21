const NUMBER_OF_ROWS = 3;
const ROW_WIDTH = 400;
const COLUMN_HEIGHT = 150;

export function getPosition(noteCount) {
  const rowPosition = (noteCount % NUMBER_OF_ROWS) + 1;
  const columnPosition = Math.ceil((noteCount + 1) / NUMBER_OF_ROWS);

  const x = rowPosition * ROW_WIDTH - (ROW_WIDTH * 2);
  const y = columnPosition * COLUMN_HEIGHT - COLUMN_HEIGHT;

  return { x, y };
}

export function getContainerHeight(noteCount) {
  const columnCount = Math.ceil((noteCount) / NUMBER_OF_ROWS);

  return columnCount * COLUMN_HEIGHT;
}

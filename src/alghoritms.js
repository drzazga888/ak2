export function nextStep(rows, cols, bars) {
    let targetRow = Math.floor(Math.random() * rows);
    let targetCol = Math.floor(Math.random() * cols);
    const neighbours = [
        { row: targetRow, col: (targetCol + cols - 1) % cols },
        { row: targetRow, col: (targetCol + 1) % cols },
        { row: (targetRow + 1) % rows, col: targetCol },
        { row: (targetRow + rows - 1) % rows, col: targetCol }
    ];
    const withHeights = neighbours.map(({ row, col }) => ({ row, col, height: bars[row][col] }));
    const localMinimum = withHeights.reduce((min, place) => (min === null || place.height < min) ? place.height : min, null);
    const localMinimumPlaces = withHeights.filter(place => place.height === localMinimum);
    const localMinimumPlace = localMinimumPlaces[Math.floor(Math.random() * localMinimumPlaces.length)];
    if (localMinimumPlace.height < bars[targetRow][targetCol]) {
        targetCol = localMinimumPlace.col;
        targetRow = localMinimumPlace.row;
    }
    return bars.map((row, rowNr) => row.map((field, colNr) => field + (targetCol === colNr && targetRow === rowNr)));
}

export function getRoughness(rows, cols, bars) {
    const all = rows * cols;
    const sumAll = bars.reduce((sum, row) => sum + row.reduce((sumRow, bar) => sumRow + bar, 0), 0);
    const avg = sumAll / all;
    const sumDiff = bars.reduce((sum, row) => sum + row.reduce((sumRow, bar) => sumRow + Math.pow(bar - avg, 2), 0), 0);
    return Math.sqrt(sumDiff / (all * (all - 1)));
}

export const initBars = (rows, cols) => new Array(rows).fill(null).map(() => new Array(cols).fill(0));

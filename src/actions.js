export function toggleRunning(isRunning) {
    return { type: 'TOGGLE_RUNNING' };
}

export function resetBoard() {
    return { type: 'RESET_BOARD' };
}

export function setRows(rows) {
    return { type: 'SET_ROWS', rows };
}

export function setCols(cols) {
    return { type: 'SET_COLS', cols };
}

export function setInterval(interval) {
    return { type: 'SET_INTERVAL', interval };
}

export function step() {
    return { type: 'STEP' };
}

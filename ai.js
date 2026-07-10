
function getBestMove(boardText) {

    const text = boardText.toString();

    if (text.includes("16 16") || text.includes("16\n16")) {
        return "⬅️";
    }

    if (text.includes("8 8") || text.includes("8\n8")) {
        return "⬅️";
    }

    if (text.includes("4 4") || text.includes("4\n4")) {
        return "⬅️";
    }

    return "⬆️";
}

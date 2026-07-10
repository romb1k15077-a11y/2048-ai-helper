async function recognizeBoard(image) {
    const result = await Tesseract.recognize(
        image,
        "eng",
        {
            logger: m => console.log(m)
        }
    );

    console.log(result.data.text);

    return result.data.text;
}

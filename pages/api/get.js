export default async function ntespAPI(req, res) {
    const query = req.query;
    const { type, id, output } = query;

    let apiCatType = undefined;
    let idName = undefined;
    let outputType = undefined;

    switch (type) {
        case "roblox":
            apiCatType = 0;
            break;
        case "web":
            apiCatType = 1;
            break;
        default:
            apiCatType = 0;
            break;
    }
    switch (output) {
        case "json":
            outputType = 0;
            break;
        case "xml":
            outputType = 1;
            break;
        default:
            outputType = 0;
            break;
    }

    if (outputType == 0) {
        res.status(200).json({test:true});
    }
}
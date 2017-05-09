namespace Bienenschwarm_Classes {

    setRandomFlower(): void {
        let flowerField: number = Math.floor((Math.random() * 3) + 0);
        let _x: number = Math.floor(Math.random() * (700 - 300)) + 300;
        let _y: number = Math.floor(Math.random() * (600 - 550)) + 550;

        switch(flowerField) {
                case 0:
        drawBlumeTulpe(_x, _y - 35, "#006400", "red");
        break;
        case 1:
        drawBlumeBlue(_x, _y - 35, "blue", "white", "#006400");
        break;
        case 2:
        drawBlume3(_x, _y - 35, "#DF7CF3", "#722F80", "#006400");
        break;
        default:
                    break;
    };
}

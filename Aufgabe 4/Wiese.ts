namespace Wiese {
    window.addEventListener("load", init);
    let crc2: CanvasRenderingContext2D;

    function init(_event: Event): void {
        let canvas: HTMLCanvasElement;
        canvas = document.getElementsByTagName("canvas")[0];
        console.log(canvas);

        crc2 = canvas.getContext("2d");
        console.log(crc2);

        crc2.fillStyle = "#0000ff";
        crc2.fillRect(0, 0, canvas.width, canvas.height);

        crc2.moveTo(0, 0);
        crc2.lineTo(canvas.width, canvas.height);
        crc2.stroke();

        drawTriangle(200, 150, "#00ff00", "#ff0000");
    }

    function drawTriangle(_x: number, _y: number, _strokeColor: string, _fillColor: string): void {
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.strokeStyle = _strokeColor;
        crc2.moveTo(_x - 10, _y + 10);
        crc2.lineTo(_x, _y - 10);
        crc2.lineTo(_x + 10, _y + 10);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
        //draw a triangle around the coordinates (_x, _y);
    }
}
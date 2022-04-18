
export default class PixelMediaCanvas{
    private _canvas: HTMLCanvasElement;
    private _image: HTMLImageElement|null = null;
    private _pixelsArray: Array<number>|null = null;
    private _width: number;
    private _height: number;

    constructor(canvas: HTMLCanvasElement,width: number, height: number) {
        this._canvas = canvas;
        this._width = width;
        this._height = height;
    }

    set canvas(value: HTMLCanvasElement) {
        this._canvas = value;
    }

    get pixelsArray(): Array<number> | null {
        return this._pixelsArray;
    }

    get width(): number {
        return this._width;
    }

    set width(value: number) {
        this._width = value;
    }

    get height(): number {
        return this._height;
    }

    set height(value: number) {
        this._height = value;
    }

    private getContext(): CanvasRenderingContext2D{
        return this.canvas.getContext('2d') as CanvasRenderingContext2D;
    }

    public loadImageFromFile(file: File)
    {
        this._image = new Image;
        this._image.onload = () => {
            if(this._image !== null)
            {
                this.getContext().drawImage(this._image, this.width,this.height);
                URL.revokeObjectURL(this._image.src)
            }
        }
        this._image.src = URL.createObjectURL(file);
    }
}
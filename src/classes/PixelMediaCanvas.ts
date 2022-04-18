/// <reference types="webrtc" />
import {RGBALiteral} from "@/index";

export default class PixelMediaCanvas {
    private _canvas: HTMLCanvasElement;
    private _image: HTMLImageElement | null = null;
    private _pixelsArray: Array<RGBALiteral> | null = null;
    private _width: number;
    private _height: number;

    private _video: HTMLVideoElement | null = null;

    constructor(canvas: HTMLCanvasElement, width: number, height: number) {
        this._canvas = canvas;
        this._width = width;
        this._height = height;
    }

    get pixelsArray(): Array<RGBALiteral> | null {
        if (this._pixelsArray === null && this._image !== null)
            this._pixelsArray = this.calculatePixelsArray();

        return this._pixelsArray;
    }

    get width(): number {
        return this._width;
    }

    set width(value: number) {
        this._canvas.width = value;
        this._width = value;
    }

    get height(): number {
        return this._height;
    }

    set height(value: number) {
        this._canvas.height = value;
        this._height = value;
    }

    private getContext(): CanvasRenderingContext2D {
        return this._canvas.getContext('2d') as CanvasRenderingContext2D;
    }

    public calculatePixelsArray() {
        const context = this.getContext();
        let pixelArray: Array<RGBALiteral> = [];
        console.log();
        for (let y = 0; y < this.height; y++) {
            for (let x = 0; x < this.width; x++) {
                const data = context.getImageData(x, y, 1, 1).data;
                pixelArray.push({
                    r: data[0],
                    g: data[1],
                    b: data[2],
                    a: data[3],
                })
            }
        }

        return pixelArray;
    }

    public loadImageFromFile(file: File) {
        return new Promise<boolean>((resolve) => {
            this._image = new Image;
            this._pixelsArray = null;
            this._image.onload = () => {
                if (this._image !== null) {
                    this.getContext().drawImage(this._image, 0, 0, this.width, this.height);
                    URL.revokeObjectURL(this._image.src)
                }
                resolve(true);
            }
            this._image.src = URL.createObjectURL(file);
        })
    }

    public startWebcam(initCallback: (video: HTMLVideoElement) => void, loopCallback: (instance: this) => void) {
        const context = this.getContext();
        const video = document.createElement("video");
        this._video = video;

        let raf: number;

        const loop = () => {
            context.drawImage(video, 0, 0, this.width, this.height);
            loopCallback(this);
            raf = requestAnimationFrame(loop);
        }

        navigator.mediaDevices.getUserMedia({audio: false, video: true})
            .then((stream) => {
                video.srcObject = stream;
                video.onplaying = () => {
                    initCallback(video);
                    raf = requestAnimationFrame(loop);
                };
                video.onpause = function () {
                    cancelAnimationFrame(raf);
                }

                video.play();
            }, (error) => console.log("Video capture error: ", error));
    }

    public stopWebcam() {
        if (this._video !== null) {
            this._video.pause();
            this._video = null;
        }
    }
}
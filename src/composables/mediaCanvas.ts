import PixelMediaCanvas from "@/classes/PixelMediaCanvas";
import {useControlsStore} from "@/stores/controls";

let mediaCanvas: PixelMediaCanvas;
export function useMediaCanvas()
{
    const controlStore = useControlsStore();

    if(typeof mediaCanvas === 'undefined')
        mediaCanvas = new PixelMediaCanvas(document.createElement("CANVAS") as HTMLCanvasElement,controlStore.width,controlStore.height);

    return {mediaCanvas}
}
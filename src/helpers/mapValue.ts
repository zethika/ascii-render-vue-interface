/**
 * Helper function to map a value bounded between 2 values, to its relative value bounded by 2 other values.
 * Ie.
 * mapValue(20, 0, 100, 0, 1000) === 200 (20% of the way between 0 and 1000)
 * mapValue(20, 0, 100, 500, 1000) === 600 (20% of the way between 500 and 1000)
 *
 * @param value
 * @param fromMin
 * @param fromMax
 * @param toMin
 * @param toMax
 */
export default function (value: number, fromMin: number, fromMax: number, toMin: number, toMax: number)
{
    const fromDiff = fromMax - fromMin;
    const toDiff = toMax - toMin;

    const valueDiff = value - fromMin;

    return toMin+(valueDiff/fromDiff)*toDiff
}
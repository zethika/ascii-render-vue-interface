/**
 *
 * @param id the string representing the delimit request
 * @param callback the callback function to call, accepts no parameters
 * @param delimit the time the timeout should wait between attempts, in milliseconds
 */
const counts: Record<string, number> = {};
export default function (id: string, callback: () => void, delimit: number){
    if(typeof counts[id] === 'undefined')
        counts[id] = 0;

    const localCount = counts[id] + 1;
    counts[id]++;
    setTimeout(() => {
        if(localCount === counts[id])
            callback()
    }, delimit)
}
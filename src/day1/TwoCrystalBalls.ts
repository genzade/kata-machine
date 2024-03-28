export default function two_crystal_balls(breaks: boolean[]): number {
    const jumps = Math.floor(Math.sqrt(breaks.length));

    let lo = 0;
    let hi = breaks.length;

    for (let i = 0; i < breaks.length; i += jumps) {
        if (breaks[i] === false) {
            lo = i;
        } else {
            hi = i;

            for (let j = lo + 1; j < hi; j++) {
                if (breaks[j] === true) return j;
            }
        }
    }

    return -1;
}

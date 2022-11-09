export function calcAvgHeight(data: { [name: string]: Person }): number | null {
    // Calculate average height from received data. If no data, return null.
    return 0;
}

interface Person {
    height: number;
    weight: number;
}

let avgHeight = calcAvgHeight({
  Matt: { height: 174, weight: 69 },
  Jason: { height: 190, weight: 103 }
});
console.log(avgHeight);
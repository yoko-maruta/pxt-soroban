//% weight=70 icon="\uf1ec" color=#00bbd7 block="そろばん2"
namespace soroban {
    //% blockId=show_number block="かずを ひょうじ %num"
    export function showNumber(num: number = 0): void {
        let n = num
        for (let y = 1; y < 5; y++) {
            led.unplot(0, y)
        }
        if (n < 0) {
            led.plot(0, 2)
            n *= -1
        }
        for (let x = 4; x > 0; x--) {
            let m = n % 10
            if (m >= 5) {
                led.plot(x, 0)
                m -= 5
            } else {
                led.unplot(x, 0)
            }
            for (let y = 1; y < 5; y++) {
                (m > 0) ? led.plot(x, y) : led.unplot(x, y)
                m--
            }
            n = Math.floor(n / 10)
        }
    }
}
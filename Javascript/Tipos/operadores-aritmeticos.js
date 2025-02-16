const B1 = 3.7;
const B2 = 9.6;
const B3 = 6.9;
const B4 = 6;

let media = (B1 + B2 + B3 + B4) / 4;

if (media >= 7) {
    media += media * 0.1;
}

console.log(`A media e ${media}`);
module.exports = function main(inputs) {
    let parkFee = 0.25 * inputs.parkTime;
    let price = 6;
    if (inputs.distance < 2) {
        price += parkFee;
    }else if(inputs.distance <= 8) {
        price += parkFee + 0.8 * (inputs.distance - 2);
    }else{
        price += parkFee + 4.8 + 0.8 * 1.5 *(inputs.distance - 8);
    }
    return Math.round(price);
};

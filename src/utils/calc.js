export const getGPValue = (item, attribute) => {
    let value = item.gpValue;
    if (attribute.costMultiplier) {
        value = Math.ceil(value * attribute.costMultiplier);
    };
    if (attribute.costModifier) {
        value += attribute.costModifier;
    }

    return value;
}
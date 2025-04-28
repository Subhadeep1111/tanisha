function handleValue(value: string | number | boolean) {
    switch (typeof value) {
        case "string":
            console.log("Value is a string:", value.toUpperCase());
            break;
        case "number":
            console.log("Value is a number:", value.toFixed(2));
            break;
        case "boolean":
            console.log("Value is a boolean:", value);
            break;
        default:
            console.log("Unexpected type");
    }
}
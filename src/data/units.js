
const inputs = [
    {
        name: "meter",
        placeholder: "Enter length in Meters here",
        convertToMeter: "value",
        convertFromMeter: "value"
    },
    {
        name: "kilometer",
        placeholder: "Enter length in Kilometers here",
        convertToMeter: "value *1000",
        convertFromMeter: "value / 1000"
    },
    {
        name: "centi",
        placeholder: "Enter length in Centi here",
        convertToMeter: "value /100",
        convertFromMeter: "value * 100"
    },
    {
        name: "inch",
        placeholder: "Enter length in Inch here",
        convertToMeter: "value / 39.37",
        convertFromMeter: "value * 39.37"
    },
    {
        name: "feet",
        placeholder: "Enter length in Feet here",
        convertToMeter: "value /3.281",
        convertFromMeter: "value * 3.281"
    },
    {
        name: "yards",
        placeholder: "Enter length in Yards here",
        convertToMeter: "value / 1.094",
        convertFromMeter: "value * 1.094"
    },
    {
        name: "mile",
        placeholder: "Enter length in Mile here",
        convertToMeter: "value * 1609",
        convertFromMeter: "value/1609"
    },
]

export default inputs;
import { useCallback, useEffect, useRef } from "react";

/* eslint-disable react/prop-types */
function Input({data , onStandardValue , standardValue}) {
    const ref = useRef()

    function convertToStandard(e) {
      const currentValue = e.target.value ? Number(e.target.value) : 0;
      const standardValueEquation = data.convertToMeter;
      const standardValueAfterReplacement = standardValueEquation.replace("value",currentValue);
      const result = eval(standardValueAfterReplacement);
      onStandardValue(result)
    }

    const convertFromStandard = useCallback(() => {
        const standardValueEquation = data.convertFromMeter;
        const standardValueAfterReplacement = standardValueEquation.replace("value",standardValue);
        const result = eval(standardValueAfterReplacement);

        if(document.activeElement !== ref.current) {
            if(result === 0) {
                ref.current.value = '';
            }
            else{
            ref.current.value = result;
            }
        }

    },[standardValue , data.convertFromMeter])


    useEffect(
        function(){
        convertFromStandard()
    },[convertFromStandard])

    return (
        <>
            <label htmlFor={data.name}>Enter length in {data.name} here</label>
            <input id={data.name} type="number" ref={ref} onChange={(e)=>convertToStandard(e)} placeholder={`Enter length in ${data.name} here`} />
        </>
    )
}

export default Input

import { useEffect, useState } from "react";


const Exam11 = () => {
    const [sum, setSum] = useState<number>(0);

    useEffect(() => {
        setSum(888 + 88 + 8 + 8 + 8)
    },[])
    
  return (
    <>
        <div>
            <h1 className="text-xl font-bold text-red-600">ข้อที่ 11</h1>
            <h1 className="text-lg">Sum = 888 + 88 + 8 + 8 + 8</h1>
            <h2>ผลลัพธ์ = {sum}</h2>
        </div>
    </>
  )
}

export default Exam11
import  { useState } from 'react'

const Exam7 = () => {
    const [remaining, setRemaining] = useState<number>(0) // น้ำที่เหลือแต่ละวัน

    const [input, setInput] = useState<number>(5832)
    const Calculate = (x : number) => {
        let week = 7;
        for(let i = 0; i <= week; i++) {
            setRemaining(x * (1.0 / 3));  // 1.0 / 3 หมายถึง 1 ส่วน 3
        }
    }

    const onClick = (e : any) => {
        e.preventDefault()
        Calculate(input);
    }
  return (
    <>
            <div>
            <h1 className="text-xl font-bold text-red-600">ข้อที่ 7</h1>
            <input type="number" value={input} placeholder='กรุณากรอกจำนวนลิตร' className="input input-bordered w-full max-w-xs" onChange={(e : any) => setInput(e.target.value) }  />
            <button className="btn btn-primary my-2" onClick={onClick}>คลิกเลย</button>
            <h2>ผลลัพธ์</h2>

            <div>
                <p>น้ำที่เหลืออยู่ : {remaining}</p>
            </div>

        </div>
    </>
  )
}

export default Exam7
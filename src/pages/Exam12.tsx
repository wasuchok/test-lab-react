import  { useState } from 'react'

const Exam12 = () => {
    const [dice1, setDice1] = useState<number>(0)
    const [dice2, setDice2] = useState<number>(0)
    const [check, setCheck] = useState<boolean>(false)

    const onSubmit = (e : any) => {
        e.preventDefault();
        setCheck(true);
        setDice1(Math.floor(Math.random() * 6) + 1)
        setDice2(Math.floor(Math.random() * 6) + 1)
    }
  return (
    <>
            <div>
            <h1 className="text-xl font-bold text-red-600">ข้อที่ 12</h1>
            <button className="btn btn-primary my-2" onClick={onSubmit}>กดสุ่มเลย!!</button>
            <h2 className="text-xl font-bold text-blue-700" >ผลลัพธ์</h2>

            <div className="my-5">
                <p className="text-xl font-semibold text-red-500">ลูกเต๋าที่ 1 : {dice1}</p>
                <p className="text-xl font-semibold text-blue-500">ลูกเต๋าที่ 2 : {dice2}</p>
                <p className="text-xl font-semibold text-blue-500">ผลรวม : { (dice1 + dice2 )}</p>
                <p className="text-xl font-semibold text-blue-500">ผลต่าง : { Math.abs(dice1 - dice2 )}</p>

                <p className={`${!check ? "hidden" : "text-xl font-semibold text-red-500"}`}>ผลของแต้ม { (dice1 + dice2) == 10 ? "เป็น" : "ไม่เป็น" } 10</p>
                <p className={`${!check ? "hidden" : "text-xl font-semibold text-red-500"}`}>ผลต่างของแต้ม { Math.abs(dice1 - dice2) == 2 ? "เป็น" : "ไม่เป็น" } 2</p>
            </div>
        </div>
    </>
  )
}

export default Exam12
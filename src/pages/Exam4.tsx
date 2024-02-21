

const Exam4 = () => {
  return (
    <>
            <div>
            <h1 className="text-xl font-bold text-red-600">ข้อที่ 4</h1>
            <h1 className="text-lg">ตัวอย่างการ Query ตาราง Customer แสดง Used ที่มากกว่า 500,000</h1>
            <h2>SELECT * FROM customer WHERE Used {">="} 500000;</h2>
            <h3>ผลลัพธ์ </h3>
            <img src="https://i.postimg.cc/25ZZsphV/4.png" alt="" />
        </div>
    </>
  )
}

export default Exam4
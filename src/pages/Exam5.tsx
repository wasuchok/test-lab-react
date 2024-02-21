

const Exam5 = () => {
  return (
    <>
            <div>
            <h1 className="text-xl font-bold text-red-600">ข้อที่ 5</h1>
            <h1 className="text-lg">ตัวอย่างการ Join</h1>
            <h2 className="text-wrap">SELECT customer.ID AS customer_id, order.ID AS order_id, customer.Name, customer.Email, customer.CountryCode, customer.Budget, customer.Used, order.Date AS order_date, order.Amount AS order_amount FROM `customer` INNER JOIN `order` ON customer.id = order.CustomerID;</h2>
            <h3>ผลลัพธ์ </h3>
            <img src="https://i.postimg.cc/ZRTJjySY/image.png" alt="" />
        </div>
    </>
  )
}

export default Exam5
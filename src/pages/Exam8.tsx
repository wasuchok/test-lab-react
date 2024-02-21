import  { useState } from 'react';

const Exam8 = () => {
  const [inputNumber, setInputNumber] = useState(0);

  const handleInputChange = (event : any) => {
    setInputNumber(event.target.value);
  };

  const generateReverseTriangle = () => {
    let stars = '';
    for (let i = inputNumber; i >= 1; i--) {
      for (let j = 0; j < inputNumber - i; j++) {
        stars += ' ';
      }
      for (let k = 0; k < 2 * i - 1; k++) {
        stars += '*';
      }
      stars += '\n';
    }
    return stars;
  };

  return (
    <>
        <div>
            <h1 className="text-xl font-bold text-red-600">ข้อที่ 8</h1>
            <input type="number" className="input input-bordered w-full max-w-xs" value={inputNumber} onChange={handleInputChange} />
            <h2>ผลลัพธ์</h2>

            <pre>{generateReverseTriangle()}</pre>
        </div>
    

    </>
  );
}

export default Exam8;
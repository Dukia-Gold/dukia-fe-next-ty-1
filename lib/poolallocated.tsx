import React, { useState, useEffect, useRef } from 'react';

const PoolAllocated= () => {
  const [Gram, setGram] = useState<string>('0');
  const [price, setPrice] = useState<string>('0');
  const [goldPricePerGram, setGoldPricePerGram] = useState<number>(0);
  const [timer, setTimer] = useState<number>(30);
  const [isGramToPrice, setIsGramToPrice] = useState<boolean>(true);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const fetchGoldPrice = async () => {
    try {
      const response = await fetch('https://api.dukiapreciousmetals.co/api/products/pool-allocated-1g/withPrice'); // Replace with your API endpoint
      const data = await response.json();
      setGoldPricePerGram(data.ask_price);
      if (isGramToPrice) {
        setPrice(formatNumber((parseFloat(Gram.replace(/,/g, '')) * data.ask_price).toFixed(2), true));
      } else {
        setGram((parseFloat(price.replace(/,/g, '')) / data.ask_price).toFixed(2));
      }
    } catch (error) {
      console.error('Error fetching gold price:', error);
    }
  };

  const handleGramInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (!isNaN(Number(value)) || value === '' || value === '.') {
      setGram(value);
      setPrice(formatNumber((parseFloat(value) * goldPricePerGram).toFixed(2), true));
      if (parseFloat(value) > 0) {
        startTimer();
      } else {
        resetTimer();
      }
    } else {
      setGram('0');
      resetTimer();
    }
  };

  const handlePriceInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/,/g, '');
    if (!isNaN(Number(value)) || value === '' || value === '.') {
      setPrice(formatNumber(value, true));
      setGram((parseFloat(value) / goldPricePerGram).toFixed(2));
      if (parseFloat(value) > 0) {
        startTimer();
      } else {
        resetTimer();
      }
    } else {
      setPrice('0');
      resetTimer();
    }
  };

  const startTimer = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    setTimer(30);
    intervalRef.current = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer === 1) {
          fetchGoldPrice();
          return 30;
        } else {
          return prevTimer - 1;
        }
      });
    }, 1000);
  };

  const resetTimer = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    setTimer(30);
  };

  const toggleMode = () => {
    setIsGramToPrice(!isGramToPrice);
    resetTimer();
  };

  const formatNumber = (value: string | number, isPrice: boolean = false): string => {
    if (isPrice) {
      const parts = value.toString().split('.');
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      return parts.join('.');
    }
    return value.toString();
  };

  useEffect(() => {
    fetchGoldPrice();
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return {  }

//   return (
//     <div className="container mx-auto p-4 max-w-md">
//       <h1 className="text-2xl font-bold mb-4 text-center">Gold Price Calculator</h1>
//       <div className="mb-4 text-center">
//         <button 
//           onClick={toggleMode} 
//           className="px-4 py-2 bg-blue-500 text-white rounded">
//           {isGramToPrice ? 'Switch to Price to Gram' : 'Switch to Gram to Price'}
//         </button>
//       </div>
//       {isGramToPrice ? (
//         <>
//           <label htmlFor="GramInput" className="block text-left mb-2">Enter weight in Gram:</label>
//           <input
//             type="text"
//             id="GramInput"
//             value={Gram}
//             onChange={handleGramInput}
//             className="w-full p-2 mb-4 border border-gray-300 rounded"
//           />
//           <p className="text-left mb-2">Gold price per Gram: <span id="goldPrice" className="font-semibold">{formatNumber(goldPricePerGram.toFixed(2), true)}</span></p>
//           <p className="text-left mb-2">Total value: <span id="totalValue" className="font-semibold">{price}</span></p>
//         </>
//       ) : (
//         <>
//           <label htmlFor="priceInput" className="block text-left mb-2">Enter total price in dollars:</label>
//           <input
//             type="text"
//             id="priceInput"
//             value={price}
//             onChange={handlePriceInput}
//             className="w-full p-2 mb-4 border border-gray-300 rounded"
//           />
//           <p className="text-left mb-2">Gold price per Gram: <span id="goldPrice" className="font-semibold">{formatNumber(goldPricePerGram.toFixed(2), true)}</span></p>
//           <p className="text-left mb-2">Weight in Gram: <span id="totalGram" className="font-semibold">{Gram}</span></p>
//         </>
//       )}
//       <p className="text-left">Time until next update: <span id="timer" className="font-semibold">{timer}</span> seconds</p>
//     </div>
//   );
};

export default PoolAllocated;

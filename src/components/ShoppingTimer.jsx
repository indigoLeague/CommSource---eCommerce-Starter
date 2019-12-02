import React, { useState, useEffect } from 'react';

function ShoppingTimer() {
  const [time, tickTime] = useState(900000);

  const minutes = Math.floor(time / 60000);
  const seconds = ((time % 60000) / 1000).toFixed(0);
  const displayTime = minutes + ":" + (seconds < 10 ? '0' : '') + seconds;

  useEffect(() => {
    let timer = setInterval(() => tick(), 1000);

    return function () {
      clearInterval(timer);
    };
  });

  function tick() {
    tickTime(time - 1000);
  }

  return (
    <div className="shoppingClock">
      <h4>Time left for discount!</h4>
      <p>{(minutes >= 0 || seconds >= 0) ? displayTime : "Oh no!"}</p>
    </div>
  );
}

export default ShoppingTimer;

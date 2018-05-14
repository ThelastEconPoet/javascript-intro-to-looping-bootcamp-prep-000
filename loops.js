function forLoop(array) {
  for (let i = 0; i < 25; i++) {
    if (i === 1) {
      array.push('I am 1 strange loop.')
    } 
    
    else {
      array.push('I am ${i} strange loops.')
    }
  }
  return (array)
}

function whileLoop(n) {
  let countdown = n;
  
  while (countdown > 0) {
    console.log(--countdown)
  }
  
  return ('done')
}

function doWhileLoop(array) {
  function maybeTrue() {
    return Math.random() >= 0.5
  }
  
  do {
<<<<<<< HEAD
    array.pop();
  }
  
  while (array.length > 0 && maybeTrue());
=======
    [array.pop()];
  }
  
  while ([array.length > 0 && maybeTrue()]);
>>>>>>> c8a799df19a8c6692b8d320672fcf6ace999de17
  return (array)
}
document.addEventListener('DOMContentLoaded', function () {
    const balanceElement = document.getElementById('balance');
    const depositButton = document.getElementById('depositBtn');
    const withdrawButton = document.getElementById('withdrawBtn');
    const exitButton = document.getElementById('exitBtn');
  
    let balance = 0;
  
    function updateBalance() {
      balanceElement.textContent = balance;
    }
  
    depositButton.addEventListener('click', function () {
      const depositAmount = parseFloat(prompt('Enter the deposit amount:'));
      if (!isNaN(depositAmount) && depositAmount > 0) {
        balance += depositAmount;
        updateBalance();
      } else {
        alert('Please enter a valid deposit amount.');
      }
    });
  
    withdrawButton.addEventListener('click', function () {
      const withdrawAmount = parseFloat(prompt('Enter the withdrawal amount:'));
      if (!isNaN(withdrawAmount) && withdrawAmount > 0 && withdrawAmount <= balance) {
        balance -= withdrawAmount;
        updateBalance();
      } else {
        alert('Please enter a valid withdrawal amount.');
      }
    });
  
    exitButton.addEventListener('click', function () {
      balance = 0;
      updateBalance();
    });
  });
  
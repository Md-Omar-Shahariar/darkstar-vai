const calculateBtn = document.getElementById('calculation')
const saveBtn = document.getElementById('save-button')
const balanceField = document.getElementById('balance-field')
const expenseField = document.getElementById('expense-field')
//saving field hoibo
const saveField = document.getElementById('saving-field')
const remainField = document.getElementById('remain-field')
let totalIncome

// Get value from Input fields
function getInputValue(boxID) {
  let inputBox = document.getElementById(boxID)
  let inputAmount = parseFloat(inputBox.value)
  if (isNaN(inputAmount) || inputAmount < 0) {
    inputBox.value = ''
    return alert('Please input valid amount of money in number format')
  }
  inputBox.value = ''
  return inputAmount
}

// Calculate Expense & Update Balance
calculateBtn.addEventListener('click', function () {
  //   Code Goes Here......
  const incomeAmount = getInputValue('income-text')
  totalIncome = incomeAmount
  const foodAmount = getInputValue('food-text')
  const rentAmount = getInputValue('rent-text')
  const clothAmount = getInputValue('cloth-text')
  const totalExpense = foodAmount + rentAmount + clothAmount
  expenseField.innerText = totalExpense
  balanceField.innerText = incomeAmount - totalExpense
})

// Save Amount
saveBtn.addEventListener('click', function () {
  //   Code Goes Here......
  //save-text hoibo
  const savingFieldValue = getInputValue('save-text')
  const savingAmount = (totalIncome * savingFieldValue) / 100
  saveField.innerText = savingAmount
  const previousBalance = balanceField.innerText
  remainField.innerText = parseFloat(previousBalance) - savingAmount
})

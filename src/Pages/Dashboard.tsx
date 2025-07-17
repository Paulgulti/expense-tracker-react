import AllTransactions from '@/Components/AllTransactions'
import Header from '@/Components/Header'
import { Button } from '@/Components/ui/button'
import { Input } from '@/Components/ui/input'
import { Popover, PopoverContent, PopoverTrigger } from '@/Components/ui/popover'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

export type TransactionDetail = {
  id: string,
  description: string,
  amount: number | undefined,
  status: string,
  traDate: string
}

const Dashboard = () => {
  const [check, setCheck] = useState<string>("income")
  const [traDate, setTraDate] = useState<string>(() => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  });

  const [transactionInfo, setTransactionInfo] = useState<TransactionDetail[]>(() => {
    const expenseData = localStorage.getItem("transactionDetails")
    return expenseData ? JSON.parse(expenseData) : []
  })

  useEffect(() => {
    localStorage.setItem("transactionDetails", JSON.stringify(transactionInfo))
  }, [transactionInfo])

  const [newTransactionDescription, setNewTransactionDescription] = useState<string>("")
  const [newTransactionAmount, setNewTransactionAmount] = useState<number | undefined>(undefined)


  function addTransaction() {
    if (newTransactionDescription.trim() === '' || traDate === "") {
      return toast.error('Please enter all fields correctly')
    }

    if (!newTransactionAmount) {
      return toast.error('Please enter all fields correctly')
    }

    setTransactionInfo([...transactionInfo, { id: crypto.randomUUID(), traDate: traDate, description: newTransactionDescription, amount: newTransactionAmount, status: check }])

    setNewTransactionDescription("")
    setNewTransactionAmount(0)
    setCheck("income")
    setTraDate("")
    toast.success('Transaction created')
  }

  function removeTransaction(tranId: string) {
    const filteredTrans = transactionInfo.filter(transaction => transaction.id !== tranId);
    setTransactionInfo(filteredTrans);
  }

  return (
    <div>
      <Header />
      <div className='flex flex-col md:flex-row justify-center md:my-10 my-5 gap-4 px-2 md:px-0'>
        <div className='hidden md:block'>
          <AllTransactions transactionInfo={transactionInfo} removeTransaction={removeTransaction} />
        </div>
        <Popover>
          <PopoverTrigger asChild className='w-fit'>
            <Button variant="outline">Create transaction</Button>
          </PopoverTrigger>
          <PopoverContent className='w-80'>
            <div>
              <div className=''>
                <div className=''>
                  <h2>Add New Transaction</h2>
                </div>
                <div className=''>
                  <div>
                    <label htmlFor='transaction-descrip'>Enter Description</label>
                    <Input
                      id='transaction-descrip'
                      type="text"
                      placeholder='Short Description'
                      value={newTransactionDescription}
                      onChange={(e) => setNewTransactionDescription(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor='amount'>Enter Amount</label>
                    <Input
                      id='amount'
                      type='number'
                      placeholder='enter amount'
                      value={newTransactionAmount as number}
                      onChange={(e) => setNewTransactionAmount(parseInt(e.target.value))}
                      required
                    />
                  </div>
                  <div className='flex items-center gap-4'>
                    <div className='flex items-center'>
                      <input
                        type='radio'
                        id="income"
                        name='income-expense'
                        value="income"
                        checked={check === "income"}
                        onChange={(e) => setCheck(e.target.value)}
                      />
                      <label htmlFor="income">Income</label>
                    </div>
                    <div className='flex items-center'>
                      <input
                        type='radio'
                        id="expense"
                        name='income-expense'
                        value="expense"
                        checked={check === "expense"}
                        onChange={(e) => setCheck(e.target.value)}
                      />

                      <label htmlFor="expense">Expense</label>
                    </div>
                  </div>
                  <Input
                    type='date'
                    value={traDate}
                    onChange={(e) => setTraDate(e.target.value)}
                  />
                </div>
                <div className="footer">
                  <Button type="submit" onClick={addTransaction}>Add</Button>
                </div>
              </div>
            </div>
          </PopoverContent>
        </Popover>
        <div className='md:hidden'>
          <AllTransactions transactionInfo={transactionInfo} removeTransaction={removeTransaction} />
        </div>
      </div>
    </div>
  )
}

export default Dashboard

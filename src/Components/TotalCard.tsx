import { priceFormatter } from '@/lib/utils';
import type { TransactionDetail } from '@/Pages/Dashboard'

const TotalCard = ({transactionInfo}: {transactionInfo: TransactionDetail[]}) => {
    const incomeTotal = transactionInfo
        .filter(transaction => transaction.status === 'income')
        .reduce(( acc, transaction ) => transaction.amount + acc, 0);
    const expenseTotal = transactionInfo
        .filter(transaction => transaction.status === 'expense')
        .reduce(( acc, transaction ) => transaction.amount + acc, 0);
    const totalAmount = incomeTotal - expenseTotal;

  return (
    <div className='flex flex-col items-end pr-4 md:mt-4'>
        <h3>Income: {priceFormatter(incomeTotal)}</h3>
        <h3>Expense: {priceFormatter(expenseTotal)}</h3>
        <h2>Total: {priceFormatter(totalAmount)}</h2>
    </div>
  )
}

export default TotalCard

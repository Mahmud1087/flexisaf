import Expenses from '@/containers/dashboard/expenses';
import { Title } from '@/utils/components';

export default function ExpensesPage() {
  return (
    <>
      <Title title='Expenses' />
      <Expenses />
    </>
  );
}

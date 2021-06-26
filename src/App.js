import ExpenseItem from "./components/ExpenseItem";

const dataList = [
  {
    expenseDate: new Date(2021, 6, 26),
    expenseTitle: "Car Insurance",
    expenseAmount: 12,
  },
  {
    expenseDate: new Date(2021, 6, 26),
    expenseTitle: "Car Insurance",
    expenseAmount: 123,
  },
  {
    expenseDate: new Date(2021, 6, 26),
    expenseTitle: "Car Insurance",
    expenseAmount: 1234,
  },
];

function App() {
  return (
    <div>
      {dataList.map((data, index) => (
        <ExpenseItem
          expenseDate={data.expenseDate}
          expenseTitle={data.expenseTitle}
          expenseAmount={data.expenseAmount}
        />
      ))}
    </div>
  );
}

export default App;

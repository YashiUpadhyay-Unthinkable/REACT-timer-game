import { calculateInvestmentResults, formatter } from '../util/investment';

export default function Result({ inputValues }) {
  const result = calculateInvestmentResults(inputValues);
  const initialInvestment =
    result[0].valueEndOfYear - result[0].interest - result[0].annualInvestment;
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {result.map((row, index) => {
          const totalInterest =
            row.valueEndOfYear -
            row.annualInvestment * row.year -
            initialInvestment;
          const investedCapital = row.valueEndOfYear - totalInterest;
          return (
            <tr key={index}>
              <th>{row.year}</th>
              <th>{formatter.format(row.valueEndOfYear)}</th>
              <th>{formatter.format(row.interest)}</th>
              <th>{formatter.format(totalInterest)}</th>
              <th>{formatter.format(investedCapital)}</th>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

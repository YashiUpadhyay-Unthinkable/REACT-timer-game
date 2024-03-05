export default function UserInput({ inputValues, onChange }) {
  const { initialInvestment, annualInvestment, expectedReturn, duration } =
    inputValues;
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>INITIAL INVESTMENT</label>
          <input
            type="number"
            required
            onChange={(event) => onChange(event, 'initialInvestment')}
            value={initialInvestment}
          />
        </p>
        <p>
          <label>ANNUAL INVESTMENT</label>
          <input
            type="number"
            required
            onChange={(event) => onChange(event, 'annualInvestment')}
            value={annualInvestment}
          />
        </p>
        <p>
          <label>EXPECTED RETURN</label>
          <input
            type="number"
            required
            onChange={(event) => onChange(event, 'expectedReturn')}
            value={expectedReturn}
          />
        </p>
        <p>
          <label>DURATION</label>
          <input
            type="number"
            required
            onChange={(event) => onChange(event, 'duration')}
            value={duration}
          />
        </p>
      </div>
    </section>
  );
}

import css from "./TransactionHistory.module.css";

export default function TransactionHistory({ items }) {
  return (
    <table className={css.table}>
      <thead className={css.header}>
        <tr>
          <th className={css.headerText}>Type</th>
          <th className={css.headerText}>Amount</th>
          <th className={css.headerText}>Currency</th>
        </tr>
      </thead>

      <tbody className={css.tbody}>
        {items.map(({ id, type, amount, currency }, index) => (
          <tr
            key={id}
            className={
              index % 2 === 0 ? css.backgroundWhite : css.backgroundGrey
            }
          >
            <td className={css.cell}>{type}</td>
            <td className={css.cell}>{amount}</td>
            <td className={css.cell}>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

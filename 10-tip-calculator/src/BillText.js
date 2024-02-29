export default function BillText({ bill, avgTip }) {
    return (
        <div>
            <h2>
                You pay ${(bill + avgTip).toFixed(2)}  (${bill.toFixed(2)} + ${avgTip.toFixed(2)} tip)
            </h2>
        </div>
    );
}
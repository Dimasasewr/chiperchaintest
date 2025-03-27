async function sendTransaction() {
    const transaction = { sender: "Alice", receiver: "Bob", amount: 100 };
    
    const response = await fetch("/api/encrypt-transaction", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(transaction)
    });

    const result = await response.json();
    alert("Transaksi Terenkripsi: " + result.encryptedData);
}

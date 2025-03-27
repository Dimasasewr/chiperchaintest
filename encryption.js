const crypto = require("crypto");

function encryptTransaction(data) {
    const key = crypto.randomBytes(32);  // Kunci AES 256-bit
    const iv = crypto.randomBytes(16);   // IV unik

    const cipher = crypto.createCipheriv("aes-256-cbc", key, iv);
    let encrypted = cipher.update(JSON.stringify(data), "utf-8", "hex");
    encrypted += cipher.final("hex");

    return { encryptedData: encrypted, key: key.toString("hex"), iv: iv.toString("hex") };
}

module.exports = encryptTransaction;
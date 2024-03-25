export default function isValidZip(zipCode) {
    return /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(zipCode);
};
function formatNumber() {
    let input = document.getElementById("numberInput");
    let number = input.value.replace(/\D/g, ""); // Remove all unnecessary numbers

    // We divide the numbers into three separate digits
    let formattedNumber = number.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    // display number separator in input
    input.value = formattedNumber;
}

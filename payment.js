// Wait for the page to load
//document.addEventListener('DOMContentLoaded', function() {
    
    // Format card number input
    document.getElementById('card-number').addEventListener('input', function(e) {
        let value = e.target.value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
        let formattedValue = value.match(/.{1,4}/g)?.join(' ');
        if (formattedValue) {
            e.target.value = formattedValue;
        }
    });

    // Format expiry date input
   document.getElementById('expiry-date').addEventListener('input', function(e) {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length >= 2) {
        e.target.value = value.substring(0, 2) + '/' + value.substring(2, 4);
    }
});

    // Form submission
    document.getElementById('payment-form').addEventListener('submit', function(e) {
        e.preventDefault();

        // TODO: Βελτιώσεις για το μέλλον:
        // 1. Έλεγχος αν όλα τα πεδία είναι συμπληρωμένα
        // 2. Αποστολή δεδομένων με AJAX
        // 3. Εμφάνιση loading animation
        // 4. Redirect σε σελίδα επιβεβαίωσης

        // 📝 Προσωρινή λύση:
        alert('Η πληρωμή σας υποβλήθηκε με επιτυχία!');
    });
    
//});
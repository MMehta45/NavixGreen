$(document).ready(function() {
    $('#contactForm').submit(function(event) {
        event.preventDefault(); // Prevent form submission
        
        // Reset the form
        $('#contactForm')[0].reset();
        
        // Display the confirmation modal
        $('#confirmationModal').modal('show');
    });
});
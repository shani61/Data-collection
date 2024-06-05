document.getElementById('dataForm').addEventListener('submit', async function (event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const telephone = document.getElementById('telephone').value;

    try {
        const response = await fetch('/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, telephone }),
        });
        if (response.ok) {
            alert('Data submitted successfully');
        } else {
            alert('Failed to submit data');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred');
    }
});

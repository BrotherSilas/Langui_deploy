// Add event listener to the form submission
document.getElementById('translation-form').addEventListener('submit', function(e) {
    // Prevent the default form submission behavior
    e.preventDefault();

    // Get the input phrase and selected language
    const phrase = document.getElementById('phrase-input').value;
    const language = document.getElementById('language-select').value;

    // Validate that the phrase is not empty
    if (phrase.trim() === '') {
        alert('Please enter a phrase to translate.');
        return;
    }

    // Construct the API URL with the phrase and target language
    const apiUrl = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(phrase)}&langpair=en|${language}`;

    // Make a fetch request to the translation API
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            // Display the translated text
            document.getElementById('translation-result').textContent = `Translation: ${data.responseData.translatedText}`;
        })
        .catch(error => {
            // Handle any errors that occur during the fetch
            document.getElementById('translation-result').textContent = 'Error fetching translation.';
            console.error('Error:', error);
        });
});
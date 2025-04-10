document.addEventListener('DOMContentLoaded', function() {
    /**
     * Loads HTML content from a URL into a specified element.
     *
     * @param {string} url - The URL of the HTML file to fetch.
     * @param {string} elementId - The ID of the HTML element where the content will be loaded.
     */
    async function loadHTML(url, elementId) {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                console.error(`Error loading HTML from ${url}: ${response.status}`);
                return;
            }
            const html = await response.text();
            const targetElement = document.getElementById(elementId);
            if (targetElement) {
                targetElement.innerHTML = html;
            } else {
                console.error(`Element with ID '${elementId}' not found.`);
            }
        } catch (error) {
            console.error(`Error loading HTML from ${url}:`, error);
        }
    }

    // Load navigation
    loadHTML('/partials/nav.html', 'nav-placeholder');

    // Load footer
    loadHTML('/partials/footer.html', 'footer-placeholder');

    // Load left sidebar
    loadHTML('/partials/sidebar_left.html', 'left-sidebar-placeholder');

    // Load right sidebar
    loadHTML('/partials/sidebar_right.html', 'right-sidebar-placeholder');
});



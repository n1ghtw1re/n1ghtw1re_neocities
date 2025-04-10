# Welcome to Our Awesome Website Template! 

Are you looking to build a [Neocities](https://neoticies.org) site, but aren't sure where to start?

This template makes it easy to create your own retro-style website. Here's how to add your own stuff:

![Sample Template](/assets/images/general/template_screenshot.png)

## 1. Adding Pictures

All your pictures should go into the **`assets/images/`** folder. We've created some subfolders to help you keep things organized:

* **`banners/`**: Put big, wide images that you want at the top of your pages here.
* **`general/`**: Logos, small icons, or any image you use on many different pages go here.
* **`page_specific/`**: If a picture is only for one page, find the folder with that page's name inside here (e.g., `about/` for the About page, `index/` for the homepage) and put the picture there. If a folder for your page doesn't exist, you can create one!
* **`sidebar/`**: Small images that you want to show in the left or right columns of your website.
* **`thumbnails/`**: Smaller versions of your pictures that you might use as previews.

**How to use your pictures on a page:**

When you're editing the `.html` files in the `pages/` folder or the sidebar files in the `partials/` folder, you'll use code like this to show a picture:

```html <img src="/assets/images/your_folder/your_picture.jpg" alt="A description of your picture">```

Replace your_folder with the name of the folder where you put your picture (e.g., general, about), and your_picture.jpg with the actual name of your image file. Make sure the spelling is exactly the same!
## 2. Adding Blog Posts or Articles

If you want to add blog posts or articles, you can either:

    Edit the articles.html file in the pages/ folder directly and write your content there using HTML.
    Put your blog post text files (like .txt files) into the assets/text/articles/ folder. You might need to edit the articles.html file to read and display these text files (this might require a little more technical knowledge).

## 3. Adding Videos and Music

Put your video files in the assets/media/videos/ folder and your music files in the assets/media/audio/ folder. You'll need to use HTML code (like the <video> and <audio> tags) in your .html files to show these on your pages.

## 4. Editing the Menu and Sidebar

    Menu: Open the partials/nav.html file. You'll see lines like <a href="#">Home</a>. Change the # to the actual web address of your pages (e.g., /pages/about.html) and change the text "Home" to what you want the menu link to say.
    Left Sidebar: Edit the partials/sidebar_left.html file to add your own text, images, and links.
    Right Sidebar: Edit the partials/sidebar_right.html file similarly.

## Understanding and Changing the Styles of Your Retro Website Template

This template uses several CSS files within the **`css/`** folder to control how your website looks. Here's a breakdown of each file and how you can make basic style changes:

**1. `css/base.css` - The Foundation**

* **Purpose:** This file sets the fundamental styles for your entire website. It controls things like the main font (`'Press Start 2P'`), the black background (`background-color: #000;`), the bright green text color (`color: #00ff00;`), and the subtle burnt-in and scanline effects.
* **How to Change:**
    * **Change the Font:** To use a different retro pixel font, find the `font-family` line in the `body` rule and replace `'Press Start 2P', cursive;` with the name of another web-safe font or a font you've linked (like from Google Fonts).
    * **Change Background Color:** Look for the `background-color` in the `body` rule and change `#000` to your desired color (e.g., `#333` for dark gray, `#111` for a slightly lighter black). You can use hex codes or color names.
    * **Change Text Color:** Find the `color` property in the `body` rule and change `#00ff00` to your preferred text color (e.g., `#ffff00` for yellow, `#cccccc` for light gray).

**2. `css/layout.css` - The Structure**

* **Purpose:** This file controls the main three-column layout (sidebars and main content), the overall width of the site, and the styling of the inner boxes within these areas.
* **How to Change:**
    * **Adjust Sidebar Widths:** In the `.grid-container` rule, the `grid-template-columns` property defines the widths of the columns. You can change the `minmax(150px, 20%)` values to make the sidebars wider or narrower (you can use fixed pixel values like `200px` or percentages like `15%`). The `1fr` in the middle makes the main content take up the remaining space.
    * **Change Main Container Background/Border:** The `.grid-container` rule also has `background-color`, `border`, and `box-shadow` for the main container. Modify these as needed.
    * **Style Sidebar Boxes:** The `.sidebar-box` rule controls the look of the individual boxes in the left and right sidebars (background color, border, padding, spacing). Change these properties to style those boxes.
    * **Style Main Content Boxes:** The `.main-content-box` rule styles the boxes within the main content area. Adjust the `background-color`, `border`, `padding`, and `margin-bottom` here.

**3. `css/navigation.css` - The Menu**

* **Purpose:** Styles the navigation menu at the top.
* **How to Change:**
    * **Menu Background/Border:** The `#nav-placeholder` rule controls the background color (`background-color`), padding (`padding`), text alignment (`text-align`), and the bottom border (`border-bottom`) of the entire navigation area.
    * **Link Styles:** The `#nav-placeholder nav a` rule styles the links themselves (color, text decoration, text shadow). Change the `color` and `text-shadow` to alter the link appearance. `text-decoration: none;` removes underlines by default, and `text-decoration: underline;` in `#nav-placeholder nav a:hover` adds an underline on hover.

**4. `css/components.css` - Reusable Elements**

* **Purpose:** Contains basic styling for reusable components like links within the sidebars and footer.
* **How to Change:**
    * **Sidebar/Footer Link Styles:** The `.sidebar-content a` and `.footer-content a` rules control the color and hover effect of links in those areas.

**5. `css/footer.css` - The Bottom Area**

* **Purpose:** Styles the footer at the bottom of the page.
* **How to Change:**
    * **Footer Background/Border/Text Color:** The `#footer-placeholder` rule has properties like `background-color`, `color`, and `border-top`. Adjust these to change the footer's appearance.
    * **Footer Link Styles:** The `.footer-content a` rule styles the links within the footer.

**6. `css/responsive.css` - Mobile and Tablet Views**

* **Purpose:** Contains special rules that apply when the website is viewed on smaller screens. **Be cautious when editing this file unless you understand responsive design.** Changes here can affect how your site looks on phones and tablets.
* **How to Change (Advanced):** If you do want to make changes, the `@media (max-width: 768px)` block contains styles that apply to screens smaller than 768 pixels wide. You can adjust the `grid-template-columns` to change the layout on smaller screens (e.g., `grid-template-columns: 1fr;` makes it a single column).

**7. `css/page-specific.css` - Unique Page Styles**

* **Purpose:** Contains styles that are only applied to specific pages (like the `index.html` homepage in this basic template).
* **How to Change:**
    * **Homepage Heading/Text Styles:** The rules here target elements within the `.main-content` specifically on the homepage (e.g., `h1`, `p`). Change the `color` or other text properties to style these elements.
    * **You can add more specific rules here** if you want to style elements on other pages differently. For example, to style a specific `div` with the class `special-box` on your `articles.html` page, you could add a rule like `.articles-page .special-box { /* your styles */ }` in this file (you'd need to add the class `.articles-page` to the `<body>` tag of your `articles.html` file for this to work).

**Remember:**

* **Edit Carefully:** Make small changes and refresh your browser to see the results.
* **Save:** Always save the CSS file after making changes.
* **Experiment:** Don't be afraid to try different values to see what they do! You can always undo your changes if you don't like them.
* **Learn CSS:** If you want to make more significant changes, learning the basics of CSS selectors, properties, and values will be very helpful. There are many free resources online!

This detailed breakdown should give even a beginner a good starting point for customizing the look of their retro website using the CSS files in this template. Encourage them to explore and have fun with it!
    Footer: Edit the partials/footer.html to change the copyright information or add links at the bottom of your site.

Remember to save your changes to the .html files after editing them and then open the index.html file in your web browser to see your website!

If you get stuck, don't be afraid to search online for help with basic HTML (for adding text and images) or ask in online communities! Good luck!


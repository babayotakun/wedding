# Lord of the Rings Wedding Invitation

A responsive, interactive wedding invitation landing page with a Lord of the Rings theme.

## Features

- Responsive design that works on mobile, tablet, and desktop
- Lord of the Rings themed content and styling
- Interactive elements including:
  - Animated glowing ring
  - Scroll reveal animations
  - Countdown timer to the wedding date
  - Hover effects on elvish text
- Easy to customize for your own wedding details

## Files

- `index.html` - The main HTML structure of the invitation
- `styles.css` - All styling for the invitation
- `script.js` - JavaScript for interactive elements
- `background-image-description.md` - Detailed requirements for an ideal background
- `background-image-recommendation.md` - Specific image recommendations with URLs
- `mockup-description.md` - Visual preview of how the recommended background would look
- `background-image-summary.md` - Summary of all background image recommendations
- `deployment-guide.md` - Step-by-step instructions for hosting on free platforms
- `hosting-summary.md` - Overview of hosting options and implementation details

## How to Use

1. Clone or download this repository
2. Open the files in your preferred code editor
3. Customize the content in `index.html` with your own wedding details:
   - Names of the couple
   - Date and location
   - RSVP information
4. Optionally, modify the colors in `styles.css` by changing the CSS variables in the `:root` selector
5. Deploy to a free hosting platform using the instructions in `deployment-guide.md`

## Customization Tips

### Changing the Background

To change the background image, modify line 23 in `styles.css`:

```
background-image: url('your-new-image-url.jpg');
```

For Lord of the Rings themed background recommendations, see:
- `background-image-description.md` - Detailed requirements for an ideal background
- `background-image-recommendation.md` - Specific image recommendations with URLs
- `mockup-description.md` - Visual preview of how the recommended background would look

### Changing Colors

Modify the color scheme by changing the CSS variables at the top of `styles.css`:

```
:root {
    --gold: #your-gold-color;
    --dark-gold: #your-dark-gold-color;
    --forest-green: #your-green-color;
    --parchment: #your-light-color;
    --dark-brown: #your-dark-color;
}
```

### Changing the Wedding Date

To update the countdown timer, modify line 48 in `script.js`:

```
const weddingDate = new Date('Your Date Here').getTime();
```

## Mobile Testing

The invitation is designed to be responsive and work well on all devices. Test it by:

1. Opening the page in a web browser
2. Using browser developer tools to simulate different screen sizes
3. Testing on actual mobile devices if possible

## Hosting Options

The wedding invitation can be hosted on several free platforms:

- **GitHub Pages**: Simple hosting directly from a GitHub repository
- **Netlify**: Easy drag-and-drop deployment with additional features
- **Vercel**: Fast performance and simple deployment process
- **Firebase**: Google's hosting platform with analytics

For detailed step-by-step instructions on how to deploy to each platform, see the `deployment-guide.md` file.

### Background Image Considerations

The current background image is hosted on Imgur (see line 23 in `styles.css`). If you choose to use one of the recommended background images from Unsplash:

1. Download the image from the URL in `background-image-recommendation.md`
2. Upload the image alongside your other files when deploying
3. Update the CSS to use a relative path: `background-image: url('lotr-wedding-bg.jpg');`

## Credits

- Fonts: Google Fonts (Cinzel and Lato)
- Recommended background images: Unsplash (see `background-image-recommendation.md` for specific credits)
- Inspiration: J.R.R. Tolkien's Lord of the Rings

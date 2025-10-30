# Gallery Images

Add your gallery images to this directory.

## How to Add Images

1. Place your images in this folder (e.g., `image-1.jpg`, `image-2.jpg`, etc.)
2. Update the `galleryImages` array in `/app/gallery/page.tsx`
3. Reference the images like: `/gallery/your-image-name.jpg`

## Recommended Image Specifications

- **Aspect Ratio**: Square (1:1) works best (e.g., 1000x1000px, 1200x1200px)
- **Format**: JPG or PNG
- **File Size**: Under 500KB for optimal loading speed
- **Quality**: High resolution for detail when viewed in lightbox

## Example Configuration

If you add an image named `design-work.jpg` to this folder:

```javascript
{
  id: 1,
  src: "/gallery/design-work.jpg", // Update this path
  alt: "Design work description",
  category: "Branding", // Choose from: Branding, Print, Digital, Photography
}
```

## Categories

You can organize images by categories:
- **Branding** - Logo design, brand identity work
- **Print** - Posters, magazines, print materials
- **Digital** - Web design, UI/UX work
- **Photography** - Photo work, visual content

Add new categories by simply using them in the galleryImages array.

## Features

- **Filterable** - Images can be filtered by category
- **Lightbox** - Click any image to view it full-screen
- **Responsive Grid** - Automatically adjusts to screen size
- **Navigation** - Use arrow keys or buttons to browse images in lightbox
- **Placeholder** - Shows placeholder if image is missing

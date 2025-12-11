# Blog Web Application

A full-featured blog web application built with Node.js, Express.js, and EJS templating engine. This project allows users to create, view, edit, and delete blog posts with a beautiful, responsive design.

## 🌐 Live Demo

**[View Live Demo →](https://blog-web-app-busm.onrender.com)**

> Note: The app may take 30 seconds to wake up on first load (free tier hosting).

## Features

- ✨ **Create Posts** - Create new blog posts with title, author, and content
- 📖 **View Posts** - Browse all posts on the homepage with featured post layout
- ✏️ **Edit Posts** - Update existing posts with smart navigation
- 🗑️ **Delete Posts** - Remove posts with confirmation
- 🎨 **Beautiful UI** - Purple gradient theme with Bootstrap 5
- 📱 **Responsive Design** - Works perfectly on mobile, tablet, and desktop
- 🔄 **Smart Sorting** - Sort posts by date, title, or author
- 💾 **Scroll Position** - Maintains scroll position after edit/delete operations

## Technologies Used

- **Backend**: Node.js, Express.js
- **Templating**: EJS
- **Styling**: Bootstrap 5.3.3, Custom CSS
- **Icons**: Bootstrap Icons
- **Form Handling**: body-parser

## Installation

1. Clone the repository:
```bash
git clone https://github.com/YOUR_USERNAME/blog-web-app.git
cd blog-web-app
```

2. Install dependencies:
```bash
npm install
```

3. Start the server:
```bash
node index.js
```

4. Open your browser and navigate to:
```
http://localhost:3000
```

## Project Structure

```
blog-web-app/
├── index.js              # Main server file
├── package.json          # Dependencies
├── public/
│   ├── js/              # Client-side JavaScript
│   │   ├── edit.js
│   │   ├── index.js
│   │   ├── posts.js
│   │   └── validation.js
│   └── styles/
│       └── main.css     # Custom styles
└── views/
    ├── index.ejs        # Homepage
    ├── create.ejs       # Create post form
    ├── edit.ejs         # Edit post form
    ├── posts.ejs        # All posts page
    └── partials/
        ├── header.ejs
        └── footer.ejs
```

## Usage

### Creating a Post
1. Click "Create New Post" button
2. Fill in the title, author name, and content (minimum 10 characters)
3. Click "Publish Post"

### Editing a Post
1. Click "Edit" button on any post
2. Modify the content
3. Click "Update Post"
4. You'll be redirected back to where you were

### Deleting a Post
1. Click "Delete" button on any post
2. Confirm deletion
3. The page maintains your scroll position

### Sorting Posts
1. Navigate to "All Posts" page
2. Use the dropdown to sort by:
   - Newest First
   - Oldest First
   - Title (A-Z or Z-A)
   - Author (A-Z)

## Features Highlights

- **In-Memory Storage**: Posts are stored in memory (no database required)
- **Dynamic Routing**: Uses Express.js route parameters
- **Form Validation**: Both client-side and server-side validation
- **Character Counter**: Real-time character count for content
- **Scroll Restoration**: Smart scroll position preservation
- **Responsive Navigation**: Bootstrap navbar with mobile support

## Dependencies

```json
{
  "express": "^5.1.0",
  "body-parser": "^2.2.1",
  "ejs": "^3.1.10"
}
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Notes

- Posts are stored in memory and will be lost when the server restarts
- No database is used in this version
- Port 3000 is used by default

## Future Enhancements

- Add database support (MongoDB/PostgreSQL)
- User authentication
- Comments system
- Post categories/tags
- Search functionality
- Image upload support

## License

This project is open source and available under the MIT License.

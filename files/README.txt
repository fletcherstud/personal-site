RESUME PLACEHOLDER

To add your actual resume:

1. Create a PDF version of your resume
2. Name it "john_fletcher_resume.pdf"
3. Place it in this directory (public/files/)

The "Download Resume" button on your website will automatically link to this file.

If you want to use a different filename, update the href attribute in the About.jsx component:
```jsx
<a 
  href="/files/your_new_filename.pdf" 
  className="btn btn-secondary"
  target="_blank"
  rel="noopener noreferrer"
  download
>
  Download Resume
</a>
``` 
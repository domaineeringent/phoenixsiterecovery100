const path = require('path');
const fse = require('fs-extra');
const matter = require('gray-matter');
const { marked } = require('marked');

// --- STRATEGIC ENHANCEMENT: SITEMAP CONFIGURATION ---
// IMPORTANT: Update this to your final production domain name.
const baseUrl = 'https://www.phoenixsiterecovery.com';
// --- END ---

const postsDir = path.join(__dirname, 'posts');
const distDir = path.join(__dirname, 'dist');

// (The slugify function remains the same as before)
function slugify(text) {
    return text.toLowerCase()
        .replace(/\s+/g, '-')     // Replace spaces with -
        .replace(/[^\w-]+/g, '')  // Remove all non-word chars
        .replace(/--+/g, '-')     // Replace multiple - with single -
        .replace(/^-+/, '')       // Trim - from start of text
        .replace(/-+$/, '');      // Trim - from end of text
}

async function buildSite() {
    try {
        console.log('Chancellor AI: Initiating FINAL content build protocol...');

        fse.emptyDirSync(distDir);
        fse.ensureDirSync(path.join(distDir, 'posts'));

        // (The logic for processing posts and categories remains identical to the previous version)
        const postFiles = fse.readdirSync(postsDir).filter(file => file.endsWith('.md'));
        const categoryMap = {};
        const postsManifest = postFiles.map(file => {
            const filePath = path.join(postsDir, file);
            const fileContent = fse.readFileSync(filePath, 'utf8');
            const { data, content } = matter(fileContent);

            // --- TOC GENERATION LOGIC ---
            const toc = [];
            const renderer = new marked.Renderer();
            
            // Override the default heading renderer
            renderer.heading = (text, level) => {
                if (level === 2 || level === 3) { // Capture H2s and H3s
                    const anchor = slugify(text);
                    toc.push({
                        level: level,
                        text: text,
                        anchor: anchor
                    });
                    return `<h${level} id="${anchor}">${text}</h${level}>`;
                }
                return `<h${level}>${text}</h${level}>`;
            };

            const htmlContent = marked(content, { renderer });
            // --- END TOC GENERATION LOGIC ---

            const slug = file.replace('.md', '');
            const fragmentPath = path.join(distDir, 'posts', `${slug}.html`);
            fse.writeFileSync(fragmentPath, htmlContent);

            // --- CATEGORY AGGREGATION LOGIC ---
            if (data.category) {
                if (categoryMap[data.category]) {
                    categoryMap[data.category]++;
                } else {
                    categoryMap[data.category] = 1;
                }
            }
            // --- END CATEGORY AGGREGATION LOGIC ---
            
            return {
                slug,
                toc, // Add the generated TOC to the manifest
                ...data
            };
        });
        postsManifest.sort((a, b) => new Date(b.date) - new Date(a.date));
        fse.writeFileSync(path.join(distDir, 'posts.json'), JSON.stringify(postsManifest, null, 2));
        const categories = Object.entries(categoryMap).map(([name, count]) => ({ name, count }));
        fse.writeFileSync(path.join(distDir, 'categories.json'), JSON.stringify(categories, null, 2));
        console.log('Content manifests generated.');

        // --- NEW: SITEMAP GENERATION LOGIC ---
        const staticPages = ['/', '/services', '/about', '/blog', '/contact'];
        const blogPages = postsManifest.map(post => `/blog/${post.slug}`);
        
        const allUrls = [...staticPages, ...blogPages];

        const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls.map(url => `  <url><loc>${baseUrl}${url}</loc></url>`).join('\n')}
</urlset>`;

        fse.writeFileSync(path.join(__dirname, 'sitemap.xml'), sitemapContent);
        console.log('`sitemap.xml` has been generated in the project root.');
        // --- END SITEMAP LOGIC ---

        console.log('SUCCESS: Final build protocol complete.');

    } catch (error) { // <-- BRACE ADDED HERE
        console.error('CRITICAL FAILURE in build protocol:', error);
        process.exit(1);
    } // <-- BRACE ADDED HERE
}

buildSite();
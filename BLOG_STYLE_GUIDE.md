# Blog Style Guide - Scotty Peterson Portfolio

## Component Structure

### Required TSX Format
```tsx
export default function BlogPostFunctionName() {
  return (
    <div>
      {/* Content goes here */}
    </div>
  );
}
```

**Rules:**
- Function name should be PascalCase and descriptive
- Only use a simple `<div>` wrapper - no additional classes or styling
- No complex article/header structures
- No Tailwind CSS classes on wrapper elements

## HTML Elements & Semantic Structure

### Allowed Elements
```tsx
// Paragraphs
<p>Content goes here</p>

// Headings (use semantic hierarchy)
<h3>Main Section Title</h3>
<h4>Subsection Title</h4>

// Lists
<ul>
  <li>Unordered list item</li>
</ul>

<ol>
  <li>Ordered list item</li>
</ol>

// Emphasis
<strong>Important text</strong>
<em>Emphasized text</em>

// Code
<code>inline code</code>

// Links
<a href="https://external-site.com" target="_blank" rel="noopener noreferrer">External Link</a>
<a href="/#section">Internal Link</a>

// Block quotes (if needed)
<blockquote>Quote content</blockquote>
```

### Forbidden Elements
- ❌ `<h1>` or `<h2>` (handled by layout)
- ❌ `<article>`, `<header>`, `<section>` with classes
- ❌ Any Tailwind CSS classes (`className="..."`)
- ❌ Inline styles (`style="..."`)
- ❌ Complex div structures with styling

## Content Guidelines

### Writing Style
- **Conversational tone** - Professional but approachable
- **First-person perspective** - Share personal experiences
- **Paragraph-based format** - Avoid excessive bullet points
- **Technical depth with accessibility** - Explain concepts for both technical and business audiences

### Apostrophes & Special Characters
- Always use `&apos;` instead of `'` in JSX
- Use `&ldquo;` and `&rdquo;` for quotes instead of `&quot;`
- Example: `I&apos;ve learned` and `&ldquo;comprehensive&rdquo;`

### Headings Hierarchy
- `<h3>` for main sections
- `<h4>` for subsections  
- Never skip heading levels
- Keep headings descriptive and scannable

### Code References
- Use `<code>` tags for: technical terms, function names, file names, API endpoints
- Example: `<code>context-aware permissions</code>`
- Keep code blocks minimal - this isn't a tutorial blog

## Linking Strategy

### External Links (Required)
- **Include 3-5 authoritative external links per post**
- **Prioritize sources:**
  1. Official documentation
  2. Government/regulatory sources (.gov)
  3. Industry reports from established companies
  4. Educational institutions (.edu)
  5. Reputable tech companies and publications

- **Link format:**
```tsx
<a href="https://external-site.com" target="_blank" rel="noopener noreferrer">Link Text</a>
```

### Internal Links
- Link to portfolio sections: `<a href="/#experience">experience section</a>`
- Link to other blog posts: `<a href="/blog/slug">Previous Post</a>`
- Keep internal links natural and valuable

### Link Best Practices
- Link text should be descriptive, not "click here"
- Links should support claims with authoritative sources
- Don't over-link - focus on high-value references

## SEO & Content Requirements

### Research-Based Content
- Include specific statistics with sources
- Reference current industry data (within 12-18 months)
- Quote industry experts or official sources
- Support all major claims with external links

### Technical Credibility
- Reference specific tools/technologies you actually use
- Include version numbers when relevant
- Share real project experiences and challenges
- Provide practical insights, not just theory

### Business Value
- Connect technical concepts to business outcomes
- Include pricing insights when appropriate
- Highlight market opportunities and trends
- Position expertise for potential client attraction

## Blog Metadata (for blog.ts)

### Required Fields
```tsx
{
  slug: 'descriptive-slug-with-hyphens',
  title: 'Compelling Title with Target Keywords',
  description: 'Clear description that works as meta description (150-160 chars)',
  publishedAt: 'YYYY-MM-DD',
  tags: ['Tag1', 'Tag2', 'Tag3'],
  readingTime: 8, // Estimated minutes
  content: ComponentName,
  draft: false,
}
```

### Tag Categories
**Technical:** `React`, `Next.js`, `Django`, `AWS`, `Full-Stack`, `TypeScript`, `PostgreSQL`
**Industry:** `Healthcare`, `Enterprise`, `SaaS`, `Compliance`, `FinTech`
**Process:** `Solo Development`, `AI Automation`, `Architecture`, `DevOps`
**Business:** `Freelancing`, `Project Management`, `Client Work`, `Pricing`
**Personal:** `ADHD`, `Personal`, `Career`, `Hot Takes`

## Quality Checklist

### Before Publishing
- [ ] TSX syntax is valid (no JSX errors)
- [ ] Only simple `<div>` wrapper used
- [ ] No Tailwind classes or custom styling
- [ ] All apostrophes use `&apos;`
- [ ] Headings follow proper hierarchy (h3, h4 only)
- [ ] 3-5 external links to authoritative sources
- [ ] Internal links use hash navigation (`/#section`)
- [ ] All claims supported by linked sources
- [ ] Personal experiences are specific and authentic
- [ ] Target keywords naturally included
- [ ] Reading time is reasonable (5-10 minutes)
- [ ] Tags are relevant and follow established categories

### Content Quality
- [ ] Provides practical value to readers
- [ ] Balances technical depth with accessibility
- [ ] Includes specific examples from real projects
- [ ] Positions expertise without being salesy
- [ ] Maintains consistent voice and tone
- [ ] Flows logically from section to section

## Example Structure Template

```tsx
export default function BlogPostTitle() {
  return (
    <div>
      <p>
        Opening paragraph that hooks the reader and introduces the topic.
        Include a personal angle or surprising insight.
      </p>

      <p>
        Second paragraph with a key statistic and external link:
        <strong>Key stat</strong> according to <a href="source" target="_blank" rel="noopener noreferrer">Authoritative Source</a>.
      </p>

      <h3>Main Section Title</h3>
      
      <p>
        Content for this section...
      </p>

      <h4>Subsection Title</h4>
      
      <p>
        More specific content...
      </p>

      <ul>
        <li>List item with practical insight</li>
        <li>Another actionable point</li>
      </ul>

      <h3>Another Main Section</h3>
      
      <p>
        Continue building the narrative...
      </p>

      <p>
        Closing paragraph with call-to-action or portfolio link:
        Check out my <a href="/#experience">experience section</a> or 
        <a href="/#contact">get in touch</a> to discuss your project.
      </p>
    </div>
  );
}
```

---

This style guide ensures consistency, SEO optimization, and maintains the professional yet approachable voice that characterizes your portfolio blog.
export default function EmailCodingBestPractices() {
  return (
    <div>
      <p>
        Email coding is like web development&apos;s evil twin—what works perfectly in your browser 
        might completely break in Outlook 2016. After building countless email templates and 
        debugging rendering issues across dozens of clients, here&apos;s what actually works.
      </p>

      <h3>The Foundation: Tables Are Your Friend</h3>
      
      <p>
        I know, I know. It&apos;s 2024 and we&apos;re still using tables. But email clients are 
        stuck in the early 2000s, especially Outlook (which uses Word&apos;s rendering engine—yes, really).
      </p>

      <ul>
        <li><strong>Use nested tables</strong> for complex layouts instead of divs</li>
        <li><strong>Set explicit widths</strong> on table cells</li>
        <li><strong>Always include cellpadding=&quot;0&quot; and cellspacing=&quot;0&quot;</strong> on tables</li>
        <li><strong>Use table-based responsive design</strong> with media queries as fallback</li>
      </ul>

      <h3>CSS That Actually Works</h3>
      
      <p>
        Not all CSS properties work across email clients. Here&apos;s what you can rely on:
      </p>

      <h4>Safe CSS Properties:</h4>
      <ul>
        <li><code>background-color</code> (but not on body tag for Outlook)</li>
        <li><code>border</code> and <code>border-collapse</code></li>
        <li><code>color</code> and <code>font-family</code></li>
        <li><code>font-size</code> and <code>font-weight</code></li>
        <li><code>line-height</code> and <code>text-align</code></li>
        <li><code>padding</code> and <code>margin</code> (with caveats)</li>
      </ul>

      <h4>Avoid These:</h4>
      <ul>
        <li><code>flexbox</code> and <code>grid</code> (Outlook will laugh at you)</li>
        <li><code>position: absolute/relative</code></li>
        <li><code>float</code> (unreliable across clients)</li>
        <li>CSS animations and transitions</li>
        <li>Web fonts (stick to web-safe fonts)</li>
      </ul>

      <h3>The Outlook Problem</h3>
      
      <p>
        Outlook deserves its own section because it&apos;s the bane of every email developer&apos;s existence:
      </p>

      <ul>
        <li><strong>Use VML for background images</strong> in Outlook</li>
        <li><strong>Add mso-specific CSS</strong> for Outlook-only fixes</li>
        <li><strong>Test in multiple Outlook versions</strong> (2016, 2019, 365)</li>
        <li><strong>Use table-based buttons</strong> instead of CSS buttons</li>
      </ul>

      <h3>Mobile Responsiveness</h3>
      
      <p>
        Mobile-first isn&apos;t just a web dev concept—it&apos;s crucial for email:
      </p>

      <ul>
        <li><strong>Use fluid tables</strong> with percentage widths</li>
        <li><strong>Stack columns</strong> on mobile with media queries</li>
        <li><strong>Make touch targets at least 44px</strong></li>
        <li><strong>Use 14px+ font sizes</strong> for mobile readability</li>
        <li><strong>Test on actual devices</strong>, not just desktop previews</li>
      </ul>

      <h3>Image Best Practices</h3>
      
      <p>
        Images are blocked by default in many clients, so plan accordingly:
      </p>

      <ul>
        <li><strong>Always include alt text</strong> that makes sense without the image</li>
        <li><strong>Use background colors</strong> behind images as fallbacks</li>
        <li><strong>Don&apos;t rely solely on images</strong> for important information</li>
        <li><strong>Optimize image sizes</strong> for faster loading</li>
        <li><strong>Host images externally</strong> and use absolute URLs</li>
      </ul>

      <h3>Testing Strategy</h3>
      
      <p>
        Testing is where most email campaigns fall apart. Here&apos;s my approach:
      </p>

      <ul>
        <li><strong>Test early and often</strong> during development</li>
        <li><strong>Use tools like Litmus or Email on Acid</strong> for comprehensive testing</li>
        <li><strong>Send test emails to real accounts</strong> (Gmail, Outlook, Apple Mail)</li>
        <li><strong>Check dark mode compatibility</strong> (increasingly important)</li>
        <li><strong>Validate HTML</strong> with email-specific validators</li>
      </ul>

      <h3>Code Structure Template</h3>
      
      <p>
        Here&apos;s a basic structure that works across most clients:
      </p>

      <pre><code>{`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        /* Your CSS here */
    </style>
</head>
<body style="margin: 0; padding: 0;">
    <table cellpadding="0" cellspacing="0" width="100%">
        <tr>
            <td align="center">
                <table cellpadding="0" cellspacing="0" width="600">
                    <!-- Your content here -->
                </table>
            </td>
        </tr>
    </table>
</body>
</html>`}</code></pre>

      <h3>Final Tips</h3>
      
      <ul>
        <li><strong>Keep it simple</strong>—complex layouts break more easily</li>
        <li><strong>Use inline CSS</strong> for critical styles (some clients strip head CSS)</li>
        <li><strong>Include a web version link</strong> for fallback</li>
        <li><strong>Consider accessibility</strong>—screen readers are used for email too</li>
        <li><strong>Document your workarounds</strong>—you&apos;ll forget why you did something</li>
      </ul>

      <h3>The Reality Check</h3>
      
      <p>
        Email coding isn&apos;t glamorous, and it&apos;s definitely not cutting-edge. But when your 
        email renders perfectly across 40+ email clients while your competitor&apos;s looks broken 
        in half of them, you&apos;ll appreciate the extra effort.
      </p>

      <p>
        The key is accepting that email development lives in its own universe with its own rules. 
        Once you embrace the constraints instead of fighting them, it becomes much more manageable.
      </p>

      <p><em>Happy coding (and good luck with Outlook)!</em></p>
    </div>
  );
} 
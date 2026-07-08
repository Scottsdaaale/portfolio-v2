export default function HowToBuildAJobHuntSystemWithClaudeCode() {
  return (
    <div>
      <p>
        I&apos;m Scotty Peterson. I spent the last few years building lifecycle marketing
        automation at a B2B SaaS company: the email systems, API integrations, and internal
        tooling that make campaigns actually run. I got laid off on June 1, and since my
        day job was already building automated systems with AI, I pointed those same tools
        at the job search itself. It started small, just pasting job postings into Claude
        Code with a bare <code>CLAUDE.md</code> for tracking, no rubric, no watchlist, no
        automation yet. All told, across both eras, it&apos;s evaluated 268 roles, helped
        me send 44 applications, and landed 4 interviews. These days it runs on its own
        every morning in about 9 minutes.
      </p>

      <p>
        A lot of people asked how it works after my{' '}
        <a href="/blog/job-hunting-is-a-funnel-problem">last post</a> took off{' '}
        <a
          href="https://www.linkedin.com/feed/update/urn:li:activity:7480274973845192705/"
          target="_blank"
          rel="noopener noreferrer"
        >
          on LinkedIn
        </a>
        , so this is the write-up: the repo structure, how the AI knows what a good job
        looks like, how boards get checked without scraping, and how it all gets tracked.
        You can build a minimal version in an afternoon.
      </p>

      <p>
        <strong>THIS POST IS LONG ON PURPOSE.</strong> If you hand it to an AI agent, it
        has real context to work with, but read it yourself first. And if it&apos;s
        useful, share it with a friend who&apos;s job searching too.
      </p>

      <p>
        One more thing up front: my actual repo isn&apos;t public right now, it&apos;s
        specific to me, my resume, my target companies, my rubric, and that specificity
        is the whole point. This post isn&apos;t something to clone. Treat it as a
        rubric or guideline for building your own workflow, your own system, tailored to
        your own situation. That&apos;s where the power actually comes from. I may build
        something public down the line, but I&apos;m not sure yet what that would even
        look like.
      </p>

      <p>
        The short version: my job search is a git repo. My resume, a scoring rubric, a list
        of target companies, and a few CSVs live in version control. Claude Code operates
        on that repo like a codebase, a scheduled agent runs the search daily and commits
        the results, and there&apos;s a digest waiting for me every morning. Any coding
        agent with file access and web search can run this, Claude Code is what I use
        daily, but nothing here is locked to one tool.
      </p>

      <h3>Prerequisites</h3>

      <p>
        You do not need to be a developer to build this (though it helps). You never write code yourself; the
        agent writes the one script this system uses. If you can install an app, keep
        files in folders, and understand the basics of AI, and can learn/know the very basics of git/Github, you have the skills. You need a few things:
      </p>

      <ul>
        <li>
          <strong>Claude Code with a Claude Pro subscription</strong> ($20/month). This is
          the engine. Claude Code is Anthropic&apos;s AI agent: you type plain English
          (&quot;score this job description against my resume&quot;) and it reads your
          files, does the work, and writes the results back. Install it at{' '}
          <a href="https://claude.com/claude-code" target="_blank" rel="noopener noreferrer">
            claude.com/claude-code
          </a>
          .
        </li>
        <li>
          <strong>An IDE: VS Code or Cursor.</strong> Not strictly necessary, since Claude
          Code runs in a terminal, but highly recommended. An IDE is just an app for viewing
          and editing files, and you&apos;ll want one for reading digests, reviewing tailored
          resumes, and glancing at your trackers. VS Code is free; Cursor has a free tier and
          runs Claude Code in a sidebar so you may never touch a terminal at all.
        </li>
        <li>
          <strong>A GitHub account</strong> (free). GitHub stores your repo online, which
          gives you a backup, a full history of every change, and, if you later want the
          daily run to happen without you, a place a cloud agent can pull the repo from.
        </li>
        <li>
          <strong>Python</strong> (free), if you want the board-checking script to run.
          Mac doesn&apos;t actually ship this anymore the way people remember. There&apos;s
          a stub at <code>/usr/bin/python3</code> that prompts you to install Apple&apos;s
          Xcode Command Line Tools the first time you run it, and even then it&apos;s an
          old version. Just grab a current copy directly from{' '}
          <a href="https://www.python.org/downloads/" target="_blank" rel="noopener noreferrer">
            python.org
          </a>{' '}
          instead. You won&apos;t be writing any Python yourself, your agent writes the
          script, you just need Python installed so it can actually run.
        </li>
        <li>
          <strong>A basic sense of Markdown and CSV.</strong> These are the two file types
          the whole system runs on. Markdown (<code>.md</code>) is just plain text with a
          few symbols for formatting, a <code>#</code> makes a heading, a <code>-</code>{' '}
          makes a bullet, that&apos;s most of what you need to recognize. CSV (
          <code>.csv</code>) is a spreadsheet saved as plain text, one row per line,
          values separated by commas, which is exactly why it opens cleanly in Excel or
          Google Sheets but is still something your agent can read and edit directly. You
          don&apos;t need to write either by hand. You just need to recognize them enough
          to open a file and sanity-check what the agent wrote.
        </li>
      </ul>

      <h3>Why a Repo and Not a Spreadsheet</h3>

      <p>Three reasons.</p>

      <p>
        <strong>Context persists.</strong> Every session, the agent reads the same resume,
        the same rubric, the same trackers. It never starts from zero, and it never drifts
        from how I scored jobs last week.
      </p>

      <p>
        <strong>Everything is plain text.</strong> Markdown and CSV. The agent can read and
        write all of it natively, you can diff changes, and nothing is trapped inside a SaaS
        tool.
      </p>

      <p>
        <strong>Git is the audit log.</strong> Every scored job, every digest, every tracker
        update is a commit. If the automation does something weird, I can see exactly what
        changed and revert it.
      </p>

      <p>
        If you&apos;re non-technical, git and GitHub are probably the biggest hurdle in this
        whole setup, more than the AI part. AI is only as good as the person steering it, so
        it&apos;s worth spending an hour on the basics: what a commit is, what a push is, how
        to undo one if you mess it up. You don&apos;t need to be fluent, but understanding
        the fundamentals means you&apos;ll actually trust the audit log instead of being
        afraid of it.
      </p>

      <h3>Repo Structure</h3>

      <pre><code>{`hunter/
├── CLAUDE.md              # Instructions the agent reads every session (the brain)
├── profile/
│   ├── og-resume.md       # Master resume, single source of truth
│   ├── linkedin-profile.md # All the copy from my LinkedIn profile
│   └── projects.md        # Projects I've worked on
├── data/
│   ├── evaluated-jobs.csv # Every job ever scored (the dedupe backbone)
│   ├── watchlist.json     # Target companies + which ATS they use
│   ├── outreach-tracker.csv # Every networking touch: who, when, exact message
│   └── volunteer-tracker.csv # Skills-based volunteering leads
├── scripts/
│   ├── check-boards.py    # Queries ATS APIs for watchlist companies
│   └── evaluated-jobs.py  # Dedupe helpers the automation calls
├── daily-digest/          # One markdown file per day: what to apply to
├── resumes/
│   └── <company>/         # jd.md, tailored resume, cover letter, exported PDFs
└── docs/                  # Strategy notes (networking playbook, this file)`}</code></pre>

      <p>
        The naming matters less than the separation: profile files the agent reads from,
        data files it writes to, and one instruction file that governs both.
      </p>

      <h3>CLAUDE.md: The File That Runs the Show</h3>

      <p>
        Claude Code automatically reads a file called <code>CLAUDE.md</code> at the root of
        the repo at the start of every session. This is where the entire system&apos;s judgment lives. Mine contains:
      </p>

      <p>
        <strong>A target profile.</strong> Comp band, location constraints (remote US that
        can hire in my state, or hybrid near me), which role types are primary fit, which
        are secondary, and which to avoid entirely. This is what keeps a web search from
        surfacing senior Marketo admin jobs I&apos;d never take.
      </p>

      <p>
        <strong>A scoring rubric.</strong> Every job gets a 0-100 score against my master
        resume. Base score comes from role fit, then penalties apply: a cap if the role
        wants more years than I have, a deduction for each required platform I don&apos;t
        know, a deduction if the comp floor is way above my band (a sign the role is
        overleveled for me). AI-forward roles get a small bonus because that&apos;s what
        I&apos;m optimizing for. The anchors are calibrated so 80+ means &quot;natural hire,
        not a stretch,&quot; and any role with a gap that would realistically screen me out
        is capped below 75.
      </p>

      <p>
        The exact numbers matter less than having them written down. Before the rubric
        existed, I&apos;d just have the AI read my profile and the job description fresh
        each time and tell me how good a match it was. That actually worked okay, but it
        wasn&apos;t consistent, and AI has a real positivity bias: left to its own judgment,
        it wants to tell you every job is a great fit. Writing the rules down gives it
        something concrete to follow instead of vibes. Build a scoring system that
        reflects your actual gaps and priorities, and the agent scores a job the same way
        on day 25 as it did on day 1. When I disagree with a score now, I tune the rubric
        instead of re-arguing every job from scratch.
      </p>

      <p>
        <strong>Workflow definitions.</strong> What to do when I paste a job description
        (check for duplicates, score it, log it, stop). What to do when I say &quot;find
        jobs&quot; (search, verify every link is a live direct posting, score, log, present
        ranked). What to do when I decide to apply (save the JD, tailor a copy of the
        resume, export a PDF with a consistent naming convention).
      </p>

      <p>
        <strong>Guardrails.</strong> The master resume is never edited unless specifically requested, only copied.
        Tailoring means reordering and reframing what&apos;s true, never fabricating.
        Aggregator links don&apos;t count as verification; the agent has to find the live
        posting on the company&apos;s actual ATS. Scoring a job and applying to it are
        separate decisions, and the agent never marks anything as applied. I do that
        manually.
      </p>

      <p>
        <strong>Writing voice rules.</strong> Instructions for how NOT to sound like AI in
        cover letters and application answers: no em dashes, no &quot;Trigger: X. Audience:
        Y.&quot; labeled lists, no three-parallel-examples patterns, vary sentence length,
        lead with specifics. This section earns its keep every single time. I also run
        drafts through a dedicated humanizer skill (
        <a
          href="https://github.com/blader/humanizer"
          target="_blank"
          rel="noopener noreferrer"
        >
          github.com/blader/humanizer
        </a>
        ), which is a free, downloadable Claude Code skill built specifically to catch
        these tells.
      </p>

      <p>
        If you build nothing else from this post, build a CLAUDE.md with a target profile
        and a rubric. That alone turns a chat assistant into a consistent evaluator.
      </p>

      <h3>Profile Context: What the Agent Knows About You</h3>

      <p>Three files, three jobs:</p>

      <ul>
        <li>
          <strong>og-resume.md</strong> is the master resume and the single source of
          truth. Every score is computed against it. Every tailored resume starts as a copy
          of it. It never gets edited, which means tailoring can&apos;t slowly corrupt the
          record of what I&apos;ve actually done.
        </li>
        <li>
          <strong>linkedin-profile.md</strong> is just all the copy from my actual LinkedIn
          profile, pasted in as one file. It gives the agent extra context beyond the
          one-page resume, and it doubles as a single place to edit if I come up with a better way to tell my
          story. Change it there once and it flows into every future cover letter instead
          of getting rewritten from memory each time.
        </li>
        <li>
          <strong>projects.md</strong> is a bit more specific to me: real things
          I&apos;ve built on the job (internal tools, a full SaaS product, a CMS)
          that aren&apos;t necessarily tied to the marketing roles I&apos;m targeting,
          but show a different kind of range. It comes with a
          conditional: the agent only pulls from it when the job description actually
          signals it wants a builder. CLAUDE.md tells it when that file is relevant and
          when to leave it alone.
        </li>
      </ul>

      <p>
        That last point is the general pattern: don&apos;t just give the agent context,
        give it rules for when each piece of context applies.
      </p>

      <h3>The APIs: Checking Job Boards Without Scraping</h3>

      <p>
        This is the part people assume requires scraping. It doesn&apos;t. Most tech
        companies run their careers page on one of a few Applicant Tracking Systems, and
        the major ones expose public JSON APIs that power their own job board widgets:
      </p>

      <pre><code>{`Greenhouse:  https://boards-api.greenhouse.io/v1/boards/<slug>/jobs
             (add /<job_id> for the full description)
Lever:       https://api.lever.co/v0/postings/<slug>?mode=json
Ashby:       https://api.ashbyhq.com/posting-api/job-board/<slug>
Workday:     https://<tenant>.<host>.myworkdayjobs.com/wday/cxs/<tenant>/<site>/jobs
             (POST, paginated 20 at a time)`}</code></pre>

      <p>
        Here&apos;s how you actually find which one a company uses, and it&apos;s the same
        move for all four: go to their careers page and look at where the &quot;view open
        roles&quot; button sends you. The domain gives it away.
      </p>

      <ul>
        <li>
          <code>boards.greenhouse.io/company</code> or{' '}
          <code>job-boards.greenhouse.io/company</code> → Greenhouse. The{' '}
          <code>company</code> part of that URL is the slug.
        </li>
        <li>
          <code>jobs.lever.co/company</code> → Lever, same idea.
        </li>
        <li>
          <code>jobs.ashbyhq.com/company</code> → Ashby, same idea.
        </li>
        <li>
          Something ending in <code>myworkdayjobs.com</code>, usually on the
          company&apos;s own domain → Workday. The tenant/host/site are all in that URL
          too, just messier to pull apart.
        </li>
      </ul>

      <p>
        You don&apos;t have to go do this by hand either, and honestly I don&apos;t. It&apos;s
        part of the automation itself: when the daily search finds a company worth
        watching, the agent works out which platform it&apos;s on and what the slug is,
        and flags it as a watchlist suggestion in the digest with that info already
        filled in. I just review the suggestions and approve the ones worth adding. I
        never go looking for URLs myself.
      </p>

      <p>
        Once you know that, the actual build is one conversation with your agent. You
        don&apos;t need to write or understand the script yourself, you just need to hand
        over the right ask. Something like: &quot;Here are the public JSON API patterns
        for Greenhouse, Lever, Ashby, and Workday job boards [paste the four endpoints
        above]. Write me a script that checks a list of companies against these APIs,
        filters the results for job titles matching my target keywords, and skips
        anything I&apos;ve already logged in evaluated-jobs.csv.&quot; That prompt, plus a
        few rounds of back and forth fixing edge cases, is genuinely how{' '}
        <code>check-boards.py</code> got built. It&apos;s a single Python file with no
        dependencies beyond what already ships with Python, so there&apos;s nothing extra
        to install.
      </p>

      <p>
        <code>watchlist.json</code> is just a list of companies with their platform and
        slug:
      </p>

      <pre><code>{`[
  {"company": "Figma", "platform": "greenhouse", "slug": "figma"},
  {"company": "Klaviyo", "platform": "greenhouse", "slug": "klaviyo"}
]`}</code></pre>

      <p>
        Mine has nearly 100 companies on it, and it grows: the daily digest ends with a
        &quot;watchlist suggestions&quot; section, so when web search surfaces a company
        with a relevant team, it gets added and monitored from then on.
      </p>

      <p>
        The script loops through the watchlist, hits each API, filters titles
        against keywords like &quot;lifecycle,&quot; &quot;marketing operations,&quot; and
        &quot;martech,&quot; and diffs the results against <code>evaluated-jobs.csv</code>{' '}
        by both title and job ID. Output is only the roles I haven&apos;t seen before, each
        with its description attached so the agent can score it without another fetch.
      </p>

      <h3>Dedup: The Boring Part That&apos;s Actually the Hard Part</h3>

      <p>
        Every ATS API check and every web search candidate has to run past{' '}
        <code>evaluated-jobs.py</code>, and this is the one piece of the system I&apos;d
        call genuinely engineered rather than just prompted. It matches on two separate
        keys, not one:
      </p>

      <ul>
        <li>
          <strong>A normalized company and role name.</strong> Lowercased, punctuation
          stripped, leading &quot;the&quot; dropped, whitespace collapsed. That catches
          &quot;The Acme Co.&quot; and &quot;Senior Marketing Ops Manager&quot; matching
          against &quot;Acme Co&quot; and &quot;senior marketing ops manager,&quot; even
          when the formatting is slightly different between two listings of the same role.
        </li>
        <li>
          <strong>A job ID pulled out of the URL.</strong> Different regex per platform:
          Greenhouse&apos;s <code>gh_jid</code> parameter or numeric <code>/jobs/&lt;id&gt;</code>{' '}
          path, or the UUID pattern Lever and Ashby both use. This is what catches the case
          the title match misses entirely: a company reposts the exact same job under a
          new title. Same posting, same URL, different name. The ID doesn&apos;t change
          even when the title does.
        </li>
      </ul>

      <p>
        Both keys run through a batch mode: a whole list of candidates goes in as one
        piped command, and the script returns NEW or DUP for each line, catching
        duplicates against the CSV and duplicates within that same batch (two search
        results that turned out to be the same job) in a single pass. That&apos;s the
        mechanism that lets the agent dedupe 250+ logged roles without ever loading the
        CSV into its own context.
      </p>

      <p>
        There&apos;s also a cleanup command that scans the whole CSV for rows that slipped
        through as duplicates anyway and merges them, and it has one deliberate rule: if
        two rows match but only one has <code>Applied = Yes</code>, it keeps that one. A
        naive cleanup that just kept &quot;the first row it saw&quot; could quietly erase
        the fact that I actually applied to something. Small rule, but it&apos;s the kind
        of edge case that only shows up after you&apos;ve been running the system for
        weeks and looking closely at what it removed.
      </p>

      <p>Two more lessons from running this for a month:</p>

      <ul>
        <li>
          <strong>Duplicates are still duplicates when nobody actually moved the ID.</strong>{' '}
          Job aggregators and even ATS platforms will surface a slightly reworded version
          of a listing that maps to the same underlying job. The ID-based key exists
          specifically because title-only matching would let that slip through.
        </li>
        <li>
          <strong>Some sites can&apos;t be scripted, and that&apos;s fine.</strong>{' '}
          Indeed&apos;s careers page blocks scripts at the TLS level. Instead of fighting
          it, that one check runs as a browser-capable agent task with its own prompt file,
          and it appends findings to a log that a regular session scores later. When a
          source resists automation, route around it instead of building something fragile.
        </li>
      </ul>

      <h3>Data Tracking</h3>

      <p>Four files, all plain CSV or markdown.</p>

      <p>
        <strong>evaluated-jobs.csv</strong> is the backbone. Every job that has ever been
        scored gets a row: company, role, base score, each penalty applied, final score,
        whether I applied, platform, URL, and where it was found (API check, web search, or
        pasted by me). 250+ rows and counting. Its most important function is negative:
        it&apos;s the memory that prevents the system from surfacing the same job twice.
        Every workflow checks it before scoring anything.
      </p>

      <p>
        <strong>outreach-tracker.csv</strong> logs every networking touch: date, person,
        company, platform, status, follow-up date, the exact message sent, and notes on who
        they are. I'm logging the exact message sent because I figure I can gather data on what works.
      </p>

      <p>
        <strong>job-tracker.csv</strong> tracks application status:
        Applied, Interview, Offer, Rejected, Withdrawn, with a separate &quot;Reached
        Interview&quot; yes/no column. That separate column exists because a status field
        alone loses information: &quot;rejected after two interviews&quot; and
        &quot;rejected by the ATS filter in an hour&quot; are wildly different signals, and
        the second column preserves the difference. That&apos;s the level of detail you
        need if you ever want to actually compute your funnel conversion rates instead of
        guessing at them.
      </p>

      <p>
        <strong>daily-digest/</strong> gets one markdown file per automation run: new roles
        ranked by score with links and one-line fit notes, everything logged below the
        threshold, and a &quot;skipped&quot; section listing every dead link, duplicate,
        and ineligible role with the reason. The skipped section looks like bureaucracy but
        it&apos;s the trust mechanism. When the digest says a role was dropped because its
        remote policy excludes my state, I don&apos;t have to wonder whether the automation
        is silently eating good jobs.
      </p>

      <h3>The Daily Automation</h3>

      <p>
        First, a reassurance: the scheduled part is optional. Once everything above is set
        up, you can run the whole daily search manually by opening the repo and pointing
        your agent at the automation prompt. Same search, same digest, and you skip the
        cloud setup entirely. The schedule only changes when it happens, not what happens.
        I&apos;d actually recommend running it manually for the first week regardless,
        because you want to catch the rubric&apos;s bad calls while you&apos;re still
        watching.
      </p>

      <p>
        The scheduled version runs as a recurring background cloud agent that pulls the
        repo from GitHub each morning and runs the prompt, Cursor&apos;s cloud agents and
        Claude Code&apos;s cloud routines both support this. Or you can skip clouds
        entirely and just make it your own morning coffee ritual. Whatever runs it, the
        prompt walks through six steps:
      </p>

      <ol>
        <li>Get today&apos;s date.</li>
        <li>
          Run <code>check-boards.py</code> and score whatever&apos;s new.
        </li>
        <li>
          Web search for up to five new roles, filter on snippets before fetching anything,
          pipe every surviving candidate through a single batched dedupe script call
          (rather than reading the whole, growing CSV into context), then verify each
          survivor with at most one fetch (preferring the ATS JSON APIs above).
        </li>
        <li>Score everything against the rubric and append to the CSV in one batched write.</li>
        <li>Write the daily digest.</li>
        <li>Dedupe, commit, push.</li>
      </ol>

      <p>
        The prompt embeds the full rubric and target profile so the run is self-contained,
        and it&apos;s explicit about efficiency: dedupe in one batched call instead of once
        per role, one fetch max per candidate, don&apos;t explore the repo, and never pad
        with weak matches to hit the quota (&quot;fewer is fine&quot; is written into it,
        because an agent told to find five roles will otherwise find five roles whether
        they exist or not).
      </p>

      <p>
        The most important line in the whole prompt is about failure: if a script errors or
        a link is dead, report it in the digest and move on. Never fabricate. Agents fill
        gaps with plausible-looking output if you let them, so you have to make
        &quot;nothing found&quot; an acceptable answer.
      </p>

      <h3>Proof It Actually Runs: A Month of Real Data</h3>

      <p>
        Talk is cheap, so here&apos;s the detail behind the numbers up top.{' '}
        <code>evaluated-jobs.csv</code> has 268 roles logged. 146 of those were scored
        under the current rubric (the rest predate it). Of the scored roles, 33 came back
        at 70% or higher, the &quot;apply first&quot; tier in the daily digest, and 56
        cleared 65%. That&apos;s the actual output of the scoring engine described above:
        not a vague sense of what looks promising, a specific, ranked shortlist every
        morning.
      </p>

      <p>
        Broken down by day: across 26 digests, the system evaluates{' '}
        <strong>about 7 new roles a day</strong>. That number comes from both the board
        check and the web search combined, <strong>about 3.6 a day</strong> from the
        board check, <strong>about 2.9 a day</strong> from web search, which has a cap of
        5. Of the
        7 evaluated, <strong>about 1.6 a day</strong> clear the 70%+ &quot;apply
        first&quot; bar and <strong>about 3 a day</strong> clear 65% overall. Some
        mornings that&apos;s nothing, some mornings it&apos;s two or three roles worth
        applying to before I&apos;ve had coffee.
      </p>

      <p>
        On the application side, <code>job-tracker.csv</code> shows 44 applications
        submitted off the back of this system. 3 of those reached an interview stage,
        4 interviews total since one company brought me back for a second round. No
        offer yet, the rest split between still-awaiting-response and rejected. That&apos;s
        the number I actually care about, not roles scored, not roles found,
        applications that turned into a real conversation with a human.
      </p>

      <p>
        Obviously, your results will vary based on how strong a candidate you actually
        are for the roles you&apos;re targeting. This system doesn&apos;t change that,
        it&apos;s not a hack that gets you interviews you&apos;re not qualified for.
        What it&apos;s actually for is giving you an honest, consistent read on how
        strong a match your profile is to a given job description, so you spend your
        effort on the roles worth it instead of guessing.
      </p>

      <p>
        So how much time did this actually save? A manual version has to recheck all 99
        watchlist companies every day, not once, since a new posting can show up any
        morning: 99 × 26 days = 2,574 checks, about 21 hours at 30 seconds each. Reading
        and scoring the 178 roles it found, 5 minutes apiece, is another 15 hours.
        That&apos;s roughly <strong>36 hours of manual work</strong> compressed into about
        4 hours of unattended runtime. And honestly, nobody actually checks 99 career
        pages a day by hand, this didn&apos;t just save time on a task I was doing, it did
        a version of the search I never would have kept up with manually.
      </p>

      <p>
        Now the infrastructure side: 29 scheduled runs between June 12 and July 8,
        averaging <strong>about 9 minutes</strong> from trigger to done, most finishing
        in under 15. Total token usage across the month was a little over{' '}
        <strong>112 million tokens</strong>, averaging <strong>roughly 3.9 million
        tokens per run</strong>. All of it ran under a flat monthly plan, none of it
        billed separately per run.
      </p>

      <p>
        I switched models a handful of times over the month, partly testing, partly just
        whatever was available, and the differences were bigger than I expected:
      </p>

      <ul>
        <li>
          <strong>composer-2.5</strong> (3 runs): fastest and leanest by a wide margin,
          averaging 4 minutes and about 1.7 million tokens per run.
        </li>
        <li>
          <strong>claude-4.5-haiku-thinking</strong> (6 runs): nearly as fast, about 3.8
          minutes and 2.3 million tokens per run on average.
        </li>
        <li>
          <strong>claude-4.6-sonnet-high-thinking</strong> (15 runs, the workhorse for
          most of the month): about 11 minutes and 4.4 million tokens per run on average.
        </li>
        <li>
          <strong>claude-sonnet-5-thinking-high</strong> (2 runs): about 10 minutes and 6.3
          million tokens per run on average.
        </li>
        <li>
          <strong>claude-fable-5-thinking-xhigh</strong> (2 runs): slowest and priciest,
          averaging nearly 20 minutes and 5.7 million tokens per run.
        </li>
      </ul>

      <p>
        My actual recommendation: use a Sonnet-class model for the daily run, not the
        lightest option and not the heaviest extended-thinking tier. This is a
        rule-following task, not an open-ended reasoning problem, but it still has to
        read messy job descriptions and apply a multi-part rubric correctly, more than
        I&apos;d trust to the lightest model. Sonnet is the middle ground: reliable
        without paying the time and token premium the heaviest tiers charge.
      </p>

      <p>
        That said, if you can, actually test a few models yourself. See what works for
        your rubric and your target companies and what doesn&apos;t, my numbers are from
        my specific setup, not a universal law.
      </p>

      <h3>What Stays Manual</h3>

      <p>
        The automation finds and scores. I decide. Reading the digest, choosing what to
        apply to, reviewing and editing every tailored resume and cover letter line by line before it becomes a PDF,
        sending every outreach message: all manual, on purpose. Nothing represents me to
        another human without me reading it first, and the Applied column only changes when
        I actually applied.
      </p>

      <p>
        That division is the design principle for the whole system. Automate the funnel,
        not the judgment.
      </p>

      <h3>Build the Minimal Version</h3>

      <p>
        One theme runs through all of this: you don&apos;t have to do the setup work
        yourself. Claude Code can do almost every step below for you if you just ask,
        it&apos;s not limited to scoring job descriptions once everything else already
        exists.
      </p>

      <ol>
        <li>
          Install the prerequisites above: Claude Code, an IDE if you want one, Python, and
          a GitHub account.
        </li>
        <li>
          Make a folder, <code>git init</code> it, and drop your resume in as{' '}
          <code>profile/resume.md</code>. Paste in your LinkedIn profile too if you have
          one, as its own file.
        </li>
        <li>
          Open Claude Code in that folder and just talk to it: tell it your target comp
          band, location constraints, the role types you want and the ones you don&apos;t,
          and your real experience gaps. Ask it to turn that conversation into a{' '}
          <code>CLAUDE.md</code> with a target profile and a scoring rubric built around
          what you actually said, not a generic template. Push back on the first draft if
          the rubric doesn&apos;t feel honest, that back and forth is most of the value.
        </li>
        <li>
          Ask it to set up <code>data/evaluated-jobs.csv</code> with a header row for you.
        </li>
        <li>
          Paste in a real job description and see what happens. It should score it against
          your rubric and log it. That loop alone already beats tab-hopping between forty
          postings.
        </li>
        <li>
          Once you know which companies you actually care about, tell your agent their
          names. Have it figure out which ATS each one runs on, build{' '}
          <code>watchlist.json</code>, and write the board-checking script, using the four
          endpoint patterns above as a starting point. Mine did all of this from a
          conversation, not from me hand-writing config files.
        </li>
        <li>
          Once the manual loop feels trustworthy, schedule it in the cloud if you want the
          before-you-wake-up version. Or don&apos;t. Running it yourself each morning works
          just as well.
        </li>
      </ol>

      <p>
        The origin story, the results after 25 days of runs, and why I think about job
        searching as a funnel in the first place are in{' '}
        <a href="/blog/job-hunting-is-a-funnel-problem">the original post</a>.
      </p>

      <p>
        One more plug while I have you: reach out through the form below, or{' '}
        <a
          href="https://www.linkedin.com/in/scotty-peterson/"
          target="_blank"
          rel="noopener noreferrer"
        >
          follow me on LinkedIn
        </a>
        . I&apos;m job searching too, lifecycle marketing, marketing operations, marketing
        technologist, or an AI-forward GTM or growth engineering role. So if you&apos;ve
        got a lead, know someone hiring, or get stuck building your own version of this,
        that&apos;s exactly what the form is for. And if you made it this far, share this
        with a friend who&apos;s job searching too, it might save them a few hours.
      </p>
    </div>
  );
}

export default function JobHuntingIsAFunnelProblem() {
  return (
    <div>
      <p>
        I'm a lifecycle marketing engineer, which means I spend my working life building
        automated systems that move people through funnels. In June I ended up on the other
        side of one: the job application funnel, where I'm the lead being nurtured, scored,
        and mostly ghosted.
      </p>

      <p>
        A job search is repetitive, rule-based work with a daily cadence. That's the exact
        profile of a process you automate. So I built a system that runs my search every
        morning before I wake up, and this post is about how and whyit works, and which parts I still keep deliberately manual.
      </p>

      <h3>The Repo</h3>

      <p>
        The whole system is a git repo called hunter. Inside it: my resume as markdown, a
        scoring rubric, a watchlist of 98 companies, two Python scripts, and a handful of CSV
        files that act as the databases. There's no web app and no dashboard. Markdown is the
        UI and git is the database, because plain files are what an AI agent works
        with natively, and because I can read a diff and know exactly what happened while I
        was asleep.
      </p>

      <h3>The Problem With Job Boards</h3>

      <p>
        Job postings on LinkedIn or aggregator sites are often stale, the role's been filled
        or pulled and nobody updated the copy. The only reliable source is the company's own
        hiring page. Checking that directly, every day, across a hundred companies, isn't
        something a person does by hand, so that's the first thing I automated.
      </p>

      <h3>The Part Nobody Told Me About: The Data Is Just Sitting There</h3>

      <p>
        Here's what actually solves the problem above. Greenhouse, Lever, and Ashby, the
        three platforms behind most of these companies' hiring pages, each expose a public
        API, a direct line to the same live list that builds their careers page. No browser,
        no clicking through, no waiting for a page to load. Just the current, real answer to
        &quot;is this job still open.&quot;
      </p>

      <p>
        One of the scripts sweeps my full watchlist of 98 companies against that data every
        morning, filters for the titles I actually want, and dedupes against everything I've
        already looked at. The whole pass takes about a minute. A recruiter would call this
        market coverage. I call it a for loop.
      </p>

      <h3>Scoring: The AI Is Not Allowed to Flatter Me</h3>

      <p>
        If you paste a job description into an AI chat and ask &quot;am I a good fit?&quot;,
        the answer is yes. It's always yes. That's useless, and worse than useless when
        you're deciding where to spend application effort.
      </p>

      <p>
        So the rubric is written down in the repo, and it's mostly penalties. If a role wants
        five or more years of experience, the score gets capped no matter how good everything
        else looks. Roles built around platforms I'd need to ramp on lose points. Roles where
        the salary floor is way above my target range get flagged as a reach, because a
        posting that's overleveled for me is a rejection with extra steps. AI-forward teams
        get a small bonus, since heavy AI usage in the day-to-day is the thing I'm actually
        optimizing for.
      </p>

      <p>
        Every role that gets scored is logged to a CSV, applied to or not. That log is what
        makes the daily runs cheap: the system never evaluates the same posting twice, and I
        never re-read a job description I already decided against.
      </p>

      <h3>The Morning Run</h3>

      <p>
        Here's where it stops being a script and becomes an employee. Every morning a
        scheduled cloud agent opens the repo and runs the whole loop from a prompt that lives
        in the repo itself. It checks the watchlist APIs first. Then it searches the web for
        roles beyond the watchlist, and this is where the verification rules earn their keep:
        a role only counts if the agent can find the posting live on the company's own board.
        Aggregator links don't count. Expired listings don't count. A shocking fraction of
        what a web search surfaces fails this test.
      </p>

      <p>
        When the search turns up a company worth watching long-term, the agent suggests it
        for the watchlist, which is how the list keeps growing without me maintaining it.
        Then it scores everything new against the rubric, writes a digest sorted into apply
        first, worth a look, and skipped, and commits the whole thing back to the repo.
      </p>

      <p>
        I wake up to a commit. I read the digest with my coffee, click through the two or
        three roles worth a closer look, and decide. The daily grind of a job search, the
        part that burns people out, takes me about ten minutes.
      </p>

      <h3>What Stays Human</h3>

      <p>
        Applying is still me. When I decide to go after a role, Claude works like an editor
        with one hard rule: it is not allowed to invent anything. It reorders and reframes
        what's already true in my master resume to match what the posting asks for, drafts
        from my real experience, and everything gets verified against the source file before
        a PDF goes out. The judgment calls about where to apply, what to emphasize, and what
        to say to an actual human are mine.
      </p>

      <p>
        Networking gets the same treatment as everything else: a tracker with the exact
        message sent, the date, and a follow-up date a week out. Not because outreach should
        be automated (it shouldn't), but because I will absolutely forget to follow up
        without a system, and following up is where networking actually works.
      </p>

      <h3>What 25 Days of Runs Taught Me</h3>

      <p>
        The system has scored 253 roles across 25 consecutive daily runs. Some mornings the
        digest has three strong matches. Some mornings it has nothing, because that's just
        the market, and an empty digest is its own kind of signal: I know nothing slipped
        past me, so I can spend that day on outreach or a side project instead of anxiously
        re-scrolling the same boards.
      </p>

      <p>
        The genuinely hard problem wasn't the plumbing, it was getting the scoring honest.
        Writing the rubric down was the easy half. The real work was the back and forth:
        testing it against roles I already knew were reaches or easy fits, watching where the
        scores disagreed with my gut, and tightening the rules until they matched my own
        judgment. If you build something like this, expect to spend more time here than
        anywhere else in the system.
      </p>

      <p>
        And the thing I'd actually pitch to anyone in a search right now: the value isn't
        speed so much as consistency. The system doesn't have discouraged days. It ran the
        morning after a rejection email exactly the way it ran the morning after an
        interview went well. Removing my own morale from the top of the funnel is the single
        best thing this project did for me.
      </p>

      <h3>The Funnel, Closed</h3>

      <p>
        There's a version of this post that ends with a grand statement about the future of
        work. The honest ending is smaller: this is the same job I've been doing for years,
        take a leaky manual process, wire the systems together, and let humans spend their
        attention where it counts. This time the funnel was mine.
      </p>

      <p>
        If you're job hunting and want help setting something like this up, or if you're
        hiring for lifecycle, marketing ops, or GTM engineering and want this kind of thinking
        on your team, the form below goes straight to me.
      </p>
    </div>
  );
}

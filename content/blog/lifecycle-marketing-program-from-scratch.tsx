export default function LifecycleMarketingProgramFromScratch() {
  return (
    <div>
      <p>
        I came into my current role as a web developer. The job description said front-end work with 
        some backend. Eighteen months later, I'm still doing web development, but I've also 
        become the technical marketing function at the company. The role didn't pivot, it just 
        expanded. I kept building and maintaining our web properties, and on top of that I started 
        writing blog posts, then ran our newsletters, then took over the technical marketing 
        infrastructure when it became clear nobody else could do it. Somewhere along the way I went 
        from building React components to architecting the entire lifecycle program: lead capture, 
        CRM integration, automated nurture, post-purchase email sequences, webinar registrations, 
        all of it.
      </p>

      <p>
        When I started at my role, I came in as a web developer. Over the next year and half, 
      </p>

      <p>
        This post is about what I built and how I built it. If you're working in lifecycle 
        marketing or you're the technical person at a small company who's been handed the 
        marketing problem because nobody else can do it, hopefully some of this is useful.
      </p>

      <h3>The Setup</h3>

      <p>
        When I started, there was no real marketing program. The company had a CRM, a marketing 
        platform, and a payment processor, but the systems weren't talking to each other. The 
        CRM didn't know what people had clicked. The marketing platform didn't know who was 
        a customer. The payment processor wasn't triggering anything downstream. Sales was 
        working out of one set of tools, marketing out of another, and the connection between them 
        was a person manually updating records when they had time.
      </p>

      <p>
        This is a really common situation at small B2B companies. You can't justify hiring a 
        dedicated marketing operations specialist until the business is bigger, but you can't 
        grow the business as fast without lifecycle infrastructure. So whoever is technical enough 
        to wire the systems together gets handed the problem. That ended up being me.
      </p>

      <p>
        The first job was just to install the connections. The harder job was designing them so they 
        actually fit together and could scale.
      </p>

      <h3>The B2B Lead Journey</h3>

      <p>
        The B2B side of the business runs on getting people from &quot;filled out a form 
        somewhere&quot; to &quot;booked a demo with sales.&quot; When I started, that path had a lot 
        of manual steps and a lot of leaks. I rebuilt it as a single automated flow.
      </p>

      <img 
        src="/case-study-1/demo-nurture-flow.png" 
        alt="B2B Lead Journey Flow Diagram" 
        className="w-full max-w-2xl mx-auto my-8 rounded-lg shadow-lg"
      />

      <p>
        When someone submits a form on our site, the data goes to the backend, gets tagged with the 
        form source, primary audience, and original/latest touch source, then gets pushed in parallel 
        to both the CRM and the marketing platform. The marketing platform also pulls IS_CLIENT 
        status from the CRM so we know whether this person is already a customer.
      </p>

      <p>
        If they came in through the contact form (i.e., they're explicitly interested in talking 
        to sales), they enter an automated demo nurture sequence: five weekly emails reminding them 
        to book a demo, with two more reminder emails at 15 and 30 days after the fifth one if they 
        still haven't booked. The sequence stops the moment they book.
      </p>

      <p>
        The booking itself runs through Calendly. When someone books, a webhook fires that updates 
        both the marketing platform (DEMO_BOOKED flag, date, event name) and the CRM (status set to 
        &quot;Demo Scheduled,&quot; summary line appended with booking details, attribution preserved 
        if the contact already existed). The marketing platform sends a confirmation email automation, 
        the demo nurture stops immediately, and the contact moves into engagement-based segmentation.
      </p>

      <p>
        The piece I'm proudest of in this flow is the attribution logic. If a contact already 
        exists in the CRM with an original lead source and assigned rep, the demo booking does not 
        overwrite any of that. Instead it appends to the contact's history. This sounds obvious 
        in retrospect but it's a common bug in CRM integrations. A lot of implementations just 
        upsert blindly and overwrite real attribution data, which makes downstream reporting useless.
      </p>

      <h3>The B2C Purchase Flow</h3>

      <p>
        The B2C side is simpler in shape but has more interesting state management. When someone buys 
        a training through our checkout, a Stripe webhook fires and kicks off a three-email sequence 
        designed to keep them engaged after their initial purchase.
      </p>

      <img 
        src="/case-study-1/b2c-flow.png" 
        alt="B2C Purchase Flow Diagram" 
        className="w-full max-w-2xl mx-auto my-8 rounded-lg shadow-lg"
      />

      <p>
        The flow tags the customer with B2C and a primary audience based on what they bought 
        (different training programs map to different audiences), then checks whether there's 
        already an active email sequence for that customer. If there isn't, a new sequence 
        starts at Day 0 with a recommendation email. If there is, the new purchase data gets merged 
        into the existing sequence and no new Day 0 email goes out.
      </p>

      <p>
        That merge logic is the thing I want to call out, because it's the kind of edge case 
        that's easy to miss and bad if you do.
      </p>

      <p>
        If someone buys on Day 0, then buys again on Day 3, you don't want them to get a fresh 
        Day 0 email three days after their first one. That's spam. What you want is for the Day 
        5 email (which is already scheduled) to include both purchases when it goes out. The same 
        logic applies if they buy after Day 5 but before Day 15: the Day 15 email picks up the 
        merged purchase data.
      </p>

      <p>
        The sequence ends after Day 15. Customers who keep buying continue to merge into whatever 
        sequence they're in, but they don't get retriggered into a new one. The whole thing 
        is designed to feel like a single ongoing conversation rather than a bunch of overlapping 
        campaigns.
      </p>

      <h3>The Webinar Registration System</h3>

      <p>
        We run webinars as a top-of-funnel content play. People register, attend, and ideally end up 
        in the lead nurture or sales pipeline downstream. The registration system is more complex 
        than it looks because it has to handle a lot of different organization types, multi-webinar 
        registrants, and attribution that flows through to demo bookings months later.
      </p>

      <img 
        src="/case-study-1/webinar-flow.png" 
        alt="Webinar Registration System Flow Diagram" 
        className="w-full max-w-2xl mx-auto my-8 rounded-lg shadow-lg"
      />

      <p>
        Each webinar has a unique code (WB001 through WB006) that gets tracked across both the CRM 
        and the marketing platform. When someone registers, the form data goes to the backend and 
        gets tagged with B2B or B2C based on their organization type, primary audience based on the 
        same, and the specific webinar code. Then it syncs to both systems in parallel.
      </p>

      <p>
        The marketing platform sends a confirmation email immediately with the Zoom link, an AddEvent 
        calendar button for one-click calendar adds, and an optional Microsoft Forms survey link 
        prefilled with their email and phone. They get added to a webinar-specific list that triggers 
        reminder emails before the event.
      </p>

      <p>
        Two pieces of this flow are worth highlighting. First, the audience mapping: organization 
        type on the form (e.g., &quot;Provider Organization,&quot; &quot;Assisted Living,&quot; 
        &quot;YMCA&quot;) maps to a primary audience attribute that drives downstream segmentation 
        across all systems. So a webinar registrant from a YMCA gets tagged YMCA everywhere and 
        receives content tailored to that audience long after the webinar itself.
      </p>

      <p>
        Second, the multi-webinar registration handling. If someone registers for WB003 in February 
        and WB005 in April, their webinar history gets concatenated rather than overwritten. Both 
        the CRM and the marketing platform store something like &quot;WB003, WB005&quot; so the full 
        registration history is visible. The deduplication logic prevents duplicate codes if someone 
        accidentally registers twice. Long-term, this lets us see who's the most engaged across 
        multiple webinars and target them differently.
      </p>

      <h3>How I Actually Built This</h3>

      <p>
        I'm not a traditional engineer. I came into this work as a web developer, but I've 
        increasingly become an architect and operator: I design the systems, make the decisions about 
        what should happen and how, and use AI tooling extensively for implementation.
      </p>

      <p>
        In practice, that looks like this. I figure out the architecture: what flows need to exist, 
        what data has to move where, what the edge cases are, what the integrations should look like. 
        I write specs and Figma diagrams that capture the logic. Then I work with AI tools to 
        implement specific pieces: webhook handlers, API request scaffolding, template variations, 
        debugging when things break. The design decisions and the integration patterns are mine. The 
        boilerplate code is largely AI-accelerated under my direction.
      </p>

      <p>
        I think this is going to be a much more common way to work in marketing engineering and 
        adjacent roles over the next few years. The bottleneck on building this kind of infrastructure 
        isn't typing speed. It's having the judgment to know what to build, in what order, 
        with what edge cases handled. AI tools are great at the implementation. They can't tell 
        you what the right architecture is for your specific business.
      </p>

      <p>
        For this project, that meant I could ship something at a pace that would normally require a 
        small engineering team. A one-person marketing tech function at a small company is only 
        possible because of this kind of leverage.
      </p>

      <h3>What's Still Rough</h3>

      <p>A few things I'd build into v2 if I had the time:</p>

      <p>
        The renewal flow has a gap around customers who don't renew. That's currently 
        handled manually, which means it sometimes doesn't happen as cleanly as it should. A 
        proper churn flow would trigger automatically and route those contacts into a different 
        program rather than waiting for someone to notice.
      </p>

      <p>
        Canceled and rescheduled demos aren't handled gracefully. If someone reschedules, the 
        original demo nurture should re-pause cleanly, and the new booking should fire a fresh 
        confirmation. Right now this is brittle.
      </p>

      <p>
        The tier transition logic for engagement-based segmentation lives in the marketing 
        platform's segmentation rules, but it isn't fully wired through end-to-end yet. 
        Someone in the most-engaged segment who goes quiet for 90 days should automatically drop into 
        a re-engagement segment. The rules exist; the dynamic transitions need more work.
      </p>

      <p>
        Attribution is a known weak point. The systems we use don't all support UTM tracking 
        end-to-end, which means tying specific revenue back to specific campaigns is harder than it 
        should be. This is partly a tooling problem and partly a process problem, and it's the 
        area where I think the program would benefit most from additional investment.
      </p>

      <h3>The Takeaway</h3>

      <p>
        Most small marketing teams operate without proper lifecycle infrastructure because building 
        it requires both marketing thinking and technical execution, and most companies don't 
        have anyone who can do both. If you can be that person, you can build systems that 
        meaningfully shift business outcomes (more demos booked, better attribution, healthier email 
        engagement, customers staying longer) at a fraction of the cost of buying enterprise tooling.
      </p>

      <p>
        The architecture above is what I built for a small B2B company. The same patterns scale up to 
        bigger companies with more sophisticated tools (Braze, Iterable, Customer.io). What stays the 
        same is the underlying logic: capture the lead well, preserve attribution, separate marketing 
        email from transactional email, use behavioral signals to drive segmentation, and treat 
        customers differently from leads.
      </p>

      <p>
        If you're thinking through this kind of work and want to talk shop, I'm at{' '}
        <a href="mailto:scottpetersonSE@gmail.com">scottpetersonSE@gmail.com</a>.
      </p>
    </div>
  );
}

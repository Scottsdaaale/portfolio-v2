export default function HowIKeptWebinarRegistrationsFromWreckingOurCRM() {
  return (
    <div>
      <p>
        Every webinar registration form looks the same from the outside. First name, last name,
        email, organization, submit. Nobody asks what happens after that button gets clicked,
        which is a shame, because that&apos;s where all the actual work is.
      </p>

      <p>
        Over about two years at a B2B training and compliance company, I built and ran the system
        behind 7 webinars and 1,900+ registrations, one piece of the larger{' '}
        <a href="/blog/lifecycle-marketing-program-from-scratch">lifecycle marketing program</a>{' '}
        I built there. No manual data entry, no spreadsheet reconciliation, no
        &ldquo;wait, is this the same person who registered last month?&rdquo; moment. Here&apos;s
        what that actually took, and specifically the part that post only mentions in passing: how
        the dedup actually works under the hood.
      </p>

      <h3>The Part Everyone Assumes Is the Hard Part</h3>

      <p>
        Building the registration page itself is the easy 20%. Each webinar got its own landing
        page: hero section, speaker bio, learning objectives, an organization-type dropdown tuned
        to whoever we were actually trying to reach that time (healthcare staff for a medication
        administration webinar, school and provider staff for a vocational transition one). A{' '}
        <a href="https://forms.office.com/" target="_blank" rel="noopener noreferrer">
          Microsoft Forms
        </a>{' '}
        survey embedded underneath, pre-filled with the email and phone the person already typed
        in, so they weren&apos;t retyping their own contact info a second time. An{' '}
        <a href="https://www.addevent.com/" target="_blank" rel="noopener noreferrer">
          AddEvent
        </a>{' '}
        button so the session lands on their calendar without them hunting for an .ics file.
      </p>

      <p>
        That part is normal marketing site work. The part that actually determines whether the
        program scales is what happens the moment that form hits the backend.
      </p>

      <h3>Where the Real Problem Lives</h3>

      <p>
        Submit a form, and a{' '}
        <a href="https://flask.palletsprojects.com/" target="_blank" rel="noopener noreferrer">
          Flask
        </a>{' '}
        service has to figure out which webinar this is, route it to the right lead source in
        Pipeline CRM, sync it to the right list in{' '}
        <a href="https://developers.brevo.com/" target="_blank" rel="noopener noreferrer">
          Brevo
        </a>
        , decide which confirmation email template applies, and check whether this person
        indicated interest in our paid training programs, in which case a second, different email
        needs to go out. None of that is visible to the person who just registered. All of it has
        to be correct every single time, because nobody&apos;s manually checking 1,900 submissions
        for mistakes.
      </p>

      <p>
        The easy version of the dedup problem is someone registering for a second webinar with the
        same email they used the first time. That one I solved cleanly: track every webinar a
        contact has attended in a single field and append to it instead of creating a new record,
        so the CRM shows &ldquo;WB003 &ndash; February 2025, WB006 &ndash; June 2026&rdquo; on one
        person instead of splitting their history across two.
      </p>

      <p>
        The harder version is someone who was already in the CRM under one email, then registered
        for a webinar with a different one. The concatenation trick only works if the new
        submission matches an existing contact, so a mismatched email quietly creates a second
        record for the same human anyway: split history, double-counted attendance, a duplicate
        that doesn&apos;t announce itself as a duplicate. I never fully closed that gap. It&apos;s
        the same shape of problem as the company matching below, just messier, because a person
        can change their email for reasons a fuzzy match can&apos;t see coming.
      </p>

      <p>
        Companies had the same problem, just uglier. &ldquo;Acme Inc.&rdquo;, &ldquo;Acme, LLC&rdquo;,
        and &ldquo;ACME Corporation&rdquo; are three different strings and, left alone, three
        different company records in Pipeline. I wrote a matching service that strips legal
        suffixes, expands abbreviations, drops punctuation, and runs a{' '}
        <a href="https://en.wikipedia.org/wiki/Levenshtein_distance" target="_blank" rel="noopener noreferrer">
          fuzzy string match
        </a>{' '}
        on what&apos;s left against existing companies before creating a new one. It&apos;s not
        glamorous work. It&apos;s also the difference between a CRM your sales team trusts and one
        they&apos;ve given up on.
      </p>

      <h3>The Boring Automation That Actually Matters</h3>

      <p>
        Confirmation emails go out immediately, every time, no exceptions. If someone checks
        &ldquo;I&apos;m interested in training programs,&rdquo; a second email fires with that
        information; if they don&apos;t check it, that email never sends. Small branch, but it&apos;s
        the difference between a relevant follow-up and a form-fatigue-inducing blast. Multiply
        that kind of small correct decision across 1,900 registrations and it adds up to a program
        that feels considered instead of automated, even though it&apos;s entirely automated.
      </p>

      <h3>The Emails Before and After the Form</h3>

      <p>
        The registration form is the middle of the campaign, not the whole thing. A single
        &ldquo;you&apos;re invited&rdquo; email doesn&apos;t move enough people to register, so
        each webinar got a real invite sequence leading up to it, sometimes eight or nine separate
        emails, each making the case a different way: the event details up front, then the
        learning objectives, then who&apos;s hosting and why they&apos;re credible, then a nudge
        built around something adjacent (a related podcast episode, a relevant statistic) for
        people who didn&apos;t bite on the first few asks. Once someone registered, a shorter run
        of reminder emails, three or four per webinar, kept the date on their radar so the
        registration didn&apos;t quietly turn into a no-show.
      </p>

      <p>
        The more interesting sequence runs after the webinar ends. Attendees get a follow-up that
        asks for feedback, includes the slide deck, and carries a time-limited offer, a discount on
        a related training package that expires in a week, with a &ldquo;book a demo&rdquo; button
        carrying its own UTM tags so I could trace a booked demo back to the exact email and offer
        that produced it. That link is how a webinar about medication administration or transition
        planning turns into an actual sales conversation instead of just a completed event on a
        calendar. The registration system I described above only matters because there&apos;s a
        real campaign on both sides of it, feeding people in and following up with the ones who showed.
      </p>

      <h3>Turning the Pattern Into a Repeatable Build</h3>

      <p>
        By webinar number five or six, I stopped rebuilding this from scratch and wrote a spec
        template instead: webinar code, speaker info, learning objectives, which organization-type
        dropdown applies, which CRM and email IDs to wire up. Fill in the blanks, hand it to an AI
        coding assistant with instructions to read the last few webinar implementations first, and
        a new registration page plus all its backend wiring comes out consistent with everything
        that came before it. What used to be a multi-hour build with a dozen ways to introduce a
        subtle inconsistency became filling out a document.
      </p>

      <p>
        That&apos;s the part I&apos;d point to if someone asked what &ldquo;AI-assisted development&rdquo;
        actually looks like day to day. It&apos;s not a chatbot writing your app for you. It&apos;s
        turning a pattern you understand deeply into a spec precise enough that the implementation
        becomes mechanical, whether you or an AI ends up typing it.
      </p>

      <h3>Why This Is the Job</h3>

      <p>
        Nobody hires a &ldquo;lifecycle marketing engineer&rdquo; to design a pretty registration
        page. They hire one because the CRM needs to stay clean, the right email needs to fire at
        the right moment, and none of it should require a human checking a spreadsheet at the end
        of the week. The webinar system was never really about webinars. It was about proving that
        marketing infrastructure can run itself correctly, at volume, without anyone standing over it.
      </p>

      <p>
        1,900 registrations later, it still does. If you want the full picture of the program this
        was one piece of, or you&apos;re dealing with a similar CRM dedup problem yourself, check
        out my <a href="/#experience">experience section</a> or{' '}
        <a href="/#contact">get in touch</a>.
      </p>
    </div>
  );
}

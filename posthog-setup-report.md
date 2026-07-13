<wizard-report>
# PostHog post-wizard report

The wizard has completed a deep integration of PostHog analytics into the DevEvent Next.js app. The following changes were made:

- **`instrumentation-client.ts`** (new file): Initializes posthog-js using Next.js 15.3+ instrumentation pattern. Configured with a reverse proxy (`/ingest`) to avoid ad blockers, exception autocapture enabled, and debug mode in development.
- **`next.config.ts`** (updated): Added `rewrites()` for the PostHog reverse proxy (`/ingest/static/*`, `/ingest/array/*`, `/ingest/*`) and `skipTrailingSlashRedirect: true`.
- **`components/ExploreBtn.tsx`** (updated): Added `posthog.capture("explore_events_clicked")` in the button's click handler.
- **`components/EventCard.tsx`** (updated): Converted to a `"use client"` component and added `posthog.capture("event_card_clicked", { event_title, event_slug, event_location, event_date })` on card clicks.
- **`.env.local`** (new file): Contains `NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN` and `NEXT_PUBLIC_POSTHOG_HOST`.

| Event Name | Description | File |
|---|---|---|
| `explore_events_clicked` | User clicks the 'Explore Events' button on the homepage hero section. | `components/ExploreBtn.tsx` |
| `event_card_clicked` | User clicks on an event card to navigate to the event detail page. | `components/EventCard.tsx` |

## Next steps

We've built some insights and a dashboard for you to keep an eye on user behavior, based on the events we just instrumented:

- [Analytics basics (wizard) — Dashboard](https://us.posthog.com/project/507705/dashboard/1832874)
- [Explore Events clicks over time (wizard)](https://us.posthog.com/project/507705/insights/TejDam3Y)
- [Event card clicks over time (wizard)](https://us.posthog.com/project/507705/insights/v4OUoVc0)
- [Top event cards clicked by location (wizard)](https://us.posthog.com/project/507705/insights/0J9edMoe)
- [Explore to event click funnel (wizard)](https://us.posthog.com/project/507705/insights/Fn0HsG9Q)
- [Most clicked event titles (wizard)](https://us.posthog.com/project/507705/insights/X3bL6AoX)

## Verify before merging

- [ ] Run a full production build (the wizard only verified the files it touched) and fix any lint or type errors introduced by the generated code.
- [ ] Run the test suite — call sites that were rewritten or instrumented may need updated mocks or fixtures.
- [ ] Add `NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN` and `NEXT_PUBLIC_POSTHOG_HOST` to `.env.example` and any monorepo/bootstrap scripts so collaborators know what to set.
- [ ] Wire source-map upload (`posthog-cli sourcemap` or your bundler's upload step) into CI so production stack traces de-minify.

### Agent skill

We've left an agent skill folder in your project. You can use this context for further agent development when using Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.

</wizard-report>

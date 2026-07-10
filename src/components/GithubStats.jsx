import { useEffect, useState } from "react";

// Swap this to change whose GitHub data the panel pulls.
const GITHUB_USERNAME = "rickyrickric";

function timeAgo(dateString) {
  const seconds = Math.floor((Date.now() - new Date(dateString)) / 1000);
  const units = [
    ["year", 31536000],
    ["month", 2592000],
    ["week", 604800],
    ["day", 86400],
    ["hour", 3600],
    ["minute", 60],
  ];
  for (const [label, secs] of units) {
    const value = Math.floor(seconds / secs);
    if (value >= 1) return `${value} ${label}${value > 1 ? "s" : ""} ago`;
  }
  return "just now";
}

function describeEvent(event) {
  const repo = event.repo?.name?.split("/")?.[1] || event.repo?.name || "a repo";
  switch (event.type) {
    case "PushEvent": {
      const count = event.payload?.commits?.length || 1;
      return `Pushed ${count} commit${count > 1 ? "s" : ""} to ${repo}`;
    }
    case "CreateEvent":
      return event.payload?.ref_type === "repository"
        ? `Created repository ${repo}`
        : `Created ${event.payload?.ref_type || "ref"} in ${repo}`;
    case "PullRequestEvent":
      return `${event.payload?.action || "Updated"} a pull request in ${repo}`;
    case "IssuesEvent":
      return `${event.payload?.action || "Updated"} an issue in ${repo}`;
    case "WatchEvent":
      return `Starred ${repo}`;
    case "ForkEvent":
      return `Forked ${repo}`;
    case "PublicEvent":
      return `Made ${repo} public`;
    default:
      return `${event.type.replace("Event", "")} on ${repo}`;
  }
}

export default function GithubStats() {
  const [profile, setProfile] = useState(null);
  const [languages, setLanguages] = useState([]);
  const [activity, setActivity] = useState([]);
  const [status, setStatus] = useState("loading"); // loading | ready | error

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        const [profileRes, reposRes, eventsRes] = await Promise.all([
          fetch(`https://api.github.com/users/${GITHUB_USERNAME}`),
          fetch(
            `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=10`
          ),
          fetch(
            `https://api.github.com/users/${GITHUB_USERNAME}/events/public?per_page=5`
          ),
        ]);

        if (!profileRes.ok) throw new Error("profile fetch failed");

        const profileData = await profileRes.json();
        const reposData = reposRes.ok ? await reposRes.json() : [];
        const eventsData = eventsRes.ok ? await eventsRes.json() : [];

        const counts = {};
        (reposData || [])
          .filter((r) => !r.fork && r.language)
          .forEach((r) => {
            counts[r.language] = (counts[r.language] || 0) + 1;
          });
        const topLanguages = Object.entries(counts)
          .sort((a, b) => b[1] - a[1])
          .slice(0, 4)
          .map(([name]) => name);

        if (!cancelled) {
          setProfile(profileData);
          setLanguages(topLanguages);
          setActivity(Array.isArray(eventsData) ? eventsData.slice(0, 5) : []);
          setStatus("ready");
        }
      } catch (err) {
        if (!cancelled) setStatus("error");
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section className="github-stats" id="github">
      <div className="section-head">
        <span className="section-head__code">SIGNAL</span>
        <h2 className="section-head__title">Live from GitHub</h2>
      </div>

      {status === "error" && (
        <p className="github-stats__error">
          Couldn't reach the GitHub API just now — the profile is still
          available directly at{" "}
          <a
            href={`https://github.com/${GITHUB_USERNAME}`}
            target="_blank"
            rel="noreferrer"
          >
            github.com/{GITHUB_USERNAME}
          </a>
          .
        </p>
      )}

      {status !== "error" && (
        <div className="github-stats__grid">
          <div className="github-card">
            {status === "loading" || !profile ? (
              <div className="github-card__skeleton" aria-hidden="true" />
            ) : (
              <>
                <div className="github-card__head">
                  <img
                    src={profile.avatar_url}
                    alt={`${profile.login} avatar`}
                    className="github-card__avatar"
                  />
                  <div>
                    <p className="github-card__name">
                      {profile.name || profile.login}
                    </p>
                    <a
                      href={profile.html_url}
                      target="_blank"
                      rel="noreferrer"
                      className="github-card__handle"
                    >
                      @{profile.login}
                    </a>
                  </div>
                </div>

                {profile.bio && (
                  <p className="github-card__bio">{profile.bio}</p>
                )}

                <div className="github-card__metrics">
                  <div className="github-card__metric">
                    <span className="github-card__metric-value">
                      {profile.public_repos}
                    </span>
                    <span className="github-card__metric-label">Repos</span>
                  </div>
                  <div className="github-card__metric">
                    <span className="github-card__metric-value">
                      {profile.followers}
                    </span>
                    <span className="github-card__metric-label">
                      Followers
                    </span>
                  </div>
                  <div className="github-card__metric">
                    <span className="github-card__metric-value">
                      {profile.following}
                    </span>
                    <span className="github-card__metric-label">
                      Following
                    </span>
                  </div>
                </div>

                {languages.length > 0 && (
                  <ul className="ticket-tags github-card__languages">
                    {languages.map((lang) => (
                      <li key={lang} className="ticket-tag">
                        {lang}
                      </li>
                    ))}
                  </ul>
                )}

                <a
                  href={profile.html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn--ghost github-card__link"
                >
                  View full profile
                </a>
              </>
            )}
          </div>

          <div className="github-feed">
            <p className="github-feed__heading">
              <span className="github-feed__dot" aria-hidden="true" />
              Recent activity
            </p>

            {status === "loading" && (
              <ul className="github-feed__list">
                {[0, 1, 2].map((i) => (
                  <li key={i} className="github-feed__skeleton" />
                ))}
              </ul>
            )}

            {status === "ready" && activity.length === 0 && (
              <p className="github-feed__empty">
                No recent public activity to show.
              </p>
            )}

            {status === "ready" && activity.length > 0 && (
              <ul className="github-feed__list">
                {activity.map((event) => (
                  <li key={event.id} className="github-feed__item">
                    <span className="github-feed__text">
                      {describeEvent(event)}
                    </span>
                    <span className="github-feed__time">
                      {timeAgo(event.created_at)}
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      )}
    </section>
  );
}

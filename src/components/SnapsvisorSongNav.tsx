"use client";

import { useEffect, useState } from "react";

type Song = {
  id: string;
  title: string;
};

type Props = {
  songs: readonly Song[];
};

const SnapsvisorSongNav = ({ songs }: Props) => {
  const [activeSongId, setActiveSongId] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const activeEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (activeEntry?.target.id) {
          setActiveSongId(activeEntry.target.id);
        }
      },
      {
        rootMargin: "-35% 0px -45% 0px",
        threshold: [0.1, 0.35, 0.6],
      },
    );

    songs.forEach(({ id }) => {
      const section = document.getElementById(id);
      if (section) {
        observer.observe(section);
      }
    });

    return () => observer.disconnect();
  }, [songs]);

  return (
    <nav aria-label="Snapsvisor" className="contents">
      {songs.map(({ id, title }) => (
        <a
          key={id}
          aria-current={activeSongId === id ? "true" : undefined}
          className="snapsvisor-song-link"
          href={`#${id}`}
        >
          {title}
        </a>
      ))}
    </nav>
  );
};

export default SnapsvisorSongNav;

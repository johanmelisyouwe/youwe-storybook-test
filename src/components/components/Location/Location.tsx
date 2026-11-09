import { useEffect, useState } from 'react';
import './Location.css';

/* Location — Figma 26797:116; Clock — Figma 26797:51 (page "Offices"). */

function timeIn(timeZone: string) {
  return new Intl.DateTimeFormat('en-GB', { timeZone, hour: '2-digit', minute: '2-digit', hour12: false }).format(new Date());
}

/** Live local time in `timeZone`, updated every 15 s. `time` ("11:12") fixes the value (for stories). */
export function useLocalTime(timeZone: string, time?: string) {
  const [now, setNow] = useState(time ?? '--:--');
  useEffect(() => {
    if (time) { setNow(time); return; }
    setNow(timeIn(timeZone));
    const id = setInterval(() => setNow(timeIn(timeZone)), 15000);
    return () => clearInterval(id);
  }, [timeZone, time]);
  return now;
}

export type ClockProps = { timeZone: string; time?: string; label?: string };

export function Clock({ timeZone, time, label }: ClockProps) {
  const t = useLocalTime(timeZone, time);
  const [h1, h2, , m1, m2] = t.split('');
  return (
    <span className="yw-clock" role="timer" aria-label={label ? `Local time in ${label}: ${t}` : t}>
      {[h1, h2].map((d, i) => <span key={`h${i}`} className="yw-clock__digit yw-heading-sm" aria-hidden="true"><span key={d}>{d}</span></span>)}
      <span className="yw-clock__sep yw-heading-sm" aria-hidden="true">:</span>
      {[m1, m2].map((d, i) => <span key={`m${i}`} className="yw-clock__digit yw-heading-sm" aria-hidden="true"><span key={d}>{d}</span></span>)}
    </span>
  );
}

export type LocationProps = {
  /** Figma: Device */
  Device?: 'Desktop' | 'Mobile';
  City: string;
  Country: string;
  /** Figma: Timezone label, e.g. "GMT+1" */
  Timezone: string;
  /** IANA time zone for the live clock, e.g. "Europe/Amsterdam" */
  timeZone: string;
  /** Fixed time for stories */
  time?: string;
};

export function Location({ Device = 'Desktop', City, Country, Timezone, timeZone, time }: LocationProps) {
  if (Device === 'Mobile') {
    return (
      <li className="yw-location yw-location--mobile">
        <span className="yw-location__text">
          <span className="yw-heading-md">{City}</span>
          <span className="yw-location__meta yw-location__row yw-body-sm-reg"><span>{Country}</span><span>{Timezone}</span></span>
        </span>
        <Clock timeZone={timeZone} time={time} label={City} />
      </li>
    );
  }
  return (
    <li className="yw-location">
      <span className="yw-heading-lg">{City}</span>
      <span className="yw-location__meta yw-body-md-reg">{Country}</span>
      <span className="yw-location__meta yw-body-md-reg">{Timezone}</span>
      <Clock timeZone={timeZone} time={time} label={City} />
    </li>
  );
}

export function LocationList({ children }: { children: React.ReactNode }) {
  return <ul className="yw-locations">{children}</ul>;
}

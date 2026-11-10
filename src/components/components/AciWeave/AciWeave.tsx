import { useRef, useState } from 'react';
import { Button } from '../Button/Button';
import { AskSnippet, type AskSnippetProps } from '../AskYouwe/AskYouwe';
import { CardMedia } from '../../shared/CardMedia';
import '../../shared/block.css';
import '../../shared/focus-ring.css';
import './AciWeave.css';

/*
  Content blocks/ACI Weave — built from the hand-built Home frames: desktop "Frame 6" (26598:4074),
  mobile "ACI Weave · video + nudge" (26924:10755). Not a Figma component yet (proposed for design review).
  Left: red-line kicker, heading/xl title, body/lg/reg body, Ask Youwe Nudge snippet, Primary M button.
  Right: video stack (16:9 frames on surface/base-2, caption body/sm/reg tertiary, gap 16; items gap 40).
  Desktop: two equal columns, gap 80, padding 80; the text column stays in view while the videos scroll.
  Mobile: stacked, gap 48, padding 80/12.
*/

export type WeaveVideo = { caption: string; poster?: string; src?: string };

export type AciWeaveProps = {
  /** Figma: Device (layout follows the block width) */
  Device?: 'Desktop' | 'Mobile';
  kicker?: string;
  title: string;
  body: string;
  /** Ask Youwe/Snippet (Nudge) under the body */
  snippet?: Pick<AskSnippetProps, 'Title' | 'href' | 'onAsk'>;
  button?: { label: string; href: string };
  videos: WeaveVideo[];
};

function Video({ caption, poster, src }: WeaveVideo) {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  return (
    <figure className="yw-weave__video">
      <span className="yw-weave__frame">
        {src
          ? <video ref={ref} src={src} poster={poster} controls={playing} playsInline preload="none" onPause={() => setPlaying(false)} onPlay={() => setPlaying(true)} />
          : <CardMedia src={poster} ratio="16 / 9" className="yw-clip-reveal" />}
        {!playing && (
          src
            ? <button type="button" className="yw-weave__play yw-focus-ring" aria-label={`Play video: ${caption}`} onClick={() => ref.current?.play()}><PlayGlyph /></button>
            : <span className="yw-weave__play" aria-hidden="true"><PlayGlyph /></span>
        )}
      </span>
      <figcaption className="yw-weave__caption yw-body-sm-reg">{caption}</figcaption>
    </figure>
  );
}

const PlayGlyph = () => <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true"><path d="M6 3.5v13l11-6.5z" fill="currentColor" /></svg>;

export function AciWeave({ Device = 'Desktop', kicker = 'ACI Weave', title, body, snippet, button, videos }: AciWeaveProps) {
  return (
    <section className={['yw-block', 'yw-weave', Device === 'Mobile' && 'yw-weave--mobile'].filter(Boolean).join(' ')}>
      <div className="yw-block__inner">
        <div className="yw-weave__grid">
          <div className="yw-weave__content yw-block-reveal">
            <div className="yw-weave__text">
              <span className="yw-kicker yw-body-sm-bold">{kicker}</span>
              <h2 className="yw-heading-xl">{title}</h2>
              <p className="yw-weave__body yw-body-lg-reg" style={{ whiteSpace: 'pre-line' }}>{body}</p>
              {snippet && <AskSnippet Type="Nudge" Device={Device} {...snippet} />}
            </div>
            {button && <div><Button Variant="Primary" Size="M" label={button.label} href={button.href} /></div>}
          </div>
          <div className="yw-weave__videos">
            {videos.map((v) => <Video key={v.caption} {...v} />)}
          </div>
        </div>
      </div>
    </section>
  );
}

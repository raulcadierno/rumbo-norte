import type { CollectionEntry } from 'astro:content';

export type TravelEntry = CollectionEntry<'viajes'>;

export type ItineraryDay = {
  dayLabel: string;
  title: string;
  description: string;
  imagePath?: string;
};

export type TravelData = {
  expeditionSummary: string;
  itineraryDays: ItineraryDay[];
};

const DAY_HEADING_REGEX = /^(?:D[ií]a)\s*0?(\d+)\s*[:\-]?\s*(.*)$/i;

const isItineraryDay = (day: ItineraryDay | null): day is ItineraryDay => day !== null;

export function getTravelData(viaje: TravelEntry): TravelData {
  const rawBody = viaje.body?.trim() ?? '';
  const firstDayHeadingIndex = rawBody.search(/^###\s+/m);

  const expeditionSummary = (
    firstDayHeadingIndex === -1 ? rawBody : rawBody.slice(0, firstDayHeadingIndex)
  ).trim();

  const itineraryMarkdown = firstDayHeadingIndex === -1 ? '' : rawBody.slice(firstDayHeadingIndex).trim();

  const itineraryDays = itineraryMarkdown
    .split(/\n(?=###\s+)/g)
    .map((block, index): ItineraryDay | null => {
      const lines = block
        .split('\n')
        .map((line) => line.trim())
        .filter(Boolean);

      if (!lines.length || !lines[0].startsWith('###')) {
        return null;
      }

      const heading = lines[0].replace(/^###\s*/, '').trim();
      const headingMatch = heading.match(DAY_HEADING_REGEX);
      const dayNumber = headingMatch ? Number.parseInt(headingMatch[1], 10) : index + 1;
      const dayLabel = `DIA ${String(dayNumber).padStart(2, '0')}`;
      const headingTitle = headingMatch ? headingMatch[2].trim() : heading;
      const sectionTitle = headingTitle || `Etapa ${String(dayNumber).padStart(2, '0')}`;

      const imageMatch = block.match(/!\[[^\]]*\]\(([^)\s]+)(?:\s+"[^"]+")?\)/);
      const bodyDescription = lines
        .slice(1)
        .filter((line) => !line.startsWith('!['))
        .join(' ')
        .replace(/\s+/g, ' ')
        .trim();

      return {
        dayLabel,
        title: sectionTitle,
        description: bodyDescription,
        imagePath: imageMatch?.[1]
      };
    })
    .filter(isItineraryDay);

  return {
    expeditionSummary,
    itineraryDays
  };
}

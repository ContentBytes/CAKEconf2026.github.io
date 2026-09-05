import data from "../data/cake2026.json";

interface Speaker {
  id: string;
  name: string;
  topic: string;
  label?: string;
}

const speakers = data.speakers as Speaker[];

export function talk(...ids: string[]) {
  const found = ids.map((id) => {
    const speaker = speakers.find((s) => s.id === id);
    if (!speaker) {
      throw new Error(`No speaker with id "${id}" in cake2026.json`);
    }
    return speaker;
  });

  return {
    topic: found[0].topic,
    label: found[0].label,
    speaker: found.map((s) => s.name).join(" and "),
    url: found.map((s) => s.id).join("-and-"),
  };
}

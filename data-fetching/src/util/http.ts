export async function get(url: string, signal?: AbortSignal) {
  let res;

  try {
    res = await fetch(url, {
      signal,
    });
  } catch (error) {
    if (error instanceof Error && error.name === 'AbortError') {
      console.error('Fetch request was aborted');
      return null;
    }
    throw error;
  }

  if (!res.ok) {
    throw new Error(`Failed to fetch. Status code: ${res.status}`);
  }

  const data = (await res.json()) as unknown;
  return data;
}
